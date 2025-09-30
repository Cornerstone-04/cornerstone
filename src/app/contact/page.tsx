"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "@/components/layout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "@/lib/constants";
import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";
import { connect } from "@/lib/me";
import { motion } from "framer-motion";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function ContactPage() {
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

  const validate = (data: FormState) => {
    const next: Partial<FormState> = {};
    if (!data.firstName.trim()) next.firstName = "First name is required.";
    if (!data.lastName.trim()) next.lastName = "Last name is required.";
    if (!data.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(data.email))
      next.email = "Enter a valid email address.";
    if (!data.message.trim()) next.message = "Message can't be empty.";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(null);

    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;

    const templateParams = {
      from_first_name: form.firstName,
      from_last_name: form.lastName,
      from_email: form.email,
      message: form.message,
    };

    try {
      setSubmitting(true);
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });
      setSent("ok");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
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
    <Container className="my-12 text-zinc-800 dark:text-zinc-200">
      {/* Get in Touch Section */}
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
          <h2 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-2">
            Get in Touch
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Have a project in mind? Drop me a message.
          </p>
        </motion.div>

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
                  aria-describedby={
                    errors.lastName ? "lastName-error" : undefined
                  }
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
              <Label
                htmlFor="email"
                className="text-zinc-900 dark:text-zinc-100"
              >
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
              <Label
                htmlFor="message"
                className="text-zinc-900 dark:text-zinc-100"
              >
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
      </motion.div>

      {/* Connect Section */}
      <motion.div
        className="w-full flex flex-col md:flex-row align-baseline md:space-x-6 mb-16 mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="w-full md:w-1/5 font-semibold text-lg text-zinc-900 dark:text-zinc-100"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Connect
        </motion.h2>

        <motion.div
          className="w-full md:w-4/5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            Reach out! I&apos;d love to chat.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            {connect.map((el, index) => {
              const Icon = el.icon;
              const href =
                el.social === "Email"
                  ? "mailto:fortunecornerstone@gmail.com"
                  : `https://${el.url}`;

              return (
                <motion.div
                  key={`connect-${index}`}
                  className="w-full sm:w-[48%]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-lg border transition-colors
                               border-zinc-300 dark:border-zinc-800
                               hover:bg-zinc-100/70 dark:hover:bg-[#0f0f0f]
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-x-3 text-blue-800 dark:text-blue-400">
                        <Icon size={40} />
                        <span className="font-medium">{el.social}</span>
                      </div>
                      <LuArrowUpRight
                        className="text-blue-800 dark:text-blue-400"
                        size={20}
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
}
