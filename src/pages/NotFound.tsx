
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SeoHead from "@/components/shared/SeoHead";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <SeoHead 
        title="Page Not Found" 
        description="The page you're looking for doesn't exist or has been moved."
        keywords="404, not found, error, page not found"
      />
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              We couldn't find the page you're looking for. Perhaps you'd like to try one of our main sections?
            </p>
            <div className="space-y-4">
              <Button asChild className="bg-primary hover:bg-primary-dark text-white">
                <Link to="/" className="flex items-center justify-center">
                  <Home className="mr-2 h-5 w-5" />
                  Return to Home
                </Link>
              </Button>
              
              <div className="text-sm text-gray-500">
                <p>Looking for help? <Link to="/contact" className="text-primary hover:underline">Contact our support team</Link></p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
