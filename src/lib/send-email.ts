import emailjs from "@emailjs/browser";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "@/lib/constants";
import type { FormState } from "./contact-types";

export async function sendContactEmail(form: FormState) {
  const templateParams = {
    from_first_name: form.firstName,
    from_last_name: form.lastName,
    from_email: form.email,
    message: form.message,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
    publicKey: PUBLIC_KEY,
  });
}
