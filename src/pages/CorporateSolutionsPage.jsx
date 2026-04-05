import { motion } from "motion/react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { 
  Building2, 
  Landmark, 
  TrendingUp, 
  Workflow, 
  ShieldCheck, 
  ChevronRight, 
  Users, 
  Lightbulb,
  Cloud,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: Cloud,
    title: "Google Workspace & Infrastructure",
    description: "Move beyond legacy systems. We help banks and firms transition to cloud-first collaboration platforms that guarantee 99.9% uptime and global accessibility.",
  },
  {
    icon: Workflow,
    title: "Productivity Training",
    description: "Level up your team's efficiency. From advanced Power BI dashboards for analysts to Google Apps Script automation for HR and Ops.",
  },
  {
    icon: ShieldCheck,
    title: "Digital Security Compliance",
    description: "Align your operations with CBN cybersecurity frameworks and NDPC data protection standards. Secure team training at its best.",
  },
  {
    icon: Lightbulb,
    title: "Digital Transformation Strategy",
    description: "Bespoke roadmaps to modernize your service delivery. We don't just provide tools; we build a tech-first culture within your organization.",
  },
];

const pillars = [
  {
    icon: Users,
    title: "Team Leveling",
    text: "We fill the skill gaps that hold your teams back, from entry-level staff to executive management."
  },
  {
    icon: Landmark,
    title: "Banking Specifics",
    text: "Tailored modules for financial reporting, risk analysis, and customer data management."
  },
  {
    icon: TrendingUp,
    title: "ROI Driven",
    text: "Measurable productivity increases within 90 days through our project-based training models."
  }
];

export function CorporateSolutionsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-24 lg:py-32">
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-4 py-1 text-sm font-medium">
                    Corporate Growth
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                    Transforming the Workflow of the Modern African Firm
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Automate manual tasks, empower your human capital, and modernize your infrastructure. We help organizations like banks and insurance firms level up their teams for the digital age.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white h-14 px-10 text-lg shadow-lg shadow-primary/20">
                      <Link to="/get-started?type=corporate">
                        Request a Productivity Audit <ChevronRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-10 text-lg border-primary/20 hover:bg-primary/5">
                      <a href="#solutions">Explore Services</a>
                    </Button>
                  </div>
                </motion.div>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="aspect-square rounded-3xl bg-gradient-to-tr from-primary/20 to-secondary/50 p-6"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=2070" 
                    alt="Nigerian Corporate Team productivity" 
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  />
                </motion.div>
                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border hidden md:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary font-bold text-2xl">35%</div>
                    <div>
                      <p className="font-semibold text-sm">Efficiency Boost</p>
                      <p className="text-xs text-muted-foreground">Post-training results</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          {/* Background Decorative Element */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
        </section>

        {/* Pillars Section */}
        <section className="py-24 bg-muted/50 border-y border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-background p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-6">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Solutions */}
        <section id="solutions" className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Built for Corporate Excellence</h2>
              <p className="text-lg text-muted-foreground">We understand the unique challenges of the Nigerian corporate ecosystem—from power downtime to local regulatory compliance. We build resilience into your tech culture.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((sol, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative p-8 rounded-2xl bg-card border border-border shadow-lg hover:border-primary/50 transition-all overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                      <sol.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{sol.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{sol.description}</p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary" /> Hands-on team training
                      </li>
                      <li className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary" /> Post-deployment support
                      </li>
                    </ul>
                  </div>
                  {/* Decorative faint background icon */}
                  <sol.icon className="absolute -bottom-4 -right-4 w-32 h-32 text-primary/5 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Ready to Level Up Your Team?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-12"> Join top organizations using Soar on Technologies to drive digital growth and employee productivity.</p>
            <div className="flex justify-center">
               <Button asChild size="lg" variant="secondary" className="rounded-full h-14 px-12 text-lg bg-white text-primary hover:bg-gray-100 border-0 shadow-xl shadow-black/10">
                  <Link to="/get-started?type=corporate">Work With Us Today</Link>
               </Button>
            </div>
          </div>
          {/* Background pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </section>
      </main>
      <Footer />
    </>
  );
}
