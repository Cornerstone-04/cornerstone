"use client";

import { motion } from "motion/react";
import BookDiscoveryCall from "@/components/common/book-discovery-call";
import ConnectSection from "@/components/contact/connect-section";
import ContactForm from "@/components/contact/contact-form";
import { Container } from "@/components/layout";
import { connect } from "@/lib/me";

export default function ContactPage() {
  return (
    <Container className="py-16">
      {/* Page Header */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-black text-5xl md:text-6xl tracking-tight text-foreground mb-4">
          Let&apos;s Talk
        </h1>
        <div className="h-1 w-24 bg-accent" />
      </motion.div>

      {/* Get in Touch Section */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="font-black text-2xl text-foreground mb-4 border-b-2 border-accent pb-3">
            Project Inquiry
          </h2>
          <p className="text-foreground/70 leading-relaxed">
            Have a project in mind? Let me know what you&apos;re building and we can discuss how I can help bring it to life.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>
      </motion.div>

      {/* Divider */}
      <div className="h-1 bg-foreground my-20" />

      {/* Schedule meeting */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <BookDiscoveryCall />
      </motion.div>

      {/* Connect Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ConnectSection items={connect} className="mt-20 pt-20 border-t-2 border-foreground/20" />
      </motion.div>
    </Container>
  );
}
