
import { ArrowLeft, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SeoHead from "@/components/shared/SeoHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PersonalizedCareerPage = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-white">
    <SeoHead
      title="Custom Career Pages for Employers | Disamina AI"
      description="Build a personalized career page with Disamina AI to showcase your brand and attract top talent effortlessly."
      keywords="custom career page, branded job portal, employer branding"
    />
    <Navbar />
    <div className="w-full bg-white shadow">
      <div className="container mx-auto py-4 px-4 md:px-6 flex items-center">
        <Briefcase className="text-purple-600 mr-3" size={32} />
        <h1 className="text-2xl font-bold flex-1">Personalized AI Career Page</h1>
        <Link to="/solutions" className="inline-flex items-center text-primary text-sm hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Solutions
        </Link>
      </div>
    </div>
    <div className="container mx-auto py-12 md:py-20 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
        <div>
          <h2 className="text-4xl font-bold mb-5">Create an Engaging Career Page Powered by AI</h2>
          <p className="text-lg mb-7 text-gray-700">
            Give every candidate a unique experience with job recommendations tailored to their skills, boosting applications and employer brand.
          </p>
          <ul className="mb-7 space-y-3 text-base">
            <li>
              <span className="text-purple-600 font-bold mr-2">✓</span>
              Personalized job recommendations for each visitor.
            </li>
            <li>
              <span className="text-purple-600 font-bold mr-2">✓</span>
              AI-powered content and seamless experience increase conversions.
            </li>
            <li>
              <span className="text-purple-600 font-bold mr-2">✓</span>
              Mobile optimized, employer-branded, and easy to set up.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=650&q=80"
            alt="Personalized Career Page"
            className="rounded-xl shadow-lg object-cover w-full max-h-[350px] border-4 border-purple-100"
            loading="lazy"
          />
        </div>
      </div>
      <div className="bg-purple-100 rounded-xl p-8 text-center animate-fade-in">
        <h3 className="text-2xl font-bold mb-2 text-purple-900">Double your applicant engagement</h3>
        <p className="mb-4 text-lg text-gray-700">Transform your company's career page in days, not weeks.</p>
        <Link to="https://portal.disamina.ai/signup" target="_blank" rel="noopener noreferrer">

          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg">Get Your Career Page</Button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default PersonalizedCareerPage;
