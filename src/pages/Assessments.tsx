import { useState } from "react";
import { Search, Filter, Code, Activity, MessageSquare, CheckSquare, Brain } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChatBotButton from "@/components/shared/ChatBotButton";
import { Link } from "react-router-dom";
import SeoHead from "@/components/shared/SeoHead";

const assessmentTypes = [
  { id: "all", label: "All", icon: CheckSquare },
  { id: "technical", label: "Technical", icon: Code },
  { id: "aptitude", label: "Aptitude", icon: Brain },
  { id: "behavioral", label: "Behavioral", icon: Activity },
  { id: "communication", label: "Communication", icon: MessageSquare }
];

const assessmentsData = [
  {
    id: "java-developer",
    title: "Java Developer Assessment",
    type: "technical",
    duration: "60 min",
    questions: 25,
    description: "Comprehensive evaluation of Java programming skills, including Spring framework, multithreading, and database concepts."
  },
  {
    id: "python-developer",
    title: "Python Developer Assessment",
    type: "technical",
    duration: "45 min",
    questions: 20,
    description: "Assessment of Python skills covering data structures, algorithms, and frameworks like Django and Flask."
  },
  {
    id: "react-developer",
    title: "React Developer Assessment",
    type: "technical",
    duration: "50 min",
    questions: 22,
    description: "Evaluation of React.js expertise including hooks, state management, and component patterns."
  },
  {
    id: "logical-reasoning",
    title: "Logical Reasoning",
    type: "aptitude",
    duration: "30 min",
    questions: 20,
    description: "Assessment of logical and analytical reasoning abilities through pattern recognition and problem-solving."
  },
  {
    id: "numerical-ability",
    title: "Numerical Ability",
    type: "aptitude",
    duration: "25 min",
    questions: 15,
    description: "Evaluation of numerical and mathematical reasoning skills for data-oriented roles."
  },
  {
    id: "leadership-potential",
    title: "Leadership Potential",
    type: "behavioral",
    duration: "40 min",
    questions: 30,
    description: "Assessment of leadership qualities, decision-making, and team management capabilities."
  },
  {
    id: "communication-skills",
    title: "Communication Skills",
    type: "communication",
    duration: "35 min",
    questions: 25,
    description: "Evaluation of written and verbal communication abilities, including clarity and persuasiveness."
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    type: "aptitude",
    duration: "40 min",
    questions: 18,
    description: "Assessment of creative problem-solving abilities and approach to complex challenges."
  },
  {
    id: "cultural-fit",
    title: "Cultural Fit Assessment",
    type: "behavioral",
    duration: "30 min",
    questions: 25,
    description: "Evaluation of alignment with organizational values, work style preferences, and team dynamics."
  }
];

const assessmentsLinks = [
  { id: "psychometric", path: "/assessments/psychometric", label: "Psychometric Tests" },
  { id: "technical", path: "/assessments/technical", label: "Technical Tests" },
  { id: "aptitude", path: "/assessments/aptitude", label: "Aptitude Tests" },
  { id: "behavioral", path: "/assessments/behavioral", label: "Behavioral Tests" },
  { id: "communication", path: "/assessments/communication", label: "Communication Skills Test" },
];

