import type { Metadata } from "next";
import {
  Montserrat,
  Fira_Mono,
  Poppins,
  Inter,
  Averia_Sans_Libre,
} from "next/font/google";
import "./globals.css";
import Cursor from "@/components/layout/cursor";
import Header from "@/components/layout/header";
import MobileNav from "@/components/layout/mobile-nav";
import Footer from "@/components/layout/footer";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  adjustFontFallback: false,
});

const inter = Inter({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Cornerstone Ephraim | Frontend Engineer",
  description:
    "Frontend engineer | React | Next.js | React Native | Vue.js | Angular | Redux | Python | Flask",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Cornerstone Ephraim" />
        <meta
          name="description"
          content="Cornerstone is a frontend + mobile engineer with 5 years of experience building web and mobile solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* ✅ Add your canonical link */}
        <link rel="canonical" href="<!-- PUT CANONICAL LINK HERE -->" />

        <meta
          property="og:title"
          content="Cornerstone Ephraim | Frontend Engineer"
        />
        <meta
          property="og:description"
          content="Cornerstone Ephraim is a frontend + mobile engineer with 5 years of experience building web and mobile solutions."
        />

        {/* ✅ Add your OpenGraph image */}
        <meta property="og:image" content="<!-- PUT OG IMAGE LINK HERE -->" />

        <meta
          name="keywords"
          content="Frontend engineer, React Developer, Next.js, React Native, Vue.js, Node.js, Angular, Redux, Python, Flask"
        />

        <meta name="twitter:card" content="summary_large_image" />

        {/* ✅ Add your Twitter handle */}
        <meta
          name="twitter:creator"
          content="<!-- PUT TWITTER HANDLE HERE -->"
        />
        <meta
          name="twitter:title"
          content="Cornerstone Ephraim | Frontend Engineer"
        />
        <meta
          name="twitter:description"
          content="Cornerstone Ephraim is a frontend + mobile engineer with 5 years of experience building web and mobile solutions."
        />

        {/* ✅ Add your Twitter image */}
        <meta
          name="twitter:image"
          content="<!-- PUT TWITTER IMAGE LINK HERE -->"
        />

        {/* ✅ Add your Twitter site handle */}
        <meta
          name="twitter:site"
          content="<!-- PUT TWITTER SITE HANDLE HERE -->"
        />

        <meta name="robots" content="index, follow" />

        {/* ✅ Add your favicon */}
        <link rel="icon" href="<!-- PUT FAVICON LINK HERE -->" />
      </head>

      <body
        className={`${inter.className} text-sm leading-6 transition ease text-gray-700`}
      >
        <Cursor />
        <Header />
        {children}
        <MobileNav />
        <Footer />
      </body>
    </html>
  );
}
