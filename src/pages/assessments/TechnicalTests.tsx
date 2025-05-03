
import { ArrowLeft, FileCode } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SeoHead from "@/components/shared/SeoHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import jd from "@/assets/images/technical.webp";

const TechnicalTests = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white">
    <SeoHead
      title="Technical Assessment Tests for Hiring | Disamina AI"
      description="Validate technical expertise with role-specific coding, engineering, and IT skill assessments powered by AI."
      keywords=" technical tests, IT skill assessment, engineering test"
    />
    <Navbar />
    <div className="container mx-auto py-12 md:py-20 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14 mt-10">
        <div>
          <h2 className="text-4xl font-bold mb-5">Real-World Coding, System Design & Problem Solving</h2>
          <p className="text-lg mb-7 text-gray-700">
            Assess candidates on practical, hands-on coding, system design, and quantitative challenges—all with AI-powered evaluation and insight.
          </p>
          <ul className="mb-7 space-y-3 text-base">
            <li>
              <span className="text-blue-600 font-bold mr-2">✓</span>
              Skill tracks for 50+ technologies and stacks.
            </li>
            <li>
              <span className="text-blue-600 font-bold mr-2">✓</span>
              Plagiarism detection and benchmarking with peers.
            </li>
            <li>
              <span className="text-blue-600 font-bold mr-2">✓</span>
              Automated insight reports simplify selection.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src={jd}
            alt="Technical Tests"
            className="rounded-xl shadow-lg object-cover w-full max-h-[350px] border-4 border-blue-100"
            loading="lazy"
          />
        </div>
      </div>
      <div className="bg-blue-100 rounded-xl p-8 text-center animate-fade-in">
        <h3 className="text-2xl font-bold mb-2 text-blue-900">Start a Technical Test</h3>
        <p className="mb-4 text-lg text-gray-700">Find the top developer talent for your team, powered by AI.</p>
        <Link to="https://portal.disamina.ai/signin" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg">Start Technical Test</Button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default TechnicalTests;
