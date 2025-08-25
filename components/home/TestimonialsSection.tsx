import React from "react";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Jennifer Martinez",
            role: "Working Mother",
            company: "San Francisco, CA",
            content: "TRACE has been life-changing for my morning routine. I used to spend 10 minutes every day looking for my keys - now I just search 'keys' and instantly see where I left them.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=400&h=400&fit=crop&crop=face"
        },
        {
            name: "Robert Chen",
            role: "Senior Executive",
            company: "New York, NY",
            content: "As someone who travels constantly, TRACE helps me keep track of everything in hotel rooms. I can search my memory log and see exactly where I put my charger or medication.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
        },
        {
            name: "Maria Rodriguez",
            role: "Caregiver",
            company: "Austin, TX",
            content: "Helping my elderly mother stay independent has been so much easier with TRACE. She can find her glasses, medication, and important documents without calling me for help.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-2xl mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                        What Our Users Say
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Join thousands of people who never lose their important items again.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            {/* Quote Icon */}
                            <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                                <Quote className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                            </div>

                            {/* Rating */}
                            <div className="flex mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            {/* Content */}
                            <blockquote className="text-gray-700 mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center">
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Usage Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { stat: "10K+", label: "Active Users" },
                        { stat: "500K+", label: "Items Tracked Daily" },
                        { stat: "95%", label: "Items Found" },
                        { stat: "2 min", label: "Average Search Time" }
                    ].map((item, index) => (
                        <div key={index} className="group">
                            <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                {item.stat}
                            </div>
                            <div className="text-gray-600">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
