import { useEffect, useState } from "react";
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Faster", "Smarter", "Better"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden animate-fade-in">
    {/* Background decorations with animation */}
    <div className="blur-circle blur-circle-primary w-[200px] h-[200px] -top-150 -left-64 animate-pulse-soft"></div>
    <div className="blur-circle blur-circle-secondary w-[150px] h-[150px] top-40 right-0 animate-pulse-soft"></div>

    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="max-w-[800px] mx-auto text-center">
        <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-4 animate-fade-in">
          <span className="text-primary font-medium">AI-Enabled HR Assistant</span>
        </div>

        <h1 className="text-[39px] md:text-[47px] lg:text-[55px] font-bold mb-6 leading-tight animate-slide-in">
          Transforming Recruitment: Hire{" "}
          <span key={words[currentWord]} className="gradient-text inline-block animate-fade-in">
            {words[currentWord]}
          </span>
          {" "}with AI
        </h1>

        <p className="text-[17px] md:text-[19px] text-gray-600 mb-8 max-w-[600px] mx-auto animate-fade-in">
          Revolutionize your hiring process with AI-driven candidate screening, assessments, and interviews - reducing time-to-hire by 80%.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <a href="https://portal.disamina.ai/" target="_blank" rel="noreferrer noopener">
            <div className="flex justify-center w-full">
              <Button className="bg-gradient-blend hover:opacity-90 text-white text-[17px] py-6 px-8 rounded-md flex gap-2 items-center transform transition-transform hover:scale-105">
                Start Hiring Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </a>
        </div>

        <div className="mt-12 animate-fade-in">
          <p className="text-[15px] text-gray-500 mb-3">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["images/Takamol_Logo.png", "images/bae.png", "images/bae.png", "images/god.png", "images/ast.png"].map((item, index) => <div key={index} className="rounded transform transition-transform hover:scale-110">
              <img src={item} alt={"company" + index} width="120px" />
            </div>)}
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default Hero;