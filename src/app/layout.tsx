import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//components
import Footer from "./footer.jsx/page";
import Navbar from "./navbar/page";
import Education from "./education/page";
import AboutMe from "./aboutme/page";
import Closing from "./closing/page";
import Skill from "./skill/page";

import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"], // Sesuaikan berat font
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rizki's Portofolio",
  description: "Welcome to my portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Navbar />
        {children}
        <Education />
        <AboutMe />
        <Skill />
        <Closing />
        <Footer />
      </body>
    </html>
  );
}
