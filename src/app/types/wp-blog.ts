export interface WPFeaturedMediaSize {
  source_url: string;
}

export interface WPFeaturedMedia {
  source_url: string;
  alt_text: string;
  media_details?: {
    sizes?: {
      medium_large?: WPFeaturedMediaSize;
      full?: WPFeaturedMediaSize;
      medium?: WPFeaturedMediaSize;
      thumbnail?: WPFeaturedMediaSize;
    };
  };
}

export interface WPBlog {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: WPFeaturedMedia[];
    "author"?: Array<{ name: string }>;
  };
}
