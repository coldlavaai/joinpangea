"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          dark: {
            "cal-brand": "#c17f59",
            "cal-brand-emphasis": "#a66a48",
            "cal-text": "#ffffff",
            "cal-text-emphasis": "#ffffff",
            "cal-text-subtle": "rgba(255,255,255,0.6)",
            "cal-bg": "#133026",
            "cal-bg-emphasis": "#1b4332",
            "cal-border": "rgba(27,67,50,0.5)",
            "cal-border-emphasis": "rgba(27,67,50,0.8)",
          },
          light: {
            "cal-brand": "#c17f59",
            "cal-brand-emphasis": "#a66a48",
          },
        },
      });
    })();
  }, []);

  return (
    <Cal
      calLink="coldlava/demo-walkthrough"
      style={{ width: "100%", height: "100%", overflow: "auto", minHeight: "600px" }}
      config={{ layout: "month_view", theme: "dark" }}
    />
  );
}
