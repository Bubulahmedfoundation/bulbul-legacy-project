
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
    console.log('No frontmatter found');
    return { frontmatter: {}, content: content.trim() };
  }
  
  const frontmatterStr = match[1].trim();
  const bodyContent = match[2].trim();
  
  console.log('Frontmatter found:', frontmatterStr);
  console.log('Body content length:', bodyContent.length);
  
  const frontmatter: any = {};
  
  // Parse YAML frontmatter - Netlify CMS format
  const lines = frontmatterStr.split('\n');
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine && trimmedLine.includes(':')) {
      const colonIndex = trimmedLine.indexOf(':');
      const key = trimmedLine.slice(0, colonIndex).trim();
      let value: any = trimmedLine.slice(colonIndex + 1).trim();
      
      // Skip empty values
      if (!value) continue;
      
      // Remove quotes
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Handle boolean values
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      
      // Handle dates (ISO format from Netlify CMS)
      if (value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)) {
        value = value.split('T')[0]; // Extract just the date part
      }
      
      frontmatter[key] = value;
      console.log(`Parsed ${key}:`, value);
    }
  }
  
  return { frontmatter, content: bodyContent };
};

/**
 * Fetch markdown content from various possible locations
 */
const fetchMarkdownFile = async (filePath: string): Promise<CMSContent | null> => {
  const possiblePaths = [
    filePath,
    filePath.replace('/content/', '/public/content/'),
    filePath.replace('/public/content/', '/content/')
  ];
  
  for (const path of possiblePaths) {
    try {
      console.log(`Trying to fetch: ${path}`);
      const response = await fetch(path);
      
      if (!response.ok) {
        console.log(`Failed to fetch ${path}: ${response.status}`);
        continue;
      }
      
      const rawContent = await response.text();
      
      // Check if we got HTML instead of markdown
      if (rawContent.trim().startsWith('<!DOCTYPE html>') || 
          rawContent.trim().startsWith('<html')) {
        console.log(`Got HTML instead of markdown from ${path}`);
        continue;
      }
      
      console.log(`Successfully fetched content from ${path}`);
      const { frontmatter, content: body } = parseFrontmatter(rawContent);
      
      // Extract slug from filename
      const fileName = path.split('/').pop() || '';
      const slug = fileName.replace('.md', '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
      
      const result: CMSContent = {
        title: frontmatter.title || 'Untitled',
        slug,
        date: frontmatter.date,
        body: body || '',
        image: frontmatter.image,
        thumbnail: frontmatter.image || frontmatter.thumbnail,
        excerpt: frontmatter.excerpt,
        type: frontmatter.type,
        ...frontmatter
      };
      
      console.log(`Processed content:`, result);
      return result;
      
    } catch (error) {
      console.log(`Error fetching ${path}:`, error);
      continue;
    }
  }
  
  console.log(`Could not fetch content from any path for: ${filePath}`);
  return null;
};

/**
 * Get known files for each collection based on Netlify CMS structure
 */
const getCollectionFiles = (collection: string): string[] => {
  // Known files that exist in the repository
  const knownFiles: Record<string, string[]> = {
    'news': [
      '/public/content/news/2025-05-27-bulbul-ahmed-foundation-trust-donation-drive-at-new-school.md',
      '/content/news/2025-05-27-tes13.md'
    ],
    'press-releases': [
      '/public/content/press-releases/testing-if-this-works.md',
      '/public/content/press-releases/test.md',
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
  console.log(`Fetching collection: ${collection}`);
  
  const files = getCollectionFiles(collection);
  const content: CMSContent[] = [];
  
  // Try to fetch real content first
  for (const filePath of files) {
    const item = await fetchMarkdownFile(filePath);
    if (item && item.title && item.title !== 'Untitled') {
      content.push(item);
    }
  }
  
  if (content.length > 0) {
    console.log(`Found ${content.length} items for ${collection}`);
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
 * Mock data for development and fallback
 */
const getMockData = (collection: string): CMSContent[] => {
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
  
  return mockCollections[collection] || [];
};
