"use client";

import { motion } from "framer-motion";
import { FaqAccordion } from "./faq-accordion";

const faqs = [
  {
    question: "What is Brainwave AI?",
    answer:
      "Brainwave AI is a cutting-edge artificial intelligence platform that provides smart automation, natural language processing, and personalized recommendations to enhance your productivity and workflow.",
  },
  {
    question: "How does the AI chatbot work?",
    answer:
      "Our AI chatbot uses advanced natural language processing to understand your queries and provide relevant, accurate responses in real-time. It learns from interactions to deliver increasingly personalized assistance.",
  },
  {
    question: "Is my data secure with Brainwave?",
    answer:
      "Yes, we implement end-to-end encryption and advanced security measures to protect your conversations and personal data. Your privacy and security are our top priorities.",
  },
  {
    question: "What are the subscription options?",
    answer:
      "We offer flexible subscription plans including a free tier for basic features and premium plans for advanced capabilities. Check our pricing section for detailed information.",
  },
  {
    question: "Can I integrate Brainwave with other tools?",
    answer:
      "Yes, Brainwave offers seamless integration capabilities with popular tools and platforms to enhance your workflow and productivity.",
  },
];

export function FaqSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1280px] relative z-10">
        <div className="text-center mb-16">
          <motion.p
            className="text-sm text-electric-cyan tracking-wider uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            FAQ
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Frequently Asked{" "}
            <span
              className="bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan bg-clip-text
                text-transparent"
            >
              Questions
            </span>
          </motion.h2>
          <motion.p
            className="text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find answers to common questions about Brainwave AI and how it can
            help transform your workflow
          </motion.p>
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FaqAccordion items={faqs} />
        </motion.div>
      </div>
    </section>
  );
}
