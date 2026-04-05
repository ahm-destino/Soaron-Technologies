import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Briefcase,
  GraduationCap,
  Code,
  Globe,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Corporate Solutions",
    description:
      "Modernize your workforce with Google Workspace and data-driven productivity audits tailored for African firms.",
    icon: Briefcase,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    link: "/corporate-solutions",
  },
  {
    title: "Tech Academy",
    description:
      "Master high-demand skills in 7 specialized tracks including Data, UI/UX, Cloud, and AI with industry-led training.",
    icon: GraduationCap,
    color: "bg-primary/10 text-primary",
    link: "/academy",
  },
  {
    title: "Web3 & Advocacy",
    description:
      "Join the decentralized revolution. We support protocols like Ethereum and Filecoin through African community initiatives.",
    icon: Code,
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    link: "/web3-advocacy",
  },
  {
    title: "Global Certifications",
    description:
      "Validate your expertise with internationally recognized credentials from AWS, Microsoft, and CompTIA.",
    icon: Globe,
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    link: "/certifications",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6"
          >
            Our Pillars of Excellence
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-6"
          >
            Comprehensive Tech Solutions for Every Stage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Whether you're a corporation scaling operations or an individual
            launching a tech career, we provide the tools, training, and
            community to help you soar.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col group hover:shadow-xl hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${service.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-heading">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 hover:bg-transparent hover:text-primary group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <Link to={service.link}>
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
