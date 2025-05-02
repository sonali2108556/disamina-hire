import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, User, FileCheck, Video, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ChatBotButton from "@/components/shared/ChatBotButton";
import SeoHead from "@/components/shared/SeoHead";

const ForCandidates = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Future", "Career", "Success"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SeoHead
        title="AI-Powered Career Tools for Job Seekers | Disamina AI"
        description="Get resume insights, mock interviews, and career tools powered by AI to improve your job prospects."
        keywords="tools for job seekers, resume feedback, career booster"
      />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden bg-gradient-primary animate-fade-in">
          <div className="blur-circle blur-circle-primary w-[500px] h-[500px] -top-64 -left-64 animate-pulse-soft"></div>
          <div className="blur-circle blur-circle-secondary w-[300px] h-[300px] top-40 right-0 animate-pulse-soft"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-[800px] mx-auto text-center">
              <div className="inline-block bg-white/10 px-4 py-2 rounded-full mb-4 animate-fade-in">
                <span className="text-white font-medium">AI-Powered Career Advancement Platform</span>
              </div>

              <h1 className="text-[38px] md:text-[46px] lg:text-[54px] font-bold mb-6 leading-tight text-white animate-slide-in">
                Unlock Your{" "}
                <span key={words[currentWord]} className="text-secondary inline-block animate-fade-in">
                  {words[currentWord]}
                </span>
                {" "}with AI
              </h1>

              <p className="text-[16px] md:text-[18px] text-white/90 mb-8 max-w-[600px] mx-auto animate-fade-in">
                Let AI optimize your resume, prepare you for interviews, and help you land your dream job faster than ever before.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <Link to="https://portal.disamina.ai/candidate/login" rel="noreferrer noopener" target="_blank">
                  <Button
                    size="lg"
                    className="bg-gradient-blend hover:opacity-90 text-white text-[17px] py-6 px-8 rounded-md flex gap-2 items-center transform transition-transform hover:scale-105"
                  >
                    Get Started Free
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AI Career Help Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Help from Disamina AI</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our AI assistant helps you at every step of your job search journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-hover">
                <CardHeader>
                  <FileText className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Resume Optimizer</CardTitle>
                  <CardDescription>Get your resume automatically optimized for ATS systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Our AI analyzes your resume against job descriptions to ensure maximum matching score with ATS systems and hiring managers.</p>
                </CardContent>
                <CardFooter>
                  <Link to="https://portal.disamina.ai/candidate/login" target="_blank" rel="noreferrer noopener">
                    <Button variant="outline" className="w-full">Try Now</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <FileCheck className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Resume Generator</CardTitle>
                  <CardDescription>Create an impressive resume in minutes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Let our AI build a professional resume from scratch. Just input your experience and skills, and we'll format everything perfectly.</p>
                </CardContent>
                <CardFooter>
                  <Link to="https://portal.disamina.ai/candidate/login" target="_blank" rel="noreferrer noopener">
                    <Button variant="outline" className="w-full">Generate Resume</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <User className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>JD Analyzer</CardTitle>
                  <CardDescription>Understand what employers really want</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Paste any job description and our AI will analyze the key requirements, showing you exactly what skills to emphasize in your application.</p>
                </CardContent>
                <CardFooter>
                  <Link to="https://portal.disamina.ai/candidate/login" target="_blank" rel="noreferrer noopener">
                    <Button variant="outline" className="w-full">Analyze a JD</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Mock Interviews & Assessments */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <Video className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Practice Makes Perfect</h2>
                <p className="text-xl text-gray-600 mb-6">
                  Prepare for your interviews with our AI-powered mock interviews and assessments.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="bg-primary/10 p-1 rounded-full text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span>Industry-specific technical interviews</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-primary/10 p-1 rounded-full text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span>Behavioral and situational questions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-primary/10 p-1 rounded-full text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span>Detailed feedback and improvement tips</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-primary/10 p-1 rounded-full text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span>Practice assessments for common skills tests</span>
                  </li>
                </ul>
                <Link to="https://portal.disamina.ai/candidate/login" target="_blank" rel="noreferrer noopener">
                  <Button className="bg-primary hover:bg-primary-dark text-white">
                    Try Mock Interview
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-gray-500 mb-2">Interview Simulation Preview</p>
                    {/* <Button variant="outline">Watch Demo</Button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Strip */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Simple, Transparent Pricing</h2>
              <p className="text-lg text-gray-600">Invest in your career success</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-2">Free</h3>
                <p className="text-3xl font-bold mb-4">$0</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Resume analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>1 mock interview</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-300 mt-1">✓</span>
                    <span className="text-gray-400">Premium templates</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Start Free</Button>
              </div>

              <div className="bg-primary/5 border-primary border rounded-lg shadow-md p-8 transform scale-105">
                <div className="bg-primary text-white text-xs uppercase font-bold py-1 px-3 rounded absolute -mt-12 left-1/2 transform -translate-x-1/2">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <p className="text-3xl font-bold mb-4">$19<span className="text-lg">/mo</span></p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Unlimited resume optimizations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>5 mock interviews per month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Premium templates</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary">Choose Plan</Button>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-2">Premium</h3>
                <p className="text-3xl font-bold mb-4">$49<span className="text-lg">/mo</span></p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>All Pro features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Unlimited interviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>1:1 career coaching</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Choose Plan</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {/* <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Candidates Love Our Tools</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how Disamina AI has helped candidates land their dream jobs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  role: "Software Engineer",
                  company: "Google",
                  quote: "The mock interviews were incredibly realistic. I felt prepared for every question in my actual interviews.",
                  rating: 5
                },
                {
                  name: "Sarah Williams",
                  role: "Marketing Manager",
                  company: "Spotify",
                  quote: "My resume went from getting no calls to 5 interviews in a week after using the AI Resume Optimizer.",
                  rating: 5
                },
                {
                  name: "Raj Patel",
                  role: "Data Scientist",
                  company: "Amazon",
                  quote: "The JD Analyzer helped me understand exactly what skills to highlight, and I got the job on my first try!",
                  rating: 5
                }
              ].map((testimonial, idx) => (
                <Card key={idx} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role} at {testimonial.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Hired Faster?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of candidates who have accelerated their job search with Disamina AI.
            </p>
            <Link to="https://portal.disamina.ai/candidate/login" target="_blank" rel="noreferrer noopener">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg py-6 px-8">
                Get Hired
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBotButton />
    </div>
  );
};

export default ForCandidates;
