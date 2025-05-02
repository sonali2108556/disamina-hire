
import { ArrowLeft, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SeoHead from "@/components/shared/SeoHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const VideoInterviews = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-red-50 to-white">
    <SeoHead
      title="AI-Powered Video Interviews | Disamina AI"
      description="Conduct seamless, automated video interviews with Disamina AI—screen candidates faster with structured questions and insights."
      keywords="AI video interview, one-way interviews, automated candidate screening"
    />

    <Navbar />
    <div className="w-full bg-white shadow">
      <div className="container mx-auto py-4 px-4 md:px-6 flex items-center">
        <Video className="text-red-600 mr-3" size={32} />
        <h1 className="text-2xl font-bold flex-1">AI Video Interviews</h1>
        <Link to="/solutions" className="inline-flex items-center text-primary text-sm hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Solutions
        </Link>
      </div>
    </div>
    <div className="container mx-auto py-12 md:py-20 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
        <div>
          <h2 className="text-4xl font-bold mb-5">Automate Video Interviews with the Power of AI</h2>
          <p className="text-lg mb-7 text-gray-700">
            Save hours for your hiring panel. Leverage asynchronous interviews, AI-driven response analysis, and comprehensive candidate reports—all online.
          </p>
          <ul className="mb-7 space-y-3 text-base">
            <li>
              <span className="text-red-600 font-bold mr-2">✓</span>
              Schedule, record, and review interviews on your time.
            </li>
            <li>
              <span className="text-red-600 font-bold mr-2">✓</span>
              AI-powered soft skill and communication analysis.
            </li>
            <li>
              <span className="text-red-600 font-bold mr-2">✓</span>
              Fair, objective scoring and full transcripts.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=510&q=80"
            alt="Video Interviews"
            className="rounded-xl shadow-lg object-cover w-full max-h-[350px] border-4 border-red-100"
            loading="lazy"
          />
        </div>
      </div>
      <div className="bg-red-100 rounded-xl p-8 text-center animate-fade-in">
        <h3 className="text-2xl font-bold mb-2 text-red-900">Upgrade Your Interviews</h3>
        <p className="mb-4 text-lg text-gray-700">See how AI interviews can transform your hiring funnel.</p>
        <Link to="https://portal.disamina.ai/signup" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg">Schedule Interview</Button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default VideoInterviews;
