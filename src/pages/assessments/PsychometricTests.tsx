
import { ArrowLeft, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SeoHead from "@/components/shared/SeoHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PsychometricTests = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-white">
    <SeoHead
      title="Online Psychometric Tests for Hiring | Disamina AI"
      description="Measure personality, behavior, and cognitive traits of candidates with AI-driven psychometric tests."
      keywords="psychometric testing, candidate behavior test, personality assessment"
    />
    <Navbar />
    <div className="container mx-auto py-12 md:py-20 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14 mt-10">
        <div>
          <h2 className="text-4xl font-bold mb-5">Uncover Personality and Potential with Science-Backed Tests</h2>
          <p className="text-lg mb-7 text-gray-700">
            Use industry-standard psychometric assessments to reveal personality traits, motivation, leadership style, and culture fit for every candidate.
          </p>
          <ul className="mb-7 space-y-3 text-base">
            <li>
              <span className="text-indigo-600 font-bold mr-2">✓</span>
              Scientifically validated insights on personality, strengths, and risks.
            </li>
            <li>
              <span className="text-indigo-600 font-bold mr-2">✓</span>
              Automated reports benchmarked against industry norms.
            </li>
            <li>
              <span className="text-indigo-600 font-bold mr-2">✓</span>
              Boosts team harmony and increases hiring success rate.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=500&q=80"
            alt="Psychometric Tests"
            className="rounded-xl shadow-lg object-cover w-full max-h-[350px] border-4 border-indigo-100"
            loading="lazy"
          />
        </div>
      </div>
      <div className="bg-indigo-100 rounded-xl p-8 text-center animate-fade-in">
        <h3 className="text-2xl font-bold mb-2 text-indigo-900">Try a Psychometric Test Now</h3>
        <p className="mb-4 text-lg text-gray-700">Reveal the human side of every candidate — instantly and accurately.</p>
        <Link to="https://portal.disamina.ai/signup" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg">Try Psychometric Test</Button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default PsychometricTests;
