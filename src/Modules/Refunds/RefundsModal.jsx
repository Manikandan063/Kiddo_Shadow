import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X, CreditCard, Calendar, AlertCircle, RefreshCw, XCircle, ShieldCheck, Mail } from "lucide-react";

const RefundsModal = ({ isOpen, setIsOpen }) => {
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
              <CreditCard size={12} />
              Billing Framework
            </div>
            
            <DialogHeader>
              <DialogTitle className="text-3xl md:text-5xl font-black text-foreground tracking-tight mb-4">
                Payment & <span className="text-primary italic">Refund Policy</span>
              </DialogTitle>
              <DialogDescription className="text-foreground/60 dark:text-foreground/40 text-sm md:text-lg font-medium">
                Last Updated: Feb 9, 2026 • Governing billing and refund procedures for Kiddo Shadow.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-16 space-y-12 custom-scrollbar">
          
          {/* Introduction */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-foreground/60 leading-relaxed text-lg italic">
              This Policy governs payment, billing, and refund procedures for services provided by Xtown Technologies Pvt. Ltd. via Kiddo Shadow.
            </p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 gap-12">
            
            <section className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <CreditCard size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">1. Payment Structure</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Subscription plans are billed annually or as agreed.",
                  "Fees include software access, hosting, and support.",
                  "All payments are subject to applicable GST.",
                  "Mode: NEFT / RTGS / UPI / Cheque (Xtown Technologies)."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-foreground/[0.02] border border-foreground/5">
                    <ShieldCheck size={16} className="text-primary shrink-0 mt-1" />
                    <span className="text-foreground/60 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <RefreshCw size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">2. Refunds & Cancellations</h3>
              </div>
              <div className="p-6 rounded-3xl bg-primary/[0.03] border border-primary/10">
                <p className="text-foreground/60 leading-relaxed mb-4">
                  Refunds are applicable **only before onboarding and activation** of the platform. Once access credentials or services have been issued, no refunds apply.
                </p>
                <div className="flex items-center gap-3 text-primary text-xs font-black uppercase tracking-widest">
                  <XCircle size={14} />
                  Network interruptions are not eligible for refund
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Calendar size={20} />
                <h3 className="text-xl font-black uppercase tracking-widest">3. Non-Payment & Disputes</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                Failure to pay within **30 days** of invoice date may lead to temporary suspension. Reactivation may include a reinstatement charge. Disputes must be raised in writing within **15 business days** of invoice receipt.
              </p>
            </section>

            {/* Footer Contact */}
            <div className="pt-12 border-t border-foreground/5 text-center">
              <p className="text-foreground/50 dark:text-foreground/30 text-xs font-bold uppercase tracking-[0.3em] mb-4">Contact Billing Department</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Mail size={16} />
                  <a href="mailto:billing@kiddoshadow.in" className="hover:underline">billing@kiddoshadow.in</a>
                </div>
              </div>
              <p className="text-foreground/40 dark:text-foreground/20 text-[10px] font-bold uppercase tracking-widest mt-6">Finance Department – Xtown Technologies Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RefundsModal;
