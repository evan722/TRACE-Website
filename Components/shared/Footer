import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold">TRACE</h3>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Empowering businesses with cutting-edge AI solutions that drive innovation and growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300 group" aria-label={social.label}>
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <div className="space-y-3">
              <Link to={createPageUrl("Home")} className="block text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to={createPageUrl("Services")} className="block text-gray-400 hover:text-white transition-colors">Services</Link>
              <Link to={createPageUrl("Careers")} className="block text-gray-400 hover:text-white transition-colors">Careers</Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} TRACE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
