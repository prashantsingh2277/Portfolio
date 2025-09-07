import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "prashantsingh2277@gmail.com",
      href: "mailto:prashantsingh2277@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9934550016",
      href: "tel:+919934550016",
      color: "text-secondary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/prashant-singh-118604230/",
      color: "text-accent"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "GitHub Profile",
      href: "https://github.com/prashantsingh2277",
      color: "text-primary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Katar, Dehri-On-Sone , Rohtas, Bihar, India",
      href: "#",
      color: "text-muted-foreground"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's connect and discuss opportunities in AI, Machine Learning, and Software Development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card h-full">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="h-6 w-6 text-primary" />
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className={`${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {contact.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Let's Collaborate</CardTitle>
                <CardDescription>
                  Open to opportunities and meaningful connections
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2">Current Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      B.Tech Computer Science & Engineering at IIIT Manipur, specializing in 
                      AI/ML research and aspiring to serve as an Army Officer.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                    <h4 className="font-semibold text-secondary mb-2">Expertise Areas</h4>
                    <p className="text-sm text-muted-foreground">
                      Machine Learning, Deep Learning, Computer Vision, NLP, LLMs, 
                      and cutting-edge AI research with practical applications.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <h4 className="font-semibold text-accent mb-2">Open For</h4>
                    <p className="text-sm text-muted-foreground">
                      Research collaborations, AI/ML internships, project partnerships, 
                      and meaningful discussions about technology and innovation.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild size="lg" className="w-full pulse-glow group">
                    <a href="mailto:prashantsingh2277@gmail.com">
                      <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="glass-card inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Ready to innovate together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg">
                Whether it's AI research, software development, or exploring new technologies, 
                I'm always excited to connect with like-minded professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="default" size="lg" className="group">
                  <a href="https://www.linkedin.com/in/prashant-singh-118604230/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="group">
                  <a href="https://github.com/prashantsingh2277" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Follow on GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;