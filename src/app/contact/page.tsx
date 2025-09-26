"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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

  const SERVICE_ID =
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "PUT_YOUR_SERVICE_ID_HERE";
  const TEMPLATE_ID =
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "PUT_YOUR_TEMPLATE_ID_HERE";
  const PUBLIC_KEY =
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "PUT_YOUR_PUBLIC_KEY_HERE";

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
    if (!data.message.trim()) next.message = "Message can’t be empty.";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(null);

    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;

    // map to your EmailJS template variables
    const templateParams = {
      from_first_name: form.firstName,
      from_last_name: form.lastName,
      from_email: form.email,
      message: form.message,
      // Optional: add subject or other vars your template expects:
      // subject: `New contact from ${form.firstName} ${form.lastName}`,
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
    "h-[53px] bg-white text-zinc-900 border-zinc-300 placeholder:text-zinc-400 " +
    "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 " +
    "dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-700 dark:placeholder:text-zinc-500 " +
    "dark:focus-visible:ring-blue-400 dark:focus-visible:border-blue-400";

  const textAreaField =
    "min-h-[140px] bg-white text-zinc-900 border-zinc-300 placeholder:text-zinc-400 " +
    "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 " +
    "dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-700 dark:placeholder:text-zinc-500 " +
    "dark:focus-visible:ring-blue-400 dark:focus-visible:border-blue-400";

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <Card className="shadow-lg bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center text-zinc-900 dark:text-zinc-100">
            Get in Touch
          </CardTitle>

          {sent === "ok" && (
            <p className="mt-2 text-center text-sm text-green-600 dark:text-green-400">
              Thanks! Your message has been sent.
            </p>
          )}
          {sent === "err" && (
            <p className="mt-2 text-center text-sm text-red-600 dark:text-red-400">
              Oops—couldn’t send your message. Please try again in a moment.
            </p>
          )}
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="firstName">First Name</Label>
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
                <Label htmlFor="lastName">Last Name</Label>
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
              <Label htmlFor="email">Email</Label>
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
              <Label htmlFor="message">Message</Label>
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
              className="w-full md:w-auto md:px-8 font-medium bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
