
import { ArrowLeft, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SeoHead from "@/components/shared/SeoHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CampusHiring = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 to-white">
    <SeoHead
      title="AI Campus Hiring Solution"
      description="Supercharge campus recruitment with bulk evaluation, event management, and automated shortlisting powered by AI technology."
      keywords="campus recruitment, campus hiring, graduate recruitment, bulk assessment, campus drive, student hiring"
    />
    <Navbar />
    <div className="w-full bg-white shadow">
      <div className="container mx-auto py-4 px-4 md:px-6 flex items-center">
        <Users className="text-orange-600 mr-3" size={32} />
        <h1 className="text-2xl font-bold flex-1">Campus Hiring Tools</h1>
        <Link to="/solutions" className="inline-flex items-center text-primary text-sm hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Solutions
        </Link>
      </div>
    </div>
    <div className="container mx-auto py-12 md:py-20 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
        <div>
          <h2 className="text-4xl font-bold mb-5">Recruit the Best Talent on Campus</h2>
          <p className="text-lg mb-7 text-gray-700">
            Supercharge your campus recruitment drives with bulk evaluation, event management, and automated shortlisting—powered by AI.
          </p>
          <ul className="mb-7 space-y-3 text-base">
            <li>
              <span className="text-orange-600 font-bold mr-2">✓</span>
              Assess thousands of students at once across multiple campuses.
            </li>
            <li>
              <span className="text-orange-600 font-bold mr-2">✓</span>
              Built-in event management, tracking, and analytics.
            </li>
            <li>
              <span className="text-orange-600 font-bold mr-2">✓</span>
              Automate shortlisting and ensure compliance with your criteria.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=410&q=80"
            alt="Campus Hiring"
            className="rounded-xl shadow-lg object-cover w-full max-h-[350px] border-4 border-orange-100"
            loading="lazy"
          />
        </div>
      </div>
      <div className="bg-orange-100 rounded-xl p-8 text-center animate-fade-in">
        <h3 className="text-2xl font-bold mb-2 text-orange-900">Plan the Ultimate Campus Drive</h3>
        <p className="mb-4 text-lg text-gray-700">Discover how our AI can scale your campus outreach and quality of hires.</p>
        <Link to="https://portal.disamina.ai/signup" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg">Plan Your Drive</Button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default CampusHiring;
