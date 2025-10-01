import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/header";
import MobileNav from "@/components/layout/mobile-nav";
import LoadingScreen from "@/components/common/loading-screen";
import Footer from "@/components/layout/footer";

const inter = Inter({
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-inter",
  subsets: ["latin"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Cornerstone Ephraim | Frontend Engineer",
  description:
    "Frontend Engineer with 3 years experience building scalable, responsive web apps with ReactJS, Next.js, and TypeScript.",
  metadataBase: new URL("https://cornerstoneephraim.vercel.app/"),
  openGraph: {
    title: "Cornerstone Ephraim | Frontend Engineer",
    description:
      "Frontend Engineer with 3 years experience building scalable, responsive web apps with ReactJS, Next.js, and TypeScript.",
    url: "https://cornerstoneephraim.vercel.app/",
    siteName: "Cornerstone Ephraim",
    images: ["/cornerstone.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@4th_ephraim",
    title: "Cornerstone Ephraim | Frontend Engineer",
    description:
      "Frontend Engineer with 3 years experience building scalable, responsive web apps with ReactJS, Next.js, and TypeScript.",
    images: ["/cornerstone.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Frontend engineer",
    "Frontend developer",
    "React Developer",
    "React.js",
    "Next.js",
    "Zustand",
    "Playwright",
    "SEO",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Web Development",
    "Portfolio",
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <meta name="author" content="Cornerstone Ephraim" />
      </head>

      <body
        className={`${inter.className} text-sm leading-6 transition ease text-gray-700 dark:bg-[#0A0A0A]`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen />
          <Header />
          {children}
          <Footer />
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
