import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  MonitorSmartphone,
  Database,
  Cloud,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

const tracks = [
  {
    id: "uiux",
    title: "UI/UX Design",
    icon: MonitorSmartphone,
    description:
      "Master user research, wireframing, prototyping, and visual design using industry-standard tools like Figma.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    duration: "12 Weeks",
    level: "Beginner to Advanced",
  },
  {
    id: "data",
    title: "Data Analysis",
    icon: Database,
    description:
      "Learn to extract actionable insights from complex datasets using SQL, Python, Excel, and Power BI.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070",
    skills: ["SQL", "Python", "Power BI", "Data Visualization"],
    duration: "16 Weeks",
    level: "Intermediate",
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    icon: Cloud,
    description:
      "Design, deploy, and manage scalable infrastructure on AWS, Google Cloud, and Azure.",
    image:
      "https://images.unsplash.com/photo-1600880210831-20d0f806950e?auto=format&fit=crop&q=80&w=2070",
    skills: ["AWS", "GCP", "Docker", "Kubernetes"],
    duration: "20 Weeks",
    level: "Advanced",
  },
  {
    id: "cyber",
    title: "Cybersecurity",
    icon: ShieldCheck,
    description:
      "Protect digital assets, conduct vulnerability assessments, and master ethical hacking techniques.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2071",
    skills: [
      "Network Security",
      "Ethical Hacking",
      "Cryptography",
      "Risk Management",
    ],
    duration: "24 Weeks",
    level: "Advanced",
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    description:
      "Build intelligent systems using machine learning, deep learning, and natural language processing.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2070",
    skills: ["Machine Learning", "TensorFlow", "NLP", "Computer Vision"],
    duration: "24 Weeks",
    level: "Advanced",
  },
];

export function Academy() {
  const [activeTab, setActiveTab] = useState(tracks[0].id);

  return (
    <section id="academy" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6"
            >
              Soar Tech Academy
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-6"
            >
              Launch Your Tech Career in 90 Days
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              From streets to skilled technicians. Our intensive, project-based
              curriculum is designed to take you from beginner to job-ready
              professional in the most in-demand tech fields.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-shrink-0 grid grid-cols-2 gap-4"
          >
            <div className="bg-muted rounded-2xl p-6 text-center">
              <div className="text-4xl font-heading font-bold text-primary mb-2">
                5k+
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Students Trained
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-6 text-center">
              <div className="text-4xl font-heading font-bold text-primary mb-2">
                92%
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Placement Rate
              </div>
            </div>
          </motion.div>
        </div>

        <Tabs
          defaultValue={tracks[0].id}
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="w-full overflow-x-auto scrollbar-hide pb-4 -mb-4">
            <TabsList className="flex flex-nowrap justify-start h-auto gap-2 bg-transparent p-0 min-w-max mb-8">
              {tracks.map((track) => (
                <TabsTrigger
                  key={track.id}
                  value={track.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-6 py-3 text-base font-medium transition-all whitespace-nowrap"
                >
                  <track.icon className="w-4 h-4 mr-2" />
                  {track.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {tracks.map((track) => (
            <TabsContent
              key={track.id}
              value={track.id}
              className="mt-0 outline-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeTab === track.id ? 1 : 0,
                  y: activeTab === track.id ? 0 : 20,
                }}
                transition={{ duration: 0.4 }}
              >
                <Card className="overflow-hidden border-0 shadow-2xl bg-card">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <Badge className="w-max mb-6 bg-primary/20 text-primary hover:bg-primary/30 border-0 text-sm px-4 py-1">
                        {track.level} • {track.duration}
                      </Badge>
                      <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        {track.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {track.description}
                      </p>

                      <div className="space-y-4 mb-8">
                        <h4 className="font-semibold text-foreground">
                          What you'll learn:
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {track.skills.map((skill, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 text-muted-foreground"
                            >
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                        <Button
                          size="lg"
                          className="bg-primary hover:bg-primary/90 text-white rounded-full h-12 px-8"
                        >
                          Enroll Now
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="rounded-full h-12 px-8"
                        >
                          Download Syllabus
                        </Button>
                      </div>
                    </div>

                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={track.image}
                        alt={track.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-l" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="mt-16 flex justify-center"
        >
           <Button asChild size="lg" className="rounded-full h-14 px-12 text-lg shadow-xl shadow-primary/20 font-bold">
              <Link to="/academy">Explore All 7 Career Tracks</Link>
           </Button>
        </motion.div>
      </div>
    </section>
  );
}
