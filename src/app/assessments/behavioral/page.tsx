"use client";
import { Button } from "@/app/components/ui/button";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Check, Star, Download } from "lucide-react";

const BehavioralTests = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Hero Section */}
    <section className="pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden bg-gradient-to-br from-green-50 to-white">
      {/* Background decorations */}
      <div className="blur-circle blur-circle-primary w-[400px] h-[400px] -top-64 -right-64 animate-pulse-soft"></div>
      <div className="blur-circle blur-circle-secondary w-[300px] h-[300px] bottom-40 left-0 animate-pulse-soft"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-green-100 to-green-200 px-4 py-2 rounded-full mb-4">
              <span className="text-green-700 font-medium">Workplace Behavior Assessment</span>
            </div>

            <h1 className="text-[39px] md:text-[47px] font-bold mb-6 leading-tight">
              Hire for <span style={{ color: '#ff7055' }}>Attitude</span>, Leadership & Teamwork
            </h1>

            <p className="text-[17px] md:text-[19px] text-gray-600 mb-8">
              Evaluate teamwork, leadership, and accountability with scenario-based behavioral testing and AI-driven analysis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">

                <Button style={{ backgroundColor: '#1C1464' }} className="bg-green-600 hover:bg-green-700 text-white text-[17px] py-6 px-8 rounded-md flex gap-2 items-center transform transition-transform hover:scale-105">
                  Try Behavioral Test
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <img
              src="/images/AI Assessment_home.webp"
              alt="Behavioral Tests"
              className="rounded-xl shadow-lg object-cover max-h-[450px] border-4 border-white"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    {/* How It Works Section */}
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Four simple steps to assess workplace behaviors and identify candidates who will thrive in your culture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Select Scenarios",
              description: "Choose from industry-specific workplace scenarios and challenges",
              icon: "📋"
            },
            {
              step: "02",
              title: "Invite Candidates",
              description: "Send automated assessment invitations to your candidates",
              icon: "✉️"
            },
            {
              step: "03",
              title: "Behavioral Analysis",
              description: "AI evaluates responses for leadership, teamwork, and accountability",
              icon: "🧠"
            },
            {
              step: "04",
              title: "Review Insights",
              description: "Get comprehensive behavioral profiles and culture fit scores",
              icon: "📊"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-50 text-green-600 px-3 py-1 text-sm font-bold rounded-bl-lg">
                Step {item.step}
              </div>
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>

              {index < 3 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-green-300">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
            <Button style={{ backgroundColor: '#1C1464' }} className="bg-green-600 hover:bg-green-700 text-white">
              Create Behavioral Assessment
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Behavioral Testing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Identify candidates with strong soft skills and cultural alignment for your organization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Leadership Assessment",
              description: "Identify candidates with strong leadership potential and management styles",
              icon: <Star className="w-6 h-6 text-green-600" />
            },
            {
              title: "Team Fit Analysis",
              description: "Evaluate collaboration skills and compatibility with existing teams",
              icon: <Check className="w-6 h-6 text-green-600" />
            },
            {
              title: "Scenario-Based Testing",
              description: "Real-world workplace scenarios reveal how candidates actually behave",
              icon: <Check className="w-6 h-6 text-green-600" />
            },
            {
              title: "Culture Alignment",
              description: "Ensure candidates' values and work approach match your organization",
              icon: <Star className="w-6 h-6 text-green-600" />
            },
            {
              title: "Conflict Resolution",
              description: "Evaluate how candidates handle workplace challenges and conflicts",
              icon: <Check className="w-6 h-6 text-green-600" />
            },
            {
              title: "Data-Driven Selection",
              description: "Make objective hiring decisions based on behavioral evidence",
              icon: <Star className="w-6 h-6 text-green-600" />
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="mb-4 inline-block p-3 bg-green-50 rounded-lg">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section style={{ backgroundColor: '#1C1464' }} className="py-16 md:py-20  text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Better, Happier Teams</h2>
          <p className="text-xl opacity-90 mb-8">
            See how behavioral tests help create a culture of excellence through better hiring decisions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
              <Button style={{ color: '#1C1464' }} size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Download className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
            </Link>
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
              }} size="lg" variant="outline" className="border-white bg-white/0 hover:bg-white">
                Schedule Demo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default BehavioralTests;
