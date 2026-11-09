export type Faq = {
  question: string;
  answer: string;
  category: "Visiting" | "Treatments" | "Comfort" | "Payment";
};

export const faqs: Faq[] = [
  {
    question: "What dental services do you offer in Williston?",
    answer:
      "We offer sealants, fluoride treatments, fillings and restorations, reconstruction, root canals, crowns, implant crowns, veneers, bridges, tooth extractions including wisdom teeth, full and partial dentures, stain removal, mouth guards, teeth whitening, nitrous oxide, TMJ care, routine dental exams, and cleanings.",
    category: "Treatments",
  },
  {
    question: "Where is Pheasant Run Dental Center located?",
    answer:
      "We are at 2605 19th Ave. West, Suite #102, Williston, North Dakota 58801, on the west side of Williston.",
    category: "Visiting",
  },
  {
    question: "What are your office hours?",
    answer:
      "We offer appointments during normal office hours, Monday through Friday from 8:00 am to 5:00 pm.",
    category: "Visiting",
  },
  {
    question: "How do I schedule a consultation?",
    answer:
      "Call us at (701) 577-3333, text us at (701) 969-5258, or use the contact form on this website. We will confirm a time that works with your schedule during office hours.",
    category: "Visiting",
  },
  {
    question: "Do you offer emergency dental services?",
    answer:
      "Yes. We offer preventive and cosmetic dentistry as well as emergency services for people of all ages. If you are experiencing a dental emergency, call our office at (701) 577-3333.",
    category: "Comfort",
  },
  {
    question: "How long do dental crowns and bridges last?",
    answer:
      "Dental crowns and dental bridges typically last from 5 to 15 years, depending on your oral hygiene, wear-and-tear, and how well you care for them.",
    category: "Treatments",
  },
  {
    question: "How does your teeth whitening work?",
    answer:
      "We use a tray-based system. We take impressions of your teeth, create custom-fit trays, and give you a special solution to use at home for a brief period each day until you reach the desired level of whiteness. We also offer refills on whitening material.",
    category: "Treatments",
  },
  {
    question: "What can I expect after a tooth extraction?",
    answer:
      "A blood clot forms in the socket and is a crucial part of healing. Avoid smoking, straws, rinsing, and spitting for the recommended period, eat soft foods, rest for about 24 hours, and use an ice pack for 10 minutes at a time to help with swelling. Call us if you have any concerns.",
    category: "Comfort",
  },
  {
    question: "Can I finance my dental care?",
    answer:
      "Yes. When you receive the care you need and have a post-care balance, you can use your CareCredit credit card to pay online after you leave the office. You can also apply for CareCredit before your visit.",
    category: "Payment",
  },
  {
    question: "Do you treat children and seniors?",
    answer:
      "Yes. Our dentists have extensive experience treating children, adults, and seniors in all aspects of dental treatment, and we provide care in a family-friendly environment.",
    category: "Comfort",
  },
];
