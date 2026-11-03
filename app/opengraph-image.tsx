import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

const nbsp = (text: string) => text.replaceAll(" ", "\u00a0");

export const alt = "Jalal Habeeb, front-end developer at Appical";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The preview shown when the site is shared on LinkedIn, Slack, X and others.
export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/jalal.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#030712",
          backgroundImage:
            "radial-gradient(900px 480px at 50% -120px, rgba(129,140,248,0.35), transparent)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={photoSrc}
            alt=""
            width={96}
            height={96}
            style={{ borderRadius: 48, objectFit: "cover" }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: 20,
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.15)",
              fontSize: 26,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: "#10b981",
                marginRight: 12,
              }}
            />
            {/* Non-breaking spaces: Satori widens some word gaps in Geist. */}
            <span>{nbsp("Currently at Appical · Amsterdam")}</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, letterSpacing: -3, lineHeight: 1 }}>
            Jalal Habeeb
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 48,
              color: "#a5b4fc",
            }}
          >
            {nbsp("Front-end developer · React & TypeScript")}
          </div>
        </div>

        <div style={{ fontSize: 26, color: "rgba(255,255,255,0.5)" }}>
          jalalhabeeb.vercel.app
        </div>
      </div>
    ),
    size
  );
}
