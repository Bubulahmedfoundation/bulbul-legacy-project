
/**
 * Utility functions for interacting with the CMS
 */

export interface CMSContent {
  title: string;
  slug: string;
  date?: string;
  body: string;
  thumbnail?: string;
  [key: string]: any;
}

/**
 * Fetch content from a specific collection
 */
export const fetchCollection = async (collection: string): Promise<CMSContent[]> => {
  try {
    // In a real implementation, this would fetch from an API
    // For now, we'll mock the response
    return mockCollections[collection] || [];
  } catch (error) {
    console.error(`Error fetching ${collection}:`, error);
    return [];
  }
};

/**
 * Get a single content item by slug
 */
export const getContentBySlug = async (
  collection: string,
  slug: string
): Promise<CMSContent | null> => {
  try {
    const items = await fetchCollection(collection);
    return items.find(item => item.slug === slug) || null;
  } catch (error) {
    console.error(`Error getting ${slug} from ${collection}:`, error);
    return null;
  }
};

// Mock data for development
// In production, this would be fetched from an API endpoint
const mockCollections: Record<string, CMSContent[]> = {
  "news": [
    {
      title: "Foundation Sponsors Education for 50 Underprivileged Students",
      slug: "education-sponsorship-2025",
      date: "2025-04-15",
      body: "BAFT has renewed its commitment to education by sponsoring 50 underprivileged students for the 2025 academic year. The sponsorship covers tuition fees, books, and school supplies.",
      thumbnail: "/lovable-uploads/057c4d23-f52f-4405-8d04-d9226dea839d.png"
    },
    {
      title: "Annual Bulbul Ahmed Film Festival Announces 2025 Dates",
      slug: "film-festival-2025",
      date: "2025-03-20",
      body: "The Annual Bulbul Ahmed Film Festival will take place from June 5-12, 2025. This year's festival will feature a retrospective of Bulbul Ahmed's most iconic performances as well as emerging talent in Bangladeshi cinema.",
      thumbnail: "/lovable-uploads/9fb94e29-6ee4-4067-a70d-d4c5051c47cb.png"
    }
  ],
  "programs": [
    {
      title: "Senior Care Initiative",
      slug: "senior-care-program",
      body: "Our dedicated programs at Golden Years Senior Daycare Center provide essential support and care for elderly community members.",
      thumbnail: "/lovable-uploads/777c0309-72f2-45fe-ab8e-ef4df1c05102.png"
    },
    {
      title: "Education Support Program",
      slug: "education-support",
      body: "Supporting young students through our educational initiatives and meal programs, ensuring children have the resources they need to thrive.",
      thumbnail: "/lovable-uploads/057c4d23-f52f-4405-8d04-d9226dea839d.png"
    }
  ]
};

// This interface extends Window to include netlifyIdentity
declare global {
  interface Window {
    netlifyIdentity: any;
  }
}
