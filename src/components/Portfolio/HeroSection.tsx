import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingParticles from "./FloatingParticles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient">
      {/* 3D Floating Particles Background */}
      <FloatingParticles />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text leading-tight"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Prashant Singh
          </motion.h1>
          
          <motion.div
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <span className="text-primary">AI & ML Engineer</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-secondary">Researcher</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-accent">Gen AI Enthusiast</span>
            </div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            B.Tech Computer Science & Engineering student at IIIT Manipur, specializing in 
            cutting-edge AI technologies, machine learning research, and innovative software solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              variant="default" 
              size="lg" 
              className="pulse-glow group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View Projects
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a 
              href="mailto:prashantsingh2277@gmail.com" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              prashantsingh2277@gmail.com
            </a>
            <a 
              href="tel:+919934550016" 
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Phone className="h-4 w-4" />
              +91-9934550016
            </a>
            <a 
              href="https://www.linkedin.com/in/prashant-singh-118604230/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn Profile
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary"
          >
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;