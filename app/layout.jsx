import "./globals.css";
import { DM_Sans, Playfair_Display } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap"
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata = {
  title: "ListQik | Plataforma independiente de marketing",
  description:
    "ListQik es una plataforma independiente de marketing inmobiliario. Publica mas rapido, promociona mejor y cierra con confianza."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${playfairDisplay.variable}`}>{children}</body>
    </html>
  );
}
