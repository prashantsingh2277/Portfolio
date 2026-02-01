import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const ExperienceTimeline = () => {
  const experiences = [
    {
  company: "Modamorph Tech Pvt Ltd",
  role: "AI & Machine Learning Engineer",
  duration: "4+ months",
  location: "Remote",
  achievements: [
    "Built an AI Fashion Stylist capable of generating personalized fashion designs from textual inputs",
    "Optimized and fine-tuned an image generation pipeline to improve visual accuracy, consistency, and style adherence",
    "Fine-tuned an LLM to generate structured, high-quality design prompts driving downstream image synthesis"
  ],
  tech: ["LLMs", "Image Generation", "Computer Vision", "Natural Language Processing"]
}

    {
      company: "Relové",
      role: "AI and ML Intern",
      duration: "2+ months",
      location: "Remote",
      achievements: [
        "Implemented image-to-text pipeline for clothing descriptions using computer vision and NLP",
        "Fine-tuned Gemini LLM for structured outfit element arrays",
        "Developed web scraping engine for e-commerce product aggregation"
      ],
      tech: ["Computer Vision", "NLP", "Gemini LLM", "Web Scraping"]
    },
    {
      company: "VMPRA Associate",
      role: "AI and ML Intern", 
      duration: "5+ months",
      location: "Remote",
      achievements: [
        "Developed personalized chatbot using LLMs and IVR technology",
        "Implemented hands-off technology solutions",
        "Successfully deployed chatbot system"
      ],
      tech: ["LLMs", "IVR", "Chatbot Development", "Deployment"]
    },
    {
      company: "Sky Trade",
      role: "AI and ML Intern",
      duration: "6+ months", 
      location: "Remote",
      achievements: [
        "Extracted insights from 150+ complex PDF documents using specialized NLP",
        "Fine-tuned LLMs including DistilGPT, GPT-2, Neo GPT, and LLaMA",
        "Developed highly personalized chatbot solutions"
      ],
      tech: ["NLP", "DistilGPT", "GPT-2", "Neo GPT", "LLaMA", "PDF Processing"]
    },
    {
      company: "SaleGully Retail Pvt. Ltd",
      role: "AI and ML Intern",
      duration: "1+ year (July 2023 - July 2024)",
      location: "Remote",
      achievements: [
        "Developed fully automated social media post generator",
        "Integrated Stable Diffusion for high-quality image synthesis", 
        "Engineered seamless pipeline using advanced image processing",
        "Optimized for visual coherence and engagement metrics"
      ],
      tech: ["Stable Diffusion", "Gemini LLM", "Image Processing", "Social Media Automation"]
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Experience</h2>
          <p className="text-xl text-muted-foreground">
            Professional journey in AI & Machine Learning
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background pulse-glow" />
                
                {/* Content Card */}
                <div className="ml-20">
                  <Card className="glass-card hover:glow-primary transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {exp.role}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-secondary font-semibold">
                        <span>{exp.company}</span>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: i * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.tech.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
