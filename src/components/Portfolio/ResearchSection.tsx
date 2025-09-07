import { motion } from "framer-motion";
import { FileText, Brain, Target, Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ResearchSection = () => {
  const researchPaper = {
    title: "DNA Sequence Generation and Analysis using Transformer and XAI",
    description:
      "Built explainable transformers for DNA sequence generation and viral classification (85% accuracy) using SHAP and LIME.",
    fullDescription:
      "This study integrates Explainable AI (SHAP, LIME) with transformer models (GPT-2, BERT) for DNA sequence generation and viral variant classification, achieving 85% accuracy and offering insights into genetic mutations, model interpretability, and applications in personalized medicine and virology.",
    technologies: ["Transformers", "XAI", "SHAP", "LIME", "GPT-2", "BERT"],
    accuracy: "85%",
    applications: ["Personalized Medicine", "Virology", "Genetic Analysis"],
    status: "Published",
  };

  return (
    <section id="research" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Research & Publications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advancing the frontiers of AI and Machine Learning through cutting-edge research
          </p>
        </motion.div>

        {/* Static Research Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="mb-12"
        >
          <Card className="glass-card featured-project-glow">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
              </div>
              <Badge variant="secondary" className="mb-2 w-fit mx-auto">
                {researchPaper.status}
              </Badge>
              <CardTitle className="text-2xl md:text-3xl gradient-text leading-tight">
                {researchPaper.title}
              </CardTitle>
              <CardDescription className="text-lg mt-4">
                {researchPaper.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Quick Stats */}
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{researchPaper.accuracy}</div>
                  <div className="text-sm text-muted-foreground">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">{researchPaper.technologies.length}</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">{researchPaper.applications.length}</div>
                  <div className="text-sm text-muted-foreground">Applications</div>
                </div>
              </div>

              {/* Key Technologies */}
              <div>
                <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Key Technologies
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {researchPaper.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h4 className="font-semibold text-secondary mb-2 flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Applications
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {researchPaper.applications.map((app) => (
                    <Badge key={app} variant="secondary" className="text-xs">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Full Description */}
              <p className="text-sm text-muted-foreground leading-relaxed text-center">
                {researchPaper.fullDescription}
              </p>

              
            </CardContent>
          </Card>
        </motion.div>

        {/* Research Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Current Research Interests</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "Explainable AI",
                description: "Developing interpretable machine learning models for complex biological systems",
                color: "text-primary",
              },
              {
                icon: FileText,
                title: "Transformer Models",
                description: "Advancing sequence generation and analysis using state-of-the-art architectures",
                color: "text-secondary",
              },
              {
                icon: Target,
                title: "Biomedical Applications",
                description: "Applying AI to solve real-world problems in healthcare and genomics",
                color: "text-accent",
              },
            ].map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="glass-card h-full text-center">
                  <CardContent className="p-6">
                    <div className={`${interest.color} mb-4 inline-block`}>
                      <interest.icon className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold mb-2">{interest.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {interest.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
