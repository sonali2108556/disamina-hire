
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SeoHead from "@/components/shared/SeoHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AIJDGenerator = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-white">
    <SeoHead
      title="AI Job Description Generator | Disamina AI"
      description="Create optimized, role-specific job descriptions in seconds using Disamina AI’s intelligent JD generator."
      keywords="AI job description tool, JD generator, job posting automation"
    />
    <Navbar />
    <div className="w-full bg-white shadow">
      <div className="container mx-auto py-4 px-4 md:px-6 flex items-center">
        <FileText className="text-indigo-600 mr-3" size={32} />
        <h1 className="text-2xl font-bold flex-1">AI Job Description Generator</h1>
        <Link to="/solutions" className="inline-flex items-center text-primary text-sm hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Solutions
        </Link>
      </div>
    </div>
    <div className="container mx-auto py-12 md:py-20 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
        <div>
          <h2 className="text-4xl font-bold mb-5">Create Compelling Job Descriptions in Seconds</h2>
          <p className="text-lg mb-7 text-gray-700">
            Write inclusive and engaging job descriptions, optimized for keywords and diversity, with just a few clicks. Attract more qualified candidates, instantly.
          </p>
          <ul className="mb-7 space-y-3 text-base">
            <li>
              <span className="text-indigo-600 font-bold mr-2">✓</span>
              Eliminate bias and enhance diversity with our AI content generator.
            </li>
            <li>
              <span className="text-indigo-600 font-bold mr-2">✓</span>
              Attract better applicants by highlighting your unique culture.
            </li>
            <li>
              <span className="text-indigo-600 font-bold mr-2">✓</span>
              Save recruiters hours with instantly generated, ready-to-post JDs.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=520&q=80"
            alt="JD Generator"
            className="rounded-xl shadow-lg object-cover w-full max-h-[350px] border-4 border-indigo-100"
            loading="lazy"
          />
        </div>
      </div>
      <div className="bg-indigo-100 rounded-xl p-8 text-center animate-fade-in">
        <h3 className="text-2xl font-bold mb-2 text-indigo-900">Revolutionize your job postings</h3>
        <p className="mb-4 text-lg text-gray-700">Let the power of AI craft the perfect JD for any position.</p>
        <Link to="https://portal.disamina.ai/signin" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg">Generate Job Description</Button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default AIJDGenerator;
