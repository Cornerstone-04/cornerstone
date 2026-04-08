"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { validateContactForm } from "@/lib/contact-validation";
import { sendContactEmail } from "@/lib/send-email";
import type { FormState } from "@/lib/types";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState<null | "ok" | "err">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((eObj) => ({ ...eObj, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(null);

    const v = validateContactForm(form);
    setErrors(v);
    if (Object.keys(v).length) return;

    try {
      setSubmitting(true);
      await sendContactEmail(form); // ← single call to your helper
      setSent("ok");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      console.error("sendContactEmail error:", err);
      setSent("err");
    } finally {
      setSubmitting(false);
    }
  };

  const baseField =
    "h-12 bg-background text-foreground border-2 border-foreground placeholder:text-foreground/50 " +
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent " +
    "transition-all font-mono text-sm";

  const textAreaField =
    "min-h-[140px] bg-background text-foreground border-2 border-foreground placeholder:text-foreground/50 " +
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent " +
    "transition-all font-mono text-sm resize-none";

  return (
    <motion.div
      className="w-full md:w-4/5"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {sent === "ok" && (
        <div className="mb-6 p-4 border-2 border-accent bg-accent/5">
          <p className="text-sm text-accent font-bold">
            ✓ Message sent! I&apos;ll get back to you soon.
          </p>
        </div>
      )}
      {sent === "err" && (
        <div className="mb-6 p-4 border-2 border-foreground bg-foreground/5">
          <p className="text-sm text-foreground font-bold">
            ✗ Oops—couldn&apos;t send your message. Please try again.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="firstName"
              className="text-foreground font-bold text-sm"
            >
              First Name
            </Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              placeholder="John"
              value={form.firstName}
              onChange={handleChange}
              required
              className={baseField}
              aria-invalid={!!errors.firstName}
              aria-describedby={
                errors.firstName ? "firstName-error" : undefined
              }
            />
            {errors.firstName && (
              <p
                id="firstName-error"
                className="text-xs text-red-600 dark:text-red-400"
              >
                {errors.firstName}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label
              htmlFor="lastName"
              className="text-foreground font-bold text-sm"
            >
              Last Name
            </Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              placeholder="Doe"
              value={form.lastName}
              onChange={handleChange}
              required
              className={baseField}
              aria-invalid={!!errors.lastName}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
            />
            {errors.lastName && (
              <p
                id="lastName-error"
                className="text-xs text-red-600 dark:text-red-400"
              >
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-foreground font-bold text-sm">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
            className={baseField}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p
              id="email-error"
              className="text-xs text-red-600 dark:text-red-400"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="message" className="text-foreground font-bold text-sm">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            value={form.message}
            onChange={handleChange}
            required
            className={textAreaField}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p
              id="message-error"
              className="text-xs text-red-600 dark:text-red-400"
            >
              {errors.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={submitting}
          className="px-8 py-3 font-bold uppercase tracking-wider bg-foreground text-background hover:bg-foreground/90 disabled:opacity-60 transition-colors border-2 border-foreground text-sm"
        >
          {submitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </motion.div>
  );
}
