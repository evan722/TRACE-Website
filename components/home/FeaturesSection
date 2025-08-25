import React from "react";
import { Eye, Smartphone, Search, Shield, Clock, Battery } from "lucide-react";

export default function FeaturesSection() {
    const features = [
        {
            icon: Eye,
            title: "Automatic Object Detection",
            description: "Smart glasses automatically detect when you interact with keys, glasses, medication, and other important items."
        },
        {
            icon: Search,
            title: "Intelligent Search",
            description: "Find anything instantly by searching for objects, locations, or timeframes in your personal memory log."
        },
        {
            icon: Clock,
            title: "Timeline View",
            description: "Browse through your day chronologically to see exactly when and where you interacted with items."
        },
        {
            icon: Shield,
            title: "Privacy First",
            description: "All data is processed locally on your device. Your personal memories never leave your control."
        },
        {
            icon: Battery,
            title: "All-Day Battery",
            description: "Lightweight smart glasses with all-day battery life that won't interfere with your daily routine."
        },
        {
            icon: Smartphone,
            title: "Easy Setup",
            description: "Simple app setup with step-by-step instructions to pair your glasses and customize object tracking."
        }
    ];

    const steps = [
        { 
            step: "1", 
            title: "Get Your Hardware", 
            description: "Choose between our body camera or Brilliant Labs smart glasses to start tracking your daily interactions." 
        },
        { 
            step: "2", 
            title: "Download the App", 
            description: "Install the free TRACE app from the App Store and pair your device with simple Bluetooth setup." 
        },
        { 
            step: "3", 
            title: "Live Your Life", 
            description: "Wear your TRACE device and go about your day - it automatically tracks your interactions in the background." 
        },
        { 
            step: "4", 
            title: "Search Your Memory", 
            description: "When you need to find something, open the app and search by object name, location, or time to replay any moment." 
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-2xl mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                        How TRACE Works
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        TRACE combines computer vision, AI, and intuitive design to create a seamless memory enhancement system.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {features.map((feature, index) => (
                        <div 
                            key={feature.title} 
                            className="group p-8 hover:bg-gray-50 rounded-2xl transition-all duration-300 hover:shadow-lg"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="w-12 h-12 bg-gray-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                                <feature.icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* How it works steps */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Get Started in 4 Simple Steps</h3>
                        <p className="text-lg text-gray-600">From unboxing to finding your first lost item in under 10 minutes</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((item, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-16 h-16 bg-blue-600 text-white text-xl font-bold rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.step}
                                </div>
                                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
