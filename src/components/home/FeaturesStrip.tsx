import { useState, useEffect } from "react";
import { Check, CircleUser, Brain, BookCheck, Video, School, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const features = [
  {
    id: "career-page",
    href:"/solutions/career-page",
    title: "Career Page",
    icon: <CircleUser className="h-6 w-6" />,
    description:
      "Create a branded, AI-powered career page that engages candidates and simplifies applications.",
    bullets: [
      "Custom branding and design",
      "AI chatbot for candidate queries",
      "Seamless application process",
      "Mobile-optimized experience"
    ]
  },
  {
    id: "ai-screening",
    href:"/solutions/ai-screening",
    title: "AI Screening",
    icon: <Brain className="h-6 w-6" />,
    description:
      "Let AI analyze resumes, rank candidates, and find the perfect match for your job descriptions.",
    bullets: [
      "Automated resume parsing",
      "Skill-based matching algorithms",
      "Bias reduction technology",
      "Customizable screening criteria"
    ]
  },
  {
    id: "talent-assessments",
    href:"/solutions/talent-assessment",
    title: "Talent Assessments",
    icon: <BookCheck className="h-6 w-6" />,
    description:
      "Evaluate candidates with comprehensive, role-specific assessments that predict job success.",
    bullets: [
      "Technical skill assessments",
      "Cognitive ability tests",
      "Behavioral evaluations",
      "Personality profiling"
    ]
  },
  {
    id: "ai-proctoring",
    href:"/solutions/ai-proctoring",
    title: "AI Proctoring",
    icon: <Check className="h-6 w-6" />,
    description:
      "Ensure assessment integrity with advanced AI monitoring and anti-cheating technology.",
    bullets: [
      "Real-time monitoring",
      "Browser lockdown features",
      "Identity verification",
      "Anomaly detection"
    ]
  },
  {
    id: "video-interviews",
    href:"/solutions/video-interview",
    title: "Video Interviews",
    icon: <Video className="h-6 w-6" />,
    description:
      "Conduct AI-assisted interviews that save time while providing deeper candidate insights.",
    bullets: [
      "Automated interview scheduling",
      "AI question suggestions",
      "Sentiment analysis",
      "Response evaluation"
    ]
  },
  {
    id: "campus-hiring",
    href:"/solutions/campus-hiring",
    title: "Campus Hiring",
    icon: <School className="h-6 w-6" />,
    description:
      "Streamline campus recruitment with tools designed for high-volume, efficient hiring.",
    bullets: [
      "Campus event management",
      "Bulk candidate processing",
      "Automated shortlisting",
      "Onboarding integration"
    ]
  }
];

const FeaturesStrip = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((current) => {
        const currentIndex = features.findIndex(f => f.id === current);
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex].id;
      });
    }, 5000); // Change tab every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentFeature = features.find((f) => f.id === activeFeature);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete AI Recruitment Platform
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our intelligent platform covers every step of your hiring process, 
            from attracting candidates to making the final selection.
          </p>
        </div>

        {/* Feature Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300",
                activeFeature === feature.id
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-white border border-gray-200 hover:border-primary text-gray-600 hover:text-primary"
              )}
            >
              {feature.title}
            </button>
          ))}
        </div>

        {/* Active Feature Detail */}
        {currentFeature && (
          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-10 max-w-4xl mx-auto animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4 space-x-2">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    {currentFeature.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{currentFeature.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {currentFeature.description}
                </p>
                
                <ul className="space-y-3">
                  {currentFeature.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link to={currentFeature.href}>
                <button className="mt-6 btn-primary inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                </Link>
              </div>
              
              <div className="bg-gray-100 rounded-lg flex items-center justify-center min-h-[300px]">
                {/* Placeholder for feature illustration/screenshot */}
                <div className="text-center p-6">
                  <div className="mx-auto w-16 h-16 mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    {currentFeature.icon}
                  </div>
                  <p className="text-gray-500">{currentFeature.title} Visualization</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesStrip;
