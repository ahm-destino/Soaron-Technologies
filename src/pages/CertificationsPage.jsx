import { motion } from "motion/react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { 
  Award, 
  Cloud, 
  ShieldCheck, 
  Database, 
  CheckCircle2, 
  Globe, 
  Users, 
  ExternalLink,
  Search,
  BadgeCheck,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const certificates = [
  {
    vendor: "Amazon Web Services",
    title: "AWS Certified Solutions Architect",
    level: "Associate",
    icon: Cloud,
    color: "bg-orange-500/10 text-orange-600 border-orange-200",
    description: "The gold standard for cloud professionals. Validate your ability to design and deploy robust applications on AWS.",
    path: "aws-sa"
  },
  {
    vendor: "CompTIA",
    title: "Security+",
    level: "Foundational",
    icon: ShieldCheck,
    color: "bg-blue-600/10 text-blue-700 border-blue-200",
    description: "The first security certification a candidate should earn. It establishes the core knowledge required of any cybersecurity role.",
    path: "comptia-sec"
  },
  {
    vendor: "Microsoft",
    title: "Azure Administrator (AZ-104)",
    level: "Associate",
    icon: Cloud,
    color: "bg-sky-500/10 text-sky-600 border-sky-200",
    description: "Master the implementation, management, and monitoring of an organization's Microsoft Azure environment.",
    path: "azure-admin"
  },
  {
    vendor: "Google",
    title: "Professional Data Engineer",
    level: "Professional",
    icon: Database,
    color: "bg-red-500/10 text-red-600 border-red-200",
    description: "Enable data-driven decision making by collecting, transforming, and publishing data on Google Cloud Platform.",
    path: "google-data"
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Higher Salary Potential",
    text: "Certified professionals in Nigeria earn up to 40% more than their non-certified counterparts."
  },
  {
    icon: Globe,
    title: "Global Mobility",
    text: "Industry-standard credentials that are recognized by employers in the EU, USA, and Middle East."
  },
  {
    icon: Search,
    title: "Employer Trust",
    text: "Skip the technical screening hurdles with credentials that guarantee your level of competence."
  }
];

export function CertificationsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Professional Hero Section */}
        <section className="relative py-24 border-b border-border overflow-hidden bg-muted/30">
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5 }}
              >
                 <Badge className="mb-6 bg-primary/10 text-primary border-primary/30">Global Accreditation</Badge>
                 <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-8">
                    Validate Your Expertise with <span className="text-primary italic">Global</span> Credentials.
                 </h1>
                 <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
                    Don't just claim your skills—prove them. Soar on Technologies provides the training, preparation, and vouchers for the world's most valued tech certifications.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white h-14 px-10 text-lg shadow-lg shadow-primary/20">
                       <Link to="/get-started?type=cert">Start Certification Pathway</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-10 text-lg border-primary/20 hover:bg-primary/5">
                       <Link to="/certifications#catalog">Check Partners</Link>
                    </Button>
                 </div>
              </motion.div>
              <div className="relative">
                 <div className="aspect-[4/3] rounded-3xl bg-background border-2 border-border p-8 flex items-center justify-center relative shadow-2xl">
                     <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2071" alt="African Tech Professional" className="w-full h-full object-cover rounded-2xl shadow-xl" />
                    <div className="absolute -top-4 -right-4 bg-primary text-white p-4 rounded-full shadow-lg h-20 w-20 flex items-center justify-center text-center leading-none text-[10px] font-bold uppercase rotate-12">
                       Validated Center
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-12">
               {benefits.map((benefit, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="text-center group"
                  >
                     <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <benefit.icon className="w-7 h-7" />
                     </div>
                     <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                     <p className="text-muted-foreground leading-relaxed italic">{benefit.text}</p>
                  </motion.div>
               ))}
            </div>
          </div>
        </section>

        {/* List of Certs */}
        <section className="py-24 bg-muted/20">
           <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                 <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Our Supported Credentials</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed">Choose a pathway that aligns with your career goals. We offer full exam preparation, mock tests, and discounted vouchers.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                 {certificates.map((cert, idx) => (
                    <motion.div
                       key={idx}
                       initial={{ opacity: 0, scale: 0.95 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: idx * 0.1 }}
                    >
                       <Card className="h-full border-border shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                          <CardHeader className="flex flex-row items-center gap-4 pb-4">
                             <div className={`${cert.color} p-3 rounded-xl border`}>
                                <cert.icon className="w-6 h-6" />
                             </div>
                             <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{cert.vendor}</p>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">{cert.title}</CardTitle>
                             </div>
                          </CardHeader>
                          <CardContent className="pb-8">
                             <Badge variant="secondary" className="mb-4">{cert.level}</Badge>
                             <p className="text-muted-foreground leading-relaxed italic line-clamp-3">
                                {cert.description}
                             </p>
                          </CardContent>
                          <CardFooter className="border-t border-border pt-6 bg-muted/30">
                             <Button asChild variant="link" className="p-0 text-primary group-hover:underline">
                                <Link to={`/get-started?type=cert&id=${cert.path}`}>View full curriculum <ArrowRight className="ml-2 w-4 h-4" /></Link>
                             </Button>
                          </CardFooter>
                       </Card>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Contact/CTA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
             <div className="rounded-[40px] bg-foreground text-white p-12 lg:p-24 relative overflow-hidden text-center max-w-6xl mx-auto">
                <div className="relative z-10">
                   <h2 className="text-3xl md:text-7xl font-heading font-bold mb-8">Ready to Level Up Your Career?</h2>
                   <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto leading-relaxed italic">The certification you need to unlock the next level of your career is just a preparation away.</p>
                   <div className="flex justify-center">
                      <Button asChild size="lg" className="rounded-full bg-primary text-white border-0 hover:bg-primary/90 h-14 px-12 text-lg shadow-xl shadow-black/20 font-bold">
                         <Link to="/get-started?type=cert">Consult with a Career Specialist</Link>
                      </Button>
                   </div>
                </div>
                {/* Decorative blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] -z-0" />
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
