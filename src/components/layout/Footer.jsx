import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                S
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-foreground">
                Soar on Technologies
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Empowering businesses and individuals across Africa and the Middle
              East with comprehensive tech solutions, Modern Workplace
              Strategy, and Web3 advocacy.
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
                asChild
              >
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
                asChild
              >
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
                asChild
              >
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/corporate-solutions"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Modern Workplace
                </Link>
              </li>
              <li>
                <Link
                  to="/corporate-solutions"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  to="/web3-advocacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Web3 Development
                </Link>
              </li>
              <li>
                <Link
                  to="/web3-advocacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Developer Advocacy
                </Link>
              </li>
              <li>
                <Link
                  to="/corporate-solutions"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Academy</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/academy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  to="/academy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link
                  to="/academy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link
                  to="/academy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  to="/certifications"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Global Certifications
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Soarontech Hub, Iyana Ejigbo,
                  <br />
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  08126203069
                  <br />
                  +234 707 995 6918
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@soarontech.com.ng"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@soarontech.com.ng
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Soar on Technologies. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link
              to="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/get-started?type=privacy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/get-started?type=terms"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/get-started?type=cookie"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
