import { motion } from "motion/react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { 
  Code, 
  Layout, 
  Server, 
  Database, 
  MonitorSmartphone, 
  Cloud, 
  ShieldCheck, 
  BrainCircuit,
  Users,
  GraduationCap,
  Briefcase,
  Zap,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const tracks = [
  {
    title: "Web Development (Frontend)",
    icon: Layout,
    color: "bg-blue-500/10 text-blue-500",
    description: "Master React, Next.js, and modern CSS frameworks to build stunning user interfaces.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    duration: "12 Weeks",
    path: "frontend"
  },
  {
    title: "Web Development (Backend)",
    icon: Server,
    color: "bg-green-500/10 text-green-500",
    description: "Build robust APIs and server-side logic using Node.js, Express, and databases.",
    skills: ["Node.js", "Express", "PostgreSQL", "Redis"],
    duration: "14 Weeks",
    path: "backend"
  },
  {
    title: "UI/UX Design",
    icon: MonitorSmartphone,
    color: "bg-purple-500/10 text-purple-500",
    description: "Design user-centric products using Figma, wireframing, and interactive prototyping.",
    skills: ["Figma", "Design Systems", "Prototyping", "UX Research"],
    duration: "10 Weeks",
    path: "uiux"
  },
  {
    title: "Data Analysis",
    icon: Database,
    color: "bg-orange-500/10 text-orange-500",
    description: "Turn raw data into business intelligence using SQL, Python, and visualization tools.",
    skills: ["SQL", "Python", "Power BI", "Pandas"],
    duration: "16 Weeks",
    path: "data"
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    color: "bg-sky-500/10 text-sky-500",
    description: "Deploy and manage global infrastructure on AWS, Azure, and Google Cloud.",
    skills: ["AWS", "Docker", "Kubernetes", "IAM"],
    duration: "18 Weeks",
    path: "cloud"
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    color: "bg-red-500/10 text-red-500",
    description: "Protect systems from threats with ethical hacking and network security mastery.",
    skills: ["Ethical Hacking", "Metasploit", "Networking", "SOC Ops"],
    duration: "20 Weeks",
    path: "cyber"
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    color: "bg-amber-500/10 text-amber-500",
    description: "Build intelligent systems with Machine Learning, NLP, and AI integrations.",
    skills: ["Python", "TensorFlow", "Generative AI", "NLP"],
    duration: "24 Weeks",
    path: "ai"
  }
];

const features = [
  {
    icon: GraduationCap,
    title: "Industry-Led Curriculum",
    text: "Learn from veterans working at top tech firms in Nigeria and globally."
  },
  {
    icon: Zap,
    title: "Project-Based Learning",
    text: "Build 5+ real-world projects to showcase in your portfolio to employers."
  },
  {
    icon: Briefcase,
    title: "Job Placement Support",
    text: "Resume reviews, mock interviews, and direct access to our partner hiring network."
  },
  {
    icon: Users,
    title: "Global Community",
    text: "Join a network of 5,000+ alumni working across the world's leading tech hubs."
  }
];

export function TechAcademyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Banner Section */}
        <section className="relative py-24 lg:py-32 bg-primary">
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 border-0 text-sm px-4 py-1">
                  Enrollment Open - Q2 Intake
                </Badge>
                <h1 className="text-4xl md:text-7xl font-heading font-bold text-white tracking-tight mb-8">
                  From Absolute Beginner to Job-Ready in 90 Days.
                </h1>
                <p className="text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
                  Join Africa's most intensive, project-driven academy. We provide the mentorship, the tools, and the path to a high-growth career in tech.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 px-8 py-7 text-lg shadow-xl shadow-black/10">
                    <Link to="/get-started?type=student">Apply Now</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-7 text-lg">
                    View Catalog
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
          {/* Decorative pattern */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 hidden lg:block" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        </section>

        {/* Value Propositions */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tracks Catalog */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">The Catalog</Badge>
                <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">Choose Your Career Path</h2>
                <p className="text-lg text-muted-foreground mt-4">Every track is designed to be comprehensive. No prerequisites required, just the drive to succeed.</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                 Filter by Interest <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {tracks.map((track, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="h-full border-border hover:border-primary/50 transition-colors shadow-none overflow-hidden group">
                    <CardHeader className="pb-4">
                      <div className={`${track.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                        <track.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{track.title}</CardTitle>
                      <Badge variant="outline" className="mt-2 w-max text-xs">{track.duration}</Badge>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                        {track.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {track.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-muted rounded-sm text-muted-foreground">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80">
                        <Link to={`/get-started?type=student&track=${track.path}`}>
                           Learn more & apply <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Outreach Section */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Not Just Learning. Placement.</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We don't stop at teaching. Our dedicated career team works with you to build a personal brand that attracts recruiters from around the globe.
                </p>
                <div className="space-y-6">
                   <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30">
                      <div className="bg-primary/20 p-2 rounded-lg text-primary mr-2 mt-1">
                         <Zap className="w-5 h-5" />
                      </div>
                      <div>
                         <h4 className="font-bold mb-1">Accelerated Hire Programs</h4>
                         <p className="text-sm text-muted-foreground">Direct pipelines into internships and junior roles at 200+ partner companies.</p>
                      </div>
                   </div>
                </div>
              </motion.div>
              <div className="relative">
                 <div className="aspect-video rounded-3xl bg-muted border border-border overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" 
                      alt="Student Collaborative Sessions" 
                      className="w-full h-full object-cover"
                    />
                 </div>
                 {/* Testimonial preview badge */}
                 <div className="absolute -bottom-10 -right-4 md:right-12 bg-card p-6 rounded-2xl shadow-xl max-w-sm border border-border hidden sm:block">
                    <p className="text-sm font-medium italic mb-4">"The Academy didn't just teach me how to code; it taught me how to problem-solve like an engineer. I landed my first remote job in 3 months."</p>
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-primary/20" />
                       <div>
                          <p className="text-xs font-bold">Chinedu O.</p>
                          <p className="text-[10px] text-muted-foreground">Software Engineer at FinTech Corp</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Certifications Link */}
        <section className="py-24 bg-foreground group relative overflow-hidden">
           <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-white max-w-2xl">
                 <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Ready to go Global?</h2>
                 <p className="text-white/70 text-lg">We offer exam preparation and vouchers for international certifications from AWS, Google, and Microsoft.</p>
              </div>
              <Button asChild size="lg" className="rounded-full bg-primary text-white border-0 hover:bg-primary/90 px-10">
                 <Link to="/certifications">View Certifications</Link>
              </Button>
           </div>
           {/* Animated bg element */}
           <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] transition-all group-hover:bg-primary/20" />
        </section>
      </main>
      <Footer />
    </>
  );
}
