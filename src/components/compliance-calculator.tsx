"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

type Market = "uk" | "us";
type Stage = "quiz" | "lead" | "results";

interface Question {
  id: number;
  category: string;
  categoryIcon: string;
  text: string;
  options: { text: string; score: number }[];
}

interface LeadData {
  name: string;
  email: string;
  company: string;
  workforceSize: string;
  phone: string;
}

const categoryIcons: Record<string, string> = {
  "Worker Verification": "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  "Document & Cert Management": "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  "Onboarding & Inductions": "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  "Onboarding & Safety": "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  "Workforce Visibility": "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  "Compliance Governance": "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
};

const ukQuestions: Question[] = [
  { id: 1, category: "Worker Verification", categoryIcon: categoryIcons["Worker Verification"], text: "A new worker arrives on site Monday morning. When was their CSCS card last checked?", options: [
    { text: "It gets checked at the gate when they arrive", score: 1 },
    { text: "We collected a photo of it during onboarding last week", score: 2 },
    { text: "Honestly, it depends \u2014 sometimes it slips through", score: 0 },
    { text: "It was verified digitally before they were even offered the job, and we track the expiry", score: 3 },
  ]},
  { id: 2, category: "Worker Verification", categoryIcon: categoryIcons["Worker Verification"], text: "Think about the last worker you onboarded. How confident are you that their right-to-work documentation is watertight?", options: [
    { text: "Very confident \u2014 it was verified digitally and stored with an audit trail before they started", score: 3 },
    { text: "Fairly confident \u2014 we have copies on file somewhere", score: 2 },
    { text: "Not entirely sure \u2014 the office handled it but I haven't checked", score: 1 },
    { text: "I'd need to check \u2014 we don't have a consistent process", score: 0 },
  ]},
  { id: 3, category: "Worker Verification", categoryIcon: categoryIcons["Worker Verification"], text: "From April 2026, HMRC can hold you liable for PAYE if you can't prove CIS verification. How prepared are you?", options: [
    { text: "We already verify CIS status automatically during onboarding with a full evidence trail", score: 3 },
    { text: "We check CIS status at the start but don't re-verify or keep structured records", score: 1 },
    { text: "We verify and keep records, but it's spreadsheets and emails", score: 2 },
    { text: "I'm not sure what our CIS verification process actually looks like", score: 0 },
  ]},
  { id: 4, category: "Document & Cert Management", categoryIcon: categoryIcons["Document & Cert Management"], text: "It's Tuesday afternoon. A worker's CSCS card expired yesterday. How quickly would you know?", options: [
    { text: "We'd find out when they get turned away at the gate", score: 0 },
    { text: "Someone would probably notice within a week when they check the spreadsheet", score: 1 },
    { text: "Our system flags it, but someone needs to manually check and act on it", score: 2 },
    { text: "We'd already know \u2014 they were alerted at 90, 30, and 7 days, and auto-blocked from allocations yesterday", score: 3 },
  ]},
  { id: 5, category: "Document & Cert Management", categoryIcon: categoryIcons["Document & Cert Management"], text: "An HSE inspector asks to see the right-to-work document for a specific worker on site right now. What happens next?", options: [
    { text: "Someone calls the office, the office searches email/filing cabinets \u2014 could take hours", score: 0 },
    { text: "We check a shared drive \u2014 it's there somewhere, might take 20 minutes to find the right folder", score: 1 },
    { text: "We log into our HR system and find it within a few minutes", score: 2 },
    { text: "We pull it up on the worker's digital profile in seconds, with verification date and audit trail", score: 3 },
  ]},
  { id: 6, category: "Onboarding & Inductions", categoryIcon: categoryIcons["Onboarding & Inductions"], text: "You need 8 new labourers on site by next Monday. How long does your onboarding process actually take?", options: [
    { text: "They'll do paperwork on Monday morning \u2014 they might miss half the first day", score: 0 },
    { text: "We'll email forms this week, but realistically half won't return them before Monday", score: 1 },
    { text: "We'll send them to our portal \u2014 completion rates are about 60%", score: 2 },
    { text: "They'll get a WhatsApp message today and be fully onboarded within 48 hours", score: 3 },
  ]},
  { id: 7, category: "Onboarding & Inductions", categoryIcon: categoryIcons["Onboarding & Inductions"], text: "A worker is injured on site. HSE asks for proof they completed a site-specific induction. What can you produce?", options: [
    { text: "Nothing documented \u2014 inductions are verbal briefings", score: 0 },
    { text: "A paper sign-off sheet, if we can find it", score: 1 },
    { text: "A record in our system showing they completed an online induction", score: 2 },
    { text: "A timestamped digital record with video completion, quiz score, and acknowledgement \u2014 exportable in seconds", score: 3 },
  ]},
  { id: 8, category: "Workforce Visibility", categoryIcon: categoryIcons["Workforce Visibility"], text: "Right now, without making any phone calls, could you tell me exactly how many workers are on each of your active sites and whether they're all compliant?", options: [
    { text: "No \u2014 I'd need to ring each site manager", score: 0 },
    { text: "Roughly, from the schedule, but it won't reflect today's actual attendance", score: 1 },
    { text: "I could check our scheduling system, but compliance status is a separate check", score: 2 },
    { text: "Yes \u2014 I can see real-time headcount, attendance, and compliance status per site on one dashboard", score: 3 },
  ]},
  { id: 9, category: "Workforce Visibility", categoryIcon: categoryIcons["Workforce Visibility"], text: "A site manager calls at 7am \u2014 two workers haven't shown up and the concrete pour is at 9am. What happens?", options: [
    { text: "Panic. Start calling everyone in the phone book and hope someone answers", score: 0 },
    { text: "Send a message to the WhatsApp group and see who's free", score: 1 },
    { text: "Check our availability list and start making calls \u2014 should find someone within an hour", score: 2 },
    { text: "The system auto-searched our verified pool, sent offers to the 3 nearest qualified workers, and one confirmed within 8 minutes", score: 3 },
  ]},
  { id: 10, category: "Compliance Governance", categoryIcon: categoryIcons["Compliance Governance"], text: "Be honest: if HSE walked onto your busiest site tomorrow morning with no warning, how would you feel?", options: [
    { text: "Worried \u2014 our records are scattered and I know there are gaps", score: 0 },
    { text: "Nervous \u2014 we could pull it together but it would be stressful and take time", score: 1 },
    { text: "Fairly comfortable \u2014 most things are in order, but there might be a few surprises", score: 2 },
    { text: "Completely confident \u2014 every worker's full compliance file is one click away", score: 3 },
  ]},
];

