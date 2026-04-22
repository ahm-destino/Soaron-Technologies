import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle2, Cloud, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Cloud,
    title: "Seamless Migration",
    description:
      "Zero-downtime transition to modern cloud collaboration with complete data integrity.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Advanced data protection, endpoint management, and compliance controls.",
  },
  {
    icon: Zap,
    title: "Enhanced Productivity",
    description:
      "Integrated tools that streamline workflows and boost team efficiency.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Real-time co-authoring and communication tools that connect remote teams.",
  },
];

export function Corporate() {
  return (
    <section
      id="corporate"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6"
            >
              Corporate Solutions
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-6"
            >
              Drive Organizational Productivity with Modern Cloud Tools
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              We help banks, insurance firms, and large organizations level up their human capital.
              Our productivity audits and digital transformation training ensure your team is efficient, secure, and ready for the digital age.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              {[
                "Productivity Audits for Financial Teams",
                "Advanced Google Sheets & Data Training",
                "Enterprise Security & Compliance (NDPA/CBN)",
                "Workflow Automation with Apps Script",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full h-14 px-10 text-lg shadow-lg shadow-primary/20 font-bold"
              >
                <Link to="/corporate-solutions">Explore Productivity Solutions</Link>
              </Button>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <img
                src="/images/LBWD1-172.jpg"
                alt="Nigerian Corporate Team Productivity"
                className="rounded-3xl shadow-2xl border border-border"
                referrerPolicy="no-referrer"
              />

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl shadow-xl border border-border hidden md:block"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">99.9%</div>
                    <div className="text-sm text-muted-foreground">
                      Uptime SLA
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-8 -right-8 bg-card p-6 rounded-2xl shadow-xl border border-border hidden md:block"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">ISO 27001</div>
                    <div className="text-sm text-muted-foreground">
                      Certified Security
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[80px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
