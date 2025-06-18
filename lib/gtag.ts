// lib/gtag.ts
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

// Initialize GA
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
  ...otherParams
}: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
      ...otherParams,
    });
  }
};

// Specific function for tracking downloads
export const trackDownload = (format: "epub" | "pdf") => {
  event({
    action: "file_download",
    category: "Book Downloads",
    label: `Loved Called Chosen ${format.toUpperCase()}`,
    file_name: `loved-called-chosen.${format}`,
    file_extension: format,
    book_title: "Loved Called and Chosen",
  });
};

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  event({
    action: "social_click",
    category: "Social Media",
    label: platform,
    platform: platform,
  });
};

// Track section views (for understanding user engagement)
export const trackSectionView = (sectionName: string) => {
  event({
    action: "section_view",
    category: "Page Engagement",
    label: sectionName,
    section: sectionName,
  });
};
