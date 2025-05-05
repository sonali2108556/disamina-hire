
import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { MessageSquare, ArrowRight, Search, Zap } from "lucide-react";

const LiveDemo = () => {
  const [jobRole, setJobRole] = useState("");
  const [showDemo, setShowDemo] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobRole) return;
    
    setLoading(true);
    
    // Simulate loading for demo purposes
    setTimeout(() => {
      setShowDemo(true);
      setLoading(false);
    }, 1500);
  };

  const demoContent = {
    jobTitle: jobRole || "Product Manager",
    description: `We're looking for an experienced ${jobRole || "Product Manager"} to join our team. The ideal candidate will have a strong background in product development, user experience, and market analysis.`,
    skills: ["Strategic Thinking", "User Experience", "Data Analysis", "Communication", "Agile Methodologies"],
    candidates: [
      { name: "Alex Johnson", match: 92, skills: 5, experience: "7 years" },
      { name: "Maya Patel", match: 87, skills: 4, experience: "5 years" },
      { name: "Chris Lee", match: 82, skills: 5, experience: "4 years" }
    ]
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="blur-circle blur-circle-primary w-[400px] h-[400px] bottom-0 -right-64"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Try Disamina AI Now</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience how our AI can help with your hiring process. Enter any job role below 
            to see a sample job description and candidate matching.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-10">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Enter a job role (e.g., Software Engineer, Marketing Manager)"
                className="pl-10 py-6 text-lg rounded-md"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
              />
            </div>
            <Button 
              type="submit" 
              className="bg-primary hover:bg-primary-dark text-white py-6 px-6"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="animate-pulse">Processing</span>
                  <span className="ml-2">...</span>
                </>
              ) : (
                <>
                  Generate
                  <Zap className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </form>

          {showDemo && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in">
              <div className="bg-primary text-white p-4 sm:p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{demoContent.jobTitle}</h3>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">AI Generated</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Job Description</h4>
                    <p className="text-gray-600 mb-4">{demoContent.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-medium mb-2">Required Skills:</h5>
                      <div className="flex flex-wrap gap-2">
                        {demoContent.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Top Candidates</h4>
                    <div className="space-y-3">
                      {demoContent.candidates.map((candidate) => (
                        <div 
                          key={candidate.name}
                          className="border border-gray-200 rounded-lg p-3 hover:border-primary transition-colors"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{candidate.name}</span>
                            <span className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-full font-medium">
                              {candidate.match}% Match
                            </span>
                          </div>
                          <div className="flex text-sm text-gray-500">
                            <span className="mr-4">{candidate.skills}/5 Skills</span>
                            <span>{candidate.experience} Experience</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button className="bg-primary hover:bg-primary-dark text-white">
                    Start Using Disamina AI
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {!showDemo && !loading && (
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-8 text-center">
              <MessageSquare className="w-12 h-12 text-primary/30 mx-auto mb-4" />
              <p className="text-gray-500">
                Enter a job role above to see Disamina AI in action
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
