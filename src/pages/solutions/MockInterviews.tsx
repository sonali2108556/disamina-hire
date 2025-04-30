
import { ArrowLeft, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SeoHead from "@/components/shared/SeoHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const MockInterviews = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-50 to-white">
    <SeoHead
      title="AI-Powered Mock Interviews"
      description="Prepare candidates with realistic, AI-powered practice interviews that simulate real hiring scenarios and deliver detailed feedback."
      keywords="mock interviews, interview practice, AI interviewer, practice questions, interview preparation, interview simulation"
    />
    <Navbar />
    <div className="w-full bg-white shadow">
      <div className="container mx-auto py-4 px-4 md:px-6 flex items-center">
        <Mic className="text-teal-600 mr-3" size={32} />
        <h1 className="text-2xl font-bold flex-1">Mock Interviews with AI</h1>
        <Link to="/solutions" className="inline-flex items-center text-primary text-sm hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Solutions
        </Link>
      </div>
    </div>
    <div className="container mx-auto py-12 md:py-20 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
        <div>
          <h2 className="text-4xl font-bold mb-5">Foster Candidate Confidence with AI-Powered Mock Interviews</h2>
          <p className="text-lg mb-7 text-gray-700">
            Prepare your candidates with realistic, AI-powered practice interviews that simulate real hiring scenarios and deliver detailed feedback.
          </p>
          <ul className="mb-7 space-y-3 text-base">
            <li>
              <span className="text-teal-600 font-bold mr-2">✓</span>
              Simulates real-world interview challenges and questions.
            </li>
            <li>
              <span className="text-teal-600 font-bold mr-2">✓</span>
              Detailed, AI-generated feedback and scoring.
            </li>
            <li>
              <span className="text-teal-600 font-bold mr-2">✓</span>
              Boosts preparedness and reduces candidate anxiety.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=430&q=80"
            alt="Mock Interviews"
            className="rounded-xl shadow-lg object-cover w-full max-h-[350px] border-4 border-teal-100"
            loading="lazy"
          />
        </div>
      </div>
      <div className="bg-teal-100 rounded-xl p-8 text-center animate-fade-in">
        <h3 className="text-2xl font-bold mb-2 text-teal-900">Give Candidates the Advantage</h3>
        <p className="mb-4 text-lg text-gray-700">Help them shine in any interview scenario, starting today.</p>
        <Link to="https://portal.disamina.ai/signup" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg">Start Mock Interview</Button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default MockInterviews;
