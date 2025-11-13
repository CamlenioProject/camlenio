import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import localFont from "next/font/local";
import LenisWrapper from "./LenisWrapper";
import AnimatedChatBot from "./AnimatedChatBot";

export const metadata = {
  title: "Camlenio | Digital Solutions",
  description: "Customized software and fintech solutions tailored for growth.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const lufgaFont = localFont({
  src: [
    {
      path: "../../public/fonts/Lufga-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lufga-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lufgaFont.className} scrollbar-thin scrollbar-track-sozo-gray/20 scrollbar-thumb-sozo-yellow hover:scrollbar-thumb-sozo-amber`}>
      <body>
        <Header />
        <main>
          <LenisWrapper>{children}</LenisWrapper>
          <Analytics />
        </main>
        <AnimatedChatBot />
        <Footer />
      </body>
    </html>
  );
}
