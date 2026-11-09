import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Please keep your name under 80 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(120, "Please keep your email under 120 characters."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number we can reach you at.")
    .max(24, "Please enter a valid phone number."),
  interest: z.enum([
    "New patient",
    "Existing patient",
    "Cosmetic dentistry",
    "Emergency",
    "Other",
  ]),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little about how we can help.")
    .max(1500, "Please keep your message under 1,500 characters."),
});

export type ContactValues = z.infer<typeof contactSchema>;
