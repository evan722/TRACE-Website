import React from "react";
import { Eye, Search, Clock } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Content */}
                    <div className="max-w-xl">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                            What is TRACE?
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            TRACE is an AI-powered memory support system that helps you remember where you placed items and what actions you've taken throughout your day.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Using lightweight smart glasses and an easy-to-use app, TRACE automatically creates a searchable log of your daily activities by detecting moments when you interact with important objects.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Never spend time looking for your keys, glasses, medication, or wallet again.
                        </p>
                    </div>

                    {/* Right - Visual */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                                    <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                                        <Eye className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Smart Detection</h3>
                                    <p className="text-sm text-gray-600">Automatically recognizes when you interact with objects</p>
                                </div>
                                <div className="h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300" />
                            </div>
                            <div className="space-y-6 mt-12">
                                <div className="h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-lg transform -rotate-2 hover:-rotate-6 transition-transform duration-300" />
                                <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                                    <div className="w-12 h-12 bg-green-100 group-hover:bg-green-600 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                                        <Search className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Memory Search</h3>
                                    <p className="text-sm text-gray-600">Find anything with simple voice or text search</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Floating elements */}
                        <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse" />
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
