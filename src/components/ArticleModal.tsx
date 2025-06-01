
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair font-bold text-left">
            {article.title}
          </DialogTitle>
          {article.date && (
            <p className="text-sm text-gray-600 text-left">
              {format(new Date(article.date), "MMMM dd, yyyy")}
            </p>
          )}
        </DialogHeader>
        
        {(article.image || article.thumbnail) && (
          <div className="my-4">
            <img 
              src={article.image || article.thumbnail} 
              alt={article.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        )}
        
        {article.excerpt && (
          <div className="mb-4">
            <p className="text-lg text-gray-700 font-medium">{article.excerpt}</p>
          </div>
        )}
        
        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-line leading-relaxed">
            {article.body}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleModal;
