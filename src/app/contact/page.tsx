"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, ArrowRight } from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Card, CardContent } from "@/app/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import SeoHead from "@/app/components/shared/SeoHead";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    position: "",
    phone: "",
    website: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubjectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    var new_contact = {
      "First name": (formData.name.split(" ")[0] || "").trim(),
      "Last name": (formData.name.split(" ")[1] || "").trim(),
      "Email": formData.email,
      "Alternate contact number": formData.phone,
      "company": {
        "Name": formData.company,
        "Website": formData.website
      }
    };

    var identifier = new_contact.Email;
    await window.fwcrm.identify(identifier, new_contact);

    // Simulate form submission
    setLoading(false);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      position: "",
      phone: "",
      website: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
     
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">How Disamina can help you?</h1>
              <p className="text-l mb-4">
                Ready to connect? Our team is excited to collaborate with you and offer tailored solutions to meet your needs. Please don’t hesitate to reach out.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 md:py-24" id="contact">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-4">For general inquiries and support</p>
                  <a href="mailto:info@Disamina AI.com" className="text-primary font-medium hover:underline">
                    support@disamina.ai
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-4">Mon - Fri, 9:00 AM - 6:00 PM EST</p>
                  <a href="tel:+1-800-123-4567" className="text-primary font-medium hover:underline">
                    +91 9448408016
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-4">Get immediate assistance</p>
                  <Button className="bg-primary hover:bg-primary-dark text-white">
                    Start Chat <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
                <p className="text-gray-600 mb-8">
                  Disamina team is always there to help you with your queries. Please fill the form to get in touch with us.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Organization Name *
                      </label>
                      <Input
                        required
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enter your Organization name"
                      />
                    </div>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Position *
                      </label>
                      <Input
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                        placeholder="Enter your position"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                        Website *
                      </label>
                      <Input
                        required
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="Enter your Organization name"
                      />
                    </div>
                    {/* <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Enquiry Type *
                      </label>
                      <Select
                        value={formData.subject}
                        onValueChange={handleSubjectChange}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Enquiry Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="demo">Request a Demo</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="sales">Sales Question</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        </SelectContent>
                      </Select>
                    </div> */}
                  </div>

                  {/* <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Tell us more about your query *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                      className="resize-none"
                    />
                  </div> */}

                  <Button type="submit" className="bg-primary hover:bg-primary-dark text-white px-8" disabled={loading}>
                    {loading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>

              {/* Map & Office Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
                <p className="text-gray-600 mb-8">
                  Stop by our headquarters for a coffee and a demo of our AI recruitment solutions.
                </p>

                <div className="mb-8 h-80 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Placeholder for Google Map - would be implemented with Google Maps API */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <MapPin className="h-10 w-10 mx-auto mb-2" />
                      <p>Google Map would be displayed here</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Headquarters</h3>
                      <p className="text-gray-600">
                        Bajrangpuri<br />
                        Near Patligram Apartment<br />
                        Patna - 800007<br />
                        (Bihar)
                      </p>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quick answers to commonly asked questions
              </p>
            </div>

            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  q: "How quickly will you respond to my inquiry?",
                  a: "We aim to respond to all inquiries within 24 business hours."
                },
                {
                  q: "Can I schedule a demo of your platform?",
                  a: "Absolutely! Use our contact form or call us directly to schedule a personalized demo."
                },
                {
                  q: "Do you offer implementation support?",
                  a: "Yes, all our plans include implementation support to ensure your success."
                },
                {
                  q: "How can I become a partner?",
                  a: "Please reach out to us via the contact form and select 'Partnership Opportunity' as the subject."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Transform your hiring process with Disamina AI's AI-powered solutions.
            </p>
            <Button
              onClick={() => {
                if (window.Calendly) {
                  window.Calendly.initPopupWidget({
                    url: 'https://calendly.com/disamina?hide_gdpr_banner=1',
                  });
                } else {
                  console.error('Calendly script not loaded.');
                }
                return false;
              }}
              size="lg" className="bg-white text-primary hover:bg-gray-100">
              Book a Demo Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />

    </div>
  );
};

export default Contact;
