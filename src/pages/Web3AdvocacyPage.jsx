import { motion } from "motion/react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { 
  Blocks, 
  Cpu, 
  HardDrive, 
  Globe, 
  ShieldCheck, 
  Handshake, 
  Zap, 
  ArrowRight,
  ExternalLink,
  Users,
  Rocket,
  Sparkles,
  CreditCard,
  Code2,
  Calendar,
  CheckCircle2,
  Clock,
  Trophy,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

function StripeIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.839 3.771 6.491 6.861 7.607 2.533.913 3.415 1.53 3.415 2.471 0 .997-.872 1.545-2.105 1.545-1.897 0-4.607-.946-6.581-2.07l-.907 5.503C6.183 23.36 9.162 24 12.181 24c2.583 0 4.707-.633 6.223-1.83 1.574-1.242 2.39-3.075 2.39-5.372 0-5.006-3.83-6.626-6.818-7.648z" />
    </svg>
  );
}

const hackathonPillars = [
  {
    icon: Rocket,
    title: "Build & Ship in 48 Hours",
    description: "Move beyond concepts. Collaborate with passionate builders to write code, design interfaces, and launch a working product before the clock runs out.",
    color: "from-indigo-500 to-purple-600",
    badge: "Sprint Execution"
  },
  {
    icon: CreditCard,
    title: "Stripe Payments Integration",
    description: "Equip your product to monetize from day one. Integrate Stripe payment flows and learn what it takes to serve customers locally and scale globally.",
    color: "from-blue-500 to-indigo-600",
    badge: "Global Monetization"
  },
  {
    icon: Code2,
    title: "More Than Just Code",
    description: "Test, validate, and iterate with real-time feedback. Build alongside founders and product thinkers who are dead-serious about shipping to real users.",
    color: "from-violet-500 to-pink-600",
    badge: "Product Validation"
  },
  {
    icon: Trophy,
    title: "Year-End Community Celebration",
    description: "Celebrate community wins, forge enduring co-founder bonds, and set massive goals for the year ahead.",
    color: "from-amber-500 to-orange-600",
    badge: "Community & Network"
  }
];

const ecosystems = [
  {
    name: "Ethereum",
    icon: Cpu,
    color: "text-[#627EEA]",
    bg: "bg-[#627EEA]/10",
    description: "The world's leading smart contract platform. We advocate for EVM development and Layer 2 scaling solutions like Arbitrum and Base to drive DeFi in Africa.",
    focus: ["Smart Contracts", "DeFi Protocols", "EVM Development"]
  },
  {
    name: "Filecoin",
    icon: HardDrive,
    color: "text-[#0090FF]",
    bg: "bg-[#0090FF]/10",
    description: "Decentralized storage for a decentralized web. We teach devs how to leverage Filecoin and IPFS to store data without central points of failure.",
    focus: ["IPFS Storage", "Data Retrievability", "FVM Development"]
  }
];

const pillars = [
  {
    title: "Education & Literacy",
    text: "Breaking down complex blockchain concepts into actionable knowledge for developers and business leaders.",
    icon: Zap
  },
  {
    title: "Community Initiatives",
    text: "Hosting meetups, hackathons, and study circles through our partner hubs in Lagos, Abuja, and beyond.",
    icon: Handshake
  },
  {
    title: "Governance Advocacy",
    text: "Working with regulators and ecosystem builders to create a sustainable legal framework for Web3 in Nigeria.",
    icon: ShieldCheck
  }
];

const participantTracks = [
  "Founders & Co-founders",
  "Full-Stack Developers",
  "Product & UI/UX Designers",
  "Product Thinkers",
  "Marketplace Builders",
  "Indie Hackers"
];

