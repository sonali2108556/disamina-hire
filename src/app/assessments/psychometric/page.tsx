"use client";
import { ArrowLeft, Award, ArrowRight, Check, Star, Download } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";

const PsychometricTests = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Hero Section */}
    <section className="pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden bg-gradient-to-br from-indigo-50 to-white">
      {/* Background decorations */}
      <div className="blur-circle blur-circle-primary w-[400px] h-[400px] -top-64 -right-64 animate-pulse-soft"></div>
      <div className="blur-circle blur-circle-secondary w-[300px] h-[300px] bottom-40 left-0 animate-pulse-soft"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-indigo-100 to-indigo-200 px-4 py-2 rounded-full mb-4">
              <span className="text-indigo-700 font-medium">Personality Assessment</span>
            </div>

            <h1 className="text-[39px] md:text-[47px] font-bold mb-6 leading-tight">
              Uncover <span className="text-indigo-600">Personality</span> and Potential with Science-Backed Tests
            </h1>

            <p className="text-[17px] md:text-[19px] text-gray-600 mb-8">
              Use industry-standard psychometric assessments to reveal personality traits, motivation, leadership style, and culture fit for every candidate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">

                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-[17px] py-6 px-8 rounded-md flex gap-2 items-center transform transition-transform hover:scale-105">
                  Try Psychometric Test
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <img
              src="/images/AI_Assessment.webp"
              alt="Psychometric Tests"
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
            Four simple steps to implement psychometric testing in your hiring process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Select Test Type",
              description: "Choose from personality, leadership, motivation, or work style assessments",
              icon: "📋"
            },
            {
              step: "02",
              title: "Invite Candidates",
              description: "Send assessment invitations to your candidates via email",
              icon: "✉️"
            },
            {
              step: "03",
              title: "AI Analysis",
              description: "Our system analyzes responses and generates comprehensive reports",
              icon: "🧠"
            },
            {
              step: "04",
              title: "Review Insights",
              description: "Get detailed personality profiles with strengths and potential risks",
              icon: "📊"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-indigo-50 text-indigo-600 px-3 py-1 text-sm font-bold rounded-bl-lg">
                Step {item.step}
              </div>
              <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>

              {index < 3 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-indigo-300">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">

            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Start Using Psychometric Tests
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Psychometric Testing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Gain deeper insights into candidates' personalities and work styles for better hiring decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Scientifically Validated",
              description: "Assessments based on peer-reviewed psychological research and methodologies",
              icon: <Star className="w-6 h-6 text-indigo-600" />
            },
            {
              title: "Predict Performance",
              description: "Identify candidates whose traits align with high performers in similar roles",
              icon: <Check className="w-6 h-6 text-indigo-600" />
            },
            {
              title: "Improve Team Dynamics",
              description: "Ensure new hires complement existing team personality compositions",
              icon: <Check className="w-6 h-6 text-indigo-600" />
            },
            {
              title: "Reduce Turnover",
              description: "Identify candidates whose values and work style match your organization",
              icon: <Star className="w-6 h-6 text-indigo-600" />
            },
            {
              title: "Objective Evaluation",
              description: "Remove unconscious bias from the personality assessment process",
              icon: <Check className="w-6 h-6 text-indigo-600" />
            },
            {
              title: "Development Insights",
              description: "Use results to guide onboarding, coaching, and professional development",
              icon: <Star className="w-6 h-6 text-indigo-600" />
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="mb-4 inline-block p-3 bg-indigo-50 rounded-lg">
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
    <section className="py-16 md:py-20 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Reveal the Human Side of Every Candidate</h2>
          <p className="text-xl opacity-90 mb-8">
            Start making more informed hiring decisions with comprehensive personality insights.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">

              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                <Download className="mr-2 h-5 w-5" />
                Free Assessment Trial
              </Button>
            </Link>
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
              }} size="lg" variant="outline" className="border-white bg-white/0 hover:bg-white">
              View Test Library
            </Button>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default PsychometricTests;
