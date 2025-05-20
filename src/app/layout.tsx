import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import UpdatingNotice from "./_components/UpdatingNotice";

export const metadata: Metadata = {
  title: "alexbarr.com",
  description: "my portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const IS_UPDATING = process.env.NEXT_PUBLIC_SITE_UPDATING === "true";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable}`}>
      <body>{IS_UPDATING ? <UpdatingNotice /> : children}</body>
    </html>
  );
}
