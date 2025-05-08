"use client";

import Hero from "@/app/components/home/Hero";
import Navbar from "@/app/components/layout/Navbar";
import FeaturesStrip from "@/app/components/home/FeaturesStrip";
import HowItWorks from "@/app/components/home/HowItWorks";
import Testimonials from "@/app/components/home/Testimonials";
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Footer from "@/app/components/layout/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
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
                Try AI-Enabled HR Assistant
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Future-proof your organization, start hiring faster and smarter with Disamina AI.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={() => {
                    if (window.Calendly) {
                      window.Calendly.initPopupWidget({
                        url: 'https://calendly.com/disamina?hide_gdpr_banner=1',
                      });
                    } else {
                      console.error('Calendly script not loaded.');
                    }
                    return false;
                  }}
                  size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg">
                  Schedule a Call
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

      </div>
    </>
  );
}
