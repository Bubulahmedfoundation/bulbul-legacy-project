
/**
 * Utility functions for interacting with Netlify CMS content
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
 * Parse frontmatter from Netlify CMS markdown content
 */
const parseFrontmatter = (content: string) => {
  console.log('Parsing content:', content.substring(0, 200));
  
  // Netlify CMS uses standard YAML frontmatter
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    console.log('No frontmatter found, treating as plain content');
    return { frontmatter: {}, content: content.trim() };
  }
  
  const frontmatterStr = match[1].trim();
  const bodyContent = match[2].trim();
  
  console.log('Frontmatter found:', frontmatterStr);
  console.log('Body content length:', bodyContent.length);
  
  const frontmatter: any = {};
  
  // Parse YAML frontmatter - handle Netlify CMS specific format
  const lines = frontmatterStr.split('\n');
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine && trimmedLine.includes(':') && !trimmedLine.startsWith('#')) {
      const colonIndex = trimmedLine.indexOf(':');
      const key = trimmedLine.slice(0, colonIndex).trim();
      let value: any = trimmedLine.slice(colonIndex + 1).trim();
      
      // Skip empty values
      if (!value || value === '') continue;
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Handle boolean values
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      
      // Handle numeric values
      if (!isNaN(value) && !isNaN(parseFloat(value)) && value !== '') {
        value = parseFloat(value);
      }
      
      // Handle Netlify CMS date format
      if (typeof value === 'string' && value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)) {
        value = value.split('T')[0]; // Extract just the date part
      }
      
      frontmatter[key] = value;
      console.log(`Parsed ${key}:`, value);
    }
  }
  
  return { frontmatter, content: bodyContent };
};

/**
 * Import all markdown files from the content directory
 */
