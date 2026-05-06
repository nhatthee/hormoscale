import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#F7FAFA",
          display: "flex",
          padding: "72px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "-120px",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            background: "#D6F3F3",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "80px",
            bottom: "-90px",
            width: "360px",
            height: "360px",
            borderRadius: "999px",
            background: "#E8E0F5",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "760px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#F5A623",
              color: "#4A2A75",
              padding: "10px 20px",
              borderRadius: "999px",
              fontSize: "24px",
              fontWeight: 900,
              marginBottom: "28px",
              alignSelf: "flex-start",
            }}
          >
            HORMOSCALE
          </div>

          <div
            style={{
              fontSize: "72px",
              lineHeight: 0.95,
              fontWeight: 900,
              color: "#2A1A4A",
              letterSpacing: "-0.05em",
            }}
          >
            GLP-1 Weight Loss Calculator
          </div>

          <div
            style={{
              marginTop: "28px",
              fontSize: "30px",
              lineHeight: 1.35,
              color: "#4A4A6A",
            }}
          >
            Estimate your projected GLP-1 weight loss journey with personalized
            metabolic insights.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}