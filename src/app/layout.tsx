import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "De Sola FC News | Notícias do Clube",
    template: "%s | De Sola FC News",
  },
  description:
    "Portal de notícias do De Sola FC. Fique por dentro de tudo que acontece no nosso clube: resultados, contratações, bastidores e muito mais.",
  keywords: ["De Sola FC", "futebol", "notícias", "clube", "futebol brasileiro"],
  authors: [{ name: "De Sola FC News" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${outfit.variable} min-h-screen overflow-x-hidden font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
