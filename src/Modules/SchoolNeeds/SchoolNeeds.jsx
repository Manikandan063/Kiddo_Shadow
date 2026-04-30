import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  ShieldAlert,
  Brain,
  Notebook,
  MessageSquare,
  ClipboardList,
  LineChart,
  Monitor,
  Zap,
  ShieldCheck,
  Activity,
  ArrowLeft,
  ArrowRight
} from "lucide-react";

import kiddoImg from "../../assets/Kiddo.png";

const FeatureRow = ({ f, i }) => {
  return (
    <div className="py-12 border-b border-border last:border-0 group cursor-default">
      <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
        
        {/* Icon Accent */}
        <div className="shrink-0">
          <div className="w-12 h-12 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
            {f.icon}
          </div>
        </div>

        {/* Content Block */}
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-500">
            {f.title}
          </h3>
          <p className="text-foreground/40 text-lg md:text-xl font-medium leading-relaxed max-w-4xl">
            {f.desc}
          </p>
        </div>

        {/* System Metadata Tag */}
        <div className="hidden lg:flex shrink-0 items-center gap-2 pt-2">
           <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
           <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/20 group-hover:text-foreground/40 transition-colors">Verified Protocol</span>
        </div>
      </div>
    </div>
  );
};

const SchoolNeeds = () => {
  const features = [
    {
      title: "Syllabus-Trained AI Learning Assistant",
      desc: "AI works only on school syllabus and teacher-uploaded content. No open internet usage. Safe and relevant learning support.",
      icon: <Brain size={28} />,
    },
    {
      title: "Digital Student Diary & Notes",
      desc: "Organized digital space for homework, class notes, and daily academic tracking.",
      icon: <Notebook size={28} />,
    },
    {
      title: "Teacher-Moderated Class Group Chat",
      desc: "Only class-wise group chats. Teachers fully monitor and can reply.",
      icon: <MessageSquare size={28} />,
      badge: "No private student messaging"
    },
    {
      title: "Online Tests & Quizzes",
      desc: "Easy-to-create tests with automatic grading and instant feedback.",
      icon: <ClipboardList size={28} />,
    },
    {
      title: "Attendance & Progress Tracking",
      desc: "Real-time attendance with comprehensive academic progress reports.",
      icon: <LineChart size={28} />,
    },
    {
      title: "Smart Classroom Integration",
      desc: "Works with smart boards and classroom devices for enhanced teaching.",
      icon: <Monitor size={28} />,
    }
  ];

  return (
    <section id="school-needs" className="py-24 md:py-48 bg-background relative overflow-hidden">
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section - Modern Product Page Style */}
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
          
          <div className="lg:w-7/12 space-y-12">
            <div className="flex items-center gap-3 text-primary text-[10px] font-bold uppercase tracking-[0.4em]">
              <ShieldCheck size={14} strokeWidth={3} />
              Institutional Standard
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground tracking-tighter leading-[1.1] md:leading-[1]">
              Everything Your <br />
              <span className="text-gray-500">School Needs</span>
            </h2>
            
            <p className="text-foreground/40 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl">
              A comprehensive platform designed specifically for Indian schools — CBSE, ICSE, and all State Boards.
            </p>
          </div>

          <div className="lg:w-5/12 relative">
             {/* Unboxed Visual Placement */}
             <img 
               src={kiddoImg} 
               alt="School Assistant" 
               className="w-full max-w-md mx-auto drop-shadow-2xl"
             />
             {/* Subtle Background Glow */}
             <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10" />
          </div>
        </div>

        {/* Minimal Content Flow Layout */}
        <div className="border-t border-border">
          {features.map((f, i) => (
            <FeatureRow key={i} f={f} i={i} />
          ))}
        </div>

        {/* Section Footer Ornament */}
        <div className="mt-20 pt-8 flex justify-between items-center opacity-20 border-t border-border">
           <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-foreground/40">Technical Specifications</div>
           <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-foreground/40">Kiddo Enterprise Ecosystem</div>
        </div>

      </div>
    </section>
  );
};
;

export default SchoolNeeds;




