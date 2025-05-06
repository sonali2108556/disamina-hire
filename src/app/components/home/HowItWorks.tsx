
import { ArrowDown } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Post a Job / Add your JD",
      description:
        "Create a job posting or upload your existing job description. Our AI will analyze and optimize it for better candidate matching.",
      image: "/images/Post a Job_home.webp",
      icon: "📋"
    },
    {
      number: "02",
      title: "Disamina AI screens and assesses candidates",
      description:
        "Our AI technology automatically screens resumes, ranks candidates based on fit, and administers custom assessments.",
      image: "/images/AI Screening_home.webp",
      icon: "🤖"
    },
    {
      number: "03",
      title: "You hire top talent, fast",
      description:
        "Review AI-vetted candidates, conduct final interviews, and make data-driven hiring decisions in record time.",
      image: "images/Funnel_NoBG_Disamina.png",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform simplifies your hiring process in just three easy steps,
            saving you time and helping you find better candidates.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-24 bottom-24 w-0.5 bg-gray-200 -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24 relative">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-8 md:gap-12`}
              >
                {/* Step content */}
                <div className="lg:w-5/12">
                  <div
                    className={`text-sm font-semibold inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full ${index === 0 ? "bg-blue-50 text-primary" :
                      index === 1 ? "bg-purple-50 text-purple-600" :
                        "bg-green-50 text-green-600"
                      }`}
                  >
                    <span>Step {step.number}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  {/* <ul className="space-y-2">
                    {[1, 2, 3].map((item) => (
                      <li key={item} className="flex items-start">
                        <Check className={`h-5 w-5 mr-2 mt-0.5 ${
                          index === 0 ? "text-primary" : 
                          index === 1 ? "text-purple-600" : 
                          "text-green-600"
                        }`} />
                        <span className="text-gray-600">Feature point {item} for this step</span>
                      </li>
                    ))}
                  </ul> */}
                </div>

                {/* Center icon - visible only on lg screens */}
                <div className="lg:w-2/12 relative hidden lg:block">
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center z-10 ${index === 0 ? "bg-blue-100 text-primary" :
                      index === 1 ? "bg-purple-100 text-purple-600" :
                        "bg-green-100 text-green-600"
                      }`}
                  >
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                </div>

                {/* Step illustration */}
                <div className="lg:w-5/12">
                  <div className={`bg-gray-100 rounded-lg aspect-video flex items-center justify-center ${index % 2 === 0 ? "lg:rounded-l-none" : "lg:rounded-r-none"
                    }`}>
                    {/* Placeholder for step illustration */}
                    <div className="text-center">
                      <img src={step.image} className="h-60" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-24 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Hiring Process?</h3>
          <a href="https://portal.disamina.ai/signin" target="_blank" rel="noreferrer noopener">
            <button className="btn-primary inline-flex items-center">
              Get Started Today
              <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
