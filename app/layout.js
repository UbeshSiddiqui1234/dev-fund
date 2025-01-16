import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/sessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevFund",
  description: "Platform for the artist and art",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-slate-950 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]`}>
        <SessionWrapper>
          <Navbar/>
          <div className="min-h-[86vh] text-white">{children}</div>
          <Footer/>
        </SessionWrapper>
      </body>
    </html>
  );
}
