import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Sun, Moon, Sparkles, LogIn, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

import navbarLogo from "@/assets/Navbar_Logo.png";

const Navbar = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const isDarkTheme = document.documentElement.classList.contains('dark');
    setIsDark(isDarkTheme);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Modules", to: "features" },
    { name: "Safety", to: "safety" },
    { name: "How It Works", to: "how-it-works" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-white/90 dark:bg-[#0A0A0B]/90 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-3xl py-3 px-8 flex items-center justify-between shadow-2xl transition-all duration-500">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110">
               <img src={navbarLogo} alt="KiddoShadow Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_8px_hsla(var(--primary)/0.2)]" />
            </div>
            <span className="text-xl font-black tracking-tight text-[#1A1A1B] dark:text-white uppercase">
              KIDDO<span className="text-primary">SHADOW</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-100}
                className="text-[11px] font-black text-[#1A1A1B]/60 dark:text-white/40 hover:text-primary transition-all cursor-pointer tracking-[0.2em] uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="https://kiddoerp.xtown.in/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] font-black text-[#1A1A1B]/40 dark:text-white/30 hover:text-primary transition-all uppercase tracking-widest group"
            >
              <LogIn size={16} />
              Portal
            </a>

            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-2xl bg-[#F4F4F5] dark:bg-white/5 flex items-center justify-center text-[#1A1A1B] dark:text-white hover:bg-[#E4E4E7] dark:hover:bg-white/10 transition-all"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Button
              className="h-12 px-10 rounded-2xl font-black text-[11px] uppercase tracking-[0.15em] bg-primary text-white hover:opacity-90 hover:scale-[1.02] transition-all active:scale-95 border-none shadow-xl shadow-primary/30"
              onClick={onOpenDemo}
            >
              Get Demo
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-4 relative z-10">
            <button 
              className="text-foreground w-10 h-10 flex items-center justify-center bg-foreground/5 rounded-xl border border-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 w-full h-screen bg-background z-[60] flex flex-col p-10 lg:hidden"
          >
            <div className="flex items-center justify-between mb-20">
              <span className="text-xl font-black text-primary">KIDDO.</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground font-black text-4xl hover:text-primary transition-colors tracking-tighter uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <Button 
                className="w-full h-16 bg-primary text-white text-lg font-black rounded-2xl border-none" 
                onClick={() => {
                  onOpenDemo();
                  setIsMobileMenuOpen(false);
                }}
              >
                Get Free Demo
              </Button>
              <a href="https://kiddoerp.xtown.in/login" className="text-center py-4 text-foreground/40 font-black uppercase tracking-widest text-sm">
                School Portal
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