const importMarkdownFiles = async (): Promise<Record<string, CMSContent[]>> => {
  console.log('Attempting to import markdown files...');
  
  const collections: Record<string, CMSContent[]> = {
    news: [],
    'press-releases': [],
    programs: [],
    events: [],
    'award-recipients': [],
    videos: []
  };

  try {
    // Try to import files using Vite's import.meta.glob
    const modules = import.meta.glob('/content/**/*.md', { as: 'raw', eager: false });
    console.log('Found markdown files:', Object.keys(modules));
    
    for (const [path, moduleLoader] of Object.entries(modules)) {
      try {
        console.log(`Processing file: ${path}`);
        
        // Extract collection from path
        const pathParts = path.split('/');
        const collection = pathParts[2]; // /content/[collection]/file.md
        
        if (!collections[collection]) {
          console.log(`Unknown collection: ${collection}, skipping`);
          continue;
        }
        
        // Load the file content
        const rawContent = await moduleLoader();
        
        if (typeof rawContent !== 'string') {
          console.log(`Invalid content type for ${path}:`, typeof rawContent);
          continue;
        }
        
        // Check if we got HTML instead of markdown
        if (rawContent.trim().startsWith('<!DOCTYPE html>') || 
            rawContent.trim().startsWith('<html')) {
          console.log(`Got HTML instead of markdown from ${path}, skipping`);
          continue;
        }
        
        console.log(`Successfully loaded content from ${path}`);
        const { frontmatter, content: body } = parseFrontmatter(rawContent);
        
        // Extract slug from filename
        const fileName = pathParts[pathParts.length - 1] || '';
        const slug = fileName.replace('.md', '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
        
        const item: CMSContent = {
          title: frontmatter.title || 'Untitled',
          slug,
          date: frontmatter.date,
          body: body || '',
          image: frontmatter.image,
          thumbnail: frontmatter.image || frontmatter.thumbnail,
          excerpt: frontmatter.excerpt,
          type: frontmatter.type || collection,
          ...frontmatter
        };
        
        console.log(`Processed content for ${collection}:`, item);
        collections[collection].push(item);
        
      } catch (error) {
        console.log(`Error processing ${path}:`, error);
        continue;
      }
    }
    
    // Log results
    Object.entries(collections).forEach(([collection, items]) => {
      console.log(`Collection ${collection}: ${items.length} items loaded`);
    });
    
    return collections;
    
  } catch (error) {
    console.error('Error importing markdown files:', error);
    return collections;
  }
};

/**
 * Cached content store
 */
let contentCache: Record<string, CMSContent[]> | null = null;

/**
 * Fetch content from a specific collection
 */
export const fetchCollection = async (collection: string): Promise<CMSContent[]> => {
  console.log(`Fetching collection: ${collection}`);
  
  // Load content if not cached
  if (!contentCache) {
    console.log('Loading content from files...');
    contentCache = await importMarkdownFiles();
  }
  
  const content = contentCache[collection] || [];
  
  if (content.length > 0) {
    console.log(`Found ${content.length} real items for ${collection}`);
    // Sort by date, newest first
    return content.sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }
  
  // Fallback to mock data if no real content found
  console.log(`No real content found for ${collection}, using mock data`);
  return getMockData(collection);
};

/**
 * Get a single content item by slug
 */
export const getContentBySlug = async (
  collection: string,
  slug: string
): Promise<CMSContent | null> => {
  const items = await fetchCollection(collection);
  return items.find(item => item.slug === slug) || null;
};

/**
 * Clear the content cache (useful for development)
 */
export const clearContentCache = () => {
  contentCache = null;
  console.log('Content cache cleared');
};

/**
 * Mock data for development and fallback
 */
const getMockData = (collection: string): CMSContent[] => {
  console.log(`Using mock data for collection: ${collection}`);
  
  const mockCollections: Record<string, CMSContent[]> = {
    "news": [
      {
        title: "Foundation Sponsors Education for 50 Underprivileged Students",
        slug: "education-sponsorship-2025",
        date: "2025-04-15",
        body: "BAFT has renewed its commitment to education by sponsoring 50 underprivileged students for the 2025 academic year. The sponsorship covers tuition fees, books, and school supplies.",
        thumbnail: "/lovable-uploads/057c4d23-f52f-4405-8d04-d9226dea839d.png",
        type: "news"
      },
      {
        title: "Annual Bulbul Ahmed Film Festival Announces 2025 Dates",
        slug: "film-festival-2025",
        date: "2025-03-20",
        body: "The Annual Bulbul Ahmed Film Festival will take place from June 5-12, 2025. This year's festival will feature a retrospective of Bulbul Ahmed's most iconic performances as well as emerging talent in Bangladeshi cinema.",
        thumbnail: "/lovable-uploads/9fb94e29-6ee4-4067-a70d-d4c5051c47cb.png",
        type: "news"
      }
    ],
    "press-releases": [
      {
        title: "Foundation Receives Government Recognition",
        slug: "government-recognition-2025",
        date: "2025-04-10",
        body: "The Bulbul Ahmed Foundation Trust has been officially recognized by the Ministry of Cultural Affairs for its outstanding contributions to preserving Bangladesh's cultural heritage.",
        type: "press-release"
      }
    ],
    "programs": [
      {
        title: "Senior Care Initiative",
        slug: "senior-care-program",
        body: "Our dedicated programs at Golden Years Senior Daycare Center provide essential support and care for elderly community members.",
        thumbnail: "/lovable-uploads/777c0309-72f2-45fe-ab8e-ef4df1c05102.png",
        type: "program"
      },
      {
        title: "Education Support Program",
        slug: "education-support",
        body: "Supporting young students through our educational initiatives and meal programs, ensuring children have the resources they need to thrive.",
        thumbnail: "/lovable-uploads/057c4d23-f52f-4405-8d04-d9226dea839d.png",
        type: "program"
      }
    ],
    "events": [],
    "award-recipients": [],
    "videos": []
  };
  
  return mockCollections[collection] || [];
};