const usQuestions: Question[] = [
  { id: 1, category: "Worker Verification", categoryIcon: categoryIcons["Worker Verification"], text: "Your crew starts a job in a state that requires OSHA 30-Hour cards. How do you know everyone on site has one?", options: [
    { text: "We check cards at the gate on day one", score: 1 },
    { text: "We collected copies during hiring, but haven't rechecked since", score: 2 },
    { text: "We trust our guys \u2014 they've all been around a while", score: 0 },
    { text: "Every worker's OSHA status was verified digitally before dispatch, and renewals are tracked automatically", score: 3 },
  ]},
  { id: 2, category: "Worker Verification", categoryIcon: categoryIcons["Worker Verification"], text: "Think about your last 10 hires. How many had their I-9 completed and filed within the 3-day federal deadline?", options: [
    { text: "All of them \u2014 our digital system guides it and tracks the deadline automatically", score: 3 },
    { text: "Most of them \u2014 we get to it within the first week", score: 1 },
    { text: "All of them \u2014 we're on top of it, but it's a manual process", score: 2 },
    { text: "Honestly, I'm not sure \u2014 HR handles it and I haven't checked", score: 0 },
  ]},
  { id: 3, category: "Worker Verification", categoryIcon: categoryIcons["Worker Verification"], text: "You're bidding on a project in a new state. How do you verify your crew meets that state's licensing requirements?", options: [
    { text: "We'd figure it out when we get there", score: 0 },
    { text: "We know the big ones but might miss specialty requirements", score: 1 },
    { text: "We research it manually and check each worker's certs against the requirements", score: 2 },
    { text: "Our system automatically flags which workers are qualified per jurisdiction and alerts us to gaps", score: 3 },
  ]},
  { id: 4, category: "Document & Cert Management", categoryIcon: categoryIcons["Document & Cert Management"], text: "A worker's confined space certification expired last month. How quickly would you find out?", options: [
    { text: "Probably when a GC audit catches it \u2014 could be months", score: 0 },
    { text: "When someone remembers to check the spreadsheet \u2014 maybe a few weeks", score: 1 },
    { text: "Our system would flag it, but someone needs to manually follow up", score: 2 },
    { text: "We'd already know \u2014 the worker was alerted 90 days before expiry and blocked from certified-work assignments on the expiry date", score: 3 },
  ]},
  { id: 5, category: "Document & Cert Management", categoryIcon: categoryIcons["Document & Cert Management"], text: "A GC requests the complete training file for a specific worker on one of your jobsites. What does the next 30 minutes look like?", options: [
    { text: "Stressful \u2014 calling the office, searching email, hoping we have everything", score: 0 },
    { text: "Checking the shared drive, downloading files from multiple folders, assembling a PDF", score: 1 },
    { text: "Logging into our HR system and pulling individual records \u2014 10-15 minutes", score: 2 },
    { text: "Pulling up their digital profile and exporting a complete compliance package in under a minute", score: 3 },
  ]},
  { id: 6, category: "Onboarding & Safety", categoryIcon: categoryIcons["Onboarding & Safety"], text: "You're bringing on 12 new workers for a project starting next week. What does onboarding look like?", options: [
    { text: "They'll fill out paperwork on day one \u2014 some won't have the right documents and it'll take a few days to sort out", score: 0 },
    { text: "We'll email packets this week, but expect to chase half of them for missing items", score: 1 },
    { text: "They'll complete everything through our online portal before they start", score: 2 },
    { text: "They'll get a text message today and complete everything on their phone \u2014 documents, certs, and orientation \u2014 within 48 hours", score: 3 },
  ]},
  { id: 7, category: "Onboarding & Safety", categoryIcon: categoryIcons["Onboarding & Safety"], text: "An OSHA inspector asks a worker on your site what hazards they were briefed on this morning. The worker shrugs. What evidence do you have?", options: [
    { text: "Nothing \u2014 toolbox talks are verbal and we don't keep records", score: 0 },
    { text: "A paper sign-in sheet, if the foreman remembered to do it", score: 1 },
    { text: "A digital record showing they attended a safety briefing, but not the specific content", score: 2 },
    { text: "A timestamped record of the specific hazard communication they acknowledged, with quiz completion \u2014 exportable on the spot", score: 3 },
  ]},
  { id: 8, category: "Workforce Visibility", categoryIcon: categoryIcons["Workforce Visibility"], text: "Without picking up the phone, can you tell me right now how many workers you have across all active jobsites and which ones aren't fully compliant?", options: [
    { text: "No way \u2014 I'd need to call each super", score: 0 },
    { text: "I could check yesterday's headcount report, but compliance status would be a separate exercise", score: 1 },
    { text: "Our scheduling system gives me headcount, but compliance is tracked separately", score: 2 },
    { text: "Yes \u2014 one dashboard shows real-time headcount, attendance, and compliance status per site", score: 3 },
  ]},
  { id: 9, category: "Workforce Visibility", categoryIcon: categoryIcons["Workforce Visibility"], text: "It's 6:30am. Your superintendent calls \u2014 two guys didn't show and the crane crew can't start without them. What happens next?", options: [
    { text: "Start dialling every number in my phone and hope someone picks up", score: 0 },
    { text: "Group text the bench guys \u2014 whoever responds first gets sent", score: 1 },
    { text: "Check our availability list, verify they're qualified, call them \u2014 45 minutes if we're lucky", score: 2 },
    { text: "The system already identified the 3 nearest qualified, compliant workers and sent them offers \u2014 first confirmation came in 6 minutes", score: 3 },
  ]},
  { id: 10, category: "Compliance Governance", categoryIcon: categoryIcons["Compliance Governance"], text: "OSHA just pulled up to your biggest jobsite, no warning. An inspector wants I-9s, training records, and hazcom documentation for every worker on site. Gut feeling?", options: [
    { text: "Dread \u2014 we're scrambling and I know there are holes", score: 0 },
    { text: "Stressful but survivable \u2014 we can pull most of it together in a few hours", score: 1 },
    { text: "Mostly fine \u2014 we're organised, but I'd worry about a few edge cases", score: 2 },
    { text: "Bring it on \u2014 every worker's complete compliance file exports in one click", score: 3 },
  ]},
];

