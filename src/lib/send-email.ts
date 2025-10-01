import emailjs from "@emailjs/browser";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "@/lib/constants";
import type { FormState } from "@/lib/contact-types";

export async function sendContactEmail(form: FormState) {
  const templateParams = {
    from_first_name: form.firstName,
    from_last_name: form.lastName,
    from_name: `${form.firstName} ${form.lastName}`,
    from_email: form.email,
    message: form.message,
    reply_to: form.email,
  };

  return await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
    publicKey: PUBLIC_KEY,
  });
}
