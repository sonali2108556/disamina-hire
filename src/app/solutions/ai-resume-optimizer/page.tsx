
import { ArrowRight, Download, Star, Award, Check } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";

const AIResumeOptimizer = () => (
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
              <span className="text-pink-700 font-medium">For Candidates & Recruiters</span>
            </div>

            <h1 className="text-[39px] md:text-[47px] font-bold mb-6 leading-tight">
              Transform Resumes With <span className="text-pink-600">AI-Powered</span> Optimization
            </h1>

            <p className="text-[17px] md:text-[19px] text-gray-600 mb-8">
              Help candidates craft the perfect resume using AI-generated insights that boost the match between their application and your job requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://portal.disamina.ai/candidate/login" rel="noreferrer noopener" target="_blank">
                <Button className="bg-pink-600 hover:bg-pink-700 text-white text-[17px] py-6 px-8 rounded-md flex gap-2 items-center transform transition-transform hover:scale-105">
                  Optimize My Resume
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <img
              src="/images/AI_Score_home.webp"
              alt="Person optimizing resume"
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
            Four simple steps to create an optimized, ATS-friendly resume that gets you noticed by employers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Import Resume",
              description: "Upload your existing resume in any format (PDF, DOCX, etc.)",
              icon: "📄"
            },
            {
              step: "02",
              title: "Check Score",
              description: "Get an initial assessment score with detailed feedback",
              icon: "🔍"
            },
            {
              step: "03",
              title: "Customize with AI",
              description: "Follow AI recommendations to improve content and formatting",
              icon: "🤖"
            },
            {
              step: "04",
              title: "Download Resume",
              description: "Download your optimized resume ready for submission",
              icon: "⬇️"
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
          <Link href="https://portal.disamina.ai/candidate/login" rel="noreferrer noopener" target="_blank">

            <Button className="bg-pink-600 hover:bg-pink-700 text-white">
              Start Optimization Now
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of AI Resume Optimization</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stand out from the competition with a resume that showcases your strengths effectively
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "ATS-Friendly Format",
              description: "Ensures your resume passes through Applicant Tracking Systems with optimized keywords and layout",
              icon: <Check className="w-6 h-6 text-pink-600" />
            },
            {
              title: "Keyword Optimization",
              description: "Identifies and integrates industry-specific keywords that match job descriptions",
              icon: <Star className="w-6 h-6 text-pink-600" />
            },
            {
              title: "Error-Free Content",
              description: "Eliminates grammatical errors, typos, and formatting inconsistencies",
              icon: <Check className="w-6 h-6 text-pink-600" />
            },
            {
              title: "Achievement Highlighting",
              description: "Transforms job duties into impressive achievements with measurable results",
              icon: <Award className="w-6 h-6 text-pink-600" />
            },
            {
              title: "Job-Specific Tailoring",
              description: "Customizes your resume for specific job applications to increase relevance",
              icon: <Check className="w-6 h-6 text-pink-600" />
            },
            {
              title: "Modern Design Templates",
              description: "Choose from professionally designed templates that impress hiring managers",
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
    <section className="py-16 md:py-20 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Land Your Dream Job?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of successful job seekers who improved their resume and boosted their interview chances
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://portal.disamina.ai/candidate/login" rel="noreferrer noopener" target="_blank">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
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

export default AIResumeOptimizer;