const categoryConfig = [
  { name: "Worker Verification", questions: [0, 1, 2], maxScore: 9 },
  { name: "Document & Cert Management", questions: [3, 4], maxScore: 6 },
  { name: "Onboarding & Inductions", questions: [5, 6], maxScore: 6 },
  { name: "Workforce Visibility", questions: [7, 8], maxScore: 6 },
  { name: "Compliance Governance", questions: [9], maxScore: 3 },
];

const ukRiskDescriptions: Record<string, string> = {
  "Worker Verification": "Your worker verification processes leave gaps that could trigger HSE enforcement (\u00a3875+ per incident, 96% conviction rate), Home Office penalties (\u00a345,000 per illegal worker), and from April 2026, HMRC PAYE liability for unverified CIS workers. Pangea verifies CSCS cards, right-to-work, and CIS status automatically during WhatsApp onboarding.",
  "Document & Cert Management": "Scattered or manually tracked documents mean expired certs slip through. One expired CSCS card on site can trigger Fee for Intervention. You\u2019re also carrying GDPR risk if worker PII isn\u2019t stored with proper access controls. Pangea stores all documents centrally with automatic expiry tracking and one-click audit export.",
  "Onboarding & Inductions": "Manual or paper-based onboarding creates CDM 2015 compliance gaps. If HSE asks for induction records and you can\u2019t produce them instantly, you\u2019re exposed. Pangea onboards workers via WhatsApp in under 4 minutes with automatic record-keeping.",
  "Workforce Visibility": "If you can\u2019t confirm who is on which site and whether they\u2019re compliant, you have no operational control. Pangea gives you real-time visibility across every site with automated replacement from a compliance-verified pool.",
  "Compliance Governance": "HSE Fee for Intervention charges \u00a3875 per inspector hour \u2014 every minute spent searching for records costs you money. Pangea makes every worker\u2019s full compliance history available in one click.",
};

