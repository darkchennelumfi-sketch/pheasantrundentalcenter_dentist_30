"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/lib/faq";

export function FaqAccordion({
  items,
  showCategory = false,
}: {
  items: Faq[];
  showCategory?: boolean;
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((faq, index) => (
        <AccordionItem key={faq.question} value={`faq-${index}`}>
          <AccordionTrigger>
            <span className="flex flex-col gap-2">
              {showCategory ? (
                <span className="font-sans text-[0.58rem] font-bold uppercase tracking-[0.2em] text-oxblood/80">
                  {faq.category}
                </span>
              ) : null}
              {faq.question}
            </span>
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
