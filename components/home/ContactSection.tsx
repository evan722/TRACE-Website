import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-md">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Questions about TRACE?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Get in touch with our team to learn more about TRACE or get help setting up your memory support system.
            </p>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Free shipping on all orders</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Customer support via email & chat</span>
              </div>
            </div>
          </div>
          
          <div>
            {submitted ? (
              <div className="text-center p-8 border border-green-200 bg-green-50 rounded-2xl">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 p-8 border border-gray-100 rounded-2xl shadow-lg bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="h-12" required />
                  <Input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} className="h-12" required />
                </div>
                <Textarea name="message" placeholder="How can we help you with TRACE?" rows={5} value={formData.message} onChange={handleInputChange} required />
                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full text-lg font-medium group">
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
