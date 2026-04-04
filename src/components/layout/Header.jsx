import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Globe,
  Code,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const services = [
  {
    title: "Corporate Solutions",
    description: "Google Workspace & Cloud Infrastructure",
    icon: Briefcase,
    href: "#corporate",
  },
  {
    title: "Tech Academy",
    description: "UI/UX, Data, Cloud & Cybersecurity",
    icon: GraduationCap,
    href: "#academy",
  },
  {
    title: "AI Summer Camp",
    description: "Kids 5-16 learn coding, AI & game design",
    icon: Sparkles,
    href: "/summer-camp",
  },
  {
    title: "Web3 & Advocacy",
    description: "Blockchain & Developer Communities",
    icon: Code,
    href: "#web3",
  },
  {
    title: "Global Certifications",
    description: "Internationally recognized tech credentials",
    icon: Globe,
    href: "#certifications",
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:scale-105 transition-transform">
              S
            </div>
            <span
              className={`font-heading font-bold text-xl tracking-tight ${isScrolled ? "text-foreground" : "text-white"}`}
            >
              Soar on Technologies
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-transparent hover:bg-white/10 ${!isScrolled && "text-white hover:text-white data-[state=open]:bg-white/10"}`}
                  >
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-background">
                      {services.map((service) => (
                        <li key={service.title}>
                          {service.href.startsWith('/') ? (
                            <NavigationMenuLink asChild>
                              <Link
                                to={service.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                  <service.icon className="h-4 w-4 text-primary" />
                                  {service.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          ) : (
                            <NavigationMenuLink
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                <service.icon className="h-4 w-4 text-primary" />
                                {service.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                {service.description}
                              </p>
                            </NavigationMenuLink>
                          )}
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a
                    href="#academy"
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${!isScrolled ? "text-white hover:text-white" : "text-foreground hover:bg-accent hover:text-accent-foreground"}`}
                  >
                    Academy
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a
                    href="#about"
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${!isScrolled ? "text-white hover:text-white" : "text-foreground hover:bg-accent hover:text-accent-foreground"}`}
                  >
                    About Us
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">
              <Button
                variant={isScrolled ? "outline" : "secondary"}
                className={
                  !isScrolled
                    ? "bg-white/10 text-white hover:bg-white/20 border-0"
                    : ""
                }
              >
                Sign In
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-foreground" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  Solutions
                </div>
                {services.map((service) => (
                  <a
                    key={service.title}
                    href={service.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="bg-primary/10 p-2 rounded-md">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{service.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {service.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="h-px bg-border my-2" />
              <a
                href="#academy"
                className="font-medium p-3 hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Academy
              </a>
              <a
                href="#about"
                className="font-medium p-3 hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="outline" className="w-full justify-center">
                  Sign In
                </Button>
                <Button className="w-full justify-center">Get Started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
