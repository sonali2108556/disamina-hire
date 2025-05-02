
import { ArrowLeft, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SeoHead from "@/components/shared/SeoHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AptitudeTests = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 to-white">
    <SeoHead
      title="Aptitude Tests for Recruitment | Disamina AI"
      description="Assess logical reasoning, problem-solving, and numerical ability using AI-based aptitude tests."
      keywords="aptitude test, cognitive ability test, recruitment assessment"
    />
    <Navbar />
    <div className="container mx-auto py-12 md:py-20 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14 mt-10">
        <div>
          <h2 className="text-4xl font-bold mb-5">Measure Logical, Analytical & Numerical Skills</h2>
          <p className="text-lg mb-7 text-gray-700">
            Evaluate candidates on their ability to think critically, solve problems, and reason quantitatively—using adaptive, real-time questions selected by AI.
          </p>
          <ul className="mb-7 space-y-3 text-base">
            <li>
              <span className="text-yellow-600 font-bold mr-2">✓</span>
              Adaptive, real-time question sets tailored to each role.
            </li>
            <li>
              <span className="text-yellow-600 font-bold mr-2">✓</span>
              Instant scoring and rich benchmarking.
            </li>
            <li>
              <span className="text-yellow-600 font-bold mr-2">✓</span>
              Customizable for any industry or experience level.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=510&q=80"
            alt="Aptitude Tests"
            className="rounded-xl shadow-lg object-cover w-full max-h-[350px] border-4 border-yellow-100"
            loading="lazy"
          />
        </div>
      </div>
      <div className="bg-yellow-100 rounded-xl p-8 text-center animate-fade-in">
        <h3 className="text-2xl font-bold mb-2 text-yellow-900">Test Smarter, Hire Better</h3>
        <p className="mb-4 text-lg text-gray-700">Use AI-driven aptitude testing to simplify your shortlisting process.</p>
        <Link to="https://portal.disamina.ai/signup" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg">Begin Your Test</Button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default AptitudeTests;
