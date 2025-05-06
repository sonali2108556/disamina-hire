import { Button } from "@/app/components/ui/button";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Check, Star, Download } from "lucide-react";

const AptitudeTests = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Hero Section */}
    <section className="pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden bg-gradient-to-br from-yellow-50 to-white">
      {/* Background decorations */}
      <div className="blur-circle blur-circle-primary w-[400px] h-[400px] -top-64 -right-64 animate-pulse-soft"></div>
      <div className="blur-circle blur-circle-secondary w-[300px] h-[300px] bottom-40 left-0 animate-pulse-soft"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-yellow-100 to-yellow-200 px-4 py-2 rounded-full mb-4">
              <span className="text-yellow-700 font-medium">Cognitive Ability Assessment</span>
            </div>

            <h1 className="text-[39px] md:text-[47px] font-bold mb-6 leading-tight">
              Measure <span className="text-yellow-600">Logical</span>, Analytical & Numerical Skills
            </h1>

            <p className="text-[17px] md:text-[19px] text-gray-600 mb-8">
              Evaluate candidates on their ability to think critically, solve problems, and reason quantitatively—using adaptive, real-time questions selected by AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">

                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white text-[17px] py-6 px-8 rounded-md flex gap-2 items-center transform transition-transform hover:scale-105">
                  Begin Your Test
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <img
              src="/images/AI Assessment_home.webp"
              alt="Aptitude Tests"
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
            Four simple steps to assess cognitive abilities and identify candidates with strong reasoning skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Configure Assessment",
              description: "Select skill areas and difficulty levels for your aptitude test",
              icon: "⚙️"
            },
            {
              step: "02",
              title: "Invite Candidates",
              description: "Send automated test invitations via email or your ATS",
              icon: "✉️"
            },
            {
              step: "03",
              title: "AI-Adaptive Testing",
              description: "Questions adjust in real-time based on candidate performance",
              icon: "🧠"
            },
            {
              step: "04",
              title: "Review Results",
              description: "Get detailed reports with percentile rankings and skill breakdowns",
              icon: "📊"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-50 text-yellow-600 px-3 py-1 text-sm font-bold rounded-bl-lg">
                Step {item.step}
              </div>
              <div className="h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>

              {index < 3 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-yellow-300">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">

            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
              Create Aptitude Assessment
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Aptitude Testing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Identify candidates with strong cognitive abilities and problem-solving skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Predict Job Performance",
              description: "Cognitive ability is one of the strongest predictors of job success across roles",
              icon: <Star className="w-6 h-6 text-yellow-600" />
            },
            {
              title: "Adaptive Difficulty",
              description: "Questions adjust in real-time based on candidate responses for precise measurement",
              icon: <Check className="w-6 h-6 text-yellow-600" />
            },
            {
              title: "Comprehensive Assessment",
              description: "Evaluate logical reasoning, numerical ability, verbal reasoning, and more",
              icon: <Check className="w-6 h-6 text-yellow-600" />
            },
            {
              title: "Benchmarked Results",
              description: "Compare candidates against industry norms and your top performers",
              icon: <Star className="w-6 h-6 text-yellow-600" />
            },
            {
              title: "Objective Evaluation",
              description: "Remove bias from the assessment process with standardized testing",
              icon: <Check className="w-6 h-6 text-yellow-600" />
            },
            {
              title: "Customizable Tests",
              description: "Tailor assessments to specific roles, industries, and experience levels",
              icon: <Star className="w-6 h-6 text-yellow-600" />
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="mb-4 inline-block p-3 bg-yellow-50 rounded-lg">
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
    <section className="py-16 md:py-20 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Test Smarter, Hire Better</h2>
          <p className="text-xl opacity-90 mb-8">
            Use AI-driven aptitude testing to simplify your shortlisting process and identify top talent.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://portal.disamina.ai/signin" rel="noreferrer noopener" target="_blank">

              <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
                <Download className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default AptitudeTests;
