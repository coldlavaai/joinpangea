import { chromium } from 'playwright';
import { existsSync, mkdirSync } from 'fs';

const BASE_URL = 'https://pangaea-demo.vercel.app';
const EMAIL = 'oliver@coldlava.ai';
const PASSWORDS = ['ColdLavaAi22!2025!', 'Pangea22!2025!', 'Pangea22!25!'];
const SCREENSHOT_DIR = './public/screenshots';

if (!existsSync(SCREENSHOT_DIR)) mkdirSync(SCREENSHOT_DIR, { recursive: true });

const pages = [
  { path: '/dashboard', name: 'dashboard', title: 'Dashboard — Real-time overview of your workforce, compliance status, and active sites' },
  { path: '/operatives', name: 'operatives', title: 'Workforce Pipeline — Every worker tracked from application to site-ready' },
  { path: '/requests', name: 'requests', title: 'Labour Requests — Create, search, and fill positions across all sites' },
  { path: '/allocations', name: 'allocations', title: 'Allocations — Track worker assignments from offer to completion' },
  { path: '/sites', name: 'sites', title: 'Site Management — All your project locations in one view' },
  { path: '/shifts', name: 'shifts', title: 'Shift Tracking — Scheduled vs actual times with WTD compliance' },
  { path: '/timesheets', name: 'timesheets', title: 'Timesheets — Auto-generated weekly timesheets with PDF export' },
  { path: '/documents', name: 'documents', title: 'Document Verification — AI-powered cert checking and expiry tracking' },
  { path: '/ncrs', name: 'ncrs', title: 'Non-Conformance Reports — Track incidents by type and severity' },
  { path: '/reports', name: 'reports', title: 'Compliance Reports — CSCS distribution, expiry timelines, and audit export' },
  { path: '/comms', name: 'comms', title: 'Communications — Full WhatsApp message history and audit trail' },
  { path: '/adverts', name: 'adverts', title: 'Recruitment — AI-generated job adverts with performance tracking' },
  { path: '/assistant', name: 'assistant', title: 'Rex AI Assistant — Natural language operations management' },
  { path: '/activity', name: 'activity', title: 'Activity Feed — Real-time log of all system events' },
  { path: '/settings', name: 'settings', title: 'Settings — Organisation config, staff, trades, and integrations' },
];

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  // Login
  console.log('Navigating to login...');
  await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Debug: screenshot login page
  await page.screenshot({ path: `${SCREENSHOT_DIR}/debug-login.png` });
  console.log('Login page screenshot saved');

  let loggedIn = false;
  for (const pw of PASSWORDS) {
    console.log(`Trying password: ${pw.substring(0, 5)}...`);
    try {
      // Fill login form
      const emailInput = page.locator('input[type="email"], input[name="email"]').first();
      await emailInput.fill('');
      await emailInput.fill(EMAIL);

      const passwordInput = page.locator('input[type="password"]').first();
      await passwordInput.fill('');
      await passwordInput.fill(pw);

      // Submit
      const submitBtn = page.locator('button[type="submit"]').first();
      await submitBtn.click();

      // Wait for redirect
      await page.waitForURL('**/dashboard**', { timeout: 10000 });
      console.log('Login successful!');
      loggedIn = true;
      break;
    } catch (err) {
      console.log(`  Failed: ${err.message.split('\n')[0]}`);
      await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);
    }
  }

  if (!loggedIn) {
    console.log('All passwords failed. Check debug-login.png');
    await page.screenshot({ path: `${SCREENSHOT_DIR}/debug-failed.png` });
    await browser.close();
    return;
  }

  await page.waitForTimeout(3000);

  // Take screenshots of each page
  for (const p of pages) {
    try {
      console.log(`Capturing ${p.name}...`);
      await page.goto(`${BASE_URL}${p.path}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(3000);

      // Viewport-only screenshot
      await page.screenshot({
        path: `${SCREENSHOT_DIR}/${p.name}.png`,
      });
      console.log(`  OK ${p.name}.png`);
    } catch (err) {
      console.log(`  FAIL: ${err.message.split('\n')[0]}`);
    }
  }

  await browser.close();
  console.log('\nDone! Screenshots saved to ' + SCREENSHOT_DIR);
}

run().catch(console.error);
