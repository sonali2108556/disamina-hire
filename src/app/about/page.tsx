"use client";

import { Rocket, BookOpen, Users, Medal, Calendar, Cog } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">About Disamina AI</h1>
              <p className="text-xl mb-8">
                We're on a mission to transform hiring with AI technology, making it faster, smarter, and more objective.
              </p>
            </div>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 md:p-12 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  To create a world where hiring is based on true potential, not on bias or background.
                </p>
                <p className="text-lg text-gray-700">
                  We envision a future where AI empowers both employers and job seekers to make better matches,
                  resulting in more fulfilling careers and more productive workplaces.
                </p>
              </div>

              <div className="bg-gray-50 p-8 md:p-12 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  To revolutionize the hiring process through AI-powered tools that prioritize:
                </p>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-center gap-3">
                    <Medal className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Speed - Reduce time-to-hire by 70%</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Medal className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Accuracy - Match the right talent to the right roles</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Medal className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Objectivity - Eliminate unconscious bias from hiring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Founders' Story */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Founded by industry veterans who experienced the challenges of hiring firsthand
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
                <div className="md:w-1/3">
                  <div className="bg-gray-200 rounded-full h-64 w-64 mx-auto"></div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2">The Founding Vision</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Our founders, Alex and Maya, were tech industry recruiters who were frustrated by how slow, biased, and inefficient traditional hiring processes were.
                  </p>
                  <p className="text-lg text-gray-700">
                    In 2022, they set out to build an AI assistant that could screen resumes more accurately than humans,
                    conduct preliminary interviews, and provide unbiased candidate assessments. Disamina AI was born.
                  </p>
                </div>
              </div>

              <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2">From Idea to Impact</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    What started as an automated resume screening tool quickly evolved into a comprehensive AI hiring platform that's now used by companies worldwide.
                  </p>
                  <p className="text-lg text-gray-700">
                    Today, Disamina AI processes millions of applications each month, helping companies reduce their time-to-hire by an average of 65% while improving the quality of hires.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-gray-200 rounded-full h-64 w-64 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline & Milestones */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key milestones in our mission to transform hiring with AI
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {[
                {
                  year: "2022",
                  title: "Inception",
                  description: "Disamina AI founded with initial AI resume screening algorithm"
                },
                {
                  year: "2022",
                  title: "First Client",
                  description: "Partnered with our first enterprise client to refine our AI models"
                },
                {
                  year: "2023",
                  title: "Series A Funding",
                  description: "Raised $5M to expand our AI capabilities and team"
                },
                {
                  year: "2023",
                  title: "AI Interview Launch",
                  description: "Released our groundbreaking AI video interview technology"
                },
                {
                  year: "2024",
                  title: "Global Expansion",
                  description: "Expanded to serve clients across 25 countries"
                },
                {
                  year: "2025",
                  title: "Future Vision",
                  description: "Working toward complete transformation of the hiring process"
                }
              ].map((milestone, idx) => (
                <div key={idx} className="flex gap-8 mb-12">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center">
                      <Calendar className="h-6 w-6" />
                    </div>
                    {idx !== 5 && <div className="w-1 bg-gray-200 flex-grow"></div>}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-700">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Tech Stack */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Cog className="h-6 w-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Our Technology</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powered by cutting-edge AI to deliver the best hiring experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Natural Language Processing",
                  description: "Our AI understands job descriptions and resumes contextually, not just by keywords"
                },
                {
                  title: "Computer Vision",
                  description: "Advanced facial and emotion recognition for video interview analysis"
                },
                {
                  title: "Machine Learning",
                  description: "Self-improving algorithms that get better with every hire"
                },
                {
                  title: "Bias Detection",
                  description: "Proprietary algorithms to identify and neutralize unconscious bias"
                },
                {
                  title: "Predictive Analytics",
                  description: "Predicting candidate success based on multiple data points"
                },
                {
                  title: "Knowledge Graph",
                  description: "Understanding relationships between skills, roles, and industries"
                }
              ].map((tech, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                  <p className="text-gray-700">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A diverse team of AI experts, HR professionals, and technologists
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[1, 2, 3, 4].map((_, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-gray-200 rounded-full h-40 w-40 mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold">Team Member Name</h3>
                  <p className="text-gray-600">Position</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have revolutionized their recruitment process with Disamina AI.
            </p>

            <Button
              onClick={() => {
                window.Calendly.initPopupWidget({
                  url: 'https://calendly.com/disamina?hide_gdpr_banner=1',
                });
                return false;
              }}
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg py-6 px-8"
            >
              Book a Demo With Us
            </Button>


          </div>
        </section>
      </main>
      <Footer />
      
    </div>
  );
};

export default About;
