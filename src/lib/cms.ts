
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
      let value = line.slice(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      frontmatter[key] = value;
    }
  });
  
  return { frontmatter, content: bodyContent };
};

/**
 * Fetch a single markdown file and parse it
 */
const fetchMarkdownFile = async (filePath: string): Promise<CMSContent | null> => {
  try {
    console.log(`Fetching markdown file: ${filePath}`);
    const response = await fetch(filePath);
    if (!response.ok) {
      console.log(`Failed to fetch ${filePath}: ${response.status}`);
      return null;
    }
    
    const content = await response.text();
    const { frontmatter, content: body } = parseFrontmatter(content);
    
    // Extract slug from file path
    const slug = filePath.split('/').pop()?.replace('.md', '') || '';
    
    const result: CMSContent = {
      title: frontmatter.title || 'Untitled',
      slug,
      date: frontmatter.date,
      body: body.trim(),
      image: frontmatter.image,
      thumbnail: frontmatter.image || frontmatter.thumbnail,
      excerpt: frontmatter.excerpt,
      type: frontmatter.type,
      ...frontmatter
    };
    
    console.log(`Successfully parsed ${filePath}:`, result);
    return result;
  } catch (error) {
    console.error(`Error fetching ${filePath}:`, error);
    return null;
  }
};

/**
 * Get list of markdown files for a collection
 */
const getCollectionFiles = async (collection: string): Promise<string[]> => {
  // Updated paths to point to public/content
  const knownFiles: Record<string, string[]> = {
    'news': [
      '/content/news/2025-05-27-bulbul-ahmed-foundation-trust-donation-drive-at-new-school.md'
    ],
    'press-releases': [
      '/content/press-releases/testing-if-this-works.md',
      '/content/press-releases/test.md'
    ],
    'programs': [],
    'events': [],
    'award-recipients': [],
    'videos': []
  };
  
  return knownFiles[collection] || [];
};

/**
 * Fetch content from a specific collection
 */
export const fetchCollection = async (collection: string): Promise<CMSContent[]> => {
  try {
    console.log(`Fetching ${collection} collection...`);
    
    const files = await getCollectionFiles(collection);
    const realContent: CMSContent[] = [];
    
    for (const filePath of files) {
      const content = await fetchMarkdownFile(filePath);
      if (content) {
        realContent.push(content);
      }
    }
    
    if (realContent.length > 0) {
      console.log(`Found ${realContent.length} real content items for ${collection}`);
      // Sort by date, newest first
      return realContent.sort((a, b) => {
        if (!a.date || !b.date) return 0;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    }
    
    // Fall back to mock data if no real content found
    console.log(`No real content found for ${collection}, using mock data`);
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
