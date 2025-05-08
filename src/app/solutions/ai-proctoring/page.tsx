"use client"
import { Button } from "@/app/components/ui/button";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";

import { ArrowRight, Check, Star, Download } from "lucide-react";

const AIProctoring = () => (
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
            <div className="inline-block bg-gradient-to-r from-indigo-100 to-green-200 px-4 py-2 rounded-full mb-4">
              <span className="text-green-700 font-medium">For Educational Institutes & Companies</span>
            </div>

            <h1 className="text-[39px] md:text-[47px] font-bold mb-6 leading-tight">
              <span style={{ color: '#ff7055' }}>AI-Powered</span> Remote Proctoring System
            </h1>

            <p className="text-[17px] md:text-[19px] text-gray-600 mb-8">
            Ensure test integrity with AI supervision that monitors for suspicious behavior, verifies candidate identity, and maintains academic honesty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
                <Button style={{ backgroundColor: '#1C1464' }} className="bg-green-600 hover:bg-indigo-700 text-white text-[17px] py-6 px-8 rounded-md flex gap-2 items-center transform transition-transform hover:scale-105">
                  Try AI Proctoring
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <img
              src="/images/Post a Job_home.webp"
              alt="JD Generator"
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
          Four simple steps to implement secure remote proctoring for your online exams and assessments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Setup Exam",
              description: "Configure exam settings, security levels, and monitoring requirements",
              icon: "📝"
            },
            {
              step: "02",
              title: "Verify Identity",
              description: "AI confirms candidate identity through facial recognition and ID checks",
              icon: "✓"
            },
            {
              step: "03",
              title: "Active Monitoring",
              description: "AI monitors for suspicious behavior, eye movements, and audio",
              icon: "🤖"
            },
            {
              step: "04",
              title: "Review Results",
              description: "Get comprehensive integrity reports with timestamps and evidence",
              icon: "📤"
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
            <Button style={{ backgroundColor: '#1C1464' }} className="bg-green-600 hover:bg-indigo-700 text-white">
              Try AI Proctoring
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of AI Proctoring</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Enhance test integrity and ensure fair assessments with our advanced AI monitoring system
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Prevent Cheating",
              description: "AI detects suspicious activities like screen sharing, phone usage, and unauthorized assistance",
              icon: <Star className="w-6 h-6 text-green-600" />
            },
            {
              title: "Save on Supervision Costs",
              description: "Eliminate the need for human proctors and physical testing centers",
              icon: <Check className="w-6 h-6 text-green-600" />
            },
            {
              title: "Continuous Monitoring",
              description: "The AI never takes breaks and monitors multiple behaviors simultaneously",
              icon: <Check className="w-6 h-6 text-green-600" />
            },
            {
              title: "Identity Verification",
              description: "Facial recognition and ID matching ensures the right person is taking the test",
              icon: <Star className="w-6 h-6 text-green-600" />
            },
            {
              title: "Detailed Reports",
              description: "Get timestamps and video evidence of any suspicious behavior for review",
              icon: <Check className="w-6 h-6 text-green-600" />
            },
            {
              title: "Flexible Deployment",
              description: "Works with your existing LMS and assessment platforms via simple integration",
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
    <section  style={{ backgroundColor: '#1C1464' }} className="py-16 md:py-20 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Online Assessments?</h2>
          <p className="text-xl opacity-90 mb-8">
          Join hundreds of institutions using AI proctoring to maintain academic integrity and prevent cheating.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
              <Button style={{ color: '#1C1464' }} size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Download className="mr-2 h-5 w-5" />
                Try For Free
              </Button>
            </Link>

          </div>


        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default AIProctoring;

