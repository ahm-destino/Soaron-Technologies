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
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

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
              >
                <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-xs px-4 py-1">
                  Web3 Pioneer Africa
                </Badge>
              </motion.div>
              <h1 className="text-4xl md:text-7xl font-heading font-extrabold tracking-tight mb-8">
                Building the <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Decentralized</span> Internet for Africa.
              </h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
                We are more than a tech hub; we are a movement. Soar on Technologies bridges the gap between global protocols and local builders in Nigeria.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white h-14 px-10 text-lg shadow-lg shadow-primary/20 transition-all hover:scale-105">
                  <Link to="/get-started?type=community">Join the Movement</Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-slate-700 bg-slate-900/50 text-white hover:bg-slate-800 h-14 px-10 text-lg">
                   View Initiatives
                </Button>
              </div>
            </div>
          </div>
          {/* Animated Matrix/Grid Background Placeholder-like Pattern */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px] -z-10 animate-pulse" />
        </section>

        {/* Ecosystems Focus */}
        <section className="py-24 bg-background border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
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
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 italic">Our Mission: Web3 Literacy for All.</h2>
              <p className="text-lg text-muted-foreground">We aren't just teaching devs; we are educating the next generation of African founders who will build on-chain solutions for finance, healthcare, and governance.</p>
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
                   <h2 className="text-3xl md:text-6xl font-heading font-bold mb-8">Join the Soar Hub Web3 Community</h2>
                   <p className="text-xl text-white/80 mb-10">Access exclusive developer study groups, grants for early-stage blockchain projects, and networking with global ecosystem leaders.</p>
                   <div className="flex flex-wrap gap-4">
                      <Button asChild size="lg" variant="secondary" className="rounded-full h-14 px-12 text-lg text-primary bg-white hover:bg-slate-100 border-0 shadow-xl shadow-black/20 font-bold">
                         <Link to="/get-started?type=community">Be an Advocate</Link>
                      </Button>
                      <Button variant="outline" size="lg" className="rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20 h-14 px-12 text-lg">
                         View Events Calendar
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
