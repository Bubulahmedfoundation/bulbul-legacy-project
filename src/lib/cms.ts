
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
 * Simple YAML parser for frontmatter
 */
const parseYAML = (yamlStr: string): Record<string, any> => {
  const result: Record<string, any> = {};
  const lines = yamlStr.split('\n');
  let currentKey = '';
  let currentValue = '';
  let isMultiLine = false;
  
  console.log('Parsing YAML with lines:', lines.length);
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    
    console.log(`Line ${i}: "${line}" (trimmed: "${trimmedLine}")`);
    
    // Skip empty lines
    if (!trimmedLine) {
      if (isMultiLine && currentValue) {
        currentValue += '\n';
      }
      continue;
    }
    
    // Check if this is a key-value pair
    if (trimmedLine.includes(':') && !isMultiLine) {
      // Save previous multi-line value if exists
      if (currentKey && isMultiLine) {
        result[currentKey] = currentValue.trim();
        console.log(`Saved multi-line value for ${currentKey}:`, currentValue.trim());
        currentKey = '';
        currentValue = '';
        isMultiLine = false;
      }
      
      const colonIndex = trimmedLine.indexOf(':');
      const key = trimmedLine.slice(0, colonIndex).trim();
      let value: any = trimmedLine.slice(colonIndex + 1).trim();
      
      console.log(`Found key-value pair: ${key} = "${value}"`);
      
      // Handle quoted values
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Check if this starts a multi-line value
      if (!value) {
        currentKey = key;
        currentValue = '';
        isMultiLine = true;
        console.log(`Starting multi-line value for key: ${key}`);
        continue;
      }
      
      // Handle boolean and numeric values
      if (value === 'true') {
        result[key] = true;
      } else if (value === 'false') {
        result[key] = false;
      } else if (!isNaN(Number(value)) && value !== '') {
        result[key] = Number(value);
      } else {
        result[key] = value;
      }
      
      console.log(`Set ${key} to:`, result[key]);
    } else if (isMultiLine) {
      // This is part of a multi-line value
      if (currentValue) {
        currentValue += '\n' + line;
      } else {
        currentValue = line;
      }
      console.log(`Added to multi-line value: "${line}"`);
      console.log(`Current multi-line value length: ${currentValue.length}`);
    }
  }
  
  // Don't forget the last multi-line value
  if (currentKey && isMultiLine) {
    result[currentKey] = currentValue.trim();
    console.log(`Final save of multi-line value for ${currentKey}:`, currentValue.trim());
    console.log(`Final value length: ${currentValue.trim().length}`);
  }
  
  console.log('Final parsed result:', result);
  return result;
};

/**
 * Parse frontmatter from Netlify CMS markdown content
 */
const parseFrontmatter = (content: string) => {
  console.log('Raw content received:', content.substring(0, 500));
  
  // Handle different frontmatter delimiters
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    console.log('No frontmatter found, treating as plain content');
    return { frontmatter: {}, content: content.trim() };
  }
  
  const frontmatterStr = match[1];
  const bodyContent = match[2] ? match[2].trim() : '';
  
  console.log('Frontmatter string:', frontmatterStr);
  console.log('Body content:', bodyContent);
  
  try {
    const frontmatter = parseYAML(frontmatterStr);
    console.log('Parsed frontmatter:', frontmatter);
    
    return { frontmatter, content: bodyContent };
  } catch (error) {
    console.error('Error parsing YAML:', error);
    return { frontmatter: {}, content: bodyContent };
  }
};

/**
 * Import all markdown files from the content directory with cache busting
 */
