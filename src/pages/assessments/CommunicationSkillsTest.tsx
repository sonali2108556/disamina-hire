
import { ArrowLeft, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SeoHead from "@/components/shared/SeoHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import jd from "@/assets/images/AI_Assessment.webp";

const CommunicationSkillsTest = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-white">
    <SeoHead
      title="Communication Skills Assessment | Disamina AI"
      description="Evaluate verbal and written communication skills of candidates using AI-based tests tailored to job roles."
      keywords="communication test, verbal skills assessment, soft skills evaluation"
    />
    <Navbar />
    <div className="container mx-auto py-12 md:py-20 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14 mt-10">
        <div>
          <h2 className="text-4xl font-bold mb-5">Test English Fluency & Workplace Communication</h2>
          <p className="text-lg mb-7 text-gray-700">
            Assess written and spoken English, clarity, articulation, and soft skills with interactive audio and video questions, all scored instantly by AI.
          </p>
          <ul className="mb-7 space-y-3 text-base">
            <li>
              <span className="text-pink-600 font-bold mr-2">✓</span>
              Real-time video and audio tasks simulate professional scenarios.
            </li>
            <li>
              <span className="text-pink-600 font-bold mr-2">✓</span>
              Automated scoring and detailed feedback for every submission.
            </li>
            <li>
              <span className="text-pink-600 font-bold mr-2">✓</span>
              Designed for every role, industry, and experience level.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src={jd}
            alt="Communication Skills Test"
            className="rounded-xl shadow-lg object-cover w-full max-h-[350px] border-4 border-pink-100"
            loading="lazy"
          />
        </div>
      </div>
      <div className="bg-pink-100 rounded-xl p-8 text-center animate-fade-in">
        <h3 className="text-2xl font-bold mb-2 text-pink-900">See Communication Skills in Action</h3>
        <p className="mb-4 text-lg text-gray-700">Instantly assess fluency, confidence, and clarity of your future hires.</p>
        <Link to="https://portal.disamina.ai/signin" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg">Test My English</Button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default CommunicationSkillsTest;
