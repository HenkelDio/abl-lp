import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappIcon from "./components/WhatsappIcon";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "ABL STOCK",
  description: "A ABL STOCK é uma empresa especializada em vendas online, atuando principalmente através das plataformas Facebook e Instagram. A ABL STOCK é inovadora no segmento de vendas online, dedicada a fornecer uma experiência de compra conveniente e satisfatória para seus clientes.",
  keywords: "vendas online, e-commerce, Facebook, Instagram, compras convenientes, ABL STOCK, experiência de compra, loja online",
  author: "ABL STOCK",
  charset: "UTF-8",
  robots: "index, follow",
  og: {
    title: "ABL STOCK",
    type: "website",
    url: "http://www.ablstock.com.br",
    image: "http://www.ablstock.com.br/logo.png",
    description: "A ABL STOCK é uma empresa especializada em vendas online, atuando principalmente através das plataformas Facebook e Instagram. A ABL STOCK é inovadora no segmento de vendas online, dedicada a fornecer uma experiência de compra conveniente e satisfatória para seus clientes."
  },
  twitter: {
    card: "summary_large_image",
    title: "ABL STOCK",
    description: "A ABL STOCK é uma empresa especializada em vendas online, atuando principalmente através das plataformas Facebook e Instagram. A ABL STOCK é inovadora no segmento de vendas online, dedicada a fornecer uma experiência de compra conveniente e satisfatória para seus clientes.",
    image: "http://www.ablstock.com.br/logo.png"
  },
  canonical: "http://www.ablstock.com.br",
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={montserrat.className}>
        <Header />
        {children}
        <WhatsappIcon />
        <Footer />
      </body> 
    </html>
  );
}
