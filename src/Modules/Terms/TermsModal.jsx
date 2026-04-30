import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X, FileText, Shield, Scale, Info } from "lucide-react";

const TermsModal = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent hideClose className="w-[95%] sm:max-w-[1000px] bg-background text-foreground rounded-[2rem] md:rounded-[3.5rem] overflow-hidden p-0 shadow-3xl outline-none border border-foreground/10 dark:border-white/10 max-h-[90vh] flex flex-col">
        
        {/* Header Overlay */}
        <div className="bg-foreground/[0.02] border-b border-foreground/5 p-8 md:p-12 relative shrink-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <DialogClose className="absolute right-8 top-8 z-50 p-3 rounded-2xl bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 text-foreground/40 dark:text-foreground/20 hover:text-foreground transition-all shadow-xl">
            <X size={20} />
          </DialogClose>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-[0.3em] mb-6">
              <FileText size={12} />
              Legal Framework
            </div>
            
            <DialogHeader>
              <DialogTitle className="text-3xl md:text-5xl font-black text-foreground tracking-tight mb-4">
                Terms & <span className="text-primary italic">Conditions</span>
              </DialogTitle>
              <DialogDescription className="text-foreground/60 dark:text-foreground/40 text-sm md:text-lg font-medium">
                Last Updated: Feb 9, 2026 • Governing institutional usage of Kiddo Shadow.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-16 space-y-12 custom-scrollbar">
          
          {/* Introduction */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-foreground/60 leading-relaxed text-lg italic">
              These Terms and Conditions (“Terms”) govern the access and use of the Kiddo Shadow software platform, mobile application, and related services provided by Xtown Technologies Pvt. Ltd. (“Company”, “We”, “Us”, “Our”).
            </p>
            <p className="text-foreground/60 leading-relaxed text-lg mt-4">
              By accessing or using our platform, you (“User”, “School”, “Parent”, “Teacher”, or “Student”) agree to comply with these Terms. If you do not agree, you must not use the platform.
            </p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 gap-12">
            
            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Info size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">1. Definitions</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Platform", desc: "Kiddo Shadow web portal, mobile app, APIs, and associated tools." },
                  { label: "Institution", desc: "The educational entity subscribing to the platform." },
                  { label: "User", desc: "Authorized student, parent, teacher, or staff." },
                  { label: "Data", desc: "Academic, personal, or institutional information." }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-foreground/[0.02] border border-foreground/5">
                    <span className="text-primary font-bold block mb-1">{item.label}:</span>
                    <span className="text-foreground/70 dark:text-foreground/50 text-sm">{item.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Scale size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">2. Acceptance of Terms</h3>
              </div>
              <ul className="list-disc list-inside text-foreground/60 space-y-3 pl-4 leading-relaxed">
                <li>Represent that you are authorized by your institution or guardian.</li>
                <li>Agree to comply with all applicable laws, regulations, and educational policies.</li>
                <li>Accept that your usage data may be monitored for service optimization and compliance.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Shield size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">3. License and Access</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                Xtown Technologies grants users a non-exclusive, non-transferable, revocable license to access and use Kiddo Shadow for legitimate educational purposes. Unauthorized resale, copying, or distribution is strictly prohibited.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <FileText size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">4. User Obligations</h3>
              </div>
              <ul className="list-disc list-inside text-foreground/60 space-y-3 pl-4 leading-relaxed">
                <li>Maintain confidentiality of login credentials.</li>
                <li>Avoid sharing or publishing any unlawful, obscene, or harmful content.</li>
                <li>Refrain from manipulating attendance, grades, or system data.</li>
                <li>Use the platform only for educational, school-related communication.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Shield size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">Intellectual Property</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                All software code, features, designs, AI algorithms, and content provided remain the exclusive property of Xtown Technologies Pvt. Ltd. Reverse-engineering or replication is strictly prohibited under Indian Copyright Act, 1957.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Info size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">AI & Automation Disclaimer</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                Kiddo Shadow tools are for educational assistance only and not a replacement for teachers. Xtown Technologies is not liable for academic or disciplinary decisions made solely on AI outputs.
              </p>
            </section>

            {/* Footer Contact */}
            <div className="pt-12 border-t border-foreground/5 text-center">
              <p className="text-foreground/50 dark:text-foreground/30 text-xs font-bold uppercase tracking-[0.3em] mb-4">Contact Legal Department</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <a href="mailto:legal@kiddoshadow.in" className="text-primary font-bold hover:underline">legal@kiddoshadow.in</a>
                <span className="text-foreground/10 hidden md:block">|</span>
                <a href="https://www.kiddoshadow.in" target="_blank" className="text-primary font-bold hover:underline">www.kiddoshadow.in</a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsModal;
