"use client"
import { Button } from "@/app/components/ui/button";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Check, Star, Download } from "lucide-react";

const CampusHiring = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Hero Section */}
    <section className="pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden bg-gradient-to-br from-orange-50 to-white">
      {/* Background decorations */}
      <div className="blur-circle blur-circle-primary w-[400px] h-[400px] -top-64 -right-64 animate-pulse-soft"></div>
      <div className="blur-circle blur-circle-secondary w-[300px] h-[300px] bottom-40 left-0 animate-pulse-soft"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-orange-100 to-orange-200 px-4 py-2 rounded-full mb-4">
              <span className="text-orange-700 font-medium">Graduate Recruitment Solution</span>
            </div>

            <h1 className="text-[39px] md:text-[47px] font-bold mb-6 leading-tight">
              Recruit the <span className="text-orange-600">Best Talent</span> on Campus
            </h1>

            <p className="text-[17px] md:text-[19px] text-gray-600 mb-8">
              Supercharge your campus recruitment drives with bulk evaluation, event management, and automated shortlisting—powered by AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
                <Button style={{ backgroundColor: '#1C1464' }} className="bg-orange-600 hover:bg-orange-700 text-white text-[17px] py-6 px-8 rounded-md flex gap-2 items-center transform transition-transform hover:scale-105">
                  Plan Your Drive
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <img
              src="/images/campus Hiring.jpg"
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
            Four simple steps to streamline your campus recruitment process and find top graduate talent
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Plan Campus Events",
              description: "Schedule and organize multiple campus recruitment drives",
              icon: "🗓️"
            },
            {
              step: "02",
              title: "Bulk Assessment",
              description: "Evaluate thousands of students simultaneously with AI-powered tests",
              icon: "📊"
            },
            {
              step: "03",
              title: "Automated Shortlisting",
              description: "AI ranks candidates based on your criteria and company fit",
              icon: "🤖"
            },
            {
              step: "04",
              title: "Final Selection",
              description: "Conduct interviews with top candidates and make offers",
              icon: "🏆"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-50 text-orange-600 px-3 py-1 text-sm font-bold rounded-bl-lg">
                Step {item.step}
              </div>
              <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>

              {index < 3 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-orange-300">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
            <Button style={{ backgroundColor: '#1C1464' }} className="bg-orange-600 hover:bg-orange-700 text-white">
              Start Campus Planning
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Our Campus Hiring Platform</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your campus recruitment with specialized tools for graduate hiring
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Bulk Assessment at Scale",
              description: "Evaluate thousands of students simultaneously across multiple campuses",
              icon: <Star className="w-6 h-6 text-orange-600" />
            },
            {
              title: "Event Management Tools",
              description: "Manage schedules, venues, and logistics for multiple campus drives",
              icon: <Check className="w-6 h-6 text-orange-600" />
            },
            {
              title: "Automated Shortlisting",
              description: "AI-driven candidate ranking based on skills, aptitude, and company fit",
              icon: <Check className="w-6 h-6 text-orange-600" />
            },
            {
              title: "Campus Relationship Management",
              description: "Build and maintain relationships with key universities and departments",
              icon: <Star className="w-6 h-6 text-orange-600" />
            },
            {
              title: "Mobile Assessment",
              description: "Students can take tests on their own devices, anywhere on campus",
              icon: <Check className="w-6 h-6 text-orange-600" />
            },
            {
              title: "Employer Branding",
              description: "Showcase your company culture and opportunities to attract top graduates",
              icon: <Star className="w-6 h-6 text-orange-600" />
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="mb-4 inline-block p-3 bg-orange-50 rounded-lg">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan the Ultimate Campus Drive</h2>
          <p className="text-xl opacity-90 mb-8">
            Discover how our AI can scale your campus outreach and improve the quality of graduate hires.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">
              <Button style={{ color: '#1C1464' }} size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                <Download className="mr-2 h-5 w-5" />
                Get Started Free
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

export default CampusHiring;
