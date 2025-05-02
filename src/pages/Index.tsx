
import React from "react";
import { useScrollTop } from "@/hooks/useScrollTop";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturesStrip from "@/components/home/FeaturesStrip";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import ChatBotButton from "@/components/shared/ChatBotButton";
import SeoHead from "@/components/shared/SeoHead";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  useScrollTop();

  return (
    <div className="min-h-screen flex flex-col">
      <SeoHead
        title="Best AI Hiring Platform for Employers | Disamina AI"
        description="Discover Disamina AI—an all-in-one hiring solution for employers to post jobs, screen resumes, conduct assessments, and interview candidates faster using AI."
        keywords="AI hiring platform, hire with AI, recruitment automation"
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturesStrip />
        <HowItWorks />

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "80%", label: "Time Saved in Screening" },
                { value: "3x", label: "Higher Quality Candidates" },
                { value: "95%", label: "Client Satisfaction" },
                { value: "60%", label: "Reduction in Hiring Costs" }
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</span>
                  <span className="text-gray-600">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-blend text-white text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Join thousands of companies that are hiring faster and smarter with Disamina AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => {
                window.Calendly.initPopupWidget({
                  url: 'https://calendly.com/disamina?hide_gdpr_banner=1',
                });
                return false;
              }} size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg">
                Book a Demo
              </Button>
              <a href="https://portal.disamina.ai/signin" target="_blank" rel="noreferrer noopener">
                <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-white text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBotButton />
    </div>
  );
};

export default Index;
