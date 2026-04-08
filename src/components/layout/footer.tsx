"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { connect } from "@/lib/me";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t-2 border-foreground bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1"
          >
            <h3 className="font-black text-2xl mb-3 tracking-tight">CE</h3>
            <p className="text-sm leading-relaxed text-foreground/70 font-mono">
              Frontend engineer. Clean code. Bold designs.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold uppercase text-xs tracking-widest mb-6 border-b border-foreground/30 pb-3">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-accent transition-colors font-mono"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h4 className="font-bold uppercase text-xs tracking-widest mb-6 border-b border-foreground/30 pb-3">
              Stack
            </h4>
            <ul className="space-y-3 text-sm font-mono">
              <li><span className="text-accent">→</span> React</li>
              <li><span className="text-accent">→</span> Next.js</li>
              <li><span className="text-accent">→</span> TypeScript</li>
              <li><span className="text-accent">→</span> TailwindCSS</li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold uppercase text-xs tracking-widest mb-6 border-b border-foreground/30 pb-3">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              {connect.map((el) => {
                const Icon = el.icon;
                const href =
                  el.social === "Email"
                    ? "mailto:fortunecornerstone@gmail.com"
                    : `https://${el.url}`;

                return (
                  <Link
                    key={`footer-connect-${el.id}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono hover:text-accent transition-colors flex items-center gap-2"
                    aria-label={el.social}
                  >
                    <Icon size={16} />
                    <span>{el.social}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-16 pt-8 border-t-2 border-foreground/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-mono text-foreground/60">
              © {currentYear} Cornerstone Ephraim. Built with code.
            </p>
            <div className="flex gap-6 text-xs font-mono text-foreground/60">
              <span>Designed & developed</span>
              <span className="text-accent">→</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
