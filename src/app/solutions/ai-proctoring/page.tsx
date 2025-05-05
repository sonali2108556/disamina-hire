import { Button } from "@/components/ui/button";
import SeoHead from "@/components/shared/SeoHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import proctoring from "@/assets/images/AI_Proctoring.webp";
import Link from "next/link";

const AIProctoring = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white">
    <SeoHead
      title="AI Proctoring Software for Online Exams | Disamina AI"
      description="Ensure secure and fair assessments with Disamina’s AI-powered online proctoring system for remote hiring and exams."
      keywords="AI proctoring, secure assessments, online exam monitoring"
    />
    <Navbar />
    <div className="container mx-auto py-12 md:py-20 animate-fade-in mt-10">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
        <div>
          <h2 className="text-4xl font-bold mb-5">Proctor Exams Securely and Efficiently with AI</h2>
          <p className="text-lg mb-7 text-gray-700">
            Our advanced AI-driven proctoring solution ensures the integrity of your exams by monitoring and analyzing test-taker behavior in real time, giving you peace of mind and protecting the credibility of your assessments.
          </p>
          <ul className="mb-7 space-y-3 text-base">
            <li>
              <span className="text-blue-600 font-bold mr-2">✓</span>
              90% faster detection of suspicious activities and rule violations.
            </li>
            <li>
              <span className="text-blue-600 font-bold mr-2">✓</span>
              Automated identity verification, gaze tracking, and environment monitoring.
            </li>
            <li>
              <span className="text-blue-600 font-bold mr-2">✓</span>
              Minimize human error and bias with consistent, AI-powered supervision.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/AI_Proctoring.webp"
            alt="Resume Screening"
            className="rounded-xl shadow-lg object-cover w-full max-h-[350px] border-4 border-blue-100"
            loading="lazy"
          />
        </div>
      </div>

      <div className="bg-blue-100 rounded-xl p-8 text-center animate-fade-in">
        <h3 className="text-2xl font-bold mb-2 text-blue-900">Ready to enhance your exam security?</h3>
        <p className="mb-4 text-gray-700 text-lg">Discover how AI proctoring can safeguard your assessments and maintain fairness—scaling effortlessly for remote and in-person exams.</p>
        <Link href="https://portal.disamina.ai/signin" target="_blank" rel="noopener noreferrer">

          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg transition-colors">Try AI Proctoring</Button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default AIProctoring;
