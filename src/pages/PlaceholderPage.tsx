
import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatBotButton from "@/components/shared/ChatBotButton";
import SeoHead from "@/components/shared/SeoHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface PageHeadingProps {
  title: string;
  description: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title, description }) => {
  return (
    <div className="bg-gradient-primary text-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">{description}</p>
      </div>
    </div>
  );
};

const PlaceholderPage = () => {
  const location = useLocation();
  const path = location.pathname.substring(1);
  const capitalizedPath = path.charAt(0).toUpperCase() + path.slice(1);
  
  // Determine page content based on path
  let pageTitle = capitalizedPath;
  let pageDescription = "This page is coming soon.";
  
  // Customize content for specific routes
  if (path === "solutions") {
    pageTitle = "AI Recruitment Solutions";
    pageDescription = "Discover our suite of AI-powered recruitment tools designed to streamline your hiring process.";
  } else if (path === "assessments") {
    pageTitle = "Talent Assessments";
    pageDescription = "Evaluate candidates with precision using our comprehensive assessment tools and tests.";
  } else if (path === "pricing") {
    pageTitle = "Flexible Pricing Plans";
    pageDescription = "Choose the right plan for your organization's recruitment needs and budget.";
  } else if (path === "contact") {
    pageTitle = "Contact Us";
    pageDescription = "Get in touch with our team for demos, support, or partnership inquiries.";
  } else if (path === "careers") {
    pageTitle = "Join Our Team";
    pageDescription = "Explore career opportunities at Disamina AI and help shape the future of hiring.";
  } else if (path === "about") {
    pageTitle = "About Disamina AI";
    pageDescription = "Learn about our mission to transform hiring with AI technology.";
  } else if (path === "candidates") {
    pageTitle = "For Candidates";
    pageDescription = "Tools and resources to help candidates succeed in today's competitive job market.";
  } else if (path.startsWith("solutions/")) {
    const solution = path.replace("solutions/", "").replace(/-/g, " ");
    pageTitle = solution.charAt(0).toUpperCase() + solution.slice(1);
    pageDescription = `Learn how our ${pageTitle} solution can transform your hiring process.`;
  }

  // Generate SEO keywords based on the page title and description
  const keywords = `${pageTitle.toLowerCase()}, Disamina AI, AI recruitment, hiring platform, ${pageDescription.toLowerCase().split(' ').slice(0, 5).join(', ')}`;

  return (
    <div className="min-h-screen flex flex-col">
      <SeoHead 
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
      />
      <Navbar />
      <main className="flex-grow">
        <PageHeading title={pageTitle} description={pageDescription} />
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-lg mx-auto p-8 rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Page Under Construction</h2>
              <p className="text-gray-600 mb-8">
                We're currently building this page to provide you with the best experience.
                Check back soon or contact us for more information.
              </p>
              <Button asChild>
                <Link to="/" className="flex items-center justify-center">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBotButton />
    </div>
  );
};

export default PlaceholderPage;
