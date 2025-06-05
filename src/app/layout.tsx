import localFont from "next/font/local";

import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";
import Script from "next/script";

const AncizarFont = localFont({
  src: "../assets/fonts/AncizarSerif-Medium.ttf",
  variable: "--font-ancizar",
});

export const metadata: Metadata = {
  title: "David Scholer",
  description: "Portfolio of David Scholer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-17J7L93QPM"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-17J7L93QPM');`}
        </Script>
      </head>
      <body className={`${AncizarFont.variable}`}>
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