const usRiskDescriptions: Record<string, string> = {
  "Worker Verification": "Gaps in OSHA card verification and I-9 compliance expose you to serious OSHA fines ($16,131 per violation) and I-9 penalties ($272\u2013$27,457 per worker). Pangea verifies credentials automatically via SMS before workers reach the jobsite.",
  "Document & Cert Management": "Scattered training records and licenses mean expired certifications go unnoticed. When OSHA arrives, you need documentation immediately. Pangea centralises all documents with automatic expiry alerts and one-click export.",
  "Onboarding & Safety": "Manual safety orientations without verifiable records are an OSHA citation waiting to happen. Pangea delivers site-specific safety orientations via SMS with quiz verification and automatic logging.",
  "Workforce Visibility": "Not knowing who is on which jobsite in real time means you can\u2019t verify compliance during an OSHA walk-around. Pangea gives real-time crew visibility with automated, compliance-verified dispatch.",
  "Compliance Governance": "OSHA inspections are unannounced. Willful violations reach $161,323 each. Pangea keeps every worker\u2019s full compliance file one click away.",
};

function getGrade(score: number): { grade: string; label: string; colour: string } {
  if (score >= 90) return { grade: "A", label: "Excellent", colour: "#22C55E" };
  if (score >= 75) return { grade: "B", label: "Good", colour: "#84CC16" };
  if (score >= 60) return { grade: "C", label: "Needs Improvement", colour: "#EAB308" };
  if (score >= 40) return { grade: "D", label: "At Risk", colour: "#F97316" };
  return { grade: "F", label: "Critical Risk", colour: "#EF4444" };
}

