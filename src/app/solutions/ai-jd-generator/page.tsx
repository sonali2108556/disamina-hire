"use client"
import { Button } from "@/app/components/ui/button";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";

import { ArrowRight, Check, Star, Download } from "lucide-react";

const AIJDGenerator = () => (
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
              <span className="text-indigo-700 font-medium">Job Posting Solution</span>
            </div>

            <h1 className="text-[39px] md:text-[47px] font-bold mb-6 leading-tight">
              Create <span className="text-indigo-600">Compelling</span> Job Descriptions in Seconds
            </h1>

            <p className="text-[17px] md:text-[19px] text-gray-600 mb-8">
              Write inclusive and engaging job descriptions, optimized for keywords and diversity, with just a few clicks. Attract more qualified candidates, instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-[17px] py-6 px-8 rounded-md flex gap-2 items-center transform transition-transform hover:scale-105">
                  Generate Job Description
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
            Four simple steps to create compelling, inclusive job descriptions that attract top talent
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Enter Role Details",
              description: "Input basic role information like title, department, and key responsibilities",
              icon: "📝"
            },
            {
              step: "02",
              title: "Select Requirements",
              description: "Choose must-have skills, qualifications, and experience levels",
              icon: "✓"
            },
            {
              step: "03",
              title: "AI Generation",
              description: "Our AI creates an engaging, inclusive job description optimized for search",
              icon: "🤖"
            },
            {
              step: "04",
              title: "Edit & Export",
              description: "Make any final tweaks and export to your ATS or job boards",
              icon: "📤"
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
              Create Your First JD
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of AI Job Description Generator</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create more effective job postings that attract qualified and diverse candidates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Time Saving",
              description: "Create professional job descriptions in minutes instead of hours",
              icon: <Star className="w-6 h-6 text-indigo-600" />
            },
            {
              title: "Inclusive Language",
              description: "Automatic checks for gender-neutral and inclusive terminology",
              icon: <Check className="w-6 h-6 text-indigo-600" />
            },
            {
              title: "SEO Optimization",
              description: "Keyword optimization improves visibility on job boards and search engines",
              icon: <Check className="w-6 h-6 text-indigo-600" />
            },
            {
              title: "Customizable Templates",
              description: "Industry-specific templates tailored to different roles and departments",
              icon: <Star className="w-6 h-6 text-indigo-600" />
            },
            {
              title: "Compliance Checks",
              description: "Ensures legal compliance and avoids discriminatory language",
              icon: <Check className="w-6 h-6 text-indigo-600" />
            },
            {
              title: "Improved Candidate Quality",
              description: "Clear expectations and compelling descriptions attract better applicants",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolutionize Your Job Postings</h2>
          <p className="text-xl opacity-90 mb-8">
            Let the power of AI craft the perfect job description for any position in your organization.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
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

export default AIJDGenerator;
