
import { ArrowLeft, FileCode } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SeoHead from "@/components/shared/SeoHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CodingAssessment = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 to-white">
    <SeoHead
      title="Coding Assessment Platform for Developers | Disamina AI"
      description="Evaluate developer skills with real-time coding assessments tailored to your tech hiring needs."
      keywords="coding assessments, developer evaluation, tech hiring tests"
    />
    <Navbar />
    <div className="w-full bg-white shadow">
      <div className="container mx-auto py-4 px-4 md:px-6 flex items-center">
        <FileCode className="text-yellow-600 mr-3" size={32} />
        <h1 className="text-2xl font-bold flex-1">Coding Assessment</h1>
        <Link to="/solutions" className="inline-flex items-center text-primary text-sm hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Solutions
        </Link>
      </div>
    </div>
    <div className="container mx-auto py-12 md:py-20 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
        <div>
          <h2 className="text-4xl font-bold mb-5">Assess Real Coding Skills in Real Time</h2>
          <p className="text-lg mb-7 text-gray-700">
            Evaluate software engineers with real-world code tasks, automated AI analysis, and plagiarism detection—all on a modern coding platform.
          </p>
          <ul className="mb-7 space-y-3 text-base">
            <li>
              <span className="text-yellow-600 font-bold mr-2">✓</span>
              Hands-on code challenges for 35+ frameworks and languages.
            </li>
            <li>
              <span className="text-yellow-600 font-bold mr-2">✓</span>
              Instant AI-powered evaluation and in-depth reports.
            </li>
            <li>
              <span className="text-yellow-600 font-bold mr-2">✓</span>
              Plagiarism prevention ensures genuine skill assessment.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
            alt="Coding Assessment"
            className="rounded-xl shadow-lg object-cover w-full max-h-[350px] border-4 border-yellow-100"
            loading="lazy"
          />
        </div>
      </div>
      <div className="bg-yellow-100 rounded-xl p-8 text-center animate-fade-in">
        <h3 className="text-2xl font-bold mb-2 text-yellow-900">Build world-class tech teams</h3>
        <p className="mb-4 text-lg text-gray-700">Launch a coding assessment in less than 5 minutes.</p>
        <Link to="https://portal.disamina.ai/signup" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg">Create Coding Test</Button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default CodingAssessment;
