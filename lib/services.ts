import {
  Activity,
  Anchor,
  CreditCard,
  Crown,
  Layers,
  Link2,
  Scissors,
  Smile,
  Sparkles,
  Sun,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type ServiceCategory = "Restorative" | "Cosmetic" | "Financial";

export type ServiceSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  ordered?: boolean;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  category: ServiceCategory;
  icon: LucideIcon;
  eyebrow: string;
  tagline: string;
  summary: string;
  intro: string;
  sections: ServiceSection[];
  meta: { label: string; value: string }[];
  related: string[];
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  externalLinks?: { label: string; href: string }[];
};

export const services: Service[] = [
  {
    slug: "dental-bridge",
    name: "Dental Bridges",
    shortName: "Bridges",
    category: "Restorative",
    icon: Link2,
    eyebrow: "Restorative dentistry",
    tagline: "Close the gap. Keep your smile whole.",
    summary:
      "A dental bridge uses crowns and existing teeth to fill the space left by one or more missing teeth.",
    intro:
      "If you are missing one or more teeth, a dental bridge is used to “bridge” the gap. Dental bridges are made of dental crowns and rely on existing teeth to anchor the bridge. The teeth that anchor the bridge are known as abutment teeth. Dental implants may also be used to support a dental bridge. Dental bridges tend to last from 5 to 15 years, depending on your oral hygiene and wear-and-tear.",
    sections: [
      {
        heading: "Why is a dental bridge necessary?",
        paragraphs: [
          "Missing teeth leave open gaps in your mouth, which have both technical and cosmetic consequences.",
          "While chewing and biting, the gap in your teeth may cause strain on your other teeth. While speaking, the missing teeth may cause speech problems. The gap from missing teeth may also cause other teeth to drift out of position.",
          "Cosmetically speaking, dental bridges restore your smile and maintain the shape of your face.",
        ],
      },
      {
        heading: "Types of dental bridges",
        paragraphs: [
          "There are three types of dental bridges: traditional, cantilever, and Maryland bonded. Traditional dental bridges are the most common type, usually made of porcelain fused to metal or ceramics. Traditional dental bridges use a crown for the missing tooth. Cantilever bridges are less common, and are not recommended for use in the back of the mouth, as force may cause them to break. Cantilever bridges are used when there are teeth on only one side of the missing tooth. Maryland bonded bridges (resin-bonded bridges) are often used to replace missing front teeth. The wings of the bridge are bonded to the back sides of the teeth adjacent to the gap.",
        ],
      },
      {
        heading: "Caring for your dental bridge",
        paragraphs: [
          "Just as with your regular teeth, your dental bridge is maintained by regular brushing and flossing, as well as the use of antibacterial mouthwash.",
          "The dental bridge relies on the strength of your surrounding teeth, so it is important to continue good oral hygiene practice to prevent tooth decay and gum disease.",
        ],
      },
    ],
    meta: [
      { label: "Typical lifespan", value: "5–15 years" },
      { label: "Anchored to", value: "Existing teeth or implants" },
      { label: "Types", value: "Traditional, cantilever, Maryland" },
    ],
    related: ["dental-crown", "dental-implants", "dentures"],
  },
  {
    slug: "dental-crown",
    name: "Dental Crowns",
    shortName: "Crowns",
    category: "Restorative",
    icon: Crown,
    eyebrow: "Restorative dentistry",
    tagline: "A strong, natural-looking cap for a compromised tooth.",
    summary:
      "A dental crown restores the shape, size, or appearance of a tooth that has been weakened, cracked, or worn down.",
    intro:
      "A dental crown is a cap that is placed over your tooth, to either restore its shape or size, or to improve its appearance. Dental crowns last from 5 to 15 years, depending on wear-and-tear and your oral hygiene practices.",
    sections: [
      {
        heading: "Why is a dental crown needed?",
        paragraphs: [
          "Dental crowns are needed in many different situations. A tooth may weaken due to decay, and it could break or crack. A crown would be used in this situation to restore it or hold together cracked parts of a tooth. A tooth that is already broken or worn down would benefit from a crown. A crown is also used to hold a dental bridge in place, or to cover a dental implant. For aesthetic purposes, dental crowns are used to cover discolored teeth.",
        ],
      },
      {
        heading: "Preparing and placing dental crowns",
        paragraphs: [
          "The procedure required for preparing and placing dental crowns usually consists of two visits to our office.",
          "In the first visit, your dentist will take a few X-rays to observe the roots of your teeth and the surrounding bone. Your dentist will be checking for any potential infection or extensive decay, which may be helped first by a root canal. After the X-rays, your dental team will make the crown. This involves numbing the tooth and surrounding gum tissue. The tooth is then prepared to make room for the crown; the space needed is determined by the type of crown material. Your dentist will make an impression of the tooth, as well as surrounding teeth to determine how the crown will fit and work with your bite. After this visit, the impression of your teeth is sent to a lab, where the crown will be made. During this process, the proper color is selected to match your other teeth. You may receive a temporary crown while the permanent crown is being made.",
          "In the second visit, your dentist will remove the temporary crown and check the fit and color of your permanent crown. The permanent crown is then cemented to your tooth.",
        ],
      },
      {
        heading: "Caring for your dental crowns",
        paragraphs: [
          "Your crowned teeth should be cared for as you would your other teeth. Follow good oral hygiene practices such as brushing and flossing your teeth at least two times a day. Rinse with an antibacterial mouthwash once a day. Your crowned teeth are subject to decay and gum disease, as with all of your other teeth. While they do not require special care, it is important to maintain proper oral hygiene as recommended by your dentist.",
        ],
      },
      {
        heading: "Potential problems with your dental crown",
        paragraphs: [
          "Your crowns are sturdy – but it is important to avoid biting your fingernails, chewing ice, or using your teeth to open packaging. Dental crowns may chip; this is a simple repair unless the chipping is extensive. Dental crowns may also loosen if the cement washes out. Contact us at Pheasant Run Dental to secure your loose crowns.",
          "Following the placement of your dental crown, the tooth and surrounding area may be sensitive. If you are experiencing pain when you bite down, this may mean the crown and bite need to be adjusted. Contact us at Pheasant Run Dental if you continue to experience pain while biting. Allergic reactions may occur in response to the material of the dental crown. If you are experiencing irritation, contact us at Pheasant Run Dental.",
          "It is possible for a crown to become loose or come off. If this happens, contact us at Pheasant Run Dental immediately for instructions.",
        ],
      },
    ],
    meta: [
      { label: "Typical lifespan", value: "5–15 years" },
      { label: "Office visits", value: "Usually two" },
      { label: "Also used for", value: "Bridges and implants" },
    ],
    related: ["dental-bridge", "dental-implants", "root-canal"],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortName: "Implants",
    category: "Restorative",
    icon: Anchor,
    eyebrow: "Restorative dentistry",
    tagline: "A replacement root that works like your own.",
    summary:
      "A titanium post is placed in the jawbone to support a new synthetic tooth — a long-term option for missing teeth.",
    intro:
      "Dental implants are used to replace tooth roots. You may lose your teeth due to decay, gingivitis (gum disease), or injury/trauma. In these instances, the entire tooth, including the root, is removed. Until recently, there were only two treatment options to replace teeth: the dental bridge or dentures. Dental implants are a fairly new technology in which a titanium post is surgically placed into the bone socket of the missing tooth. The jawbone will heal over the titanium post, after which point a small connector post is placed to secure a new synthetic tooth to the jawbone.",
    sections: [
      {
        heading: "Advantages of dental implants",
        paragraphs: [
          "Dental implants are much more like your natural teeth and can be cared for similarly. This means you will be able to floss between them and keep them clean as you would your natural teeth. They also do not interfere with your other teeth, unlike bridges which rely on surrounding teeth to anchor them. This gives you overall improved oral hygiene. They are the best option for replacing missing teeth.",
          "Dental implants are a very natural look and they do offer improved speech and comfort, and ease with eating. Overall, dental implants last longer than dental bridges or dentures. With proper care, they could potentially last a lifetime.",
        ],
      },
      {
        heading: "Caring for dental implants",
        paragraphs: [
          "Dental implants look and act like your natural teeth – this is their best quality. When properly placed, you will soon forget that you have implants at all. As long as you follow your general oral hygiene procedures with flossing and brushing, and rinse with antibacterial mouthwash, your dental implants will last a long time.",
        ],
      },
    ],
    meta: [
      { label: "Material", value: "Titanium post" },
      { label: "With proper care", value: "Could last a lifetime" },
      { label: "Benefits", value: "Natural look, speech, comfort" },
    ],
    related: ["dental-bridge", "dentures", "tooth-extraction"],
  },
  {
    slug: "dentures",
    name: "Dentures",
    shortName: "Dentures",
    category: "Restorative",
    icon: Smile,
    eyebrow: "Restorative dentistry",
    tagline: "A removable replacement, made to fit your life.",
    summary:
      "Complete and partial dentures restore missing teeth and the shape of your smile, with a process built around fit and comfort.",
    intro:
      "If you have missing teeth, dentures are one solution to fill the gap. Dentures are a removable replacement for missing teeth. There are two types available: complete or partial. Complete dentures are used when all teeth are missing or have been removed, while partial dentures replace missing teeth among remaining natural teeth.",
    sections: [
      {
        heading: "Types of dentures",
        paragraphs: [
          "Complete dentures come in two forms: conventional or immediate. After the teeth have been removed and the healing process has been completed, conventional dentures are ready to be placed. Immediate dentures are made before removal of teeth and may be worn as soon as teeth have been removed. Partial dentures are used when there are some remaining natural teeth. The natural teeth are used as anchors to affix the bridge. Partial dentures fill in the gaps where there are missing teeth, and they are often removable.",
        ],
      },
      {
        heading: "How dentures are made",
        paragraphs: [
          "The process of making dentures often takes several weeks. Your dentist will work with you to determine the best course of action and plan a timeline. The first step is to make impressions of your jaw and take measurements of how your jaws function. Your dentist will then make models, wax forms, or plastic patterns in the shape of the dentures. You'll test these different models, as your dentist will assess the best fit. After the measurements and fits have been determined, your dentist will cast a final denture.",
        ],
      },
      {
        heading: "Getting used to dentures",
        paragraphs: [
          "Whether you have complete or partial dentures, the insertion of new dentures may require some adjustment time. Your dentures will feel foreign against your cheeks, tongue, and the inside of your mouth. Your mouth may experience some soreness or irritation, but with proper adjustment, these problems subside.",
          "If you have missing teeth, you may notice some changes in your appearance, from your smile to the shape of your face. Because dentures are modeled after your natural teeth, the use of dentures will restore your smile and fill out your facial appearance.",
          "It may take some time to get used to speaking with dentures. Your natural teeth play a big role in how you shape words and sounds. With your new dentures, you may have some difficulty pronouncing certain words and you may notice a click. While speaking, smiling, or laughing, your dentures may occasionally slip. If this happens, you may reposition your dentures by biting down gently and swallowing. If you experience a click or much looseness, contact us at Pheasant Run Dental.",
          "Perhaps the biggest challenge to getting used to your dentures is eating. Dentures are removable and worn against your gums, so chewing and biting may at first feel strange. The process of getting used to eating usually takes time. While eating, take care to chew slowly and deliberately, using soft foods cut into small sizes. Be wary of very hot foods or very hard foods (bones, shells). Avoid using toothpicks, and avoid chewing gum with dentures.",
        ],
      },
      {
        heading: "Care for your dentures",
        paragraphs: [
          "In the first few days of having your dentures, we may recommend that you wear them all day and night, even while you sleep. This helps you get used to dentures and also helps your dentist identify if there are areas that need adjustment. Following the adjustment process, you should remove your dentures before bed. This gives your gum tissues time to rest and experience stimulation by your tongue and saliva. You will also be soaking your dentures overnight in denture solution, which keeps them clean. In the morning, before placing your dentures, be sure to rinse them off.",
          "In terms of caring for your dentures, it is recommended that you remove and rinse your dentures after eating. After removing your dentures, clean out your mouth as well. You should brush your dentures at least once daily, if not twice, as you would normal teeth. If you are not using your dentures, they should be carefully placed into denture-soaking solution. Rinse off your dentures before placing them back in your mouth.",
        ],
      },
    ],
    meta: [
      { label: "Options", value: "Complete or partial" },
      { label: "Fabrication", value: "Often several weeks" },
      { label: "Complete types", value: "Conventional or immediate" },
    ],
    related: ["dental-implants", "tooth-extraction", "dental-bridge"],
  },
  {
    slug: "root-canal",
    name: "Root Canals",
    shortName: "Root Canals",
    category: "Restorative",
    icon: Activity,
    eyebrow: "Restorative dentistry",
    tagline: "Repair the tooth. Relieve the pain.",
    summary:
      "A root canal removes infected or damaged pulp, cleans the tooth from the inside, and saves it from extraction.",
    intro:
      "A root canal is a dental procedure in which a decayed or infected tooth is repaired and saved. To understand the process of a root canal, we must first understand the structure of a tooth.",
    sections: [
      {
        heading: "What is a root canal?",
        paragraphs: [
          "Beneath the white enamel of your teeth, there is a hard layer called dentin. Below the layer of dentin is soft tissue known as pulp. Blood vessels and connective tissues are contained in the pulp. The nerves of the tooth lie within the root canal, and these help us identify the temperature of food we eat. The nerve is not crucial to the function of the tooth beyond this sensory function.",
        ],
      },
      {
        heading: "Tooth pulp and nerve damage",
        paragraphs: [
          "Irritation, inflammation, or infection may occur in your tooth's nerve and pulp. These conditions may occur if there is deep decay in your teeth, repeated dental procedures on a tooth (which could weaken it), large fillings in a tooth, or a crack or chip in the tooth which could leave it vulnerable to bacteria. This may cause the tooth to become non-vital and require endodontics or a root canal treatment.",
        ],
      },
      {
        heading: "Signs you may need a root canal",
        paragraphs: [
          "Knowing you need a root canal can be unsettling – but the truth is, the root canal procedure is not as painful as the experience of a damaged tooth pulp and nerve that requires the root canal procedure. The root canal itself is a procedure to alleviate the pain caused by irritation, inflammation, or infection.",
          "In some cases, there may be no symptoms present to indicate the need for a root canal. But, there are also many signs that indicate you need a root canal. These include: severe tooth pain when chewing or applying pressure; sensitivity to hot or cold temperatures; discoloration (darkening of the tooth); swelling or tenderness in the gums; as well as other symptoms or causes.",
        ],
      },
      {
        heading: "Procedure of the root canal",
        paragraphs: [
          "Your dentist will identify the need for a root canal, depending on the symptoms, causes, and diagnosis of your tooth pain. First, your dentist will take an X-ray to look at your root canals and surrounding bone. This allows your dentist to see whether there is infection present. After this, local anesthesia is administered to numb the tooth and surrounding area. To keep the area dry, a rubber dam may be placed around the tooth.",
          "After anesthesia, your dentist will obtain access to the pulp. Your dentist will clean out the pulp, nerve tissue, and any related debris. To achieve this, your dentist uses a set of tools called root canal files, which are available in different diameters to reach different parts of your tooth. These allow your dentist to fully clean out all parts of your tooth and roots.",
          "If you are experiencing an infection, your dentist will fill the tooth with medication to clear out the infection. The dentist may leave it this way for a few weeks to allow time for the infection to clear up. To finish the root canal a filling material will need to be placed in the roots of the tooth to stop any further infectious disease to the tooth. This is usually sealed with a material called gutta percha. A final restoration will be required and your dentist will discuss the options with you.",
        ],
      },
      {
        heading: "After the root canal procedure",
        paragraphs: [
          "The treated tooth may experience some tenderness and sensitivity for a few days. Your dentist may recommend a general over-the-counter pain medication and antibiotics to treat any residual infection or discomfort. In most cases, people feel better by the following day.",
          "It is recommended to minimize use of the tooth until the full root canal procedure is complete and a crown is placed. Patients should floss and brush their teeth regularly. If there are any complications after the procedure, contact us immediately at Pheasant Run Dental.",
        ],
      },
    ],
    meta: [
      { label: "Comfort", value: "Local anesthesia" },
      { label: "Isolation", value: "Rubber dam may be used" },
      { label: "Final step", value: "A protective restoration" },
    ],
    related: ["dental-crown", "tooth-extraction", "white-fillings"],
  },
  {
    slug: "tooth-extraction",
    name: "Tooth Extraction",
    shortName: "Extractions",
    category: "Restorative",
    icon: Scissors,
    eyebrow: "Restorative dentistry",
    tagline: "When removing a tooth is the healthiest way forward.",
    summary:
      "Extraction stops infection from spreading and prepares the mouth for healing, orthodontics, or a future replacement.",
    intro:
      "A tooth extraction is a form of oral surgery, and is considered an invasive process. Tooth extractions are performed when your teeth are compromised by gum disease or other damage (infection, abscess, etc). By removing the tooth, infection is prevented from spreading to other areas of your mouth. Crowded mouth may be a reason for pulling teeth. This will prepare the mouth for possible orthodontic work.",
    sections: [
      {
        heading: "Why extract a tooth?",
        paragraphs: [
          "Tooth extractions are performed when your teeth are compromised by gum disease or other damage. By removing the tooth, infection is prevented from spreading to other areas of your mouth. For younger people, a crowded mouth may be a reason for pulling teeth. This will prepare the mouth for possible orthodontic work.",
        ],
      },
      {
        heading: "Tooth extraction process",
        paragraphs: [
          "Your dentist will administer local anesthesia to numb the tooth and surrounding area. Some extractions are routine, but most have to be taken out surgically. Bone removal and sutures are sometimes necessary. Depending on the difficulty, a referral to an oral surgeon may be necessary.",
          "After the tooth has been removed, there are a number of options to fill the gap. Your dentist may recommend dental implants, a dental bridge, or dentures after the healing process is complete.",
        ],
      },
      {
        heading: "After-surgery care",
        paragraphs: [
          "After your tooth has been extracted, a blood clot will form in the socket. This blood clot is a crucial step to the healing process. Dry socket occurs when the blood clot is loosened or dislodged. This could be a very painful experience, as it exposes your bone.",
          "If you are a smoker, you will be advised not to smoke for a few days after tooth extraction surgery. The sucking motion of smoking may contribute to loosening your blood clot. Aside from the technical aspect, smoking also delays your healing process and the ability of your gums to fight infection. Avoid smoking in the days before and after your tooth extraction surgery. Avoid using straws for the same reason.",
          "Recovery from tooth extraction may take a few days. Pain medication is recommended for irritation and pain. To help with swelling, apply an ice pack for 10 minutes at a time. Try to rest and avoid heavy activity for about 24 hours. When lying down, prop up your head to help stop the bleeding. Remember – tooth extraction is considered surgery!",
          "Your dentist will recommend that you avoid rinsing or spitting, to ensure that the blood clot forms properly in the socket. Eat soft, easy to swallow foods that require less chewing. Be gentle with your entire mouth, even the areas that have not undergone surgery. The whole mouth works together, and you will want to give yourself as much time to rest as possible.",
        ],
      },
      {
        heading: "Risks with tooth extraction",
        paragraphs: [
          "It is important to provide your dentist with a clear picture of your physical health. If your immune system is not very strong, a course of antibiotics may be prescribed prior to the tooth extraction. This is a preventive measure that keeps bacterial infection from spreading to your bloodstream during the tooth extraction process. Some conditions that may encourage a course of antibiotics include heart problems, an impaired immune system, or major recent surgeries.",
        ],
      },
    ],
    meta: [
      { label: "Comfort", value: "Local anesthesia" },
      { label: "Procedure type", value: "Oral surgery" },
      { label: "Recovery", value: "A few days" },
    ],
    related: ["dental-implants", "dental-bridge", "dentures"],
  },
  {
    slug: "restorative-dentistry",
    name: "Restorative Dentistry",
    shortName: "Restorative",
    category: "Restorative",
    icon: Wrench,
    eyebrow: "Restorative dentistry",
    tagline: "Bring the mouth back to comfort, function, and health.",
    summary:
      "A full range of restorative options designed to preserve natural teeth and rebuild what has been damaged.",
    intro:
      "Restorative dentistry involves the management of oral health problems and working to restore the mouth to a more functional state. The goal in restorative dentistry is to preserve the natural teeth as much as possible. It's important to consider both the physical and fiscal factors in your health and budget when deciding which option is best for you.",
    sections: [
      {
        heading: "Restorative treatments at Pheasant Run",
        paragraphs: [
          "Our restorative dentistry services include:",
        ],
        bullets: [
          "Dental bridges",
          "Dental crowns",
          "Dental implants",
          "Dentures",
          "Root canals",
          "Tooth extractions, including wisdom teeth",
          "White fillings and restorations",
        ],
      },
      {
        heading: "A plan built around you",
        paragraphs: [
          "The goal in restorative dentistry is to preserve the natural teeth as much as possible. It's important to consider both the physical and fiscal factors in your health and budget when deciding which option is best for you.",
          "We invite you to contact us today to schedule a consultation with one of our friendly dentists.",
        ],
      },
    ],
    meta: [
      { label: "Goal", value: "Preserve natural teeth" },
      { label: "Approach", value: "Function, health, budget" },
      { label: "Care team", value: "Three experienced dentists" },
    ],
    related: ["dental-crown", "dental-bridge", "root-canal"],
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    shortName: "Cosmetic",
    category: "Cosmetic",
    icon: Sparkles,
    eyebrow: "Cosmetic dentistry",
    tagline: "A smile that looks like you — only brighter.",
    summary:
      "From whitening and porcelain veneers to complete smile makeovers, cosmetic care that respects health and function.",
    intro:
      "Our dentist understands how important your smile is. A bright, white, photogenic smile is crucial to your sense of self-confidence. We offer a variety of cosmetic procedures like porcelain veneers that can address just about any aesthetic concerns you might have.",
    sections: [
      {
        heading: "Care without compromise",
        paragraphs: [
          "You can rely on our dentist and our dedicated, friendly staff to make your experience at our office as pleasant as possible. Our dentist is also well-versed in complete smile makeovers.",
          "We have the training, skills and experience needed to help you achieve all of your cosmetic objectives.",
        ],
      },
      {
        heading: "Cosmetic dental procedures",
        paragraphs: [
          "Our dentist offers a variety of procedures, including:",
        ],
        bullets: [
          "Porcelain veneers",
          "Teeth whitening",
          "White fillings",
          "Dental crowns",
          "Complete smile makeovers",
        ],
      },
      {
        heading: "Beyond the surface",
        paragraphs: [
          "Cosmetic dentistry creates a positive change to your teeth and to your mouth that include the functional and esthetic concerns of the patient. It goes beyond teeth whitening and porcelain veneers and helps to maintain a patient's oral health, function, and appearance for a lifetime.",
        ],
      },
    ],
    meta: [
      { label: "Focus", value: "Health, function, appearance" },
      { label: "Includes", value: "Veneers, whitening, makeovers" },
      { label: "Care team", value: "Dedicated, friendly staff" },
    ],
    related: ["whitening", "white-fillings", "dental-crown"],
  },
  {
    slug: "whitening",
    name: "Whitening",
    shortName: "Whitening",
    category: "Cosmetic",
    icon: Sun,
    eyebrow: "Cosmetic dentistry",
    tagline: "A custom-fit tray, a noticeably brighter smile.",
    summary:
      "A tray-based whitening system made from impressions of your teeth, with refills available for future touch-ups.",
    intro:
      "We use a tray-based system so you can bleach your teeth at home. Your whitening treatment begins with impressions of your teeth so the trays can be custom-fit to your mouth. That means whitening results will be more consistent and longer-lasting compared to over-the-counter whitening products that provide a one-size-fits-all tray.",
    sections: [
      {
        heading: "Whitening treatments",
        paragraphs: [
          "Once the trays are complete, you'll be given a special solution to place inside the trays before placing them over your teeth for a brief period of time each day until you reach the desired level of whiteness. Also, you will have your trays for future touch-up treatments. We offer refills on whitening material.",
        ],
      },
      {
        heading: "What if my teeth are deeply discolored?",
        paragraphs: [
          "Some types of discoloration cannot be treated with whitening – for instance, discoloration that occurs when the interior portion of a tooth is badly damaged or decayed or following a root canal. In those cases, tooth-colored porcelain veneers or crowns can provide a great solution.",
        ],
      },
    ],
    meta: [
      { label: "System", value: "Custom tray-based" },
      { label: "Made from", value: "Impressions of your teeth" },
      { label: "Ongoing", value: "Refills available" },
    ],
    related: ["cosmetic-dentistry", "white-fillings", "dental-crown"],
  },
  {
    slug: "white-fillings",
    name: "White Fillings",
    shortName: "White Fillings",
    category: "Restorative",
    icon: Layers,
    eyebrow: "Restorative dentistry",
    tagline: "A tooth-colored fill, matched to you.",
    summary:
      "Composite fillings blend with the color of your teeth and preserve more natural tooth structure than silver amalgam.",
    intro:
      "An increasingly popular alternative to silver amalgam fillings are composite tooth-colored fillings. Unlike amalgam fillings, composite fillings are shaded to the color of your teeth to create a perfect match, giving you a beautiful smile!",
    sections: [
      {
        heading: "Benefits of composite fillings",
        bullets: [
          "Created to match your tooth to ensure a natural look and feel",
          "Because composite fillings can be created in smaller preparations, less of your tooth structure is lost and less drilling is needed",
          "Provides support to remaining tooth structure, and insulates against temperature changes",
        ],
      },
      {
        heading: "The filling process",
        ordered: true,
        bullets: [
          "First, the targeted tooth is prepared to remove decay",
          "Next, a bonding agent is applied to the prepared tooth",
          "The composite material is placed and molded to your tooth structure",
          "The material is hardened by focusing ultraviolet light rays on it for about a minute",
        ],
      },
      {
        heading: "A natural-looking finish",
        paragraphs: [
          "The filling is now complete and you have a bright, natural-looking new tooth!",
          "Your filling brightness can be maintained by simply practicing good oral hygiene and avoiding staining food and drinks such as coffee, soda, tea, etc. For more information on composite white fillings or to schedule an appointment, call your Williston dentist and let us rejuvenate your smile!",
        ],
      },
    ],
    meta: [
      { label: "Material", value: "Tooth-colored composite" },
      { label: "Benefit", value: "Preserves tooth structure" },
      { label: "Finish", value: "Shaded to match your teeth" },
    ],
    related: ["dental-crown", "cosmetic-dentistry", "root-canal"],
  },
  {
    slug: "patient-financing",
    name: "Patient Financing",
    shortName: "Financing",
    category: "Financial",
    icon: CreditCard,
    eyebrow: "Payment options",
    tagline: "Care now, with a payment path that fits.",
    summary:
      "Use your CareCredit credit card to apply for financing or pay your post-care balance online, simply and securely.",
    intro:
      "When you receive the care that you need and have a post care balance, you can use your CareCredit credit card to pay online after you leave the doctor's office. The process is simple, secure, and convenient.",
    sections: [
      {
        heading: "Apply with CareCredit",
        paragraphs: [
          "CareCredit is a health, wellness, and personal care credit card accepted at Pheasant Run Dental. You can apply online before your visit, or use the payment portal after your appointment to manage a post-care balance.",
          "The process is simple, secure, and convenient.",
        ],
      },
      {
        heading: "Two simple next steps",
        bullets: [
          "Apply today for the care you need",
          "Pay your provider online after your visit",
        ],
      },
    ],
    meta: [
      { label: "Provider", value: "CareCredit" },
      { label: "Apply", value: "Online" },
      { label: "Pay", value: "Online after your visit" },
    ],
    related: ["restorative-dentistry", "cosmetic-dentistry", "dental-implants"],
    image: {
      src: "/images/carecredit.png",
      alt: "CareCredit logo",
      width: 600,
      height: 131,
    },
    externalLinks: [
      {
        label: "Apply today",
        href: "https://www.carecredit.com/apply/confirm.html?encm=B2YCO1U3UTRXa1UxWm5aMwI4AGUGaFVkAW1WYANtVGA&sitecode=B3CALAdToolkitDental",
      },
      {
        label: "Pay my provider",
        href: "https://www.carecredit.com/Pay/799BSW/",
      },
    ],
  },
];

export const serviceCategories: { label: string; value: "All" | ServiceCategory }[] = [
  { label: "All services", value: "All" },
  { label: "Restorative", value: "Restorative" },
  { label: "Cosmetic", value: "Cosmetic" },
  { label: "Financing", value: "Financial" },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service) {
  return service.related
    .map((slug) => getService(slug))
    .filter((related): related is Service => Boolean(related));
}

export const featuredServiceSlugs = [
  "dental-crown",
  "dental-implants",
  "root-canal",
  "dentures",
  "cosmetic-dentistry",
  "patient-financing",
] as const;
