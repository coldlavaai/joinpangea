import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pangea — Construction Workforce Management";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const dmSerifFont = fetch(
    new URL(
      "https://fonts.gstatic.com/s/dmseriftdisplay/v3/rnCdtJ4Xl-d6W-F2hSA80BPilrv3kqVYkg.woff2",
      import.meta.url
    )
  ).then((res) => res.arrayBuffer());

  const dmSansFont = fetch(
    new URL(
      "https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhTmH3.woff2",
      import.meta.url
    )
  ).then((res) => res.arrayBuffer());

  const [serifData, sansData] = await Promise.all([dmSerifFont, dmSansFont]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b2118 0%, #133026 40%, #1b4332 100%)",
          position: "relative",
        }}
      >
        {/* Decorative copper accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #c17f59 0%, #d4976f 50%, #c17f59 100%)",
          }}
        />

        {/* Label */}
        <div
          style={{
            fontFamily: "DM Sans",
            fontSize: "16px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#c17f59",
            marginBottom: "24px",
          }}
        >
          Construction Workforce Management
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: "DM Serif Display",
            fontSize: "72px",
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Onboard workers via WhatsApp.
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontFamily: "DM Sans",
            fontSize: "26px",
            color: "rgba(255, 255, 255, 0.6)",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          Cert verified, right-to-work checked, H&S signed off — all on their phone. No apps. No portals. Just results.
        </div>

        {/* Bottom bar with brand */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "DM Serif Display",
              fontSize: "32px",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #c17f59, #d4976f)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontFamily: "DM Serif Display",
                color: "#ffffff",
              }}
            >
              P
            </div>
            Pangea
          </div>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.4)",
            }}
          >
            joinpangea.ai
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "DM Serif Display",
          data: serifData,
          style: "normal",
          weight: 400,
        },
        {
          name: "DM Sans",
          data: sansData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