function calculateExposure(market: Market, score: number, workforceSize: number) {
  const multiplier = 1 + ((100 - score) / 100) * 2;
  if (market === "uk") {
    const hse = workforceSize * 0.02 * 875;
    const rtw = workforceSize * 0.005 * 45000;
    const cis = workforceSize * 0.03 * 5000;
    const admin = (workforceSize / 50) * 15 * 52 * 15;
    const agency = workforceSize * 0.15 * 40 * 48 * 5;
    const total = (hse + rtw + cis + admin + agency) * multiplier;
    return { total, breakdown: [
      { label: "HSE fine risk", value: hse * multiplier },
      { label: "Right-to-work penalties", value: rtw * multiplier },
      { label: "CIS/PAYE liability", value: cis * multiplier },
      { label: "Admin overhead", value: admin * multiplier },
      { label: "Agency markup excess", value: agency * multiplier },
    ], currency: "\u00a3" };
  } else {
    const osha = workforceSize * 0.02 * 16131;
    const i9 = workforceSize * 0.01 * 2500;
    const admin = (workforceSize / 50) * 15 * 52 * 18;
    const agency = workforceSize * 0.15 * 55 * 48 * 5;
    const total = (osha + i9 + admin + agency) * multiplier;
    return { total, breakdown: [
      { label: "OSHA fine risk", value: osha * multiplier },
      { label: "I-9 penalties", value: i9 * multiplier },
      { label: "Admin overhead", value: admin * multiplier },
      { label: "Agency markup excess", value: agency * multiplier },
    ], currency: "$" };
  }
}

function workforceSizeToNumber(size: string): number {
  return { "10-49": 30, "50-99": 75, "100-249": 175, "250-499": 375, "500+": 600 }[size] || 75;
}

/* ── SVG Score Gauge ────────────────────────────────────────── */
function ScoreGauge({ score, colour, size = 200 }: { score: number; colour: string; size?: number }) {
  const [animated, setAnimated] = useState(0);
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animated / 100) * circumference;

  useEffect(() => {
    let frame: number;
    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - start) / 1800, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setAnimated(Math.round(eased * score));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [score]);

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        {/* Background track */}
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
        {/* Score arc */}
        <circle
          cx={size / 2} cy={size / 2} r={radius} fill="none"
          stroke={colour} strokeWidth="8" strokeLinecap="round"
          strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 0.1s ease-out" }}
        />
        {/* Glow */}
        <circle
          cx={size / 2} cy={size / 2} r={radius} fill="none"
          stroke={colour} strokeWidth="2" strokeLinecap="round" opacity="0.3"
          strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
          style={{ filter: "blur(6px)", transition: "stroke-dashoffset 0.1s ease-out" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-serif text-5xl sm:text-6xl text-white tabular-nums">{animated}</span>
        <span className="text-sm text-white/30 -mt-1">out of 100</span>
      </div>
    </div>
  );
}

/* ── Animated number ────────────────────────────────────────── */
function AnimatedNumber({ target, duration = 1500, prefix = "" }: { target: number; duration?: number; prefix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef(0);
  useEffect(() => {
    const start = performance.now();
    function animate(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) ref.current = requestAnimationFrame(animate);
    }
    ref.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(ref.current);
  }, [target, duration]);
  return <>{prefix}{value.toLocaleString()}</>;
}

