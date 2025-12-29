import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
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
    <html
      lang="en"
      className={`${lufgaFont.className} scrollbar-thin scrollbar-track-sozo-gray/20 scrollbar-thumb-sozo-yellow hover:scrollbar-thumb-sozo-amber`}
    >
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
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
