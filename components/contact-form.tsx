"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Check, Loader2, RotateCcw, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactValues } from "@/lib/contact-schema";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const interests: ContactValues["interest"][] = [
  "New patient",
  "Existing patient",
  "Cosmetic dentistry",
  "Emergency",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "success">(
    "idle",
  );
  const [serverError, setServerError] = React.useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "New patient",
      message: "",
    },
  });

  async function onSubmit(values: ContactValues) {
    setServerError(null);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("idle");
      setServerError(
        `We could not send your message just now. Please call us at ${site.phone}.`,
      );
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-[28rem] flex-col items-start justify-center rounded-[1.7rem] border border-oxblood/15 bg-shell/70 p-8 sm:p-10"
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-oxblood text-shell">
              <Check className="size-6" />
            </span>
            <h2 className="mt-6 font-display text-3xl tracking-[-0.03em] text-ink">
              Message received.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-ink-muted">
              Thank you — your request has been received. Our team will follow up
              during office hours, Monday through Friday from 8:00 am to 5:00 pm.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button type="button" onClick={() => setStatus("idle")}>
                <RotateCcw />
                Send another message
              </Button>
              <Button asChild variant="outline">
                <a href={site.phoneHref}>{site.phone}</a>
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[1.7rem] border border-ink/10 bg-shell/60 p-6 sm:p-8"
            noValidate
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow text-oxblood">Send a message</p>
                <h2 className="mt-2 font-display text-2xl tracking-[-0.03em] text-ink">
                  How can we help?
                </h2>
              </div>
              <span className="hidden rounded-full border border-ink/10 px-3 py-1 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-ink-muted sm:inline-flex">
                Mon–Fri
              </span>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  autoComplete="name"
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  {...register("name")}
                />
                {errors.name ? (
                  <p className="mt-2 text-xs font-medium text-oxblood">
                    {errors.name.message}
                  </p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(701) 000-0000"
                  aria-invalid={Boolean(errors.phone)}
                  {...register("phone")}
                />
                {errors.phone ? (
                  <p className="mt-2 text-xs font-medium text-oxblood">
                    {errors.phone.message}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
                {...register("email")}
              />
              {errors.email ? (
                <p className="mt-2 text-xs font-medium text-oxblood">
                  {errors.email.message}
                </p>
              ) : null}
            </div>

            <fieldset className="mt-5">
              <legend className="mb-2 block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-ink-muted">
                I am reaching out about
              </legend>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <label
                    key={interest}
                    className={cn(
                      "focus-within:ring-2 focus-within:ring-oxblood/40 focus-within:ring-offset-2 focus-within:ring-offset-bone",
                      "cursor-pointer rounded-full border border-ink/12 bg-bone/60 px-3.5 py-2 text-xs font-semibold text-ink-muted transition-colors has-[:checked]:border-oxblood has-[:checked]:bg-oxblood has-[:checked]:text-shell",
                    )}
                  >
                    <input
                      type="radio"
                      value={interest}
                      className="sr-only"
                      {...register("interest")}
                    />
                    {interest}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us what you need, and a day or time that works for you."
                aria-invalid={Boolean(errors.message)}
                {...register("message")}
              />
              {errors.message ? (
                <p className="mt-2 text-xs font-medium text-oxblood">
                  {errors.message.message}
                </p>
              ) : null}
            </div>

            {serverError ? (
              <p className="mt-5 rounded-xl border border-oxblood/20 bg-oxblood/5 px-4 py-3 text-xs font-medium leading-5 text-oxblood">
                {serverError}
              </p>
            ) : null}

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-[0.65rem] leading-5 text-ink-muted">
                Please do not include sensitive medical details. For urgent
                concerns, call{" "}
                <a
                  href={site.phoneHref}
                  className="font-semibold text-oxblood underline-offset-2 hover:underline"
                >
                  {site.phone}
                </a>
                .
              </p>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || status === "sending"}
                className="shrink-0"
              >
                {isSubmitting || status === "sending" ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    Send message
                    <Send />
                  </>
                )}
              </Button>
            </div>

            <p className="mt-4 flex items-center gap-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
              <ArrowUpRight className="size-3" />
              Prefer to text? {site.textPhone}
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
