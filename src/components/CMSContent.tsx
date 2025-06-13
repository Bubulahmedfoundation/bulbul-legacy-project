import { useEffect, useState } from "react";
import { fetchCollection, CMSContent, refreshContent, clearContentCache } from "@/lib/cms";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { RefreshCw, Trash2, Play } from "lucide-react";
import { format } from "date-fns";
import { toast } from "@/components/ui/use-toast";
import ArticleModal from "./ArticleModal";

interface CMSContentListProps {
  collection: string;
  limit?: number;
  title?: string;
}

export const CMSContentList = ({
  collection,
  limit = 10,
  title
}: CMSContentListProps) => {
  const [content, setContent] = useState<CMSContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<CMSContent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadContent = async (forceRefresh = false) => {
    setLoading(true);
    setError(null);
    try {
      console.log(`Loading content for collection: ${collection}${forceRefresh ? ' (forced refresh)' : ''}`);
      const data = await fetchCollection(collection, forceRefresh);
      console.log(`Loaded ${data.length} items for ${collection}`, data);
      setContent(data.slice(0, limit));
      if (forceRefresh && data.length > 0) {
        toast({
          title: "Content Updated",
          description: `Refreshed ${data.length} items from ${collection}`
        });
      }
    } catch (error) {
      console.error(`Error loading ${collection}:`, error);
      setError(`Failed to load ${collection} content`);
      toast({
        title: "Error",
        description: `Failed to load ${collection} content`,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContent();
  }, [collection, limit]);

  const handleRefresh = () => {
    console.log(`Refreshing ${collection} content...`);
    loadContent(true);
  };

  const handleClearCache = () => {
    console.log('Clearing content cache...');
    clearContentCache();
    toast({
      title: "Cache Cleared",
      description: "Content cache has been cleared. Refreshing..."
    });
    loadContent(true);
  };

  const handleFullRefresh = async () => {
    console.log('Full content refresh...');
    setLoading(true);
    try {
      await refreshContent();
      await loadContent(true);
      toast({
        title: "Full Refresh Complete",
        description: "All content has been refreshed from the CMS"
      });
    } catch (error) {
      console.error('Error during full refresh:', error);
      toast({
        title: "Refresh Error",
        description: "Failed to refresh content from CMS",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVideoClick = (videoUrl: string) => {
    if (videoUrl) {
      window.open(videoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleArticleClick = (article: CMSContent) => {
    // For videos, open the video URL directly
    if (collection === 'videos' && article.videoUrl) {
      handleVideoClick(article.videoUrl);
      return;
    }
    
    // For other content types, open in modal
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  if (loading) {
    return <div className="py-12 text-center">
        <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-4" />
        <p>Loading content...</p>
      </div>;
  }

  if (error) {
    return <div className="py-12 text-center">
        <p className="text-red-600 mb-4">{error}</p>
        <div className="flex gap-2 justify-center">
          <Button onClick={handleRefresh} variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Button onClick={handleClearCache} variant="outline">
            <Trash2 className="w-4 h-4 mr-2" />
            Clear Cache
          </Button>
        </div>
      </div>;
  }

  if (content.length === 0) {
    return <div className="py-12 text-center">
        <p className="mb-4">No content available for {collection}.</p>
        <div className="flex gap-2 justify-center">
          <Button onClick={handleRefresh} variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button onClick={handleFullRefresh} variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Full Refresh
          </Button>
        </div>
      </div>;
  }

  // Check if this collection should have clickable items
  const isClickable = collection === 'news' || collection === 'press-releases' || collection === 'award-recipients' || collection === 'videos';
  
  return <>
      <div className="space-y-8">
        {title && <div className="flex items-center justify-between">
            <h2 className="text-3xl font-playfair font-semibold heading-decoration">
              {title}
            </h2>
            <div className="flex gap-2">
              <Button onClick={handleRefresh} variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button onClick={handleClearCache} variant="outline" size="sm">
                <Trash2 className="w-4 h-4 mr-2" />
                Clear Cache
              </Button>
            </div>
          </div>}
        
        <div className="grid md:grid-cols-2 gap-8">
          {content.map((item, index) => <Card key={item.slug || index} className={`overflow-hidden hover:shadow-lg transition-shadow ${isClickable ? 'cursor-pointer hover:shadow-xl' : ''} ${collection === 'videos' ? 'relative' : ''}`} onClick={isClickable ? () => handleArticleClick(item) : undefined}>
              {(item.thumbnail || item.image) && <div className="aspect-video overflow-hidden relative">
                  <img src={item.thumbnail || item.image} alt={item.title} className="w-full h-full object-cover" onError={e => {
              console.log(`Failed to load image: ${item.thumbnail || item.image}`);
              e.currentTarget.style.display = 'none';
            }} />
                  {collection === 'videos' && <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <div className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors">
                        <Play className="w-8 h-8 text-baft-maroon ml-1" fill="currentColor" />
                      </div>
                    </div>}
                </div>}
              <CardHeader>
                <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                {item.date && <CardDescription>
                    {format(new Date(item.date), "MMMM dd, yyyy")}
                  </CardDescription>}
                {item.type && <CardDescription className="capitalize">
                    {item.type}
                  </CardDescription>}
              </CardHeader>
              <CardContent>
                {item.excerpt && <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.excerpt}</p>}
                <div className="prose prose-sm max-w-none">
                  <p className="line-clamp-3 whitespace-pre-line font-thin">{item.body}</p>
                </div>
                {isClickable && <p className="text-xs text-baft-maroon mt-2 font-medium">
                    {collection === 'videos' ? 'Click to watch video →' : 'Click to read more →'}
                  </p>}
              </CardContent>
            </Card>)}
        </div>
        
        <div className="text-center text-sm text-gray-500 mt-4">
          Showing {content.length} {content.length === 1 ? 'item' : 'items'} from {collection}
          <br />
          <span className="text-xs">Content auto-refreshes every 2 minutes</span>
        </div>
      </div>

      <ArticleModal isOpen={isModalOpen} onClose={handleCloseModal} article={selectedArticle} />
    </>;
};

interface CMSContentItemProps {
  collection: string;
  slug: string;
}

export const CMSContentItem = ({
  collection,
  slug
}: CMSContentItemProps) => {
  // Implementation for single content item
  // This would be used for detailed views
  return <div></div>;
};
