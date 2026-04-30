import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Sun, Moon, LogIn, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

import navbarLogo from "@/assets/Navbar_Logo.png";

const Navbar = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Check initial theme state safely
    if (typeof document !== 'undefined') {
      const isDarkTheme = document.documentElement.classList.contains('dark');
      setIsDark(isDarkTheme);
    }

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
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "circOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div 
          className={`relative group flex items-center justify-between transition-all duration-500 border rounded-[2rem] px-8 py-1.5 
            ${isScrolled 
              ? "bg-white/70 dark:bg-[#0A0A0B]/70 backdrop-blur-xl border-white/20 dark:border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.1),0_0_20px_rgba(255,140,50,0.05)] scale-[0.98]" 
              : "bg-white/40 dark:bg-[#0A0A0B]/40 backdrop-blur-md border-transparent shadow-none"
            }`}
        >
          {/* Subtle Orange Glow Backdrop for Scrolled State */}
          {isScrolled && (
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-[2rem] blur-sm opacity-50 -z-10 group-hover:opacity-100 transition-opacity duration-500" />
          )}
          
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer relative z-10 shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-40 h-12 sm:w-48 sm:h-14 lg:w-80 lg:h-24 flex items-center justify-center overflow-visible"
            >
               <img 
                 src={navbarLogo} 
                 alt="KiddoShadow Logo" 
                 className="w-full h-full object-contain filter drop-shadow-[0_0_15px_hsla(var(--primary)/0.25)] dark:drop-shadow-[0_0_15px_hsla(var(--primary)/0.25)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]" 
               />
            </motion.div>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 bg-black/5 dark:bg-white/5 rounded-full p-1 border border-white/10 dark:border-white/5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-100}
                spy={true}
                onSetActive={() => setActiveSection(link.to)}
                className={`relative px-5 py-2 text-[12px] font-bold transition-all cursor-pointer tracking-wider uppercase rounded-full
                  ${activeSection === link.to 
                    ? "text-[#1A1A1B] dark:text-white" 
                    : "text-[#1A1A1B]/40 dark:text-white/30 hover:text-primary dark:hover:text-primary"
                  }`}
              >
                {activeSection === link.to && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white dark:bg-white/10 shadow-sm rounded-full -z-10"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-5">
            <a 
              href="https://kiddoerp.xtown.in/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[11px] font-bold text-[#1A1A1B]/60 dark:text-white/40 hover:text-primary transition-all uppercase tracking-widest px-4 py-2 rounded-xl hover:bg-primary/5"
            >
              <LogIn size={15} className="group-hover:-translate-x-0.5 transition-transform" />
              <span>Portal</span>
            </a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-[#1A1A1B] dark:text-white hover:text-primary transition-colors border border-white/10 shadow-sm"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? "dark" : "light"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <Button
              className="relative overflow-hidden group h-11 px-8 rounded-xl font-bold text-[11px] uppercase tracking-[0.15em] bg-primary text-white border-none shadow-[0_8px_20px_rgba(255,140,50,0.3)]"
              onClick={onOpenDemo}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Demo
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Mobile Toggle Group */}
          <div className="flex lg:hidden items-center gap-3">
             <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl bg-foreground/[0.03] flex items-center justify-center text-foreground border border-foreground/10 backdrop-blur-md shadow-sm"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-300 backdrop-blur-md shadow-sm
                ${isMobileMenuOpen 
                  ? "bg-primary border-primary text-white" 
                  : "bg-foreground/[0.03] border-foreground/10 text-foreground"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[55] lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-[400px] bg-white dark:bg-[#0A0A0B] z-[60] flex flex-col p-8 lg:hidden shadow-2xl border-l border-white/10"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="text-xl font-bold text-primary italic uppercase tracking-tighter">
                  KIDDO<span className="text-[#1A1A1B] dark:text-white">SHADOW</span>
                </span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[#1A1A1B] dark:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-[#1A1A1B] dark:text-white font-bold text-xl hover:text-primary transition-colors tracking-tight uppercase"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-6">
                <div className="h-[1px] bg-black/10 dark:bg-white/10 w-full" />
                <Button 
                  className="w-full h-14 bg-primary text-white text-md font-bold rounded-xl border-none shadow-lg shadow-primary/20" 
                  onClick={() => {
                    onOpenDemo();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Get Free Demo
                </Button>
                <a 
                  href="https://kiddoerp.xtown.in/login" 
                  className="flex items-center justify-center gap-2 py-2 text-[#1A1A1B]/60 dark:text-white/40 font-bold uppercase tracking-[0.2em] text-[10px] hover:text-primary transition-colors"
                >
                  <LogIn size={14} />
                  School Portal
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
