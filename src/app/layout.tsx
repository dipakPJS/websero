import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ReactLenis } from "@/utils/lenis";
 
import AudioComponent from "@/components/audioComponent/Audio.component";
import FullPageNav from "@/components/navbarComponent/navbar.component";
import { CursorProvider } from "@/context/CursorContext";
import CursorComponent from "@/components/cursorComponent/Cursor.component";
import LogoComponent from "@/components/logoComponent/logo.component";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Websero Studio",
  description: "Created by Dipak Pokharel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <ReactLenis root>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="min-h-screen relative">
          <CursorProvider>
            <CursorComponent />
            <AudioComponent />
            <LogoComponent />
          <FullPageNav />
            {children}
            </CursorProvider>
          </div>
        </body>
      </ReactLenis>
    </html>
  );
}
