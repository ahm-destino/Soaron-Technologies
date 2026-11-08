import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
import logo from "@/src/assets/logo.png";

const services = [
  {
    title: "Corporate Solutions",
    description: "Digital Workplace & Productivity Strategy",
    icon: Briefcase,
    href: "/corporate-solutions",
  },
  {
    title: "Tech Academy",
    description: "7 High-Demand IT Professional Tracks",
    icon: GraduationCap,
    href: "/academy",
  },
  {
    title: "AI Summer Camp",
    description: "Kids 5-16 learn coding, AI & game design",
    icon: Sparkles,
    href: "/summer-camp",
  },
  {
    title: "Web3 & Advocacy",
    description: "Protocols, Decentralization & Stripe Hackathon",
    icon: Code,
    href: "/web3-advocacy",
  },
  {
    title: "Global Certifications",
    description: "International tech credentials (AWS, CompTIA)",
    icon: Globe,
    href: "/certifications",
  },
];

const darkHeroRoutes = ["/", "/about", "/summer-camp", "/web3-advocacy", "/academy"];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const hasDarkHero = darkHeroRoutes.includes(location.pathname);
  const isHeaderSolid = !hasDarkHero || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu whenever pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeaderSolid
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
              <img
                src={logo}
                alt="Soar on Technologies Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span
              className={`font-heading font-bold text-xl tracking-tight ${
                isHeaderSolid ? "text-foreground" : "text-white"
              }`}
            >
              Soar on Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-transparent ${
                      isHeaderSolid
                        ? "text-foreground hover:bg-accent hover:text-foreground data-[state=open]:bg-accent"
                        : "text-white hover:text-white hover:bg-white/10 data-[state=open]:bg-white/10"
                    }`}
                  >
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-background">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink
                            render={
                              <Link
                                to={service.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              />
                            }
                            closeOnClick
                          >
                            <div className="flex items-center gap-2 text-sm font-medium leading-none">
                              <service.icon className="h-4 w-4 text-primary" />
                              {service.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              {service.description}
                            </p>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    to="/academy"
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors ${
                      isHeaderSolid
                        ? "text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        : "text-white hover:text-white hover:bg-white/10 focus:bg-white/10"
                    }`}
                  >
                    Academy
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    to="/about"
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors ${
                      isHeaderSolid
                        ? "text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        : "text-white hover:text-white hover:bg-white/10 focus:bg-white/10"
                    }`}
                  >
                    About Us
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-3">
              <Button
                asChild
                variant={isHeaderSolid ? "outline" : "secondary"}
                className={`h-9 px-4 text-sm font-medium rounded-full ${
                  !isHeaderSolid
                    ? "bg-white/10 text-white hover:bg-white/20 border-0"
                    : ""
                }`}
              >
                <Link to="/get-started?type=login">Sign In</Link>
              </Button>
              <Button asChild className="h-9 px-5 text-sm font-medium rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                <Link to="/get-started">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className={isHeaderSolid ? "text-foreground" : "text-white"} />
            ) : (
              <Menu className={isHeaderSolid ? "text-foreground" : "text-white"} />
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
                  <Link
                    key={service.title}
                    to={service.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="bg-primary/10 p-2 rounded-md">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{service.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {service.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="h-px bg-border my-2" />
              <Link
                to="/academy"
                className="font-medium p-3 hover:bg-accent rounded-lg transition-colors text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Academy
              </Link>
              <Link
                to="/about"
                className="font-medium p-3 hover:bg-accent rounded-lg transition-colors text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="flex flex-col gap-3 mt-4">
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-center h-11 text-base rounded-xl font-medium"
                >
                  <Link
                    to="/get-started?type=login"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                </Button>
                <Button asChild className="w-full justify-center h-11 text-base rounded-xl font-medium">
                  <Link
                    to="/get-started"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
