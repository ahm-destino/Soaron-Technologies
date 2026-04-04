import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Aisha Bello",
    role: "CTO, FinTech Solutions",
    content:
      "Soar on Technologies completely transformed our cloud infrastructure. Their Google Workspace integration was seamless, and their ongoing support is unmatched.",
    image:
      "https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&q=80&w=200",
    rating: 5,
  },
  {
    name: "David Okonkwo",
    role: "Data Analyst Graduate",
    content:
      "The Tech Academy was a game-changer. I went from knowing zero Python to landing a junior data analyst role in just 4 months. The curriculum is incredibly practical.",
    image:
      "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?auto=format&fit=crop&q=80&w=200",
    rating: 5,
  },
  {
    name: "Folake Adeyemi",
    role: "Web3 Developer",
    content:
      "Their developer advocacy programs and Ethereum community initiatives provided the exact networking and technical deep-dives I needed to advance my blockchain career.",
    image:
      "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=200",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6"
          >
            Success Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-6"
          >
            Trusted by Leaders & Learners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Don't just take our word for it. Hear from the businesses we've
            scaled and the professionals we've empowered.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors duration-300 shadow-lg relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <p className="text-lg text-foreground leading-relaxed mb-8 flex-grow italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
