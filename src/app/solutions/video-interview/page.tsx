"use client"
import { Button } from "@/app/components/ui/button";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";

import { ArrowLeft, Video, ArrowRight, Check, Star, Download } from "lucide-react";

const VideoInterviews = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Hero Section */}
    <section className="pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden bg-gradient-to-br from-red-50 to-white">
      {/* Background decorations */}
      <div className="blur-circle blur-circle-primary w-[400px] h-[400px] -top-64 -right-64 animate-pulse-soft"></div>
      <div className="blur-circle blur-circle-secondary w-[300px] h-[300px] bottom-40 left-0 animate-pulse-soft"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-red-100 to-red-200 px-4 py-2 rounded-full mb-4">
              <span className="text-red-700 font-medium">Efficient Interview Solution</span>
            </div>

            <h1 className="text-[39px] md:text-[47px] font-bold mb-6 leading-tight">
              <span style={{ color: '#ff7055' }}>Automate</span> Video Interviews with the Power of AI
            </h1>

            <p className="text-[17px] md:text-[19px] text-gray-600 mb-8">
              Save hours for your hiring panel. Leverage asynchronous interviews, AI-driven response analysis, and comprehensive candidate reports—all online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
                <Button style={{ backgroundColor: '#1C1464' }} className="bg-red-600 hover:bg-red-700 text-white text-[17px] py-6 px-8 rounded-md flex gap-2 items-center transform transition-transform hover:scale-105">
                  Schedule Interview
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <img
              src="/images/Video Interview.jpg"
              alt="Video Interviews"
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
            Four simple steps to implement AI-powered video interviews in your hiring process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Create Interview",
              description: "Set up questions, time limits, and evaluation criteria",
              icon: "📝"
            },
            {
              step: "02",
              title: "Invite Candidates",
              description: "Send automated invites for candidates to complete interviews on their time",
              icon: "✉️"
            },
            {
              step: "03",
              title: "AI Analysis",
              description: "Our AI analyzes responses for communication skills and soft skills",
              icon: "🤖"
            },
            {
              step: "04",
              title: "Review Results",
              description: "Get comprehensive reports with transcripts and AI insights",
              icon: "📊"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-50 text-red-600 px-3 py-1 text-sm font-bold rounded-bl-lg">
                Step {item.step}
              </div>
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>

              {index < 3 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-red-300">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
            <Button style={{ backgroundColor: '#1C1464' }} className="bg-red-600 hover:bg-red-700 text-white">
              Create Video Interview
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of AI Video Interviews</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your interview process with time-saving, insight-rich video assessments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Save Interviewer Time",
              description: "Reduce screening interview time by up to 80% with asynchronous video interviews",
              icon: <Star className="w-6 h-6 text-red-600" />
            },
            {
              title: "Flexible Scheduling",
              description: "Candidates complete interviews on their own time, eliminating scheduling conflicts",
              icon: <Check className="w-6 h-6 text-red-600" />
            },
            {
              title: "AI-Powered Analysis",
              description: "Advanced algorithms assess communication skills, confidence, and clarity",
              icon: <Check className="w-6 h-6 text-red-600" />
            },
            {
              title: "Consistent Evaluation",
              description: "Every candidate answers the same questions under the same conditions",
              icon: <Star className="w-6 h-6 text-red-600" />
            },
            {
              title: "Full Transcripts",
              description: "Get searchable text transcripts of all interview responses",
              icon: <Check className="w-6 h-6 text-red-600" />
            },
            {
              title: "Team Collaboration",
              description: "Share interview recordings and insights with your entire hiring panel",
              icon: <Star className="w-6 h-6 text-red-600" />
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="mb-4 inline-block p-3 bg-red-50 rounded-lg">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upgrade Your Interviews</h2>
          <p className="text-xl opacity-90 mb-8">
            See how AI interviews can transform your hiring funnel and save your team valuable time.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
              <Button style={{ color: '#1C1464' }} size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <Download className="mr-2 h-5 w-5" />
                Get Started Free
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white hover:bg-white bg-white/0" onClick={() => {
              if (window.Calendly) {
                window.Calendly.initPopupWidget({
                  url: 'https://calendly.com/disamina?hide_gdpr_banner=1',
                });
              } else {
                console.error('Calendly script not loaded.');
              }
              return false;
            }}>
              Request Demo
            </Button>
          </div>

        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default VideoInterviews;
