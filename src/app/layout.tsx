import "~/styles/globals.css";

import { type Metadata } from "next";
import { Open_Sans } from "next/font/google";
import UpdatingNotice from "~/components/SiteMaintance/UpdatingNotice";
// import UpdatingNotice from "./_components/UpdatingNotice";

export const metadata: Metadata = {
  title: "alexbarr.com",
  description: "my portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// Font
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const IS_UPDATING = process.env.NEXT_PUBLIC_SITE_UPDATING === "true";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <body>{IS_UPDATING ? <UpdatingNotice /> : children}</body>
    </html>
  );
}
