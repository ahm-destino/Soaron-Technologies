import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    image:
      "./src/assets/images/LBWD1-172.jpg",
    title: "Modern Tech Solutions for the African Firm",
    subtitle:
      "Level up your organization with modern cloud productivity and data-driven audits.",
    primaryAction: "Explore Solutions",
    primaryHref: "/corporate-solutions",
    secondaryAction: "Request Audit",
    secondaryHref: "/get-started?type=corporate",
    badge: "Corporate Excellence",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2070",
    title: "7 Tracks to a Global Tech Career",
    subtitle:
      "Join our Tech Academy and master High-demand skills with our industry-led curriculum.",
    primaryAction: "Join Academy",
    primaryHref: "/academy",
    secondaryAction: "View Tracks",
    secondaryHref: "/academy#tracks",
    badge: "Tech Academy",
  },
  {
    image:
      "./src/assets/images/LBWD1-167.jpg",
    title: "Global Certifications & Web3",
    subtitle:
      "Validate your expertise with AWS, Microsoft, and Google credentials or lead the Web3 decentralization.",
    primaryAction: "Get Certified",
    primaryHref: "/certifications",
    secondaryAction: "Join Community",
    secondaryHref: "/web3-advocacy",
    badge: "Global Recognition",
  },
];

export function Hero() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-background">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-full pl-0">
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>

              <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex items-center">
                <div className="max-w-3xl pt-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: current === index ? 1 : 0,
                      y: current === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary-foreground backdrop-blur-sm mb-6"
                  >
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                    {slide.badge}
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: current === index ? 1 : 0,
                      y: current === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: current === index ? 1 : 0,
                      y: current === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: current === index ? 1 : 0,
                      y: current === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white h-14  px-10 text-lg rounded-full shadow-lg shadow-primary/20 group"
                    >
                      <Link to={slide.primaryHref} className="flex items-center">
                        {slide.primaryAction}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="bg-white/10 hover:bg-white/20 text-white border-white/20 h-14 px-10 text-lg rounded-full backdrop-blur-sm group"
                    >
                      <Link to={slide.secondaryHref} className="flex items-center">
                        {slide.secondaryAction}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform font-bold" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-10 left-0 right-0 z-20 container mx-auto px-4 md:px-6 flex justify-between items-end">
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${current === index
                  ? "w-8 bg-primary"
                  : "w-4 bg-white/30 hover:bg-white/50"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="hidden md:flex gap-2">
            <CarouselPrevious className="relative translate-y-0 h-12 w-12 bg-white/10 border-white/20 text-white hover:bg-primary hover:text-white hover:border-primary backdrop-blur-sm left-auto right-auto top-auto bottom-auto" />
            <CarouselNext className="relative translate-y-0 h-12 w-12 bg-white/10 border-white/20 text-white hover:bg-primary hover:text-white hover:border-primary backdrop-blur-sm left-auto right-auto top-auto bottom-auto" />
          </div>
        </div>
      </Carousel>
    </section>
  );
}
