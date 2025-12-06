import {
  Josefin_Sans,
  Prata,
  Poppins,
  Josefin_Slab,
  PT_Mono,
  Port_Lligat_Slab,
} from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const josefinSlab = Josefin_Slab({
  variable: "--font-josefin-slab",
  subsets: ["latin"],
});

const ptMono = PT_Mono({
  variable: "--font-pt-mono",
  subsets: ["latin"],
  weight: "400",
});

const portLligatSlab = Port_Lligat_Slab({
  variable: "--font-port-lligat-slab", // FIX naming
  subsets: ["latin"],
  weight: "400",
});

import 'remixicon/fonts/remixicon.css'

export const metadata = {
  title: "INDPAFUM",
  description: "Temukan Aura Terbaik Anda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${josefinSans.variable} ${poppins.variable} ${prata.variable} ${josefinSlab.variable} ${ptMono.variable} ${portLligatSlab.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
