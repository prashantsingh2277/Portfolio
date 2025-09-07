import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Brain, Target } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "Artificial Intelligence", "Machine Learning", "Deep Learning", 
    "Large Language Models", "Computer Vision", "Natural Language Processing",
    "Leadership", "Public Speaking", "Self-learning", "Management"
  ];

  const interests = [
    "Software Development", "AI Research", "Military Technology", 
    "Cybersecurity", "Data Science"
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about leveraging artificial intelligence to solve real-world problems 
            and aspiring to serve the nation through military service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">B.Tech Computer Science & Engineering</h4>
                    <p className="text-sm text-muted-foreground">Indian Institute of Information Technology, Manipur</p>
                    <p className="text-sm text-accent font-medium">CGPA: 8.69 | Expected 2025</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">CBSE - Higher Secondary</h4>
                    <p className="text-sm text-muted-foreground">Modal Public School</p>
                    <p className="text-sm text-accent font-medium">83% | 2020</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold">Core Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-accent mr-3" />
                  <h3 className="text-xl font-semibold">Areas of Interest</h3>
                </div>
                <div className="space-y-3">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3" />
                      <span className="text-sm">{interest}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;