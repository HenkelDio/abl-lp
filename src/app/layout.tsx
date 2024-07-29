import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappIcon from "./components/WhatsappIcon";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "ABL STOCK",
  description: "Fundada em 2001, a Gás Cavilato se dedica a fornecer soluções de gás com excelência e confiabilidade. Com mais de duas décadas de experiência no mercado, temos orgulho em ser revendedores autorizados da Supergasbras há mais de 10 anos, uma das marcas mais respeitadas no setor.",
  keywords: "gás, soluções de gás, Supergasbras, revendedores de gás, gás de cozinha, Cavilato Gás",
  author: "Cavilato Gás",
  charset: "UTF-8",
  robots: "index, follow",
  og: {
    title: "Cavilato Gás",
    type: "website",
    url: "http://www.cavilatogas.com.br",
    image: "http://www.cavilatogas.com.br/logo.png",
    description: "Fundada em 2001, a Gás Cavilato se dedica a fornecer soluções de gás com excelência e confiabilidade. Com mais de duas décadas de experiência no mercado, temos orgulho em ser revendedores autorizados da Supergasbras há mais de 10 anos, uma das marcas mais respeitadas no setor."
  },
  twitter: {
    card: "summary_large_image",
    title: "Cavilato Gás",
    description: "Fundada em 2001, a Gás Cavilato se dedica a fornecer soluções de gás com excelência e confiabilidade. Com mais de duas décadas de experiência no mercado, temos orgulho em ser revendedores autorizados da Supergasbras há mais de 10 anos, uma das marcas mais respeitadas no setor.",
    image: "http://www.cavilatogas.com.br/logo.png"
  },
  canonical: "http://www.cavilatogas.com.br",
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
