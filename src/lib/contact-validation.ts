import { FormState } from "./types";

export const validateContactForm = (data: FormState) => {
  const next: Partial<FormState> = {};
  if (!data.firstName.trim()) next.firstName = "First name is required.";
  if (!data.lastName.trim()) next.lastName = "Last name is required.";
  if (!data.email.trim()) next.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(data.email))
    next.email = "Enter a valid email address.";
  if (!data.message.trim()) next.message = "Message can't be empty.";
  return next;
};
