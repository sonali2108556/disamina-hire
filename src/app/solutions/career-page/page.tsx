"use client"
import { Button } from "@/app/components/ui/button";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";

import { ArrowLeft, Briefcase, ArrowRight, Check, Star, Download } from "lucide-react";

const PersonalizedCareerPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Hero Section */}
    <section className="pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden bg-gradient-to-br from-purple-50 to-white">
      {/* Background decorations */}
      <div className="blur-circle blur-circle-primary w-[400px] h-[400px] -top-64 -right-64 animate-pulse-soft"></div>
      <div className="blur-circle blur-circle-secondary w-[300px] h-[300px] bottom-40 left-0 animate-pulse-soft"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-purple-100 to-purple-200 px-4 py-2 rounded-full mb-4">
              <span className="text-purple-700 font-medium">Personalized Career Page</span>
            </div>

            <h1 className="text-[39px] md:text-[47px] font-bold mb-6 leading-tight">
              Create an <span style={{ color: '#ff7055' }}>Engaging</span> Career Page Powered by AI
            </h1>

            <p className="text-[17px] md:text-[19px] text-gray-600 mb-8">
              Give every candidate a unique experience with job recommendations tailored to their skills, boosting applications and employer brand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
                <Button style={{ backgroundColor: '#1C1464' }} className="bg-purple-600 hover:bg-purple-700 text-white text-[17px] py-6 px-8 rounded-md flex gap-2 items-center transform transition-transform hover:scale-105">
                  Get Your Career Page
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <img
              src="/images/career page.webp"
              alt="Personalized Career Page"
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
            Four simple steps to create a personalized career page that converts more visitors into applicants
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Connect Your ATS",
              description: "Integrate with your existing applicant tracking system to sync job listings",
              icon: "🔄"
            },
            {
              step: "02",
              title: "Customize Design",
              description: "Brand your career page with your company's colors, logo, and messaging",
              icon: "🎨"
            },
            {
              step: "03",
              title: "Activate AI",
              description: "Enable personalized job recommendations based on visitor behavior",
              icon: "🤖"
            },
            {
              step: "04",
              title: "Launch & Analyze",
              description: "Go live with your new career page and track performance metrics",
              icon: "🚀"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-purple-50 text-purple-600 px-3 py-1 text-sm font-bold rounded-bl-lg">
                Step {item.step}
              </div>
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>

              {index < 3 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-purple-300">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
            <Button style={{ backgroundColor: '#1C1464' }} className="bg-purple-600 hover:bg-purple-700 text-white">
              Create Your Career Page
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of AI-Powered Career Pages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your career site into a personalized job discovery platform that engages candidates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Personalized Job Recommendations",
              description: "AI analyzes visitor behavior to show the most relevant job openings for each candidate",
              icon: <Star className="w-6 h-6 text-purple-600" />
            },
            {
              title: "Mobile Optimized Experience",
              description: "Fully responsive design ensures a seamless experience on any device",
              icon: <Check className="w-6 h-6 text-purple-600" />
            },
            {
              title: "Custom Branding",
              description: "Your career page perfectly matches your company's visual identity and brand voice",
              icon: <Check className="w-6 h-6 text-purple-600" />
            },
            {
              title: "Increased Application Rates",
              description: "Personalization typically results in 2-3x more job applications",
              icon: <Star className="w-6 h-6 text-purple-600" />
            },
            {
              title: "Quick Implementation",
              description: "Get your AI career page up and running in days, not weeks or months",
              icon: <Check className="w-6 h-6 text-purple-600" />
            },
            {
              title: "Advanced Analytics",
              description: "Track visitor behavior, engagement metrics, and application conversion rates",
              icon: <Star className="w-6 h-6 text-purple-600" />
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="mb-4 inline-block p-3 bg-purple-50 rounded-lg">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Double Your Applicant Engagement</h2>
          <p className="text-xl opacity-90 mb-8">
            Transform your company's career page in days, not weeks. Engage more candidates with AI personalization.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
              <Button style={{ color: '#1C1464' }} size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Download className="mr-2 h-5 w-5" />
                Get Started Now
              </Button>
            </Link>
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
          </div>

        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default PersonalizedCareerPage;
