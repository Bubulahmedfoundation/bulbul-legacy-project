
import { useEffect, useState } from "react";
import { fetchCollection, CMSContent } from "@/lib/cms";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { format } from "date-fns";

interface CMSContentListProps {
  collection: string;
  limit?: number;
  title?: string;
}

export const CMSContentList = ({ collection, limit = 10, title }: CMSContentListProps) => {
  const [content, setContent] = useState<CMSContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadContent = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log(`Loading content for collection: ${collection}`);
      const data = await fetchCollection(collection);
      console.log(`Loaded ${data.length} items for ${collection}`, data);
      setContent(data.slice(0, limit));
    } catch (error) {
      console.error(`Error loading ${collection}:`, error);
      setError(`Failed to load ${collection} content`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContent();
  }, [collection, limit]);

  const handleRefresh = () => {
    console.log(`Refreshing ${collection} content...`);
    loadContent();
  };

  if (loading) {
    return (
      <div className="py-12 text-center">
        <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-4" />
        <p>Loading content...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 text-center">
        <p className="text-red-600 mb-4">{error}</p>
        <Button onClick={handleRefresh} variant="outline">
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      </div>
    );
  }

  if (content.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="mb-4">No content available for {collection}.</p>
        <Button onClick={handleRefresh} variant="outline">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {title && (
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-playfair font-semibold heading-decoration">
            {title}
          </h2>
          <Button onClick={handleRefresh} variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      )}
      
      <div className="grid md:grid-cols-2 gap-8">
        {content.map((item, index) => (
          <Card key={item.slug || index} className="overflow-hidden hover:shadow-lg transition-shadow">
            {(item.thumbnail || item.image) && (
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.thumbnail || item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log(`Failed to load image: ${item.thumbnail || item.image}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="line-clamp-2">{item.title}</CardTitle>
              {item.date && (
                <CardDescription>
                  {format(new Date(item.date), "MMMM dd, yyyy")}
                </CardDescription>
              )}
              {item.type && (
                <CardDescription className="capitalize">
                  {item.type}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              {item.excerpt && (
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.excerpt}</p>
              )}
              <div className="prose prose-sm max-w-none">
                <p className="line-clamp-3 whitespace-pre-line">{item.body}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center text-sm text-gray-500 mt-4">
        Showing {content.length} {content.length === 1 ? 'item' : 'items'} from {collection}
      </div>
    </div>
  );
};

interface CMSContentItemProps {
  collection: string;
  slug: string;
}

export const CMSContentItem = ({ collection, slug }: CMSContentItemProps) => {
  // Implementation for single content item
  // This would be used for detailed views
  return <div></div>;
};
