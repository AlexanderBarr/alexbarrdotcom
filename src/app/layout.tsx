import "../styles/globals.css";

import { type Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${openSans.variable}`} suppressHydrationWarning>
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
