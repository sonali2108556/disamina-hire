
import { ArrowLeft, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SeoHead from "@/components/shared/SeoHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const BehavioralTests = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-white">
    <SeoHead
      title=" Behavioral Assessments for Hiring | Disamina AI"
      description="Identify workplace behavior, soft skills, and emotional intelligence with AI-driven behavioral assessments."
      keywords=" behavioral tests, workplace behavior assessment, emotional intelligence test"
    />
    <Navbar />
    <div className="container mx-auto py-12 md:py-20 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14 mt-10">
        <div>
          <h2 className="text-4xl font-bold mb-5">Hire for Attitude, Leadership & Teamwork</h2>
          <p className="text-lg mb-7 text-gray-700">
            Evaluate teamwork, leadership, and accountability with scenario-based behavioral testing and AI-driven analysis.
          </p>
          <ul className="mb-7 space-y-3 text-base">
            <li>
              <span className="text-green-600 font-bold mr-2">✓</span>
              Uncover leadership style and team fit with real scenarios.
            </li>
            <li>
              <span className="text-green-600 font-bold mr-2">✓</span>
              In-depth, easy-to-read behavioral profiles.
            </li>
            <li>
              <span className="text-green-600 font-bold mr-2">✓</span>
              Data-driven, bias-free selection powered by AI.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=500&q=80"
            alt="Behavioral Tests"
            className="rounded-xl shadow-lg object-cover w-full max-h-[350px] border-4 border-green-100"
            loading="lazy"
          />
        </div>
      </div>
      <div className="bg-green-100 rounded-xl p-8 text-center animate-fade-in">
        <h3 className="text-2xl font-bold mb-2 text-green-900">Build Better, Happier Teams</h3>
        <p className="mb-4 text-lg text-gray-700">See how behavioral tests help create a culture of excellence.</p>
        <Link to="https://portal.disamina.ai/signin" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg">Try Behavioral Test</Button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default BehavioralTests;
