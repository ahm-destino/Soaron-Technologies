import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need prior coding experience to join the Tech Academy?",
    answer:
      "Not at all! Our beginner-friendly tracks (like UI/UX and Data Analysis) are designed for absolute beginners. We start from the fundamentals and gradually build up to advanced concepts.",
  },
  {
    question: "How does the Google Workspace migration process work?",
    answer:
      "Our 'Discover, Strategize, Execute, Empower' methodology ensures a smooth transition. We audit your current setup, plan the migration to minimize downtime, execute the transfer securely, and train your team on the new tools.",
  },
  {
    question: "Are your certifications globally recognized?",
    answer:
      "Yes, we partner with leading global tech organizations. Our curriculum is aligned with industry standards, preparing you for exams from Google, AWS, CompTIA, and other recognized bodies.",
  },
  {
    question: "What kind of support do you offer for Web3 projects?",
    answer:
      "We offer end-to-end support including smart contract auditing, node deployment, developer onboarding, and community management for protocols looking to expand into the African market.",
  },
  {
    question: "Do you offer job placement assistance after the Academy?",
    answer:
      "Absolutely. We have a 92% placement rate. Our program includes resume building, interview preparation, portfolio reviews, and direct introductions to our network of hiring partners.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 sticky top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6"
            >
              Got Questions?
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-6"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Find answers to common questions about our corporate solutions,
              tech academy, and Web3 initiatives.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:w-2/3 w-full"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-lg hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
