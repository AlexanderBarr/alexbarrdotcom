import "../styles/globals.css";

import { type Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";

export const metadata: Metadata = {
  title: "Alex Barr - Full Stack Developer | Sydney, Australia",
  description:
    "Experienced Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Based in Sydney, Australia. Available for new opportunities.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Sydney Developer",
    "Australia Developer",
    "JavaScript Developer",
    "Node.js Developer",
  ],
  authors: [{ name: "Alex Barr", url: "https://alexbarr.com.au" }],
  creator: "Alex Barr",
  publisher: "Alex Barr",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://alexbarr.com.au",
    siteName: "Alex Barr - Full Stack Developer",
    title: "Alex Barr - Full Stack Developer | Sydney, Australia",
    description:
      "Experienced Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Based in Sydney, Australia.",
    images: [
      {
        url: "/alex/alexbarr2.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Barr - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Barr - Full Stack Developer | Sydney, Australia",
    description:
      "Experienced Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    images: ["/alex/alexbarr2.jpg"],
  },
  alternates: {
    canonical: "https://alexbarr.com.au",
  },
  icons: [
    { rel: "icon", url: "/logo.png" },
    { rel: "apple-touch-icon", url: "/logo.png" },
  ],
  manifest: "/manifest.json",
  category: "technology",
};

// Font
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${openSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Alex Barr",
              jobTitle: "Full Stack Developer",
              description:
                "Experienced Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
              url: "https://alexbarr.com.au",
              image: "https://alexbarr.com.au/alex/alexbarr2.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sydney",
                addressRegion: "NSW",
                addressCountry: "Australia",
              },
              email: "business@alexbarr.com.au",
              sameAs: [
                "https://github.com/AlexanderBarr",
                "https://www.linkedin.com/in/alex-b-950725113/",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Full Stack Development",
                "Web Development",
                "Frontend Development",
                "Backend Development",
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
