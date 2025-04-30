
import { ArrowLeft, ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SeoHead from "@/components/shared/SeoHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const TalentAssessment = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-white">
    <SeoHead
      title="Comprehensive Talent Assessment Platform"
      description="Empower your team to assess skills and potential with AI-powered, customizable, role-based assessments covering technical and soft skills."
      keywords="talent assessment, skills evaluation, candidate testing, pre-employment testing, skill verification, hiring assessment"
    />
    <Navbar />
    <div className="w-full bg-white shadow">
      <div className="container mx-auto py-4 px-4 md:px-6 flex items-center">
        <ClipboardCheck className="text-green-600 mr-3" size={32} />
        <h1 className="text-2xl font-bold flex-1">Talent Assessment</h1>
        <Link to="/solutions" className="inline-flex items-center text-primary text-sm hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Solutions
        </Link>
      </div>
    </div>
    <div className="container mx-auto py-12 md:py-20 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
        <div>
          <h2 className="text-4xl font-bold mb-5">Accurate, Fair, and Data-Driven Skill Evaluation</h2>
          <p className="text-lg mb-7 text-gray-700">
            Empower your team to assess skills and potential with AI-powered, customizable, role-based assessments covering both technical and soft skills.
          </p>
          <ul className="mb-7 space-y-3 text-base">
            <li>
              <span className="text-green-600 font-bold mr-2">✓</span>
              100+ validated, role-based test templates with instant benchmarking.
            </li>
            <li>
              <span className="text-green-600 font-bold mr-2">✓</span>
              Customize or create your own assessments with AI recommendations.
            </li>
            <li>
              <span className="text-green-600 font-bold mr-2">✓</span>
              Detailed skill gap analysis and reporting.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=550&q=80"
            alt="Talent Assessment"
            className="rounded-xl shadow-lg object-cover w-full max-h-[350px] border-4 border-green-100"
            loading="lazy"
          />
        </div>
      </div>
      <div className="bg-green-100 rounded-xl p-8 text-center animate-fade-in">
        <h3 className="text-2xl font-bold mb-2 text-green-900">Start Assessing Talent with Precision</h3>
        <p className="mb-4 text-lg text-gray-700">Choose from 100+ templates or design your own assessment in minutes.</p>
        <Link to="https://portal.disamina.ai/signup" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg">Explore Assessments</Button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default TalentAssessment;