/* ── Category icon helper ───────────────────────────────────── */
function CategoryIcon({ path, className = "w-5 h-5" }: { path: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export function ComplianceCalculator() {
  const [market, setMarket] = useState<Market>("uk");
  const [stage, setStage] = useState<Stage>("quiz");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(10).fill(-1));
  const [lead, setLead] = useState<LeadData>({ name: "", email: "", company: "", workforceSize: "", phone: "" });
  const [fadeIn, setFadeIn] = useState(true);

  const questions = market === "uk" ? ukQuestions : usQuestions;
  const riskDescs = market === "uk" ? ukRiskDescriptions : usRiskDescriptions;

  const transition = useCallback((next: number) => {
    setFadeIn(false);
    setTimeout(() => { setCurrentQ(next); setFadeIn(true); }, 250);
  }, []);

  function selectAnswer(qi: number, score: number) {
    const a = [...answers]; a[qi] = score; setAnswers(a);
    setTimeout(() => {
      if (qi < 9) transition(qi + 1);
      else setStage("lead");
    }, 350);
  }

  function submitLead(e: React.FormEvent) {
    e.preventDefault();
    console.log("Compliance Calculator Lead:", { market, answers, lead });
    try { fetch("/api/compliance-lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ market, answers, lead }) }).catch(() => {}); } catch {}
    setStage("results");
  }

  function resetQuiz() {
    setAnswers(Array(10).fill(-1)); setCurrentQ(0); setStage("quiz");
    setLead({ name: "", email: "", company: "", workforceSize: "", phone: "" });
  }

  const rawScore = answers.reduce((s, a) => s + (a >= 0 ? a : 0), 0);
  const percentScore = Math.round((rawScore / 30) * 100);
  const gradeInfo = getGrade(percentScore);
  const wfSize = workforceSizeToNumber(lead.workforceSize);
  const exposure = calculateExposure(market, percentScore, wfSize);

  const categoryScores = categoryConfig.map((cat) => {
    const s = cat.questions.reduce((sum, qi) => sum + (answers[qi] >= 0 ? answers[qi] : 0), 0);
    return { ...cat, score: s, pct: Math.round((s / cat.maxScore) * 100) };
  });

  return (
    <div className="max-w-3xl mx-auto text-left">
      {/* ── Market toggle ── */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-xl bg-forest-800/80 p-1 border border-forest-700/40">
          {(["uk", "us"] as Market[]).map((m) => (
            <button key={m} onClick={() => { setMarket(m); resetQuiz(); }}
              className={`relative px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                market === m ? "bg-copper-500 text-white shadow-lg shadow-copper-500/20" : "text-white/50 hover:text-white/80"
              }`}
            >
              {m === "uk" ? "United Kingdom" : "United States"}
            </button>
          ))}
        </div>
      </div>

      {/* ════════════════ QUIZ ════════════════ */}
      {stage === "quiz" && (
        <div className="relative">
          {/* Progress */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center">
                  <CategoryIcon path={questions[currentQ].categoryIcon} className="w-4 h-4 text-copper-400" />
                </div>
                <span className="text-sm text-white/50">{questions[currentQ].category}</span>
              </div>
              <span className="font-mono text-xs text-white/30">{currentQ + 1} / 10</span>
            </div>
            {/* Segmented progress */}
            <div className="flex gap-1">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="flex-1 h-1 rounded-full overflow-hidden bg-forest-700/40">
                  <div className={`h-full rounded-full transition-all duration-500 ${
                    i < currentQ ? "bg-copper-500" : i === currentQ ? "bg-copper-400 animate-pulse" : ""
                  }`} style={{ width: i <= currentQ ? "100%" : "0%" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Question card */}
          <div className={`transition-all duration-300 ease-out ${fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="bg-forest-800/60 rounded-2xl border border-forest-700/30 p-6 sm:p-8 mb-6 backdrop-blur-sm">
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-copper-400/70 mb-4">
                Question {currentQ + 1}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-white leading-snug">
                {questions[currentQ].text}
              </h3>
            </div>

            {/* Answer options */}
            <div className="space-y-2.5">
              {questions[currentQ].options.map((opt, i) => {
                const selected = answers[currentQ] === opt.score;
                const labels = ["A", "B", "C", "D"];
                return (
                  <button key={i} onClick={() => selectAnswer(currentQ, opt.score)}
                    className={`group w-full text-left rounded-xl border transition-all duration-200 ${
                      selected
                        ? "border-copper-500 bg-copper-500/8 shadow-[0_0_20px_rgba(193,127,89,0.08)]"
                        : "border-forest-700/30 bg-forest-800/30 hover:border-forest-600/60 hover:bg-forest-800/60"
                    }`}
                  >
                    <div className="flex items-start gap-4 px-5 py-4">
                      <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono transition-colors ${
                        selected
                          ? "bg-copper-500 text-white"
                          : "bg-forest-700/30 text-white/30 group-hover:bg-forest-700/50 group-hover:text-white/50"
                      }`}>
                        {selected ? (
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M5 13l4 4L19 7" /></svg>
                        ) : labels[i]}
                      </div>
                      <span className={`text-sm leading-relaxed pt-0.5 transition-colors ${selected ? "text-white" : "text-white/60 group-hover:text-white/80"}`}>
                        {opt.text}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {currentQ > 0 && (
            <button onClick={() => transition(currentQ - 1)}
              className="mt-6 text-sm text-white/30 hover:text-white/60 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Previous question
            </button>
          )}
        </div>
      )}

      {/* ════════════════ LEAD CAPTURE ════════════════ */}
      {stage === "lead" && (
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-copper-500/10 border border-copper-500/20 mb-5">
              <svg className="w-7 h-7 text-copper-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3">Your score is ready</h3>
            <p className="text-white/40 text-sm">Enter your details to see your full compliance report and estimated annual financial exposure.</p>
          </div>

          <form onSubmit={submitLead} className="space-y-4">
            {[
              { label: "Full name", key: "name" as const, type: "text", placeholder: "Your name", required: true },
              { label: "Work email", key: "email" as const, type: "email", placeholder: "you@company.com", required: true },
              { label: "Company name", key: "company" as const, type: "text", placeholder: "Your company", required: true },
            ].map((f) => (
              <div key={f.key} className="group">
                <label className="block text-[0.65rem] font-mono uppercase tracking-wider text-white/30 mb-1.5">{f.label} {f.required && "*"}</label>
                <input type={f.type} required={f.required} value={lead[f.key]}
                  onChange={(e) => setLead({ ...lead, [f.key]: e.target.value })}
                  className="w-full bg-forest-800/60 border border-forest-700/40 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-copper-500/60 focus:bg-forest-800 transition-all"
                  placeholder={f.placeholder}
                />
              </div>
            ))}
            <div>
              <label className="block text-[0.65rem] font-mono uppercase tracking-wider text-white/30 mb-1.5">Workforce size *</label>
              <select required value={lead.workforceSize} onChange={(e) => setLead({ ...lead, workforceSize: e.target.value })}
                className="w-full bg-forest-800/60 border border-forest-700/40 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-copper-500/60 transition-all"
              >
                <option value="">Select workforce size...</option>
                <option value="10-49">10 to 49 workers</option>
                <option value="50-99">50 to 99 workers</option>
                <option value="100-249">100 to 249 workers</option>
                <option value="250-499">250 to 499 workers</option>
                <option value="500+">500+ workers</option>
              </select>
            </div>
            <div>
              <label className="block text-[0.65rem] font-mono uppercase tracking-wider text-white/30 mb-1.5">Phone (optional)</label>
              <input type="tel" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                className="w-full bg-forest-800/60 border border-forest-700/40 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-copper-500/60 transition-all"
                placeholder="+44..."
              />
            </div>
            <button type="submit"
              className="w-full bg-copper-500 hover:bg-copper-600 text-white font-semibold py-4 rounded-xl transition-all text-base mt-2 shadow-lg shadow-copper-500/15 hover:shadow-copper-500/25"
            >
              Reveal My Score
            </button>
          </form>
        </div>
      )}

      {/* ════════════════ RESULTS ════════════════ */}
      {stage === "results" && (
        <div>
          {/* Score gauge */}
          <div className="text-center mb-14">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-copper-400/80 mb-8">Your Compliance Score</p>
            <ScoreGauge score={percentScore} colour={gradeInfo.colour} size={220} />
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="font-serif text-4xl font-bold" style={{ color: gradeInfo.colour }}>{gradeInfo.grade}</span>
              <span className="text-lg text-white/50">{gradeInfo.label}</span>
            </div>
          </div>

          {/* Financial exposure — alarming */}
          <div className="mb-14 rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-red-950/40 via-red-900/20 to-orange-950/30 border border-red-500/15 rounded-2xl p-8">
              <div className="text-center mb-6">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-red-400/60 mb-2">Estimated Annual Financial Exposure</p>
                <p className="font-serif text-4xl sm:text-5xl text-red-400">
                  <AnimatedNumber target={Math.round(exposure.total)} prefix={exposure.currency} duration={2000} />
                </p>
              </div>
              <div className="space-y-2">
                {exposure.breakdown.map((item) => (
                  <div key={item.label} className="flex justify-between items-center text-sm py-2 border-t border-red-500/10 first:border-0">
                    <span className="text-white/40">{item.label}</span>
                    <span className="font-mono text-red-300/70">{exposure.currency}{Math.round(item.value).toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Category breakdown */}
          <div className="mb-14">
            <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-copper-400/70 mb-6">Category Breakdown</h4>
            <div className="space-y-5">
              {categoryScores.map((cat) => {
                const g = getGrade(cat.pct);
                return (
                  <div key={cat.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded bg-forest-700/30 flex items-center justify-center">
                          <CategoryIcon path={categoryIcons[cat.name] || categoryIcons["Worker Verification"]} className="w-3.5 h-3.5 text-white/40" />
                        </div>
                        <span className="text-sm text-white/70">{cat.name}</span>
                      </div>
                      <span className="font-mono text-sm tabular-nums" style={{ color: g.colour }}>{cat.pct}%</span>
                    </div>
                    <div className="w-full h-2 bg-forest-700/30 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-[1.5s] ease-out"
                        style={{ width: `${cat.pct}%`, backgroundColor: g.colour, boxShadow: `0 0 12px ${g.colour}40` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Risk descriptions */}
          {categoryScores.filter(c => c.pct < 67).length > 0 && (
            <div className="mb-14">
              <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-red-400/60 mb-6">Your Biggest Risks</h4>
              <div className="space-y-3">
                {categoryScores.filter(c => c.pct < 67).map((cat) => {
                  const g = getGrade(cat.pct);
                  return (
                    <div key={cat.name} className="rounded-xl bg-forest-800/50 border border-forest-700/30 p-5 sm:p-6" style={{ borderLeftWidth: 3, borderLeftColor: g.colour }}>
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="font-serif text-base text-white">{cat.name}</span>
                        <span className="text-[0.6rem] font-mono px-2 py-0.5 rounded-md" style={{ backgroundColor: g.colour + "15", color: g.colour }}>{cat.pct}%</span>
                      </div>
                      <p className="text-sm text-white/45 leading-relaxed">{riskDescs[cat.name] || ""}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* CTAs */}
          <div className="text-center space-y-4 pt-4">
            <Link href="/demo"
              className="inline-flex items-center gap-2.5 bg-copper-500 hover:bg-copper-600 text-white font-semibold px-10 py-4 rounded-xl transition-all text-lg shadow-lg shadow-copper-500/15 hover:shadow-copper-500/25"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              Book a Demo to Fix These Gaps
            </Link>
            <div>
              <button onClick={resetQuiz} className="text-sm text-white/25 hover:text-white/50 transition-colors">
                Retake the assessment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
