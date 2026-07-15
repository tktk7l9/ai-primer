import { ImageResponse } from "next/og";

export const alt = "AI Primer — AIを体系的に学ぶバイリンガル・チュートリアル";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf7f1",
          backgroundImage:
            "linear-gradient(#e9e3d3 1px, transparent 1px)",
          backgroundSize: "100% 48px",
          color: "#243240",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 16,
              background: "#5646c8",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 800,
              fontFamily: "monospace",
            }}
          >
            AI
          </div>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, color: "#5a6672" }}>
            FIELD NOTES ON ARTIFICIAL INTELLIGENCE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 108, fontWeight: 800, letterSpacing: -2 }}>
            AI Primer
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#5a6672" }}>
            用語・歴史・仕組みからChatGPT・Claude・Gemini・Grokの使い分けまで
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["8 TRACKS", "40 LESSONS", "JA / EN", "SOURCED"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid #ddd5c2",
                color: "#5a6672",
                fontSize: 20,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
