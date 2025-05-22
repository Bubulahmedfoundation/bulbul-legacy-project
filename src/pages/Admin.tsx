
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Check if the netlify-identity-widget is loaded
    if (window.netlifyIdentity) {
      setLoading(false);
      
      // Initialize the Netlify Identity widget
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            // Show success message
            toast({
              title: "Login successful",
              description: "Redirecting to admin dashboard...",
            });
            
            // Force redirect to /admin/ after login
            document.location.href = "/admin/";
          });
        } else {
          // User is already logged in
          toast({
            title: "Already logged in",
            description: "You are already logged in to the CMS",
          });
        }
      });

      // Handle login errors
      window.netlifyIdentity.on("error", (err) => {
        console.error("Netlify Identity error:", err);
        setError(err.message || "Authentication error");
        toast({
          title: "Authentication Error",
          description: "There was a problem with authentication. Please try again.",
          variant: "destructive",
        });
      });
    } else {
      setLoading(false);
      setError("Netlify Identity widget not loaded");
      console.error("Netlify Identity widget not loaded");
      toast({
        title: "CMS Error",
        description: "Netlify Identity widget not loaded. Please refresh the page.",
        variant: "destructive",
      });
    }
    
    // Add timeout to detect if CMS is stuck loading
    const loadingTimeout = setTimeout(() => {
      setError("CMS loading timeout. This might be due to configuration issues.");
    }, 10000);
    
    return () => clearTimeout(loadingTimeout);
  }, []);

  const handleOpenNetlifyIdentity = () => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.open();
    } else {
      toast({
        title: "CMS Error",
        description: "Netlify Identity widget not loaded. Please refresh the page.",
        variant: "destructive",
      });
    }
  };

  const handleCreateFirstUser = () => {
    // This is for development only - opens the registration widget
    if (window.netlifyIdentity) {
      window.netlifyIdentity.open("signup");
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
          
          <p className="text-center mb-6">
            Access the content management system to update website content.
          </p>
          
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <div className="flex flex-col gap-4">
            <Button 
              onClick={handleOpenNetlifyIdentity}
              className="bg-baft-maroon text-white px-6 py-2 rounded hover:bg-baft-maroon/90 transition-colors"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login to CMS"}
            </Button>
            
            <Button
              variant="outline"
              onClick={() => window.location.href = "/admin/index.html"}
              className="px-6 py-2 rounded transition-colors"
            >
              Open CMS Directly
            </Button>
            
            {process.env.NODE_ENV === 'development' && (
              <Button 
                onClick={handleCreateFirstUser}
                variant="secondary"
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition-colors"
              >
                Create First Admin User (Development Only)
              </Button>
            )}
          </div>
          
          <Separator className="my-6" />
          
          <div className="mt-2 p-4 bg-yellow-100 text-yellow-800 rounded-md">
            <h2 className="font-semibold mb-2">Troubleshooting Tips:</h2>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>If you see a permissions error, you need to be invited as an admin first.</li>
              <li>In development, you can create the first admin user with the button above.</li>
              <li>Make sure you have enabled Identity in your Netlify site settings.</li>
              <li>Check that your site URL is properly configured in Netlify.</li>
              <li>Ensure Git Gateway is enabled in your Netlify settings.</li>
              <li>Verify that the config.yml file is correctly formatted and accessible.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
