"use client";


import { useState } from "react";
import { Check, X } from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import { Button } from "@/app/components/ui/button";
import { Switch } from "@/app/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import Link from "next/link";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [currency, setCurrency] = useState<"inr" | "usd">("inr");

  const formatPrice = (price: number) => {
    if (currency === "inr") {
      return `₹${price}`;
    } else {
      // Convert INR to USD (approximate conversion)
      const usdPrice = Math.round(price / 80);
      return `$${usdPrice}`;
    }
  };

  const getDiscountedPrice = (price: number) => {
    return billingCycle === "annual" ? Math.round(price * 0.8) : price;
  };

  // Plan features
  const plans = [
    {
      name: "Base",
      description: "Free hiring essentials to get you started.",
       monthlyPrice: 0,
      features: [
        "Unlimited jobs",
        "AI JD generator",
        "50 applications",
        "AI screening",
        "AI profile summary",
        "10 assessments",
        "Activity report",
        "Detailed report",
        "2 users"
      ],
      notIncluded: [
       
      ],
      cta: "Try Now",
      ctaLink: "https://portal.disamina.ai/",
      popular: false
    },
    {
      name: "Standard",
      description: "Enhanced hiring tools for growing teams.",
      monthlyPrice: 12999,
      features: [
        "Unlimited jobs",
        "AI JD generator",
        "500 applications",
        "AI screening",
        "AI profile summary",
        "200 assessments",
        "Premium assessment library",
        "Activity report",
        "Detailed report",
        "50 video interview",
        "5 users"
      ],
      notIncluded: [
       
      ],
      cta: "Try Now",
      ctaLink: "https://portal.disamina.ai/",
      popular: false
    },
    {
      name: "Advanced",
      description: "Comprehensive AI hiring solutions for scaling businesses.",
      monthlyPrice: 48999,
      features: [
        "Unlimited jobs",
        "AI JD generator",
        "2000 applications",
        "AI screening",
        "AI profile summary",
        "500 assessments",
        "Premium assessment library",
        "Activity report",
        "Detailed report",
        "AI proctoring",
        "Image capture before assessment",
        "Image capture during assessment",
        "ID verification",
        "100 video interview",
        "10 users"
      ],
      notIncluded: [
        
      ],
      cta: "Try Now",
      ctaLink: "https://portal.disamina.ai/",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Tailored to Your Needs",
      monthlyPrice: 0,
      customQuote: "Custom Quote",
      features: [
        "Customised solution",
        "Unlimited jobs",
        "AI JD generator",
        "Unlimited applications",
        "AI screening",
        "AI profile summary",
        "Unlimited assessments",
        "Premium assessment library",
        "Activity report",
        "Detailed report",
        "AI proctoring",
        "Image capture before assessment",
        "Image capture during assessment",
        "ID verification",
        "Unlimited video interview",
        "Unlimited users",
        "Advanced support"
      ],
      notIncluded: [],
      cta: "Talk to sales",
      ctaLink: "https://calendly.com/disamina/discussion",
      popular: false
    }
  ];
  const allFeatures = Array.from(
    new Set(plans.flatMap((plan) => [...plan.features, ...plan.notIncluded]))
  );
  const groupedFeatures = [
    { key: "jobs", label: "Jobs" },
    { key: "jd generator", label: "AI JD Generator" },
    { key: "applications", label: "Applications" },
    { key: "ai screening", label: "AI Screening" },
    { key: "profile summary", label: "AI Profile Summary" },
    { key: "assessments", label: "Assessments" },
    { key: "premium assessment library", label: "Premium Assessment Library" },
    { key: "activity report", label: "Activity Report" },
    { key: "detailed report", label: "Detailed Report" },
    { key: "video interview", label: "Video Interview" },
    { key: "image capture before assessment", label: "Image Capture Before Assessment" },
    { key: "image capture during assessment", label: "Image Capture During Assessment" },
    { key: "id verification", label: "ID Verification" },
    { key: "ai proctoring", label: "AI Proctoring" },
    { key: "users", label: "User Accounts" },
  ];

  const extractValue = (featureLabel: any, key: any) => {
    if (!featureLabel.toLowerCase().includes(key)) return null;

    const match = featureLabel.match(/(\d+|unlimited)/i);
    return match ? match[1] : true;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Flexible Pricing Plans</h1>
              <p className="text-xl mb-8">
                Choose the right plan for your organization's recruitment needs and budget
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                {/* Currency Toggle */}
                {/* <Tabs
                  defaultValue="usd"
                  value={currency}
                  onValueChange={(value) => setCurrency(value as "usd" | "inr")}
                  className="bg-white/10 backdrop-blur-sm rounded-full p-1"
                >
                  <TabsList className="bg-transparent">
                    <TabsTrigger value="usd" className="data-[state=active]:bg-white data-[state=active]:?text-primary: text-white">
                      USD ($)
                    </TabsTrigger>
                    <TabsTrigger value="inr" className="data-[state=active]:bg-white data-[state=active]:?text-primary: text-white">
                      INR (₹)
                    </TabsTrigger>
                  </TabsList>
                </Tabs> */}

                {/* {/* Monthly/Annual Toggle *
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full p-3">
                  <span className={billingCycle === "monthly" ? "font-medium" : "text-white/70"}>Monthly</span>
                  <Switch
                    checked={billingCycle === "annual"}
                    onCheckedChange={(checked) => setBillingCycle(checked ? "annual" : "monthly")}
                    className="data-[state=checked]:bg-secondary"
                  />

                  <span className={billingCycle === "annual" ? "font-medium" : "text-white/70"}>
                    Annual <span className="text-xs rounded-full bg-secondary px-2 py-0.5 ml-1">Save 20%</span>
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {plans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`bg-white border rounded-2xl shadow-sm overflow-hidden relative ${plan.popular ? "transform md:-translate-y-4 border-primary" : ""
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 uppercase font-semibold rounded-bl-lg">
                      Most Popular
                    </div>
                  )}

                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>

                    {plan.customQuote ? <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">{plan.customQuote}</span>

                      </div>
                    </div>
                      :
                      <div className="mb-6">
                        <div className="flex items-baseline">
                          <span className="text-4xl font-bold">{formatPrice(getDiscountedPrice(plan.monthlyPrice))}</span>
                          <span className="text-gray-600 ml-2">/ month</span>
                        </div>
                        {billingCycle === "annual" && (
                          <p className="text-green-600 text-sm mt-1">
                            Billed annually ({formatPrice(getDiscountedPrice(plan.monthlyPrice) * 12)})
                          </p>
                        )}
                      </div>}
                    <Link href={plan.ctaLink}>
                      <Button
                        className={`w-full ${plan.popular ? "bg-primary hover:bg-primary-dark" : ""}`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        {plan.cta}
                      </Button>
                    </Link>

                  </div>

                  <div className="border-t p-6 md:p-8">
                    <h4 className="font-semibold mb-4">What's included:</h4>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.notIncluded.length > 0 && (
                      <>
                        <h4 className="font-semibold mb-4 text-gray-500">Not included:</h4>
                        <ul className="space-y-3 text-gray-500">
                          {plan.notIncluded.map((feature, fidx) => (
                            <li key={fidx} className="flex items-start gap-3">
                              <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Feature Comparison</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Compare all features across our pricing plans
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-4 px-6 text-left font-semibold text-gray-600 min-w-[200px]">
                      Features
                    </th>
                    {plans.map((plan) => (
                      <th key={plan.name} className="py-4 px-6 text-center font-semibold">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {groupedFeatures.map(({ key, label }) => (
                    <tr key={key} className="border-b">
                      <td className="py-4 px-6 font-medium text-gray-700">{label}</td>
                      {plans.map((plan) => {
                        const match = plan.features.find((f) => f.toLowerCase().includes(key));
                        const notIncludedMatch = plan.notIncluded.find((f) =>
                          f.toLowerCase().includes(key)
                        );

                        let value;

                        if (match) {
                          value = extractValue(match, key);
                        } else if (plan.name === "Enterprise") {
                          value = "Unlimited";
                        } else {
                          value = null;
                        }

                        return (
                          <td key={plan.name} className="py-4 px-6 text-center">
                            {value === true ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : value ? (
                              <span className="text-sm text-gray-800">{value}</span>
                            ) : (
                              <X className="h-5 w-5 text-gray-400 mx-auto" />
                            )}
                          </td>
                        );
                      })}

                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Got questions? We've got answers.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  q: "Can I switch plans later?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be immediately available, and we'll prorate your billing. When downgrading, the changes will take effect at the start of your next billing cycle."
                },
                {
                  q: "Is there a free plan available?",
                  a: "Yes, we have a base plan which is free to get started. No credit card is required to start."
                },
                {
                  q: "How do I know which plan is right for my company?",
                  a: "It depends on your hiring volume and needs. The base plan works well for companies hiring fewer than 10 people per month. The Standard and Advanced plans are ideal for medium-sized businesses with regular hiring needs. Enterprise is designed for large organizations with custom requirements."
                },
                {
                  q: "Can I customize the features in my plan?",
                  a: "The Enterprise plan offers full customization options. For Standard and Advanced plans, you can add certain individual features at an additional cost. Contact our sales team to discuss your specific needs."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major payment methods such as UPI, net banking, credit & debit cards, and bank transfers for all plans. Enterprise customers can also be invoiced according to their company's procurement processes."
                }
              ].map((faq, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-bold mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
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
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://portal.disamina.ai/signin" target="_blank" rel="noreferrer noopener">

                <Button size="lg" className="bg-white text-primary hover:bg-white-10">
                  Start Free Trial
                </Button>
              </a>
              <Button onClick={() => {
                if (window.Calendly) {
                  window.Calendly.initPopupWidget({
                    url: 'https://calendly.com/disamina?hide_gdpr_banner=1',
                  });
                } else {
                  console.error('Calendly script not loaded.');
                }
                return false;
              }} size="lg" variant="outline" className="border-white text-primary hover:bg-white/10  hover:text-white">
                Book a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />

    </div >
  );
};

export default Pricing;
