"use client"
import { Button } from "@/app/components/ui/button";
import { ArrowRight, Check, Star, Download } from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";

const CommunicationSkillsTest = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Hero Section */}
    <section className="pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden bg-gradient-to-br from-pink-50 to-white">
      {/* Background decorations */}
      <div className="blur-circle blur-circle-primary w-[400px] h-[400px] -top-64 -right-64 animate-pulse-soft"></div>
      <div className="blur-circle blur-circle-secondary w-[300px] h-[300px] bottom-40 left-0 animate-pulse-soft"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-pink-100 to-pink-200 px-4 py-2 rounded-full mb-4">
              <span className="text-pink-700 font-medium">Language & Communication Assessment</span>
            </div>

            <h1 className="text-[39px] md:text-[47px] font-bold mb-6 leading-tight">
              Test <span style={{ color: '#ff7055' }}>English Fluency</span> & Workplace Communication
            </h1>

            <p className="text-[17px] md:text-[19px] text-gray-600 mb-8">
              Assess written and spoken English, clarity, articulation, and soft skills with interactive audio and video questions, all scored instantly by AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">

                <Button style={{ backgroundColor: '#1C1464' }} className="bg-pink-600 hover:bg-pink-700 text-white text-[17px] py-6 px-8 rounded-md flex gap-2 items-center transform transition-transform hover:scale-105">
                  Test My English
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <img
              src="/images/AI_Assessment.webp"
              alt="Communication Skills Test"
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
            Four simple steps to assess communication skills and English language proficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Configure Test",
              description: "Select skills to assess: speaking, writing, listening, or presentation",
              icon: "⚙️"
            },
            {
              step: "02",
              title: "Invite Candidates",
              description: "Send test invitations to candidates via email",
              icon: "✉️"
            },
            {
              step: "03",
              title: "Video Responses",
              description: "Candidates record audio/video answers to scenario-based questions",
              icon: "🎥"
            },
            {
              step: "04",
              title: "AI Evaluation",
              description: "Get detailed analysis of fluency, clarity, grammar, and vocabulary",
              icon: "📊"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-pink-50 text-pink-600 px-3 py-1 text-sm font-bold rounded-bl-lg">
                Step {item.step}
              </div>
              <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>

              {index < 3 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-pink-300">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
            <Button style={{ backgroundColor: '#1C1464' }} className="bg-pink-600 hover:bg-pink-700 text-white">
              Create Communication Assessment
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Communication Testing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ensure candidates have the language skills and communication abilities needed for success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Verify English Proficiency",
              description: "Confirm candidates have the language skills required for the job",
              icon: <Star className="w-6 h-6 text-pink-600" />
            },
            {
              title: "Realistic Scenarios",
              description: "Job-specific communication challenges that simulate real work situations",
              icon: <Check className="w-6 h-6 text-pink-600" />
            },
            {
              title: "Comprehensive Evaluation",
              description: "Assess grammar, vocabulary, pronunciation, fluency, and clarity",
              icon: <Check className="w-6 h-6 text-pink-600" />
            },
            {
              title: "Automated Scoring",
              description: "AI provides consistent, objective evaluation of language skills",
              icon: <Star className="w-6 h-6 text-pink-600" />
            },
            {
              title: "Multiple Formats",
              description: "Test written, spoken, and presentation skills in one assessment",
              icon: <Check className="w-6 h-6 text-pink-600" />
            },
            {
              title: "Detailed Feedback",
              description: "Candidates receive constructive feedback on areas for improvement",
              icon: <Star className="w-6 h-6 text-pink-600" />
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="mb-4 inline-block p-3 bg-pink-50 rounded-lg">
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
    <section style={{ backgroundColor: '#1C1464' }} className="py-16 md:py-20 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See Communication Skills in Action</h2>
          <p className="text-xl opacity-90 mb-8">
            Instantly assess fluency, confidence, and clarity of your future hires with our AI-powered tools.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
              <Button style={{ color: '#1C1464' }} size="lg" className="bg-white text-gray-600 hover:bg-pink-100">
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

export default CommunicationSkillsTest;
