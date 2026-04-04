import { motion } from "motion/react";
import { Search, Lightbulb, Rocket, Zap } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We start by deeply understanding your goals, challenges, and target audience to uncover hidden opportunities.",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Lightbulb,
    title: "Strategize",
    description:
      "Our experts craft a tailored roadmap, selecting the right technologies and frameworks to ensure maximum impact.",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    icon: Rocket,
    title: "Execute",
    description:
      "We build, deploy, and optimize your solution using agile methodologies, ensuring rapid delivery and high quality.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Zap,
    title: "Empower",
    description:
      "We don't just deliver; we train your team, provide ongoing support, and equip you to scale sustainably.",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
];

export function Methodology() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6"
          >
            The Soar Methodology
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-6"
          >
            How We Deliver Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            A proven, structured approach to transforming your ideas into
            powerful digital realities, whether for corporate solutions or
            individual career growth.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="bg-background border border-border rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2">
                  <div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${step.color} group-hover:scale-110 transition-transform duration-300 shadow-inner`}
                  >
                    <step.icon className="h-10 w-10" />
                  </div>

                  <div className="absolute top-8 right-8 text-6xl font-heading font-black text-muted/30 group-hover:text-primary/10 transition-colors duration-300">
                    0{index + 1}
                  </div>

                  <h3 className="text-2xl font-heading font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
