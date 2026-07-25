import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bishwa Nath Roy — Frontend Developer & Next.js Engineer",
  description: "Professional portfolio of Bishwa Nath Roy, a passionate Frontend Developer specializing in Next.js, React, GSAP animations, and modern UI/UX design.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <div className="max-w-7xl mx-auto w-full">
          <SmoothScroll>
            <CustomCursor />
            {children}
            <ScrollToTop />
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
