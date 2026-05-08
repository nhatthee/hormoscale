import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Hormoscale GLP-1 Weight Loss Calculator";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #6B3FA0 0%, #5BBFBF 58%, #F5A623 130%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.28), transparent 28%), radial-gradient(circle at 86% 18%, rgba(255,255,255,0.18), transparent 24%), radial-gradient(circle at 78% 82%, rgba(255,255,255,0.18), transparent 26%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 72,
            top: 72,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 18,
              background: "#F5A623",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#4A2A75",
              fontSize: 30,
              fontWeight: 900,
              boxShadow: "0 18px 50px rgba(0,0,0,0.22)",
            }}
          >
            H
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                color: "white",
                fontSize: 34,
                fontWeight: 900,
                letterSpacing: "-0.04em",
              }}
            >
              Hormoscale
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: 18,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              GLP-1 Weight Management Tools
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 72,
            bottom: 86,
            width: 760,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              color: "#F5A623",
              fontSize: 20,
              fontWeight: 900,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: 22,
            }}
          >
            Free Calculator + PDF Report
          </div>

          <div
            style={{
              color: "white",
              fontSize: 76,
              fontWeight: 950,
              lineHeight: 0.94,
              letterSpacing: "-0.07em",
            }}
          >
            GLP-1 Weight Loss Calculator
          </div>

          <div
            style={{
              color: "rgba(255,255,255,0.86)",
              fontSize: 28,
              lineHeight: 1.35,
              marginTop: 28,
              maxWidth: 720,
            }}
          >
            Estimate your projected weight loss, BMI changes, milestone
            timeline, and personalized GLP-1 report.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 72,
            bottom: 76,
            width: 280,
            height: 280,
            borderRadius: 44,
            background: "rgba(255,255,255,0.18)",
            border: "1px solid rgba(255,255,255,0.28)",
            boxShadow: "0 30px 90px rgba(30,20,70,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(18px)",
          }}
        >
          <div
            style={{
              width: 168,
              height: 168,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, #F5A623 0%, #5BBFBF 44%, rgba(255,255,255,0.12) 72%)",
              boxShadow:
                "0 0 80px rgba(245,166,35,0.55), inset 0 0 42px rgba(255,255,255,0.5)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}