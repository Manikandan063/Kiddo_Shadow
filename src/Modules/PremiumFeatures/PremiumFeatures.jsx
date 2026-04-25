import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  BarChart3, 
  Lock,
  Zap
} from "lucide-react";

const PremiumFeatures = () => {
  const features = [
    {
      title: "AI Tutoring",
      description: "Smart personalized learning paths",
      icon: <Sparkles size={20} />,
      color: "from-pink-500 to-rose-500",
      lineColor: "bg-pink-500"
    },
    {
      title: "Realtime Analytics",
      description: "Instant school and student insight",
      icon: <BarChart3 size={20} />,
      color: "from-cyan-500 to-blue-500",
      lineColor: "bg-cyan-500"
    },
    {
      title: "Secure Access",
      description: "Data privacy & encrypted student records",
      icon: <Lock size={20} />,
      color: "from-violet-500 to-purple-500",
      lineColor: "bg-violet-500"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-[1.1]"
          >
            Premium Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-sm md:text-base max-w-2xl mx-auto font-medium"
          >
            All advanced functionality for modern schools
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative"
            >
              <div className="h-full bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2rem] p-8 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 flex flex-col items-start text-left shadow-2xl">
                
                {/* Icon with vibrant gradient background */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  {React.cloneElement(feature.icon, { size: 24, strokeWidth: 2.5 })}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-white/50 text-sm leading-relaxed font-medium mb-8">
                  {feature.description}
                </p>

                {/* Visible Accent Line (Matches Image) */}
                <div className="w-full bg-white/5 h-[2px] rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: "30%" }}
                     whileInView={{ width: "100%" }}
                     transition={{ duration: 1.5, delay: 0.5 + (index * 0.2) }}
                     className={`h-full ${feature.lineColor} shadow-[0_0_15px_currentColor]`}
                   />
                </div>

                {/* Subtle Hover Glow Pod */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.05] rounded-[2rem] transition-opacity duration-700`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Extreme Low-End Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-20" />
    </section>
  );
};

export default PremiumFeatures;
