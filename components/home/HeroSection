import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Gradient Shapes */}
      <div className="absolute top-0 -left-1/3 w-2/3 h-full bg-gradient-to-r from-blue-50 to-white transform -skew-x-12 opacity-70" />
      <div className="absolute top-0 -right-1/2 w-2/3 h-full bg-gradient-to-l from-purple-50 to-white transform skew-x-12 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl text-left">
          <div className="space-y-8 animate-fade-in">
            {/* Headlines */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                Never forget{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  where you put things
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed font-light">
                TRACE uses AI-powered smart glasses to automatically track your daily interactions and help you find anything you've misplaced.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Eye className="w-5 h-5 text-blue-600 mr-2" />
                <span>Automatic object tracking</span>
              </div>
              <div className="flex items-center">
                <Search className="w-5 h-5 text-blue-600 mr-2" />
                <span>Searchable memory log</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/25 group">
                <Link to={createPageUrl("Services")}>
                  Get Your TRACE System
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