const importMarkdownFiles = async (bustCache = false): Promise<Record<string, CMSContent[]>> => {
  console.log('Attempting to import markdown files...', bustCache ? '(cache busted)' : '');
  
  const collections: Record<string, CMSContent[]> = {
    news: [],
    'press-releases': [],
    programs: [],
    events: [],
    'award-recipients': [],
    videos: []
  };

  try {
    // Try to import files using Vite's import.meta.glob with cache busting
    const cacheParam = bustCache ? `?t=${Date.now()}` : '';
    const modules = import.meta.glob('/public/content/**/*.md', { as: 'raw', eager: false });
    console.log('Found markdown files:', Object.keys(modules));
    
    // If no files found in /public/content, try /content
    if (Object.keys(modules).length === 0) {
      const fallbackModules = import.meta.glob('/content/**/*.md', { as: 'raw', eager: false });
      console.log('Trying fallback path, found:', Object.keys(fallbackModules));
      Object.assign(modules, fallbackModules);
    }
    
    for (const [path, moduleLoader] of Object.entries(modules)) {
      try {
        console.log(`Processing file: ${path}`);
        
        // Extract collection from path
        const pathParts = path.split('/');
        const collectionIndex = pathParts.findIndex(part => part === 'content') + 1;
        const collection = pathParts[collectionIndex];
        
        if (!collection || !collections[collection]) {
          console.log(`Unknown collection: ${collection}, skipping`);
          continue;
        }
        
        // Load the file content with cache busting
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
        
        console.log(`Successfully loaded content from ${path}, length: ${rawContent.length}`);
        const { frontmatter, content: body } = parseFrontmatter(rawContent);
        
        // Extract slug from filename
        const fileName = pathParts[pathParts.length - 1] || '';
        const slug = fileName.replace('.md', '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
        
        // Handle award recipients special case - use 'name' as title
        const title = collection === 'award-recipients' 
          ? frontmatter.name || frontmatter.title || 'Untitled'
          : frontmatter.title || 'Untitled';
        
        const item: CMSContent = {
          title,
          slug,
          date: frontmatter.date || frontmatter.year?.toString(),
          body: body || frontmatter.bio || '',
          image: frontmatter.image,
          thumbnail: frontmatter.image || frontmatter.thumbnail,
          excerpt: frontmatter.excerpt || frontmatter.category,
          type: frontmatter.type || collection,
          ...frontmatter
        };
        
        console.log(`Processed content for ${collection}:`, {
          title: item.title,
          slug: item.slug,
          bodyLength: item.body.length,
          bioLength: frontmatter.bio ? frontmatter.bio.length : 0,
          hasBio: !!frontmatter.bio,
          bio: frontmatter.bio
        });
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
 * Cached content store with timestamp
 */
let contentCache: { data: Record<string, CMSContent[]>; timestamp: number } | null = null;
const CACHE_DURATION = 30000; // 30 seconds

/**
 * Check if content cache is expired
 */
const isCacheExpired = (): boolean => {
  if (!contentCache) return true;
  return Date.now() - contentCache.timestamp > CACHE_DURATION;
};

/**
 * Fetch content from a specific collection with auto-refresh
 */
export const fetchCollection = async (collection: string, forceRefresh = false): Promise<CMSContent[]> => {
  console.log(`Fetching collection: ${collection}`, forceRefresh ? '(forced refresh)' : '');
  
  // Load content if not cached, expired, or force refresh
  if (!contentCache || isCacheExpired() || forceRefresh) {
    console.log('Loading content from files...');
    const data = await importMarkdownFiles(forceRefresh);
    contentCache = {
      data,
      timestamp: Date.now()
    };
  }
  
  const content = contentCache.data[collection] || [];
  
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
 * Clear the content cache (useful for development and CMS updates)
 */
export const clearContentCache = () => {
  contentCache = null;
  console.log('Content cache cleared');
};

/**
 * Refresh content from CMS
 */
export const refreshContent = async (): Promise<void> => {
  console.log('Refreshing content from CMS...');
  contentCache = null;
  // Pre-load all collections
  const collections = ['news', 'press-releases', 'programs', 'events', 'award-recipients', 'videos'];
  await Promise.all(collections.map(collection => fetchCollection(collection, true)));
};

// Auto-refresh content every 2 minutes when in focus
let autoRefreshInterval: number | null = null;

/**
 * Start auto-refresh of content
 */
export const startAutoRefresh = () => {
  if (autoRefreshInterval) return;
  
  autoRefreshInterval = window.setInterval(() => {
    if (!document.hidden) {
      console.log('Auto-refreshing content...');
      refreshContent();
    }
  }, 120000); // 2 minutes
};

/**
 * Stop auto-refresh of content
 */
export const stopAutoRefresh = () => {
  if (autoRefreshInterval) {
    clearInterval(autoRefreshInterval);
    autoRefreshInterval = null;
  }
};

// Listen for visibility changes to manage auto-refresh
if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoRefresh();
    } else {
      startAutoRefresh();
      // Refresh immediately when tab becomes visible
      refreshContent();
    }
  });
  
  // Start auto-refresh initially
  startAutoRefresh();
}

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
