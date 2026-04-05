import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Hexagon, Code2, Users, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Network,
    title: "Blockchain Infrastructure",
    description:
      "Robust node deployment and smart contract development for scalable decentralized applications.",
  },
  {
    icon: Users,
    title: "Developer Communities",
    description:
      "Building and nurturing ecosystems like Ethereum Nigeria and Filecoin African Hub.",
  },
  {
    icon: Code2,
    title: "Developer Advocacy",
    description:
      "Bridging the gap between protocols and developers through education and technical support.",
  },
  {
    icon: Hexagon,
    title: "Web3 Consulting",
    description:
      "Strategic guidance for enterprises transitioning to decentralized architectures.",
  },
];

export function Web3() {
  return (
    <section
      id="web3"
      className="py-24 bg-card relative overflow-hidden text-foreground"
    >
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hexagons"
              width="50"
              height="43.4"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(2)"
            >
              <path
                d="M25 0L50 14.4v28.8L25 43.4L0 28.8V14.4z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/20"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6"
            >
              Web3 & Developer Advocacy
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-6"
            >
              Pioneering the Decentralized Future for Africa
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              We are at the forefront of the Web3 revolution in Africa. We advocate for protocols like Ethereum and Filecoin, 
              empowering the next generation of African builders to create trustless, scalable solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full"
              >
                <Link to="/web3-advocacy">Explore Web3 Advocacy</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/get-started?type=community">Join Our Community</Link>
              </Button>
            </motion.div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-background/50 backdrop-blur-md border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors duration-300 shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
