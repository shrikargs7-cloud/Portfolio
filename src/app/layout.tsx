import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const signatureFont = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-signature",
});

// Runs before React hydrates so the correct theme class is on <html>
// before first paint — avoids a flash of the wrong background/colors.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.documentElement.className = theme;
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  title: "G S Shrikar | AI Engineer & Full Stack Developer",
  description:
    "Full Stack Developer and AI Engineer building intelligent software solutions. Explore my projects, skills, and professional journey.",
  keywords: "AI Engineer, Full Stack Developer, Web Development, Machine Learning, React, Next.js",
  authors: [{ name: "G S Shrikar" }],
  openGraph: {
    title: "G S Shrikar | AI Engineer & Full Stack Developer",
    description: "Building intelligent software solutions with AI and modern web technologies.",
    url: "https://shrikar.dev",
    siteName: "G S Shrikar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "G S Shrikar | AI Engineer",
    description: "Building intelligent software solutions with AI and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={signatureFont.variable} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}