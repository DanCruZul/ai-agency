"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Send,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

const sections = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "AI Chat", href: "#chat" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
      { label: "Press", href: "#press" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "Help Center", href: "#help" },
      { label: "Community", href: "#community" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Security", href: "#security" },
      { label: "Cookies", href: "#cookies" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="relative w-full bg-neural/5 border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Brand and Social */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-block">
                <span
                  className="text-2xl font-medium bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan
                    bg-clip-text text-transparent"
                >
                  Brainwave
                </span>
              </Link>
              <p className="text-white/60 mt-4 max-w-md">
                Unleash the power of AI within Brainwave. Upgrade your
                productivity with Brainwave, the open AI chat app.
              </p>
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center
                      hover:border-electric-cyan/50 hover:bg-neural/50 transition-all duration-300
                      group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-white/60 group-hover:text-electric-cyan transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Newsletter */}
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white font-medium mb-2">
              Subscribe to our newsletter
            </h3>
            <p className="text-white/60 mb-4">
              Stay updated with the latest AI innovations and product updates
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-neural/5 border border-white/10 rounded-lg px-4 py-2 text-white
                  placeholder:text-white/30 focus:outline-none focus:ring-2
                  focus:ring-electric-cyan/50 focus:border-electric-cyan/50 transition-all
                  duration-300"
              />
              <Button variant="ai" size="icon" className="group">
                <Send className="w-4 h-4" />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md"
                />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-white font-medium mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-electric-cyan transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="h-px w-full bg-white/10 my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            © {new Date().getFullYear()} Brainwave. All rights reserved.
          </motion.p>
          <motion.div
            className="flex gap-6 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="#privacy"
              className="hover:text-electric-cyan transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              className="hover:text-electric-cyan transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#cookies"
              className="hover:text-electric-cyan transition-colors"
            >
              Cookie Policy
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
