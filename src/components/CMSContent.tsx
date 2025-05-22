
import { useEffect, useState } from "react";
import { fetchCollection, CMSContent } from "@/lib/cms";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";

interface CMSContentListProps {
  collection: string;
  limit?: number;
  title?: string;
}

export const CMSContentList = ({ collection, limit = 10, title }: CMSContentListProps) => {
  const [content, setContent] = useState<CMSContent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      try {
        const data = await fetchCollection(collection);
        setContent(data.slice(0, limit));
      } catch (error) {
        console.error(`Error loading ${collection}:`, error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [collection, limit]);

  if (loading) {
    return <div className="py-12 text-center">Loading content...</div>;
  }

  if (content.length === 0) {
    return <div className="py-12 text-center">No content available.</div>;
  }

  return (
    <div className="space-y-8">
      {title && (
        <h2 className="text-3xl font-playfair font-semibold mb-6 heading-decoration">
          {title}
        </h2>
      )}
      
      <div className="grid md:grid-cols-2 gap-8">
        {content.map((item, index) => (
          <Card key={item.slug || index} className="overflow-hidden hover:shadow-lg transition-shadow">
            {item.thumbnail && (
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              {item.date && (
                <CardDescription>
                  {format(new Date(item.date), "MMMM dd, yyyy")}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <p>{item.body}</p>
            </CardContent>
          </Card>
        ))}
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
