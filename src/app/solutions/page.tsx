"use client";

import { ArrowRight, FileSearch, Briefcase, ClipboardCheck, Video, Laptop, FileText, Mic, Users } from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import SeoHead from "@/app/components/shared/SeoHead";
import Link from "next/link";

// Define the solution card data
const solutions = [
  {
    id: "career-page",
    path: "/solutions/career-page",
    title: "Career Page",
    description: "Convert more visitors into applicants with personalized career page",
    icon: Briefcase,
    color: "bg-purple-50 text-purple-600",
    benefits: ["Increase application rates", "Personalized job matching", "Seamless candidate experience"]
  },
  {
    id: "ai-jd-generator",
    path: "/solutions/ai-jd-generator",
    title: "AI JD Generator",
    description: "Create compelling job descriptions that attract the right candidates",
    icon: FileText,
    color: "bg-indigo-50 text-indigo-600",
    benefits: ["Optimize for inclusivity", "Improve application quality", "Save HR time"]
  },
  {
    id: "ai-screening",
    path: "/solutions/ai-screening",
    title: "AI Resume Screening",
    description: "Automatically screen and rank candidates, generate summary based on job requirements",
    icon: FileSearch,
    color: "bg-blue-50 text-blue-600",
    benefits: ["Reduce screening time by 85%", "Eliminate unconscious bias", "Rank candidates objectively"]
  },
  {
    id: "talent-assessment",
    path: "/solutions/talent-assessment",
    title: "Talent Assessment",
    description: "Comprehensive skill evaluation with customizable assessments",
    icon: ClipboardCheck,
    color: "bg-green-50 text-green-600",
    benefits: ["Verify candidate skills", "Reduce bad hires", "Standardized evaluation"]
  },
  {
    id: "video-interview",
    path: "/solutions/video-interview",
    title: "Video Interviews",
    description: "AI-analyzed asynchronous video interviews with insight reports",
    icon: Video,
    color: "bg-red-50 text-red-600",
    benefits: ["Save interviewer time", "Consistent interview experience", "AI-generated insights"]
  },
  {
    id: "coding-assessment",
    path: "/solutions/coding-assessment",
    title: "Coding Assessment",
    description: "Technical skill verification with AI code analysis",
    icon: Laptop,
    color: "bg-yellow-50 text-yellow-600",
    benefits: ["Real-world coding challenges", "Plagiarism detection", "Automated evaluation"]
  },
  // {
  //   id: "ai-resume-optimizer",
  //   path: "/solutions/ai-resume-optimizer",
  //   title: "AI Resume Optimizer",
  //   description: "Help candidates improve their resumes to better match your requirements",
  //   icon: FileText,
  //   color: "bg-pink-50 text-pink-600",
  //   benefits: ["Higher quality applications", "Better candidate experience", "Reduced screening time"]
  // },
  // {
  //   id: "mock-interviews",
  //   path: "/solutions/mock-interviews",
  //   title: "Mock Interviews",
  //   description: "AI-powered practice interviews for candidates to prepare better",
  //   icon: Mic,
  //   color: "bg-teal-50 text-teal-600",
  //   benefits: ["Better prepared candidates", "Reduced interview anxiety", "Improved hiring outcomes"]
  // },
  {
    id: "campus-hiring",
    path: "/solutions/campus-hiring",
    title: "Campus Hiring",
    description: "Streamline campus recruitment with specialized AI tools",
    icon: Users,
    color: "bg-orange-50 text-orange-600",
    benefits: ["Mass evaluation at scale", "Identify top talent quickly", "Improve campus brand"]
  }
];

const Solutions = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">AI Hiring Solutions</h1>
              <p className="text-xl mb-8">
                Our comprehensive suite of AI tools streamlines every step of your hiring process.
              </p>
              <Button onClick={() => {
                if (window.Calendly) {
                  window.Calendly.initPopupWidget({
                    url: 'https://calendly.com/disamina?hide_gdpr_banner=1',
                  });
                } else {
                  console.error('Calendly script not loaded.');
                }
                return false;
              }} size="lg" className="bg-gradient-blend  hover:opacity-90 text-white text-[17px] py-6 px-8 transform transition-transform hover:scale-105"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Hiring Solutions To Handle Heavy Lifting</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Let AI handle tasks from screening to scheduling – empower your team for decision-making.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <Card key={solution.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <CardHeader className={`${solution.color} bg-opacity-15`}>
                    <div className="flex items-center gap-3">
                      <solution.icon className="h-8 w-8" />
                      <CardTitle>{solution.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardDescription className="text-base mb-4">{solution.description}</CardDescription>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-green-500 flex-shrink-0">✓</span>
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button asChild variant="ghost" className="w-full justify-between">
                      <Link href={solution.path}>
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book a demo to see how our AI solutions can streamline your recruitment process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a>
                <Button onClick={() => {
                  if (window.Calendly) {
                    window.Calendly.initPopupWidget({
                      url: 'https://calendly.com/disamina?hide_gdpr_banner=1',
                    });
                  } else {
                    console.error('Calendly script not loaded.');
                  }
                  return false;
                }} size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Book a Demo
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white/10 hover:text-white">
                  Explore Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

    </div>
  );
};

export default Solutions;
