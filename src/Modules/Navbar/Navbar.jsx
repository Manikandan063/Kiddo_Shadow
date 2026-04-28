import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import navLogo from "@/assets/Navbar_Logo.png";

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-primary/5 py-2 shadow-sm" : "bg-transparent py-3"}`}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo Section */}
        <div 
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative h-10 md:h-24">
            <img 
              src={navLogo} 
              alt="Kiddo Shadow Logo" 
              className="h-full w-auto object-contain transition-transform group-hover:scale-105 duration-500"
            />
          </div>
        </div>

        {/* Navigation Links - Center */}
        <div className="hidden md:flex items-center bg-primary/5 border border-primary/5 rounded-full px-8 py-2.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-100}
              className="px-4 py-1.5 rounded-full text-[13px] font-bold text-foreground/60 hover:text-primary hover:bg-primary/5 transition-all cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <Button
            variant="ghost"
            className="text-foreground/40 hover:text-primary hover:bg-primary/5 font-bold text-[11px] uppercase tracking-widest hidden xl:flex"
            onClick={() => window.location.href = "https://kiddoerp.xtown.in/login"}
          >
            School Login
          </Button>

          <Button
            className="calm-gradient text-white px-6 py-5 rounded-xl font-bold text-xs shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95"
            onClick={onOpenDemo}
          >
            Get Free Demo
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground/70 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
