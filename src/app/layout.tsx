import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/header";
import MobileNav from "@/components/layout/mobile-nav";

const inter = Inter({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Cornerstone Ephraim | Frontend Engineer",
  description: "Frontend engineer | React | Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="author" content="Cornerstone Ephraim" />
        <title>Cornerstone Ephraim | Frontend Engineer</title>
        <meta
          name="description"
          content="Frontend Engineer with 3 years experience building scalable, responsive web apps with ReactJS, Next.js, and TypeScript."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://cornerstoneephraim.vercel.app/" />
        <meta
          property="og:title"
          content="Cornerstone Ephraim | Frontend Engineer"
        />
        <meta
          property="og:description"
          content="Frontend Engineer with 3 years experience building scalable, responsive web apps with ReactJS, Next.js, and TypeScript."
        />
        <meta
          name="keywords"
          content="Frontend engineer, Frontend developer, React Developer, React.js, Next.js, Zustand, Playwright, SEO, JavaScript, TypeScript, Tailwind CSS, HTML, CSS, Web Development, Portfolio"
        />
        <meta
          property="og:url"
          content="https://cornerstoneephraim.vercel.app"
        />
        <meta property="og:image" content="/images/pic.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@4th_ephraim" />
        <meta
          name="twitter:title"
          content="Cornerstone Ephraim | Frontend Engineer"
        />
        <meta
          name="twitter:description"
          content="Frontend Engineer with 3 years experience building scalable, responsive web apps with ReactJS, Next.js, and TypeScript."
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="twitter:image" content="/images/pic.jpg" />
        <meta name="twitter:site" content="@4th_ephraim" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="favicon.ico" />
      </head>

      <body
        className={`${inter.className} text-sm leading-6 transition ease text-gray-700 dark:bg-[#131316]`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
