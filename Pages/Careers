import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb, ArrowRight, User } from "lucide-react";

export default function CareersPage() {
    const values = [
        { icon: Lightbulb, title: "Innovation First", description: "We push boundaries and embrace cutting-edge AI technologies." },
        { icon: Users, title: "Collaborative Culture", description: "Great ideas come from diverse perspectives working together." },
        { icon: Target, title: "Impact Driven", description: "Every solution we build creates real value for businesses." }
    ];

    const cofounders = [
        {
            name: "Alex Chen",
            role: "Co-Founder & CEO",
            bio: "Former VP of Engineering at major tech company. 10+ years building AI systems at scale.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
        },
        {
            name: "Sarah Johnson", 
            role: "Co-Founder & CTO",
            bio: "PhD in Machine Learning from Stanford. Published researcher in neural networks and automation.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=400&h=400&fit=crop&crop=face"
        }
    ];

    const openPositions = [
        { title: "Marketing Lead", location: "Remote", type: "Full-time", id: "marketing-lead" },
        { title: "Full Stack Developer", location: "San Francisco, CA", type: "Full-time", id: "fullstack-dev" },
    ];

    return (
        <div className="bg-white text-gray-900">
            <Navbar />
            <main>
                {/* Careers Hero */}
                <section className="pt-32 pb-20 text-left bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">Join Our Team</h1>
                        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl">We're building the future of AI-powered business solutions. Join us in creating technology that transforms how companies operate.</p>
                    </div>
                </section>

                {/* Meet the Founders */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-left mb-16 max-w-2xl">
                            <h2 className="text-3xl lg:text-4xl font-bold">Meet the Founders</h2>
                            <p className="text-lg text-gray-600 mt-4">Led by experienced technologists who've built and scaled AI systems for millions of users.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
                            {cofounders.map((founder) => (
                                <div key={founder.name} className="group">
                                    <div className="relative overflow-hidden rounded-2xl bg-gray-100 mb-6">
                                        <img 
                                            src={founder.image} 
                                            alt={founder.name}
                                            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                                    <p className="text-blue-600 font-medium mb-3">{founder.role}</p>
                                    <p className="text-gray-600 leading-relaxed">{founder.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-left mb-16 max-w-2xl">
                            <h2 className="text-3xl lg:text-4xl font-bold">Why Work at TRACE?</h2>
                            <p className="text-lg text-gray-600 mt-4">Join a team where your work makes a tangible impact. We foster a culture of learning, collaboration, and ambition.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {values.map((value) => (
                                <div key={value.title} className="p-8 group hover:bg-white hover:shadow-lg transition-all duration-300 rounded-2xl">
                                    <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                                        <value.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Open Positions</h2>
                            <p className="text-lg text-gray-600 mt-4">We're hiring passionate individuals to join our growing team.</p>
                        </div>
                        <div className="space-y-4 max-w-4xl mx-auto">
                            {openPositions.map((job) => (
                                <div key={job.title} className="p-6 border border-gray-200 bg-white rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center hover:border-blue-500 hover:shadow-lg transition-all duration-300 group">
                                    <div>
                                        <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">{job.title}</h3>
                                        <p className="text-gray-600 mt-1">{job.location} &middot; {job.type}</p>
                                    </div>
                                    <Button asChild className="mt-4 md:mt-0 bg-gray-900 hover:bg-gray-800 group-hover:bg-blue-600">
                                        <Link to={createPageUrl("JobApplication") + `?position=${job.id}`}>Apply Now</Link>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