export function Web3AdvocacyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Dark Hero Section */}
        <section className="relative py-24 lg:py-32 bg-slate-950 text-white overflow-hidden">
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap gap-2 justify-center mb-6"
              >
                <Badge className="bg-primary/20 text-primary border-primary/30 text-xs px-4 py-1">
                  Web3 Pioneer Africa
                </Badge>
                <button
                  onClick={() => document.getElementById("hackathon")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/20 px-3.5 py-1 text-xs font-medium text-indigo-200 hover:bg-indigo-500/30 transition-all cursor-pointer shadow-sm"
                >
                  <div className="w-4 h-4 rounded-sm bg-[#635BFF] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <StripeIcon className="w-2.5 h-2.5" />
                  </div>
                  <span>Upcoming: 48h Sprint Hackathon with Stripe Community Lagos</span> &rarr;
                </button>
              </motion.div>

              <h1 className="text-4xl md:text-7xl font-heading font-extrabold tracking-tight mb-8">
                Building the <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-400 to-blue-400">Decentralized</span> Internet for Africa.
              </h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
                We are more than a tech hub; we are a movement. Soar on Technologies bridges the gap between global protocols, builder communities, and local tech creators in Nigeria.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white h-12 sm:h-13 px-6 sm:px-8 text-base font-semibold shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 cursor-pointer"
                  onClick={() => document.getElementById("hackathon")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Rocket className="mr-2 w-5 h-5" />
                  48-Hour Sprint Hackathon
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-slate-700 bg-slate-900/50 text-white hover:bg-slate-800 h-12 sm:h-13 px-6 sm:px-8 text-base font-semibold">
                  <Link to="/get-started?type=community">Join the Movement</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-full text-slate-400 hover:text-white hover:bg-slate-800/50 h-12 sm:h-13 px-6 text-base font-medium cursor-pointer"
                  onClick={() => document.getElementById("initiatives")?.scrollIntoView({ behavior: "smooth" })}
                >
                   View Initiatives
                </Button>
              </div>
            </div>
          </div>
          {/* Animated Matrix/Grid Background Placeholder-like Pattern */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px] -z-10 animate-pulse" />
        </section>

        {/* ======================================================== */}
        {/* STRIPE COMMUNITY LAGOS HACKATHON SECTION */}
        {/* ======================================================== */}
        <section id="hackathon" className="relative py-24 lg:py-32 bg-slate-900 text-white overflow-hidden border-y border-indigo-500/20">
          {/* Background Ambient Glows */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="container relative z-10 mx-auto px-4 md:px-6">
            {/* Header Badge & Title */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 rounded-full border border-indigo-400/30 bg-[#635BFF]/15 px-4 py-1.5 text-sm font-semibold text-indigo-200 mb-6 shadow-sm"
              >
                <div className="w-5 h-5 rounded-md bg-[#635BFF] flex items-center justify-center text-white shadow-sm shrink-0">
                  <StripeIcon className="w-3.5 h-3.5" />
                </div>
                <span>Powered by Stripe Community Lagos</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl font-heading font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-300"
              >
                Going Live: 48-Hour Sprint
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl font-medium text-indigo-200 mb-6 leading-relaxed"
              >
                What if you could turn your idea into a working product before the year ends?
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base md:text-lg text-slate-300 leading-relaxed"
              >
                A 48-hour sprint hackathon bringing together founders, developers, designers, product thinkers, and ambitious builders to move beyond ideas and build solutions that are ready for the real world.
              </motion.p>

              {/* Event Quick Specs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-indigo-200/80 font-medium"
              >
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  <span>48-Hour Sprint</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
                  <Globe className="w-4 h-4 text-indigo-400" />
                  <span>Lagos, Nigeria &bull; In-Person & Hybrid</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
                  <CreditCard className="w-4 h-4 text-indigo-400" />
                  <span>Stripe Global Payments</span>
                </div>
              </motion.div>
            </div>

            {/* 4 Feature Pillars Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {hackathonPillars.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/50 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-indigo-300 bg-indigo-500/20 px-2.5 py-1 rounded-full border border-indigo-500/30">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Who is this for banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-indigo-950/70 via-purple-950/50 to-slate-950 border border-indigo-500/30 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2 space-y-4">
                  <div className="inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold uppercase tracking-wider">
                    <Users className="w-4 h-4" />
                    Who Should Apply?
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                    Built for Founders & Builders Serious About Shipping.
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Whether you're building a startup, developing a marketplace, creating a digital product, or turning your next big idea into reality, this is your opportunity to build alongside a high-energy community.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {participantTracks.map((role) => (
                      <span
                        key={role}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 text-indigo-200 border border-white/15"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4 justify-center items-start lg:items-end">
                  <div className="text-left lg:text-right">
                    <div className="text-sm font-semibold text-indigo-300 uppercase tracking-wider mb-1">
                      Final Takeaway
                    </div>
                    <p className="text-lg font-bold text-white italic">
                      "Come with an idea. Bring your skills. Leave ready to ship."
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white h-12 sm:h-13 px-7 text-base font-semibold shadow-xl shadow-indigo-500/30 group"
                    >
                      <Link to="/get-started?type=hackathon">
                        Register for the Sprint
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/15 h-12 sm:h-13 px-6 text-base font-medium"
                    >
                      <a href="https://wa.me/2347079956918" target="_blank" rel="noopener noreferrer">
                        <Phone className="mr-2 w-4 h-4 text-green-400" />
                        Ask Questions
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ecosystems Focus */}
        <section id="initiatives" className="py-24 bg-background border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
             <div className="text-center max-w-3xl mx-auto mb-16">
               <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Protocol Partnerships</Badge>
               <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Supported Protocols & Foundations</h2>
               <p className="text-lg text-muted-foreground">From layer-1 storage to EVM scaling networks, we equip Nigerian engineers with the skills to build robust decentralized applications.</p>
             </div>
             <div className="grid lg:grid-cols-2 gap-12">
                {ecosystems.map((eco, idx) => (
                   <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group p-8 rounded-3xl border border-border bg-card shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300"
                   >
                      <div className={`${eco.bg} ${eco.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                         <eco.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-3xl font-heading font-bold mb-4">{eco.name} Ecosystem</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">{eco.description}</p>
                      <div className="flex flex-wrap gap-3 mb-8">
                         {eco.focus.map((item, fIdx) => (
                            <span key={fIdx} className="text-xs font-semibold px-4 py-2 bg-muted rounded-full border border-border">
                               {item}
                            </span>
                         ))}
                      </div>
                      <Button variant="link" className="p-0 text-primary h-auto flex items-center gap-2 font-bold group-hover:translate-x-2 transition-transform">
                         Explore {eco.name} Resources <ExternalLink className="w-4 h-4" />
                      </Button>
                   </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* Missions Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 italic">Our Mission: Web3 & Tech Literacy for All.</h2>
              <p className="text-lg text-muted-foreground">We aren't just teaching devs; we are educating the next generation of African founders who will build solutions for finance, commerce, and governance.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {pillars.map((pillar, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.15 }}
                     className="bg-background p-10 rounded-3xl border border-border flex flex-col items-center text-center group"
                  >
                     <div className="bg-primary/10 text-primary p-4 rounded-2xl mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <pillar.icon className="w-8 h-8" />
                     </div>
                     <h4 className="text-xl font-bold mb-4">{pillar.title}</h4>
                     <p className="text-muted-foreground leading-relaxed italic">{pillar.text}</p>
                  </motion.div>
               ))}
            </div>
          </div>
        </section>

        {/* Participation Banner */}
        <section className="py-24 relative overflow-hidden bg-primary text-white">
          <div className="container relative z-10 mx-auto px-4 md:px-6">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                   <h2 className="text-3xl md:text-6xl font-heading font-bold mb-8">Join the Soar Hub Developer Community</h2>
                   <p className="text-xl text-white/80 mb-10">Access exclusive developer study groups, grants for early-stage blockchain projects, and networking with global ecosystem leaders.</p>
                   <div className="flex flex-wrap gap-4">
                      <Button asChild size="lg" variant="secondary" className="rounded-full h-12 sm:h-13 px-8 text-base font-semibold text-primary bg-white hover:bg-slate-100 border-0 shadow-xl shadow-black/20">
                         <Link to="/get-started?type=community">Be an Advocate</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20 h-12 sm:h-13 px-8 text-base font-semibold cursor-pointer"
                        onClick={() => document.getElementById("hackathon")?.scrollIntoView({ behavior: "smooth" })}
                      >
                         View Hackathon Details
                      </Button>
                   </div>
                </div>
                <div className="relative group">
                   <div className="aspect-square bg-white/10 rounded-full border border-white/20 p-8 flex items-center justify-center animate-pulse">
                      <Blocks className="w-48 h-48 text-white/40 group-hover:scale-110 transition-transform duration-500" />
                   </div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary blur-[80px] -z-10" />
                </div>
             </div>
          </div>
          {/* Decorative globe bg pattern */}
          <Globe className="absolute -bottom-32 -right-32 w-[600px] h-[600px] text-white/5 opacity-10 pointer-events-none" />
        </section>
      </main>
      <Footer />
    </>
  );
}
