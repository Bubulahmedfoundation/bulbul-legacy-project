
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    console.log("Admin component mounted");
    
    // Simple timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      setLoading(false);
      if (!window.netlifyIdentity) {
        setError("Netlify Identity widget not loaded");
      }
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, []);

  const handleOpenCMS = () => {
    console.log("Opening CMS directly");
    window.location.href = "/admin/index.html";
  };

  const handleOpenNetlifyIdentity = () => {
    if (window.netlifyIdentity) {
      console.log("Opening Netlify Identity");
      window.netlifyIdentity.open();
    } else {
      toast({
        title: "Error",
        description: "Netlify Identity not available",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Bulbul Ahmed Foundation Trust</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-playfair font-semibold mb-6 text-center">
            Admin Dashboard
          </h1>
          
          {loading && (
            <div className="text-center mb-4">
              <p>Loading admin interface...</p>
            </div>
          )}
          
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <div className="flex flex-col gap-4">
            <Button 
              onClick={handleOpenCMS}
              className="bg-baft-maroon text-white px-6 py-2 rounded hover:bg-baft-maroon/90 transition-colors"
            >
              Open Content Manager
            </Button>
            
            <Button
              variant="outline"
              onClick={handleOpenNetlifyIdentity}
              className="px-6 py-2 rounded transition-colors"
            >
              Login with Netlify Identity
            </Button>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 text-blue-800 rounded-md text-sm">
            <h3 className="font-semibold mb-2">Setup Instructions:</h3>
            <ol className="list-decimal pl-4 space-y-1">
              <li>Enable Netlify Identity in your site settings</li>
              <li>Enable Git Gateway in Identity settings</li>
              <li>Invite yourself as an admin user</li>
              <li>Set the correct site URL in Netlify settings</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
