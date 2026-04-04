import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6 text-white"
            >
              Ready to Soar Above the Competition?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-primary-foreground/80 mb-8 leading-relaxed"
            >
              Whether you need enterprise-grade Google Workspace integration,
              Web3 advocacy, or want to launch your tech career, we have the
              expertise to guide you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-lg rounded-full shadow-xl group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 h-14 px-8 text-lg rounded-full backdrop-blur-sm"
              >
                Explore Academy
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-6 text-center">
              Get a Free Tech Audit
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              />
              <input
                type="email"
                placeholder="Work Email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              />
              <select defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all appearance-none">
                <option value="" disabled>
                  Select Interest
                </option>
                <option value="corporate" className="text-foreground">
                  Corporate Solutions
                </option>
                <option value="academy" className="text-foreground">
                  Tech Academy
                </option>
                <option value="web3" className="text-foreground">
                  Web3 & Advocacy
                </option>
              </select>
              <Button className="w-full bg-white text-primary hover:bg-white/90 h-12 rounded-xl font-bold mt-4 shadow-lg">
                Request Audit
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
