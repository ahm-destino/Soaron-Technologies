import { motion } from "motion/react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { 
  Building2, 
  GraduationCap, 
  Blocks, 
  Award, 
  Target, 
  Compass, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Rocket, 
  HeartHandshake,
  Lightbulb,
  Globe2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const stats = [
  { value: "1,200+", label: "Builders & Students Trained" },
  { value: "50+", label: "Enterprise Workplaces Optimized" },
  { value: "7", label: "Specialized IT Career Tracks" },
  { value: "99.9%", label: "Cloud Infrastructure Uptime" },
];

const pillars = [
  {
    icon: Building2,
    title: "Corporate Workplace Strategy",
    description: "Modernizing Nigerian and African firms with cloud collaboration platforms, automated operational workflows, and CBN-compliant cybersecurity frameworks.",
    link: "/corporate-solutions",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: GraduationCap,
    title: "The Tech Academy",
    description: "Project-driven, intensive 90-day learning tracks that turn beginners into job-ready frontend, backend, data, and design professionals.",
    link: "/academy",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Blocks,
    title: "Web3 & Developer Advocacy",
    description: "Partnering with global protocols like Ethereum and Filecoin, and hosting community sprints with Stripe Community Lagos to empower local creators.",
    link: "/web3-advocacy",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Award,
    title: "Global Certifications",
    description: "Equipping African talent with globally recognized credentials and test vouchers from AWS, Microsoft, CompTIA, and Google.",
    link: "/certifications",
    color: "from-amber-500 to-orange-600",
  },
];

const values = [
  {
    icon: Target,
    title: "Relentless Focus on Shipping",
    text: "We prioritize practical execution over pure theory. Whether leveling up a bank's operations or teaching code, the end goal is functional, production-ready impact.",
  },
  {
    icon: HeartHandshake,
    title: "Community & Inclusivity",
    text: "We believe talent is uniformly distributed across Africa. Our hub exists to give builders the physical space, mentorship, and high-speed resources they need to soar.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Standards",
    text: "We benchmark our training, audits, and code against international best practices, giving our partners and alumni confidence on the global stage.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    text: "From AI workflows to decentralized protocols, we stay ahead of emerging tech curves so our community always leads rather than follows.",
  },
];

export function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 bg-slate-950 text-white overflow-hidden">
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-1.5 text-sm font-semibold">
                  About Soar on Technologies
                </Badge>
                <h1 className="text-4xl md:text-7xl font-heading font-black tracking-tight mb-8">
                  Empowering Africa's <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-400 to-blue-400">Digital Frontier.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
                  We are a technology innovation hub, enterprise solutions provider, and talent incubator dedicated to transforming African businesses and equipping the next generation of builders.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-primary hover:bg-primary/90 text-white h-12 sm:h-13 px-7 sm:px-8 text-base font-semibold shadow-lg shadow-primary/20"
                  >
                    <Link to="/corporate-solutions">
                      Workplace Solutions <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-slate-700 bg-slate-900/50 text-white hover:bg-slate-800 h-12 sm:h-13 px-7 sm:px-8 text-base font-semibold"
                  >
                    <Link to="/academy">Explore The Academy</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Background Ambient Elements */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px] -z-10 animate-pulse" />
        </section>

        {/* Stats Strip */}
        <section className="bg-card border-y border-border py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-2"
                >
                  <div className="text-3xl md:text-5xl font-heading font-black text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story / Who We Are */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <Badge className="bg-primary/10 text-primary border-primary/20">Our Story</Badge>
                <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">
                  Born in Lagos. Built for the Continent and Beyond.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Soar on Technologies (Soar-On Technologies Global Concept Ltd) was created with a clear realization: Africa possesses the most vibrant, ambitious youth demographic on earth, yet enterprises often struggle with legacy workflows and talent gaps.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We set out to bridge this divide through an integrated approach. At our physical innovation hub in Iyana Ejigbo, Lagos, and across our hybrid platforms, we operate where corporate digital transformation meets hands-on builder empowerment.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether we are automating manual operations for financial institutions or mentoring young builders to ship their first global payment product, we are fueled by one conviction: <strong className="text-foreground">practical technology can unlock unprecedented economic velocity across Africa.</strong>
                </p>

                <div className="pt-4 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Project-Based Training
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Enterprise-Grade Audits
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Global Ecosystem Ties
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
                  <img
                    src="/images/LBWD1-172.jpg"
                    alt="Soar on Technologies Team"
                    className="w-full h-[450px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-card border border-border rounded-2xl p-6 shadow-xl max-w-xs hidden sm:block">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Soarontech Hub</div>
                      <div className="text-xs text-muted-foreground">Iyana Ejigbo, Lagos</div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    State-of-the-art learning labs, fiber connectivity, and hybrid collaboration space.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="py-24 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Compass className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower individuals and organizations across Africa and the Middle East with comprehensive tech solutions, Modern Workplace strategies, and decentralized technology advocacy—building resilient digital systems and creating sustainable pathways to global tech careers.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become the premier bridge connecting African enterprise productivity and youth tech talent to the global digital economy, fostering a thriving continent where ideas are turned into world-class software that scales internationally.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Pillars Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">The Ecosystem</Badge>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Our 4 Pillars of Excellence</h2>
              <p className="text-lg text-muted-foreground">
                We operate across the entire technology lifecycle—from enterprise optimization to community sprints and individual mentorship.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:border-primary/50 transition-all duration-300 group"
                >
                  <div>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <pillar.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>
                  <Button asChild variant="link" className="p-0 text-primary group-hover:translate-x-1 transition-transform self-start">
                    <Link to={pillar.link}>
                      Explore Pillar <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted/20 border-t border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our DNA</Badge>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">The Values That Guide Us</h2>
              <p className="text-lg text-muted-foreground">
                Every line of code we teach and every enterprise consultation we conduct is shaped by our shared principles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((val, idx) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-5 p-6 rounded-2xl bg-background border border-border shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <val.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{val.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{val.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Physical Campus / Hub Spotlight */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">The Hub</Badge>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Visit the Soarontech Innovation Hub
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  Located in the bustling heart of Iyana Ejigbo, Lagos, our hub serves as an active sanctuary for developers, students, and remote workers. Equipped with uninterrupted solar power, dedicated fiber connectivity, and modern collaborative workspaces.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span className="text-slate-300">
                      Soarontech Hub, Iyana Ejigbo, Lagos State, Nigeria
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-slate-300">Open Monday – Saturday for Learning & Collaboration</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-primary hover:bg-primary/90 text-white h-12 px-7 text-base font-semibold shadow-lg"
                  >
                    <Link to="/get-started?type=community">Visit or Join Community</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-slate-700 bg-slate-800/50 text-white hover:bg-slate-800 h-12 px-7 text-base font-semibold"
                  >
                    <a href="https://wa.me/2347079956918" target="_blank" rel="noopener noreferrer">
                      Contact the Front Desk
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/images/LBWD1-167.jpg"
                    alt="Soarontech Hub Campus"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 bg-primary text-white text-center">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl md:text-6xl font-heading font-black mb-6">
              Ready to Soar With Us?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you are looking to modernize your enterprise, train your workforce, or start your IT career, we are ready to build with you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full bg-white text-primary hover:bg-slate-100 h-12 sm:h-13 px-8 text-base font-bold shadow-xl border-0"
              >
                <Link to="/get-started">Get Started Today</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20 h-12 sm:h-13 px-8 text-base font-semibold"
              >
                <Link to="/corporate-solutions">Request an Audit</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
