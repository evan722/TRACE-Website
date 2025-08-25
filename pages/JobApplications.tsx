import React, { useState, useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Upload, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function JobApplicationPage() {
    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        phone: string;
        coverLetter: string;
        resume: File | null;
    }>({
        name: "",
        email: "",
        phone: "",
        coverLetter: "",
        resume: null
    });
    const [submitted, setSubmitted] = useState(false);
    const [position, setPosition] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const pos = params.get('position');
        if (pos === 'marketing-lead') setPosition('Marketing Lead');
        else if (pos === 'fullstack-dev') setPosition('Full Stack Developer');
        else setPosition('Open Position');
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Application submitted:", formData);
        setSubmitted(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, resume: e.target.files ? e.target.files[0] : null });
    };

    if (submitted) {
        return (
            <div className="bg-white text-gray-900 min-h-screen">
                <Navbar />
                <main className="pt-32 pb-20">
                    <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="w-8 h-8 text-green-600" />
                        </div>
                        <h1 className="text-4xl font-bold mb-4">Application Submitted!</h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Thank you for your interest in the {position} position. We'll review your application and get back to you soon.
                        </p>
                        <Button asChild className="bg-blue-600 hover:bg-blue-700">
                            <Link to={createPageUrl("Careers")}>Back to Careers</Link>
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="bg-white text-gray-900 min-h-screen">
            <Navbar />
            <main className="pt-32 pb-20">
                <div className="max-w-2xl mx-auto px-6 lg:px-8">
                    <div className="mb-8">
                        <Link to={createPageUrl("Careers")} className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Careers
                        </Link>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-4xl font-bold mb-2">Apply for {position}</h1>
                        <p className="text-lg text-gray-600">We're excited to learn more about you. Please fill out the form below.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Full Name *</label>
                                <Input name="name" value={formData.name} onChange={handleInputChange} required className="h-12" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email Address *</label>
                                <Input name="email" type="email" value={formData.email} onChange={handleInputChange} required className="h-12" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Phone Number</label>
                            <Input name="phone" type="tel" value={formData.phone} onChange={handleInputChange} className="h-12" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Cover Letter *</label>
                            <Textarea 
                                name="coverLetter" 
                                value={formData.coverLetter} 
                                onChange={handleInputChange} 
                                placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                                rows={6}
                                required 
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Resume/CV *</label>
                            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                <input 
                                    type="file" 
                                    onChange={handleFileChange}
                                    accept=".pdf,.doc,.docx"
                                    className="hidden"
                                    id="resume-upload"
                                    required
                                />
                                <label htmlFor="resume-upload" className="cursor-pointer">
                                    <span className="text-blue-600 font-medium">Click to upload</span>
                                    <span className="text-gray-500"> or drag and drop</span>
                                </label>
                                <p className="text-sm text-gray-400 mt-1">PDF, DOC, DOCX up to 10MB</p>
                                {formData.resume && (
                                    <p className="text-sm text-green-600 mt-2">✓ {formData.resume.name}</p>
                                )}
                            </div>
                        </div>

                        <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg">
                            Submit Application
                        </Button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
