import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import MotionProvider from "@/components/motion-provider";
import ThemeContextProvider from "@/context/theme-context";

const geist = Geist({ subsets: ["latin"] });

// Runs before first paint so dark-mode visitors don't see a light flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}`;

const title = "Jalal Habeeb · Front-end Developer";
// LinkedIn warns under 100 characters; search results cut off around 160.
const description =
  "I'm a front-end developer at Appical in Amsterdam, building web apps with React and TypeScript. See my experience, side projects and how to reach me.";

export const metadata: Metadata = {
  // Absolute base for the generated Open Graph image URL in link previews.
  metadataBase: new URL("https://jalalhabeeb.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Jalal Habeeb",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="motion-safe:scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geist.className} relative bg-gray-50 pt-28 text-gray-950 antialiased dark:bg-gray-950 dark:text-gray-50 sm:pt-36`}
      >
        {/* Soft accent glow and a faint dot grid behind the hero. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[48rem] bg-[radial-gradient(60rem_32rem_at_50%_-8rem,rgba(99,102,241,0.16),transparent)] dark:bg-[radial-gradient(60rem_32rem_at_50%_-8rem,rgba(129,140,248,0.20),transparent)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(rgba(17,24,39,0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] dark:bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)]"
        />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <MotionProvider>
              <Header />
              {children}
              <Toaster position="top-right" />
              <Footer />
            </MotionProvider>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
