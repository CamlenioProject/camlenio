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
    };
  };
}

export interface WPBlog {
  id: number;
  date: string;
  link: string;
  title: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: WPFeaturedMedia[];
  };
}