const Assessments = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAssessments = assessmentsData.filter(assessment => {
    const matchesFilter = activeFilter === "all" || assessment.type === activeFilter;
    const matchesSearch = assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assessment.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <SeoHead
      title="Skill Assessments for Hiring | Disamina AI"
      description="Assess candidates with job-specific skill tests designed by experts and powered by AI to ensure accurate evaluation."
      keywords="role-based assessments, skill testing, job-specific evaluations"
    />
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-primary text-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Talent Assessments</h1>
              <p className="text-xl mb-8">
                Evaluate candidates with precision using our comprehensive assessment tools and tests
              </p>
              <div className="relative max-w-xl mx-auto">
                <Input
                  type="text"
                  placeholder="Search assessments (e.g., Java Developer, Leadership...)"
                  className="pl-10 h-12 bg-white/90 text-gray-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white animate-fade-in">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Explore Assessment Types</h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                Click on a test category to learn more about how each assessment works for your hiring needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {assessmentsLinks.map(({ id, path, label }) => (
                <Link
                  key={id}
                  to={path}
                  className="rounded-lg bg-primary/5 hover:bg-primary/10 p-8 flex flex-col items-center text-center border border-primary/10 shadow-md transition animate-scale-in"
                >
                  <span className="text-xl font-bold text-primary mb-2">{label}</span>
                  <span className="text-gray-500 text-base">Learn more</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveFilter} value={activeFilter}>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Assessment Types</h2>
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Filter by type</span>
                </div>
              </div>

              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {assessmentTypes.map((type) => (
                  <TabsTrigger key={type.id} value={type.id} className="flex items-center gap-2">
                    <type.icon className="h-4 w-4" />
                    <span>{type.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAssessments.map((assessment) => (
                    <AssessmentCard key={assessment.id} assessment={assessment} />
                  ))}
                </div>

                {filteredAssessments.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-600">No assessments found matching your criteria.</p>
                    <Button
                      variant="outline"
                      onClick={() => { setSearchTerm(""); setActiveFilter("all"); }}
                      className="mt-4"
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </TabsContent>

              {assessmentTypes.filter(type => type.id !== "all").map((type) => (
                <TabsContent key={type.id} value={type.id} className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAssessments.map((assessment) => (
                      <AssessmentCard key={assessment.id} assessment={assessment} />
                    ))}
                  </div>

                  {filteredAssessments.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-lg text-gray-600">No assessments found matching your criteria.</p>
                      <Button
                        variant="outline"
                        onClick={() => { setSearchTerm(""); setActiveFilter("all"); }}
                        className="mt-4"
                      >
                        Reset Filters
                      </Button>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Seamlessly integrate assessments into your hiring workflow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: 1,
                  title: "Select Assessment",
                  description: "Choose from our library of validated assessments or customize your own"
                },
                {
                  step: 2,
                  title: "Send to Candidates",
                  description: "Automatically invite candidates through email or your ATS"
                },
                {
                  step: 3,
                  title: "Review Results",
                  description: "Get AI-analyzed scores and detailed candidate insights"
                }
              ].map((step) => (
                <div key={step.step} className="text-center">
                  <div className="bg-primary/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <span className="text-sm text-primary font-medium uppercase mb-2 block">Featured Assessment</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Skills Assessment</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our most comprehensive technical evaluation tool uses AI to assess not just knowledge,
                  but practical application of skills in real-world scenarios.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-50 p-1 rounded-full text-green-600 mt-1">
                      <CheckSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Adaptive Testing</h4>
                      <p className="text-gray-600">Questions adjust in difficulty based on candidate responses</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-50 p-1 rounded-full text-green-600 mt-1">
                      <CheckSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Plagiarism Detection</h4>
                      <p className="text-gray-600">AI-powered system to ensure authentic responses</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-50 p-1 rounded-full text-green-600 mt-1">
                      <CheckSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Detailed Insights</h4>
                      <p className="text-gray-600">Comprehensive reports showing strengths and weaknesses</p>
                    </div>
                  </div>
                </div>

                <Link to="https://portal.disamina.ai/signup" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Example Questions</h3>

                    <div className="space-y-6">
                      <div className="pb-4 border-b">
                        <p className="font-medium mb-2">1. What would be the output of the following code snippet?</p>
                        <div className="bg-gray-50 p-3 rounded text-sm font-mono mb-3">
                          const arr = [1, 2, 3];<br />
                          const result = arr.map(x {'=>'} x * 2);<br />
                          console.log(result);
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <input type="radio" id="q1a" name="q1" className="mr-2" />
                            <label htmlFor="q1a">[1, 2, 3]</label>
                          </div>
                          <div className="flex items-center">
                            <input type="radio" id="q1b" name="q1" className="mr-2" />
                            <label htmlFor="q1b">[2, 4, 6]</label>
                          </div>
                          <div className="flex items-center">
                            <input type="radio" id="q1c" name="q1" className="mr-2" />
                            <label htmlFor="q1c">undefined</label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="font-medium mb-2">2. Explain the concept of closure in JavaScript and provide an example.</p>
                        <div className="bg-gray-50 p-3 rounded h-20 text-sm text-gray-400 flex items-center justify-center">
                          [Text area for written response]
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 text-sm text-gray-500 text-center">
                    This is just a preview. Actual assessments contain 20-50 questions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Improve Your Hiring Decisions?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start using our AI-powered assessments to identify top talent with precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://portal.disamina.ai/signup" target="_blank" rel="noreferrer noopener">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg py-6 px-8">
                  Get Started
                </Button>
              </a>
              <Link to="/contact#contact">
                <Button size="lg" variant="outline" className="border-white text-primary hover:text-white hover:bg-white/10 text-lg py-6 px-8">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBotButton />
    </div>
  );
};

const AssessmentCard = ({ assessment }: { assessment: any }) => {
  const getTypeIcon = () => {
    switch (assessment.type) {
      case "technical":
        return <Code className="h-5 w-5" />;
      case "aptitude":
        return <Brain className="h-5 w-5" />;
      case "behavioral":
        return <Activity className="h-5 w-5" />;
      case "communication":
        return <MessageSquare className="h-5 w-5" />;
      default:
        return <CheckSquare className="h-5 w-5" />;
    }
  };

  const getTypeColor = () => {
    switch (assessment.type) {
      case "technical":
        return "bg-blue-50 text-blue-600";
      case "aptitude":
        return "bg-purple-50 text-purple-600";
      case "behavioral":
        return "bg-green-50 text-green-600";
      case "communication":
        return "bg-amber-50 text-amber-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{assessment.title}</CardTitle>
          <div className={`p-1.5 rounded-md ${getTypeColor()}`}>
            {getTypeIcon()}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4">{assessment.description}</CardDescription>
        <div className="flex justify-between text-sm text-gray-500">
          <div>Duration: {assessment.duration}</div>
          <div>{assessment.questions} questions</div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Link to="https://portal.disamina.ai/signup" target="_blank" rel="noopener noreferrer" className="w-[100%]">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Assessments;
