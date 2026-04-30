import React from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Book, 
  MessageSquare, 
  ClipboardCheck, 
  BarChart3, 
  Monitor,
  Zap,
  ArrowRight,
  Star
} from "lucide-react";

const Modules = () => {
  const modules = [
    {
      title: "Syllabus AI",
      description: "AI works only on school syllabus and teacher-uploaded content.",
      icon: <Brain size={32} />,
      className: "lg:col-span-8",
      color: "primary"
    },
    {
      title: "Digital Diary",
      description: "Organized space for homework and tracking.",
      icon: <Book size={32} />,
      className: "lg:col-span-4",
      color: "secondary"
    },
    {
      title: "Moderated Chat",
      description: "Class-wise group chats. Teachers fully monitor.",
      icon: <MessageSquare size={32} />,
      className: "lg:col-span-4",
      badge: "Safe Only",
      color: "primary"
    },
    {
      title: "Assessments",
      description: "Automatic grading and academic feedback.",
      icon: <ClipboardCheck size={32} />,
      className: "lg:col-span-4",
      color: "secondary"
    },
    {
      title: "Smart Class",
      description: "Enhanced teaching with smart boards.",
      icon: <Monitor size={32} />,
      className: "lg:col-span-4",
      color: "primary"
    }
  ];

  return (
    <section id="modules" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12 text-center lg:text-left">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-4xl md:text-7xl font-black text-foreground mb-6 tracking-tight leading-[1]">The Intelligence <br /> <span className="text-gradient-neon">Ecosystem</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative ${module.className}`}
            >
              {/* Card Container - New "Layered Depth" Style */}
              <div className="relative h-full">
                {/* Floating Glow behind card */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${module.color === 'primary' ? 'from-primary/10 to-transparent' : 'from-secondary/10 to-transparent'} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`} />
                
                <div className="h-full bg-card border border-border rounded-[2rem] p-12 transition-all duration-500 group-hover:-translate-y-4 shadow-3xl shadow-black/5 dark:shadow-black/50">
                  <div className={`w-16 h-16 rounded-2xl bg-foreground/[0.02] border border-border flex items-center justify-center ${module.color === 'primary' ? 'text-primary' : 'text-secondary'} mb-10 group-hover:scale-125 group-hover:bg-primary/10 transition-all duration-500`}>
                    {module.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors">{module.title}</h3>
                  <p className="text-foreground/40 text-lg leading-relaxed font-medium mb-12">
                    {module.description}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className={`h-[2px] ${module.color === 'primary' ? 'bg-primary' : 'bg-secondary'} w-0 group-hover:w-12 transition-all duration-700`} />
                    <span className="text-[10px] font-black text-foreground/10 uppercase tracking-widest group-hover:text-foreground/60 transition-colors">Module Ready</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
