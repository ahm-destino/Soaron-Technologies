import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { 
  Building2, 
  GraduationCap, 
  Blocks, 
  Award, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  ArrowLeft,
  Briefcase,
  Monitor,
  Cloud,
  FileCode,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const types = [
  { id: "corporate", title: "Corporate Solutions", icon: Building2, color: "text-blue-600", bg: "bg-blue-100" },
  { id: "student", title: "Tech Academy", icon: GraduationCap, color: "text-green-600", bg: "bg-green-100" },
  { id: "community", title: "Web3 & Advocacy", icon: Blocks, color: "text-purple-600", bg: "bg-purple-100" },
  { id: "cert", title: "Global Certifications", icon: Award, color: "text-orange-600", bg: "bg-orange-100" },
];

const subOptions = {
  corporate: ["Google Workspace Integration", "Productivity Training", "Digital Transformation", "Security Compliance"],
  student: ["Frontend Development", "Backend Development", "UI/UX Design", "Data Analysis", "Cloud Computing", "Cybersecurity", "Artificial Intelligence"],
  community: ["Ethereum Build Circle", "Filecoin Advocacy", "DeFi Research", "Local Hub Meetup"],
  cert: ["AWS Certification Prep", "CompTIA Security+", "Microsoft Azure", "Google Data Engineer"],
};

export function GetStartedPage() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("type") || null;
  const initialSub = searchParams.get("id") || searchParams.get("track") || null;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: initialType,
    interest: initialSub || "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (formData.type && step === 1) {
      setStep(2);
    }
  }, [formData.type]);

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log("Submitting:", formData);
    setIsSubmitted(true);
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Progress Header */}
            {!isSubmitted && (
              <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                   <Button asChild variant="ghost" className="-ml-3 text-muted-foreground hover:text-foreground">
                      <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
                   </Button>
                   <span className="text-sm font-medium text-muted-foreground">Step {step} of 4</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / 4) * 100}%` }}
                    className="h-full bg-primary transition-all duration-300"
                  />
                </div>
              </div>
            )}

            <div className="bg-card border border-border rounded-3xl shadow-xl p-8 md:p-12">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="mx-auto w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
                       <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-4xl font-heading font-bold mb-4">You're All Set!</h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
                      Thank you for your interest in Soar on Technologies. A specialist from our {types.find(t => t.id === formData.type)?.title} team will reach out to you within 24 hours.
                    </p>
                    <Button asChild size="lg" className="rounded-full px-12">
                       <Link to="/">Explore more</Link>
                    </Button>
                  </motion.div>
                ) : (
                  <div key="form">
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h2 className="text-3xl font-heading font-bold mb-4 italic">How can we help you soar?</h2>
                        <p className="text-muted-foreground mb-10 italic">Select the track that best fits your goals.</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {types.map((type) => (
                            <button
                               key={type.id}
                               onClick={() => updateField("type", type.id)}
                               className={`p-6 rounded-2xl border-2 text-left transition-all hover:border-primary group ${formData.type === type.id ? "border-primary bg-primary/5" : "border-border"}`}
                            >
                               <div className={`${type.bg} ${type.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                  <type.icon className="w-6 h-6" />
                               </div>
                               <h3 className="font-bold text-lg">{type.title}</h3>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h2 className="text-3xl font-heading font-bold mb-4 italic">Specify your interest.</h2>
                        <p className="text-muted-foreground mb-10 italic">Which of our {types.find(t => t.id === formData.type)?.title} services are you interested in?</p>
                        <div className="grid gap-3">
                           {subOptions[formData.type]?.map((opt) => (
                              <button
                                 key={opt}
                                 onClick={() => updateField("interest", opt)}
                                 className={`p-4 rounded-xl border text-left flex items-center justify-between px-6 transition-all ${formData.interest === opt ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border hover:border-primary/50"}`}
                              >
                                 <span className="font-medium italic">{opt}</span>
                                 {formData.interest === opt && <CheckCircle2 className="w-5 h-5 text-primary" />}
                              </button>
                           ))}
                        </div>
                        <div className="flex items-center gap-4 mt-12">
                           <Button variant="ghost" onClick={handleBack} className="rounded-full"><ChevronLeft className="w-4 h-4 mr-2" /> Back</Button>
                           <Button 
                             disabled={!formData.interest} 
                             onClick={handleNext} 
                             className="rounded-full px-10 h-12 bg-primary text-white"
                           >
                              Next Step <ChevronRight className="w-4 h-4 ml-2" />
                           </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h2 className="text-3xl font-heading font-bold mb-4 italic">Your contact details.</h2>
                        <p className="text-muted-foreground mb-10 italic">How should our career or corporate specialists reach you?</p>
                        <div className="space-y-6">
                           <div className="grid gap-2">
                             <Label htmlFor="name" className="italic">Full Name</Label>
                             <Input 
                               id="name" 
                               placeholder="e.g. Ebube Okechukwu" 
                               value={formData.name} 
                               onChange={(e) => updateField("name", e.target.value)} 
                               className="h-12 border-border focus:ring-primary rounded-xl"
                             />
                           </div>
                           <div className="grid gap-2">
                             <Label htmlFor="email" className="italic">Email Address</Label>
                             <Input 
                               id="email" 
                               type="email" 
                               placeholder="e.g. ebube@company.com" 
                               value={formData.email} 
                               onChange={(e) => updateField("email", e.target.value)} 
                               className="h-12 border-border focus:ring-primary rounded-xl"
                             />
                           </div>
                           <div className="grid gap-2">
                             <Label htmlFor="phone" className="italic">Phone Number</Label>
                             <Input 
                               id="phone" 
                               type="tel" 
                               placeholder="e.g. +234 800 000 000" 
                               value={formData.phone} 
                               onChange={(e) => updateField("phone", e.target.value)} 
                               className="h-12 border-border focus:ring-primary rounded-xl"
                             />
                           </div>
                        </div>
                        <div className="flex items-center gap-4 mt-12">
                           <Button variant="ghost" onClick={handleBack} className="rounded-full"><ChevronLeft className="w-4 h-4 mr-2" /> Back</Button>
                           <Button 
                             disabled={!formData.name || !formData.email || !formData.phone} 
                             onClick={handleNext} 
                             className="rounded-full px-10 h-12 bg-primary text-white"
                           >
                              Next Step <ChevronRight className="w-4 h-4 ml-2" />
                           </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h2 className="text-3xl font-heading font-bold mb-4 italic">Tell us more.</h2>
                        <p className="text-muted-foreground mb-10 italic">Briefly describe your goals or specific needs for {formData.interest}.</p>
                        <div className="space-y-4">
                           <textarea
                             className="w-full h-40 p-6 rounded-2xl border-2 border-border bg-background focus:border-primary outline-none transition-all italic text-lg shadow-inner"
                             placeholder="e.g. We are a startup team of 10 people looking to level up our backend engineering skills..."
                             value={formData.message}
                             onChange={(e) => updateField("message", e.target.value)}
                           />
                        </div>
                        <div className="flex items-center gap-4 mt-12">
                           <Button variant="ghost" onClick={handleBack} className="rounded-full"><ChevronLeft className="w-4 h-4 mr-2" /> Back</Button>
                           <Button 
                             onClick={handleSubmit} 
                             className="rounded-full px-12 h-14 bg-primary text-white text-lg font-bold shadow-lg shadow-primary/20"
                           >
                              Complete Flow <ChevronRight className="w-4 h-4 ml-2" />
                           </Button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Quote of the path */}
            {!isSubmitted && (
              <motion.div 
                animate={{ opacity: 1 }}
                className="mt-12 text-center text-muted-foreground italic text-sm"
              >
                "Building the tech-first culture Africa deserves, one {formData.type || 'professional'} at a time."
              </motion.div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
