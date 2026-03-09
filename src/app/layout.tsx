import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import Header from "./components/HeaderNew";
import Footer from "./components/Footer";
import localFont from "next/font/local";
import LenisWrapper from "./LenisWrapper";
import ClientChatBot from "./components/ClientChatBot";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://camlenio.com"),
  title: {
    template: "%s | Camlenio Software",
    default: "Camlenio Software | Custom Web & Mobile App Development Company",
  },
  description: "Camlenio is a leading software development company offering custom web development, mobile apps, and fintech solutions. Build smarter, scale faster.",
  keywords: ["software development", "web development", "mobile app development", "fintech solutions", "Camlenio"],
  alternates: {
    canonical: "https://camlenio.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://camlenio.com",
    siteName: "Camlenio",
    title: "Camlenio Software | Custom Digital Solutions",
    description: "Expert software development for businesses across the globe.",
    images: ["/og-image.jpg"],
  },
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
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html
      lang="en"
      className={`${lufgaFont.className} scrollbar-thin scrollbar-track-sozo-gray/20 scrollbar-thumb-sozo-yellow hover:scrollbar-thumb-sozo-amber`}
    >
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SSQZK50PKC"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SSQZK50PKC', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="lazyOnload">
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

      <body className="overflow-x-clip">
        <Header />
        <main>
          <LenisWrapper>{children}</LenisWrapper>
          <Analytics />
        </main>
        <ClientChatBot />
        <Footer />
      </body>
    </html>
  );
}
