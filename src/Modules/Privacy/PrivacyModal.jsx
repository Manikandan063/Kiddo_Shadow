import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X, Shield, Lock, Eye, Database, Globe, Info, Fingerprint } from "lucide-react";

const PrivacyModal = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent hideClose className="w-[95%] sm:max-w-[1000px] bg-background text-foreground rounded-[2rem] md:rounded-[3.5rem] overflow-hidden p-0 shadow-3xl outline-none border border-foreground/10 max-h-[90vh] flex flex-col">
        
        {/* Header Overlay */}
        <div className="bg-foreground/[0.02] border-b border-foreground/5 p-8 md:p-12 relative shrink-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          
          <DialogClose className="absolute right-8 top-8 z-50 p-3 rounded-2xl bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 text-foreground/20 hover:text-foreground transition-all shadow-xl">
            <X size={20} />
          </DialogClose>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-[0.3em] mb-6">
              <Shield size={12} />
              Privacy Assurance
            </div>
            
            <DialogHeader>
              <DialogTitle className="text-3xl md:text-5xl font-black text-foreground tracking-tight mb-4">
                Privacy <span className="text-primary italic">Policy</span>
              </DialogTitle>
              <DialogDescription className="text-foreground/40 text-sm md:text-lg font-medium">
                Last Updated: Feb 9, 2026 • Your data security is our institutional priority.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-16 space-y-12 custom-scrollbar">
          
          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <p className="text-foreground/60 leading-relaxed text-lg italic">
              This Privacy Policy (“Policy”) describes how Xtown Technologies Private Limited (“Xtown Technologies”, “we”, “our”, or “us”) collects, uses, discloses, and protects information obtained from users (“you”, “user”, “school”, “teacher”, “student”, or “parent”) of our digital learning and management platform Kiddo Shadow (“Platform”).
            </p>
            <p className="text-foreground/60 leading-relaxed text-lg mt-4">
              By accessing or using our Platform, you consent to the terms of this Policy.
            </p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 gap-12">
            
            <section className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Database size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">1. Information We Collect</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Fingerprint, label: "Personal Information", desc: "Student/staff names, addresses, contact numbers, school IDs, and photos." },
                  { icon: Info, label: "Academic Data", desc: "Attendance, performance reports, marks, assignments, and communications." },
                  { icon: Globe, label: "System Data", desc: "IP address, device info, operating system, and session identifiers." },
                  { icon: Lock, label: "Secure Payments", desc: "Billing details and invoice references processed via secure gateways." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-foreground/[0.02] border border-foreground/5 group hover:bg-primary/5 transition-all">
                    <item.icon size={24} className="text-primary/40 group-hover:text-primary mb-4 transition-colors" />
                    <span className="text-foreground font-bold block mb-2">{item.label}</span>
                    <span className="text-foreground/40 text-sm leading-relaxed">{item.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Eye size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">2. Purpose of Data Usage</h3>
              </div>
              <ul className="list-disc list-inside text-foreground/60 space-y-3 pl-4 leading-relaxed">
                <li>Providing, managing, and improving educational services.</li>
                <li>Enabling teacher-parent-student communication.</li>
                <li>AI-driven personalized learning assistance and analytics.</li>
                <li>Legal compliance, audits, and fraud prevention.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Lock size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">3. Data Storage & Security</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                Data is stored securely on encrypted servers hosted within India. We employ **AES-256 encryption**, multi-level authentication, and continuous monitoring for intrusion detection. Student data is retained only for the duration of active school contracts.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Shield size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">4. Data Disclosure</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                We disclose limited data to schools for academic management and to service providers bound by strict confidentiality agreements. We only disclose to government authorities when legally required.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Info size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">5. Parental & School Control</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                Schools act as data controllers. Parents may request access, correction, or deletion through the school’s admin portal. We do not knowingly collect personal data from minors without school consent.
              </p>
            </section>

            {/* Footer Contact */}
            <div className="pt-12 border-t border-foreground/5 text-center">
              <p className="text-foreground/30 text-xs font-bold uppercase tracking-[0.3em] mb-4">Contact Privacy Officer</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <a href="mailto:privacy@kiddoshadow.in" className="text-primary font-bold hover:underline">privacy@kiddoshadow.in</a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyModal;
