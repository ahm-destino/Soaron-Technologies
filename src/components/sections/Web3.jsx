import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Hexagon, Code2, Users, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Web3 & Developer Advocacy
              </span>
              <Link
                to="/web3-advocacy#hackathon"
                className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/20 transition-colors"
              >
                <div className="w-4 h-4 rounded-sm bg-[#635BFF] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <StripeIcon className="w-2.5 h-2.5" />
                </div>
                <span>Stripe Sprint Hackathon</span> &rarr;
              </Link>
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
                className="bg-primary hover:bg-primary/90 text-white rounded-full h-14 px-8 text-lg font-bold shadow-lg shadow-primary/20"
              >
                <Link to="/web3-advocacy">Explore Web3 Advocacy</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-indigo-500/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/10">
                <Link to="/web3-advocacy#hackathon">Stripe Hackathon</Link>
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
