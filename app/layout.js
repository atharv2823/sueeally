import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import Top from "./_components/top"
import WhatsAppButton from "./_components/whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sueeally Pvt Limited",
  description: "Sueeally Private Limited",
  icons: "./logo.png", // Add logo as favicon
  openGraph: {
    title: "Sueeally Pvt Limited",
    description: "Sueeally Private Limited",
    images: ["./logo.png"], // Add Open Graph image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="./logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <Top />
      </body>
    </html>
  );
}
