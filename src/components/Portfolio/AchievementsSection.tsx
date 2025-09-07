import { motion } from "framer-motion";
import { Trophy, Award, Star, Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AchievementsSection = () => {
  const achievement = {
    title: "Best Paper Award",
    conference: "5th ICISML Conference",
    institution: "NIT Meghalaya",
    year: "2025",
    category: "Research Excellence",
    description: "Recognized for outstanding contribution to the field of Artificial Intelligence and Machine Learning through innovative research in DNA sequence analysis and explainable AI.",
    impact: "Research recognized among top submissions at prestigious international conference"
  };

  const stats = [
    { label: "Research Papers", value: "1+", icon: Award },
    { label: "Conferences", value: "1+", icon: Users },
    { label: "Recognition", value: "Best Paper", icon: Trophy },
    { label: "Research Impact", value: "85% Accuracy", icon: Star }
  ];

  return (
    <section id="achievements" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic excellence and research contributions recognized by leading institutions
          </p>
        </motion.div>

        {/* Featured Achievement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Card className="glass-card featured-project-glow overflow-hidden">
              {/* Award Badge Animation */}
              <motion.div
                className="absolute top-4 right-4 z-10"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20"
                  />
                  <div className="relative bg-gradient-to-r from-primary to-secondary p-3 rounded-full">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                </div>
              </motion.div>

              <CardHeader className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="secondary" className="w-fit mb-3 pulse-glow">
                    <Award className="mr-1 h-3 w-3" />
                    {achievement.category}
                  </Badge>
                  <CardTitle className="text-3xl md:text-4xl gradient-text mb-2">
                    {achievement.title}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {achievement.conference} • {achievement.institution}
                  </CardDescription>
                </motion.div>
              </CardHeader>

              <CardContent className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-primary">Year</p>
                      <p className="text-sm text-muted-foreground">{achievement.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/5 border border-secondary/20">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="font-semibold text-secondary">Venue</p>
                      <p className="text-sm text-muted-foreground">{achievement.institution}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground leading-relaxed"
                >
                  {achievement.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg bg-accent/5 border border-accent/20"
                >
                  <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Research Impact
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.impact}
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Academic Milestones</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <Card className="glass-card text-center h-full">
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring" }}
                      viewport={{ once: true }}
                      className="text-primary mb-3 inline-block"
                    >
                      <stat.icon className="h-8 w-8" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold gradient-text mb-1"
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="glass-card text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Future Research Goals
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Continuing to push the boundaries of AI research with focus on explainable systems, 
                biomedical applications, and transformer architectures for real-world impact.
              </p>
              <Badge variant="outline" className="text-sm">
                Next Target: International Journal Publication
              </Badge>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;