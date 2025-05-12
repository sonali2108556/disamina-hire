"use client"
import { Button } from "@/app/components/ui/button";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";

import { ArrowLeft, FileSearch, ArrowRight, Check, FileCheck, Download, Star } from "lucide-react";

const AIResumeScreening = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Hero Section */}
    <section className="pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Background decorations */}
      <div className="blur-circle blur-circle-primary w-[400px] h-[400px] -top-64 -right-64 animate-pulse-soft"></div>
      <div className="blur-circle blur-circle-secondary w-[300px] h-[300px] bottom-40 left-0 animate-pulse-soft"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 rounded-full mb-4">
              <span className="text-blue-700 font-medium">For Recruiters & HR Teams</span>
            </div>

            <h1 className="text-[39px] md:text-[47px] font-bold mb-6 leading-tight">
              Screen Resumes <span style={{ color: '#ff7055' }}>Instantly</span> With AI
            </h1>

            <p className="text-[17px] md:text-[19px] text-gray-600 mb-8">
              Our intelligent engine saves your team hundreds of hours by instantly screening and ranking resumes, ensuring you never miss a great candidate again.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
                <Button style={{ backgroundColor: '#1C1464' }} className="bg-blue-600 hover:bg-blue-700 text-white text-[17px] py-6 px-8 rounded-md flex gap-2 items-center transform transition-transform hover:scale-105">
                  Try Resume Screening
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <img
              src="/images/AI Screening_home.webp"
              alt="Resume Screening AI"
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
            Four simple steps to automate your resume screening process and find the best candidates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Post a Job",
              description: "Post your job requirements and skills needed for the position",
              icon: "📄"
            },
            {
              step: "02",
              title: "Source Candidates",
              description: "Source or bulk upload candidate resumes in any format (PDF, DOCX, etc.)",
              icon: "🔍"
            },
            {
              step: "03",
              title: "AI Analysis",
              description: "Our AI analyzes and ranks candidates based on job fit and skills match",
              icon: "🤖"
            },
            {
              step: "04",
              title: "Review Shortlist",
              description: "Get a ranked list of candidates with detailed match analysis",
              icon: "⭐"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-50 text-blue-600 px-3 py-1 text-sm font-bold rounded-bl-lg">
                Step {item.step}
              </div>
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>

              {index < 3 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-blue-300">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
            <Button style={{ backgroundColor: '#1C1464' }} className="bg-blue-600 hover:bg-blue-700 text-white">
              Post a Job
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of AI Resume Screening</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Save time and improve the quality of your hiring with our AI-powered screening technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "85% Faster Screening",
              description: "Reduce resume screening time from days to minutes with automated processing",
              icon: <Check className="w-6 h-6 text-blue-600" />
            },
            {
              title: "Never Miss Top Talent",
              description: "AI ensures every resume is thoroughly analyzed based on skills, experience, and fit",
              icon: <Star className="w-6 h-6 text-blue-600" />
            },
            {
              title: "Reduce Hiring Bias",
              description: "Objective, skills-based screening minimizes unconscious bias in the hiring process",
              icon: <Check className="w-6 h-6 text-blue-600" />
            },
            {
              title: "Advanced Parsing Technology",
              description: "Extract and analyze skills, experience, and qualifications from any resume format",
              icon: <FileCheck className="w-6 h-6 text-blue-600" />
            },
            {
              title: "Customizable Screening Criteria",
              description: "Tailor the AI to focus on the skills and qualifications most important to you",
              icon: <Check className="w-6 h-6 text-blue-600" />
            },
            {
              title: "Detailed Candidate Reports",
              description: "Get comprehensive candidate match scores with detailed skill breakdowns",
              icon: <Star className="w-6 h-6 text-blue-600" />
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="mb-4 inline-block p-3 bg-blue-50 rounded-lg">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Revolutionize Your Hiring Process?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of companies saving time and improving their hiring quality with AI resume screening
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
              <Button style={{ color: '#1C1464' }} size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
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

export default AIResumeScreening;
