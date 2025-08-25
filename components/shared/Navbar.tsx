import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: createPageUrl("Services") },
    { name: "Careers", href: createPageUrl("Careers") },
  ];

  const getLinkClass = (href: string) => {
    return location.pathname === href
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium";
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to={createPageUrl("Home")} className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-900 tracking-tight">
              TRACE
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} className={getLinkClass(link.href)}>
                  {link.name}
                </Link>
              ))}
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg">
                <Link to={createPageUrl("Services") + "?section=contact"}>Book a Demo</Link>
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-900 p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full">
               <Link to={createPageUrl("Services") + "?section=contact"} onClick={() => setMobileMenuOpen(false)}>Book a Demo</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
