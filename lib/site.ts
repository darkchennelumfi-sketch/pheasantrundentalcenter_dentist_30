export const site = {
  name: "Pheasant Run Dental Center",
  shortName: "Pheasant Run Dental",
  tagline: "Our smiles speak for themselves.",
  description:
    "Family-friendly preventive, restorative, and cosmetic dentistry in Williston, North Dakota. Three experienced dentists, modern care, and a practice that treats you like a neighbor.",
  url: "https://pheasantrundental.com",
  phone: "(701) 577-3333",
  phoneHref: "tel:+17015773333",
  textPhone: "(701) 969-5258",
  textHref: "sms:+17019695258",
  email: "pheasantrundental@gmail.com",
  address: {
    line1: "2605 19th Ave. West, Suite #102",
    city: "Williston",
    state: "North Dakota",
    zip: "58801",
    full: "2605 19th Ave. West, Suite #102, Williston, North Dakota 58801",
  },
  hours: "Monday through Friday, 8:00 am – 5:00 pm",
  hoursShort: "Mon–Fri · 8am–5pm",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=2605+19th+Ave+W+Suite+102+Williston+ND+58801",
  facebook: "https://www.facebook.com/pheasantrundentalcenter/",
  jobApplication:
    "https://pheasantrundental.com/wp-content/uploads/2016/11/Job-Application.pdf",
  copyright: "Pheasant Run Dental · Copyright 2023 · All Rights Reserved",
} as const;

export const doctors = [
  {
    name: "Ryan B. Davis",
    credentials: "DDS",
    initials: "RD",
    tenure: "25+ years",
    school: "University of the Pacific Dental School",
    bio: "Dr. Davis was trained at the University of the Pacific Dental School and has practiced dentistry for over 25 years. He has enjoyed working with families over the years and has extensive experience treating children, adults, and seniors in all aspects of dental treatment.",
    personal:
      "Dr. Davis and his wife Michelle of 32 years have 5 children that take up all of their spare time. He is very happy to be in Williston serving the people of North Dakota in their dental needs.",
  },
  {
    name: "Steven P. Blackhurst",
    credentials: "DDS",
    initials: "SB",
    tenure: "20 years",
    school: "Creighton University, Omaha",
    bio: "Dr. Steven Blackhurst attended and graduated from Creighton University in Omaha, Nebraska. He has been practicing dentistry for 20 years. He enjoys working on families and restoring smiles, and building relationships in the community.",
    personal:
      "He and his wife Rebecca have been married 25 years and have 4 children.",
  },
  {
    name: "Robert Blackhurst",
    credentials: "DDS",
    initials: "RB",
    tenure: "17 years",
    school: "Creighton University, Omaha",
    bio: "Dr. Robert Blackhurst attended and graduated from Creighton University in Omaha, Nebraska. He has been practicing for 17 years.",
    personal: "He and his wife Jenny have 5 kids, ages 19 to 7.",
  },
] as const;

export const stats = [
  { value: 60, suffix: "+", label: "Years of combined experience" },
  { value: 3, suffix: "", label: "Dentists in one practice" },
  { value: 11, suffix: "", label: "Dental services offered" },
  { value: 5, suffix: " days", label: "A week, Monday to Friday" },
] as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "New Patients", href: "/new-patients" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const serviceArea = [
  "Williston",
  "North Dakota",
  "and the surrounding areas",
] as const;
