
/**
 * Utility functions for interacting with the CMS
 */

export interface CMSContent {
  title: string;
  slug: string;
  date?: string;
  body: string;
  thumbnail?: string;
  image?: string;
  excerpt?: string;
  type?: string;
  [key: string]: any;
}

/**
 * Parse frontmatter from markdown content
 */
const parseFrontmatter = (content: string) => {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, content: content };
  }
  
  const frontmatterStr = match[1];
  const bodyContent = match[2];
  
  const frontmatter: any = {};
  frontmatterStr.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      frontmatter[key] = value;
    }
  });
  
  return { frontmatter, content: bodyContent };
};

/**
 * Fetch content from a specific collection
 */
export const fetchCollection = async (collection: string): Promise<CMSContent[]> => {
  try {
    console.log(`Fetching ${collection} collection...`);
    
    // Try to fetch from actual markdown files first
    try {
      const response = await fetch(`/content/${collection}/`);
      if (response.ok) {
        const html = await response.text();
        // Parse directory listing to get file names (this is a simple approach)
        // In a real implementation, you'd have an API endpoint that lists files
        console.log(`Found content directory for ${collection}`);
      }
    } catch (error) {
      console.log(`No content directory found for ${collection}, using mock data`);
    }
    
    // For now, we'll use the existing mock data but also check for actual content
    // In a production setup, you'd want to implement a proper content fetching system
    return mockCollections[collection] || [];
  } catch (error) {
    console.error(`Error fetching ${collection}:`, error);
    return mockCollections[collection] || [];
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

// Enhanced mock data that includes the content you've created
const mockCollections: Record<string, CMSContent[]> = {
  "news": [
    {
      title: "Bulbul Ahmed Foundation Trust Donation Drive at New School",
      slug: "2025-05-27-bulbul-ahmed-foundation-trust-donation-drive-at-new-school",
      date: "2025-05-27",
      body: "Today Bulbul ahmed foundation trust just donated to a new school",
      thumbnail: "/uploads/bulbul-ahmed.png",
      image: "/uploads/bulbul-ahmed.png",
      type: "news",
      excerpt: "i dont know what goes here"
    },
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
