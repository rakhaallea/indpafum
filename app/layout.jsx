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
  metadataBase: new URL("https://indpafum.co.id/"),
  title: "INDPAFUM | Parfum Elegan dengan Karakter Unik",
  description:
    "INDPAFUM menghadirkan parfum dengan karakter elegan, tahan lama, dan cocok untuk setiap momen. Temukan aroma oriental, floral, dan spicy favoritmu.",
  keywords: [
    "parfum",
    "parfum pria wanita",
    "parfum unisex",
    "parfum tahan lama",
    "parfum floral",
    "parfum oriental",
    "INDPAFUM"
  ],
  openGraph: {
    title: "INDPAFUM | Parfum Elegan dengan Karakter Unik",
    description:
      "Temukan parfum oriental, floral, dan spicy dengan karakter elegan dan tahan lama dari INDPAFUM.",
    url: "https://indpafum.co.id/",
    siteName: "INDPAFUM",
    images: [
      {
        url: "/image/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "INDPAFUM Perfume Collection",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${josefinSans.variable} ${poppins.variable} ${prata.variable} ${josefinSlab.variable} ${ptMono.variable} ${portLligatSlab.variable} antialiased`}
      >
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "INDPAFUM",
              url: "https://indopafum.com",
              logo: "https://indpafum.co.id/_next/static/media/logo.12145652.png",
              sameAs: [
                "https://www.instagram.com/indpafum.store",
                "https://www.tiktok.com/@indpafum.official",
                "https://shopee.co.id/indpafum?shopCollection=256100839#product_list",
              ]
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
