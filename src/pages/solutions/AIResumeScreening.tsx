
import { ArrowLeft, FileSearch } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SeoHead from "@/components/shared/SeoHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AIResumeScreening = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white">
    <SeoHead
      title="AI Resume Screening Software"
      description="Screen resumes instantly with our AI-powered resume screening software. Save hundreds of hours by automating your resume screening process."
      keywords="AI resume screening, resume parser, CV screening, candidate screening, automated resume screening"
    />
    <Navbar />
    <div className="container mx-auto py-12 md:py-20 animate-fade-in mt-10">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
        <div>
          <h2 className="text-4xl font-bold mb-5">Screen Resumes Instantly with AI</h2>
          <p className="text-lg mb-7 text-gray-700">
            Our intelligent engine saves your team hundreds of hours by instantly screening and ranking resumes, ensuring you never miss a great candidate again.
          </p>
          <ul className="mb-7 space-y-3 text-base">
            <li>
              <span className="text-blue-600 font-bold mr-2">✓</span>
              85% faster candidate screening and objective shortlisting.
            </li>
            <li>
              <span className="text-blue-600 font-bold mr-2">✓</span>
              Automated parsing, skills, and keyword match for every role.
            </li>
            <li>
              <span className="text-blue-600 font-bold mr-2">✓</span>
              Reduce bias with consistent, AI-driven evaluations.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
            alt="Resume Screening"
            className="rounded-xl shadow-lg object-cover w-full max-h-[350px] border-4 border-blue-100"
            loading="lazy"
          />
        </div>
      </div>

      <div className="bg-blue-100 rounded-xl p-8 text-center animate-fade-in">
        <h3 className="text-2xl font-bold mb-2 text-blue-900">Ready to simplify your screening process?</h3>
        <p className="mb-4 text-gray-700 text-lg">Discover how AI can help you select top candidates in minutes, not days.</p>
        <Link to="https://portal.disamina.ai/signup" target="_blank" rel="noopener noreferrer">

          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg transition-colors">Try Resume Screening</Button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default AIResumeScreening;
