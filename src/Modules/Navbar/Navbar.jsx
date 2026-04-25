import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Modules", to: "modules" },
    { name: "Safety", to: "safety" },
    { name: "How It Works", to: "how-it-works" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-primary/5 py-3 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo Section */}
        <div 
          className="flex items-center gap-3 cursor-pointer group shrink-0 relative"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative w-11 h-11 flex items-center justify-center">
            {/* Solid Educational K Logo */}
            <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-md">
              <defs>
                <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'hsla(var(--primary), 1)' }} />
                  <stop offset="100%" style={{ stopColor: 'hsla(var(--secondary), 1)' }} />
                </linearGradient>
              </defs>
              {/* Shield Backdrop */}
              <path 
                d="M50 5 L85 20 L85 50 C85 70 70 85 50 95 C30 85 15 70 15 50 L15 20 L50 5 Z" 
                fill="url(#shieldGrad)"
              />
              {/* Knowledge-Growth K Style */}
              <g fill="white">
                {/* Vertical Pillar (Book Spine) */}
                <path d="M30 25 C35 25 35 75 30 75 L40 75 C45 75 45 25 40 25 Z" />
                {/* Upper Wing (Turning Page) */}
                <path d="M42 45 C55 35 65 25 70 25 L75 35 C65 35 55 45 42 55 Z" />
                {/* Lower Wing (Protecting Base) */}
                <path d="M42 50 C55 60 65 70 70 70 L75 60 C65 60 55 50 42 40 Z" />
              </g>
            </svg>
          </div>
          <div className="flex flex-col -space-y-1 relative">
            <span className="text-xl font-bold tracking-tighter text-foreground relative z-10">Kiddo<span className="text-primary">Shadow</span></span>
          </div>
        </div>

        {/* Center Links Capsule */}
        <div className="hidden lg:flex items-center bg-primary/5 border border-primary/5 rounded-full px-2 py-1.5 shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="px-6 py-2 rounded-full text-foreground/50 hover:text-primary hover:bg-card transition-all font-bold text-[13px] tracking-wide cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <Button
            variant="ghost"
            className="text-foreground/40 hover:text-primary hover:bg-primary/5 font-bold text-xs uppercase tracking-widest hidden xl:flex"
            onClick={() => window.location.href = "https://kiddoerp.xtown.in/login"}
          >
            School Login
          </Button>
          <Button
            className="calm-gradient text-white hover:scale-105 transition-all rounded-full px-8 py-6 font-bold shadow-xl shadow-primary/20 flex gap-2 group"
            onClick={onOpenDemo}
          >
            Get Free Demo
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground/70 p-2 hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-primary/5 shadow-2xl p-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/70 font-bold text-lg hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 pt-4 border-t border-primary/5">
              <Button
                className="w-full calm-gradient text-white py-7 rounded-2xl font-bold shadow-lg shadow-primary/10"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDemo();
                }}
              >
                Get Free Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
