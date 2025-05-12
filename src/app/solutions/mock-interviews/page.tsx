"use client"
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import { ArrowLeft, Mic, ArrowRight, Check, Star, Download } from "lucide-react";

const MockInterviews = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Hero Section */}
    <section className="pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden bg-gradient-to-br from-teal-50 to-white">
      {/* Background decorations */}
      <div className="blur-circle blur-circle-primary w-[400px] h-[400px] -top-64 -right-64 animate-pulse-soft"></div>
      <div className="blur-circle blur-circle-secondary w-[300px] h-[300px] bottom-40 left-0 animate-pulse-soft"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-teal-100 to-teal-200 px-4 py-2 rounded-full mb-4">
              <span className="text-teal-700 font-medium">Interview Preparation Solution</span>
            </div>

            <h1 className="text-[39px] md:text-[47px] font-bold mb-6 leading-tight">
              Foster Candidate <span className="text-teal-600">Confidence</span> with AI-Powered Mock Interviews
            </h1>

            <p className="text-[17px] md:text-[19px] text-gray-600 mb-8">
              Prepare your candidates with realistic, AI-powered practice interviews that simulate real hiring scenarios and deliver detailed feedback.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white text-[17px] py-6 px-8 rounded-md flex gap-2 items-center transform transition-transform hover:scale-105">
                  Start Mock Interview
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <img
              src="/images/Video Interview.jpg"
              alt="Mock Interviews"
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
            Four simple steps to help candidates practice and prepare for real interviews
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Select Interview Type",
              description: "Choose from behavioral, technical, or role-specific interview templates",
              icon: "📋"
            },
            {
              step: "02",
              title: "Practice Interview",
              description: "Candidates answer questions from a realistic AI interviewer",
              icon: "🎙️"
            },
            {
              step: "03",
              title: "Get AI Feedback",
              description: "Receive detailed feedback on responses, delivery, and presentation",
              icon: "🤖"
            },
            {
              step: "04",
              title: "Improve Performance",
              description: "Practice again with personalized tips to enhance answers",
              icon: "📈"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-teal-50 text-teal-600 px-3 py-1 text-sm font-bold rounded-bl-lg">
                Step {item.step}
              </div>
              <div className="h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>

              {index < 3 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-teal-300">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              Try Mock Interview
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Mock Interview Practice</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Help candidates shine in their interviews with AI-powered practice and feedback
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Realistic Scenarios",
              description: "Practice with questions actually used by top companies in real interviews",
              icon: <Star className="w-6 h-6 text-teal-600" />
            },
            {
              title: "Instant Feedback",
              description: "Get AI-powered analysis of response quality, clarity, and confidence",
              icon: <Check className="w-6 h-6 text-teal-600" />
            },
            {
              title: "Reduced Anxiety",
              description: "Practice in a safe environment reduces nervousness in actual interviews",
              icon: <Check className="w-6 h-6 text-teal-600" />
            },
            {
              title: "Industry-Specific Questions",
              description: "Tailored practice for different industries, roles, and experience levels",
              icon: <Star className="w-6 h-6 text-teal-600" />
            },
            {
              title: "Performance Tracking",
              description: "Track improvement across multiple practice sessions over time",
              icon: <Check className="w-6 h-6 text-teal-600" />
            },
            {
              title: "Answer Suggestions",
              description: "Get examples of strong answers to improve future responses",
              icon: <Star className="w-6 h-6 text-teal-600" />
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="mb-4 inline-block p-3 bg-teal-50 rounded-lg">
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
    <section className="py-16 md:py-20 bg-gradient-to-r from-teal-500 to-teal-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Give Candidates the Advantage</h2>
          <p className="text-xl opacity-90 mb-8">
            Help them shine in any interview scenario, starting today with AI-powered practice.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
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
                Request Demo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default MockInterviews;
