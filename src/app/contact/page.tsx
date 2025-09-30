// app/contact/page.tsx
"use client";

import { Container } from "@/components/layout";
import { motion } from "framer-motion";
import { connect } from "@/lib/me";
import ContactForm from "@/components/contact/contact-form";
import ConnectSection from "@/components/contact/connect-section";

export default function ContactPage() {
  return (
    <Container className="my-12 text-zinc-800 dark:text-zinc-200">
      {/* Get in Touch */}
      <motion.div
        className="w-full flex flex-col md:flex-row align-baseline md:space-x-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-full md:w-1/5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-4">
            Get in Touch
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Have a project in mind? Drop me a message.
          </p>
        </motion.div>

        {/* Form */}
        <ContactForm />
      </motion.div>

      {/* Connect */}
      <ConnectSection items={connect} className="mb-16 mt-12" />
    </Container>
  );
}
