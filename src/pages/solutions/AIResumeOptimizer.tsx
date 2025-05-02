
import { ArrowLeft, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SeoHead from "@/components/shared/SeoHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AIResumeOptimizer = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-white">
    <SeoHead
      title="AI Resume Optimizing Tool | Disamina AI"
      description="Get an instant score and feedback on your resume with Disamina’s AI-powered resume evaluator."
      keywords="resume optimizer, resume rating tool, CV evaluator AI"
    />
    <Navbar />
    <div className="w-full bg-white shadow">
      <div className="container mx-auto py-4 px-4 md:px-6 flex items-center">
        <FileCheck className="text-pink-600 mr-3" size={32} />
        <h1 className="text-2xl font-bold flex-1">AI Resume Optimizer</h1>
        <Link to="/solutions" className="inline-flex items-center text-primary text-sm hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Solutions
        </Link>
      </div>
    </div>
    <div className="container mx-auto py-12 md:py-20 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
        <div>
          <h2 className="text-4xl font-bold mb-5">Empower Candidates for Success</h2>
          <p className="text-lg mb-7 text-gray-700">
            Help candidates craft the perfect resume using AI-generated insights that boost the match between their application and your job requirements.
          </p>
          <ul className="mb-7 space-y-3 text-base">
            <li>
              <span className="text-pink-600 font-bold mr-2">✓</span>
              Personalized resume improvement tips for every applicant.
            </li>
            <li>
              <span className="text-pink-600 font-bold mr-2">✓</span>
              Highlight job-fit strengths and address application gaps.
            </li>
            <li>
              <span className="text-pink-600 font-bold mr-2">✓</span>
              Enhances applicant confidence, ensuring success at every stage.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80"
            alt="Resume Optimizer"
            className="rounded-xl shadow-lg object-cover w-full max-h-[350px] border-4 border-pink-100"
            loading="lazy"
          />
        </div>
      </div>
      <div className="bg-pink-100 rounded-xl p-8 text-center animate-fade-in">
        <h3 className="text-2xl font-bold mb-2 text-pink-900">Enhance Application Results</h3>
        <p className="mb-4 text-lg text-gray-700">Empower your candidates and improve your talent pool today.</p>
        <Link to="https://portal.disamina.ai/signup" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg">Optimize My Resume</Button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default AIResumeOptimizer;
