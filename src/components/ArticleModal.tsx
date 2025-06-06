
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { format } from "date-fns";
import { CMSContent } from "@/lib/cms";

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: CMSContent | null;
}

const ArticleModal = ({ isOpen, onClose, article }: ArticleModalProps) => {
  if (!article) return null;

  // All content types now use body consistently
  const mainContent = article.body || 'No content available.';
  
  console.log('Article data in modal:', article);
  console.log('Body field:', article.body);
  console.log('Main content being displayed:', mainContent);
  console.log('Main content length:', mainContent.length);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair font-bold text-left">
            {article.title}
          </DialogTitle>
          {article.date && (
            <p className="text-sm text-gray-600 text-left">
              {format(new Date(article.date), "MMMM dd, yyyy")}
            </p>
          )}
          {article.year && !article.date && (
            <p className="text-sm text-gray-600 text-left">
              {article.year}
            </p>
          )}
        </DialogHeader>
        
        {(article.image || article.thumbnail) && (
          <div className="my-4">
            <img 
              src={article.image || article.thumbnail} 
              alt={article.title}
              className="w-full h-auto max-h-96 object-contain rounded-lg cursor-pointer"
              onClick={() => window.open(article.image || article.thumbnail, '_blank')}
            />
          </div>
        )}
        
        {article.excerpt && article.excerpt !== article.title && (
          <div className="mb-4">
            <p className="text-lg text-gray-700 font-medium">{article.excerpt}</p>
          </div>
        )}
        
        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-wrap leading-relaxed text-gray-800 word-wrap break-words overflow-wrap-anywhere">
            {mainContent}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleModal;
