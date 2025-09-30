"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { validateContactForm } from "@/lib/contact-validation";
import type { FormState } from "@/lib/contact-types";
import { sendContactEmail } from "@/lib/send-email";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    "h-[50px] bg-white text-zinc-900 border-zinc-300 placeholder:text-zinc-400 " +
    "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 " +
    "dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-700 dark:placeholder:text-zinc-500 " +
    "dark:focus-visible:ring-blue-400 dark:focus-visible:border-blue-400 transition-all";

  const textAreaField =
    "min-h-[140px] bg-white text-zinc-900 border-zinc-300 placeholder:text-zinc-400 " +
    "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 " +
    "dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-700 dark:placeholder:text-zinc-500 " +
    "dark:focus-visible:ring-blue-400 dark:focus-visible:border-blue-400 transition-all";

  return (
    <motion.div
      className="w-full md:w-4/5"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {sent === "ok" && (
        <div className="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-700 dark:text-green-400">
            Thanks! Your message has been sent successfully.
          </p>
        </div>
      )}
      {sent === "err" && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <p className="text-sm text-red-700 dark:text-red-400">
            Oops—couldn&apos;t send your message. Please try again in a moment.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="firstName"
              className="text-zinc-900 dark:text-zinc-100"
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
              className="text-zinc-900 dark:text-zinc-100"
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
          <Label htmlFor="email" className="text-zinc-900 dark:text-zinc-100">
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
          <Label htmlFor="message" className="text-zinc-900 dark:text-zinc-100">
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
          className="px-8 font-medium bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white disabled:opacity-60 transition-colors"
        >
          {submitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </motion.div>
  );
}
