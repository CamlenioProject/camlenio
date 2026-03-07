import { Metadata } from 'next';
import BlogListingClient from './BlogListingClient';

export const metadata: Metadata = {
  title: "Blog & Insights | Camlenio",
  description: "Explore the latest insights, trends, and strategies in design, web development, app development, and marketing from the experts at Camlenio.",
  alternates: {
    canonical: "https://camlenio.com/blog",
  },
  openGraph: {
    title: "Blog & Insights | Camlenio",
    description: "Explore the latest insights, trends, and strategies in design, web development, app development, and marketing from the experts at Camlenio.",
    url: "https://camlenio.com/blog",
    siteName: "Camlenio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Camlenio Blog & Insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function BlogListingPage() {
  return <BlogListingClient />;
}
