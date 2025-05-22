
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Admin = () => {
  useEffect(() => {
    // Check if the netlify-identity-widget is loaded
    if (window.netlifyIdentity) {
      // Initialize the Netlify Identity widget
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            // Force redirect to /admin/ after login
            document.location.href = "/admin/";
          });
        }
      });
    } else {
      console.error("Netlify Identity widget not loaded");
    }
  }, []);

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
          
          <div className="flex justify-center">
            <button 
              onClick={() => window.netlifyIdentity && window.netlifyIdentity.open()}
              className="bg-baft-maroon text-white px-6 py-2 rounded hover:bg-baft-maroon/90 transition-colors"
            >
              Login to CMS
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-6 text-center">
            If you are already logged in, you will be redirected to the CMS dashboard.
          </p>
        </div>
      </div>
    </>
  );
};

export default Admin;
