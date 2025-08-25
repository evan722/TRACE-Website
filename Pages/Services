import React, { useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Download, Star } from "lucide-react";
import ContactSection from "../components/home/ContactSection";

export default function ServicesPage() {
    const devices = [
        {
            name: "TRACE Body Camera",
            price: "199",
            originalPrice: "249",
            description: "Lightweight body camera with all-day battery life",
            features: [
                "8-hour battery life",
                "Auto-start recording",
                "Water resistant design",
                "Magnetic mounting system",
                "HD video capture"
            ],
            image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=400&h=400&fit=crop",
            popular: false
        },
        {
            name: "Brilliant Labs Smart Glasses",
            price: "349",
            originalPrice: "399",
            description: "Stylish smart glasses with advanced AI detection",
            features: [
                "All-day battery (12+ hours)",
                "Prescription lens compatible",
                "Voice activation",
                "Ultra-lightweight design",
                "Advanced object recognition"
            ],
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
            popular: true
        }
    ];

    const subscription = {
        name: "TRACE Premium",
        price: "4.99",
        description: "Unlock advanced features and extended storage",
        features: [
            "Unlimited object tracking",
            "90-day memory storage",
            "Advanced search filters",
            "Family sharing (up to 4 devices)",
            "Priority support"
        ]
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('section') === 'contact') {
            document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const handlePurchase = (deviceName) => {
        // In a real app, this would integrate with a payment processor
        alert(`Redirecting to purchase ${deviceName}...`);
    };

    return (
        <div className="bg-white text-gray-900">
            <Navbar />
            <main>
                {/* Services Hero */}
                <section className="pt-32 pb-20 text-left bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">Get Your TRACE System</h1>
                        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl">
                            Choose your TRACE device and start never losing your important items again. 
                            Free app included with every purchase.
                        </p>
                    </div>
                </section>

                {/* Device Options */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Choose Your Device</h2>
                            <p className="text-lg text-gray-600">Both devices work with the same free TRACE app</p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {devices.map((device) => (
                                <div key={device.name} className={`relative p-8 border-2 rounded-3xl transition-all duration-300 hover:shadow-xl ${device.popular ? 'border-blue-600 shadow-lg' : 'border-gray-200 hover:border-blue-300'}`}>
                                    {device.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center">
                                                <Star className="w-4 h-4 mr-1 fill-current" />
                                                MOST POPULAR
                                            </span>
                                        </div>
                                    )}

                                    <div className="text-center mb-6">
                                        <img 
                                            src={device.image} 
                                            alt={device.name}
                                            className="w-32 h-32 object-cover rounded-2xl mx-auto mb-4"
                                        />
                                        <h3 className="text-2xl font-bold mb-2">{device.name}</h3>
                                        <p className="text-gray-600 mb-4">{device.description}</p>
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="text-4xl font-bold text-gray-900">${device.price}</span>
                                            <span className="text-xl text-gray-400 line-through">${device.originalPrice}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {device.features.map((feature) => (
                                            <li key={feature} className="flex items-center">
                                                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button 
                                        onClick={() => handlePurchase(device.name)}
                                        size="lg" 
                                        className={`w-full text-lg py-4 rounded-full group ${device.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                                    >
                                        Buy Now
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* App Download Section */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Download the TRACE App</h2>
                            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                The TRACE app is free on the Apple App Store. Set up your device, customize object tracking, and search your memory log.
                            </p>
                            <p className="text-sm text-gray-500 mb-8">(Android version coming soon)</p>
                        </div>

                        <div className="flex justify-center mb-12">
                            <a 
                                href="https://apps.apple.com/app/trace" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block hover:scale-105 transition-transform duration-200"
                            >
                                <img 
                                    src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
                                    alt="Download on the App Store"
                                    className="h-16"
                                />
                            </a>
                        </div>

                        {/* App Features */}
                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {[
                                { 
                                    title: "Easy Setup", 
                                    description: "Pair your TRACE device via Bluetooth with step-by-step instructions" 
                                },
                                { 
                                    title: "Custom Object Lists", 
                                    description: "Add items you want to track like keys, glasses, medication, or wallet" 
                                },
                                { 
                                    title: "Smart Search", 
                                    description: "Find anything instantly with text search or browse your timeline" 
                                }
                            ].map((feature, index) => (
                                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm">
                                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Subscription Section */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Upgrade to Premium</h2>
                            <p className="text-lg text-gray-600">Optional subscription to unlock extended features</p>
                        </div>

                        <div className="max-w-md mx-auto">
                            <div className="p-8 border border-gray-200 rounded-3xl text-center hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-2xl font-bold mb-2">{subscription.name}</h3>
                                <p className="text-gray-600 mb-6">{subscription.description}</p>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold">${subscription.price}</span>
                                    <span className="text-gray-600">/month</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {subscription.features.map((feature) => (
                                        <li key={feature} className="flex items-center">
                                            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                            <span className="text-left">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-4 rounded-full">
                                    Start Free Trial
                                </Button>
                                <p className="text-sm text-gray-500 mt-3">7-day free trial, cancel anytime</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Contact Section */}
                <section id="contact-form">
                    <ContactSection />
                </section>
            </main>
            <Footer />
        </div>
    );
}
