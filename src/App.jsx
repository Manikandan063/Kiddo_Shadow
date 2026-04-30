import React, { useState } from "react";
import Navbar from "./Modules/Navbar/Navbar";
import Hero from "./Modules/Hero/Hero";
import Operations from "./Modules/Operations/Operations";
import PremiumFeatures from "./Modules/PremiumFeatures/PremiumFeatures";
import SchoolNeeds from "./Modules/SchoolNeeds/SchoolNeeds";
import CatchUp from "./Modules/CatchUp/CatchUp";
import Safety from "./Modules/Safety/Safety";
import HowItWorks from "./Modules/HowItWorks/HowItWorks";
import WhyChoose from "./Modules/WhyChoose/WhyChoose";
import Contact from "./Modules/Contact/Contact";
import Footer from "./Modules/Footer/Footer";
import DemoModal from "./Modules/DemoModal/DemoModal";
import TermsModal from "./Modules/Terms/TermsModal";
import PrivacyModal from "./Modules/Privacy/PrivacyModal";
import AcceptableUseModal from "./Modules/AcceptableUse/AcceptableUseModal";
import ContentPolicyModal from "./Modules/ContentPolicy/ContentPolicyModal";
import CookiePolicyModal from "./Modules/CookiePolicy/CookiePolicyModal";
import DPAModal from "./Modules/DPA/DPAModal";
import EULAModal from "./Modules/EULA/EULAModal";
import RefundsModal from "./Modules/Refunds/RefundsModal";
import DisclaimerModal from "./Modules/Disclaimer/DisclaimerModal";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isAcceptableUseModalOpen, setIsAcceptableUseModalOpen] = useState(false);
  const [isContentPolicyModalOpen, setIsContentPolicyModalOpen] = useState(false);
  const [isCookiePolicyModalOpen, setIsCookiePolicyModalOpen] = useState(false);
  const [isDPAModalOpen, setIsDPAModalOpen] = useState(false);
  const [isEULAModalOpen, setIsEULAModalOpen] = useState(false);
  const [isRefundsModalOpen, setIsRefundsModalOpen] = useState(false);
  const [isDisclaimerModalOpen, setIsDisclaimerModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleOpenDemo = () => setIsDemoModalOpen(true);
  const handleOpenTerms = () => setIsTermsModalOpen(true);
  const handleOpenPrivacy = () => setIsPrivacyModalOpen(true);
  const handleOpenAcceptableUse = () => setIsAcceptableUseModalOpen(true);
  const handleOpenContentPolicy = () => setIsContentPolicyModalOpen(true);
  const handleOpenCookiePolicy = () => setIsCookiePolicyModalOpen(true);
  const handleOpenDPA = () => setIsDPAModalOpen(true);
  const handleOpenEULA = () => setIsEULAModalOpen(true);
  const handleOpenRefunds = () => setIsRefundsModalOpen(true);
  const handleOpenDisclaimer = () => setIsDisclaimerModalOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary relative overflow-x-hidden">
      
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar onOpenDemo={handleOpenDemo} />
      
      <main className="relative z-10">
        <Hero onOpenDemo={handleOpenDemo} />
        <Operations onOpenDemo={handleOpenDemo} />
        <PremiumFeatures />
        <SchoolNeeds />
        <CatchUp />
        <Safety />
        <WhyChoose />
        <HowItWorks />
        <Contact onOpenDemo={handleOpenDemo} />
      </main>

      <Footer 
        onOpenTerms={handleOpenTerms} 
        onOpenPrivacy={handleOpenPrivacy}
        onOpenAcceptableUse={handleOpenAcceptableUse}
        onOpenContentPolicy={handleOpenContentPolicy}
        onOpenCookiePolicy={handleOpenCookiePolicy}
        onOpenDPA={handleOpenDPA}
        onOpenEULA={handleOpenEULA}
        onOpenRefunds={handleOpenRefunds}
        onOpenDisclaimer={handleOpenDisclaimer}
      />

      <DemoModal 
        isOpen={isDemoModalOpen} 
        setIsOpen={setIsDemoModalOpen} 
      />

      <TermsModal
        isOpen={isTermsModalOpen} 
        setIsOpen={setIsTermsModalOpen} 
      />

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        setIsOpen={setIsPrivacyModalOpen}
      />

      <AcceptableUseModal
        isOpen={isAcceptableUseModalOpen}
        setIsOpen={setIsAcceptableUseModalOpen}
      />

      <ContentPolicyModal
        isOpen={isContentPolicyModalOpen}
        setIsOpen={setIsContentPolicyModalOpen}
      />

      <CookiePolicyModal
        isOpen={isCookiePolicyModalOpen}
        setIsOpen={setIsCookiePolicyModalOpen}
      />

      <DPAModal
        isOpen={isDPAModalOpen}
        setIsOpen={setIsDPAModalOpen}
      />

      <EULAModal
        isOpen={isEULAModalOpen}
        setIsOpen={setIsEULAModalOpen}
      />

      <RefundsModal
        isOpen={isRefundsModalOpen}
        setIsOpen={setIsRefundsModalOpen}
      />

      <DisclaimerModal
        isOpen={isDisclaimerModalOpen}
        setIsOpen={setIsDisclaimerModalOpen}
      />
    </div>
  );
}

export default App;

