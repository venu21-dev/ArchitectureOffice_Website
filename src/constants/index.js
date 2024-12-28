import hero from "../assets/hero.jpg";
import kitchenImage from "../assets/kitchen.webp";
import bathroomImage from "../assets/bathroom.webp";
import livingRoomImage from "../assets/living-room.webp";

import portfolio1 from "../assets/portfolio1.webp";
import portfolio2 from "../assets/portfolio2.webp";
import portfolio3 from "../assets/portfolio3.webp";
import portfolio4 from "../assets/portfolio4.webp";
import portfolio5 from "../assets/portfolio5.webp";
import portfolio6 from "../assets/portfolio6.webp";

import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";
import user6 from "../assets/user6.webp";

export const LINKS = [
  {
    name: "Dienste",
    link: "#services",
  },
  {
    name: "Projekte",
    link: "#portfolio",
  },
  {
    name: "Team",
    link: "#about",
  },
  {
    name: "Reviews",
    link: "#reviews",
  },
  {
    name: "Kontakt",
    link: "#contact",
  },
];

export const HERO_CONTENT = {
  title: "lunar",
  subtitle: "Neuer Raum, neue Vision – dank unserer Architektur",
  image: hero,
};

export const SERVICES_CONTENT = [
  {
    title: "Nachhaltiges Bauen und Planung",
    description:
      "Gestalten Sie die Zukunft mit umweltbewussten und nachhaltigen Baukonzepten. Wir legen Wert auf energieeffiziente Designs, ökologische Baustoffe und innovative Lösungen, um Gebäude nicht nur schön, sondern auch nachhaltig zu gestalten.",
    image: kitchenImage,
    alt: "Kitchen Renovation",
  },
  {
    title: "Gebäudearchitektur",
    description:
      "Wir entwerfen innovative und funktionale Gebäude, die sowohl ästhetisch ansprechend als auch technisch durchdacht sind. Ob Wohngebäude, Bürokomplexe oder öffentliche Einrichtungen – unser Fokus liegt darauf, die Bedürfnisse der Nutzer mit einer nachhaltigen und modernen Architektur zu verbinden.",
    image: bathroomImage,
    alt: "Bathroom Renovation",
  },
  {
    title: "Innenarchitektur",
    description:
      "Verwandeln Sie Innenräume in stilvolle und funktionale Umgebungen. Unser Team gestaltet individuelle Raumaufteilungen, Beleuchtungskonzepte und Oberflächen, die Ihre Vision realisieren.",
    image: livingRoomImage,
    alt: "Living Room Renovation",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "Unternehmen Gebäudearchitektur",
    description:
      "Für dieses Projekt wurde eine moderne, weisse Fassade mit klaren Linien und Balkonen designed. Dies sorgt für ein offenes Erscheinungsbild.", 
    image: portfolio1,
    link: "#",
  },
  {
    id: 2,
    name: "Empfangsbereich Innenarchitektur",
    description:
      "Ein einladender Empfangsbereich, hochwertige Materialien und durchdachte Beleuchtung beeindruckt. Unser Fokus lag auf einen modernen ersten Eindruck zu vermitteln.",
    image: portfolio2,
    link: "#",
  },
  {
    id: 3,
    name: "Wohnhäuser Gebäudearchitektur",
    description:
      "Das Projekt zeichnet sich durch eine klare, zeitgemässe Architektur aus. Grosse Fensterflächen und eine durchdachte Raumaufteilung ermöglichen eine optimale Belichtung der Räume.",
    image: portfolio3,
    link: "#",
  },
];

export const REVIEWS = {
  text: "Feedback unserer Kunden zu ihren Erfahrungen mit Lunar",
  reviews: [
    {
      name: "Lukas Müller",
      title: "Homeowner",
      review:
        "Lunar ist ein äusserst kreatives und professionelles Architekturbüro. Das Team arbeitet stets engagiert und mit einer freundlichen, persönlichen Atmosphäre, um einzigartige Lösungen zu schaffen.",
      image: user1,
    },
    {
      name: "Tom Schäfer",
      title: "Homeowner",
      review:
        "Die Zusammenarbeit mit Lunarcreation war eine echte Freude. Das Team hat unsere Wünsche hervorragend umgesetzt und dabei kreative Lösungen gefunden, die wir uns nie hätten vorstellen können.",
      image: user2,
    },
    {
      name: "Jonas Schmidt",
      title: "Homeowner",
      review:
        "Mit Lunar hat man einen zuverlässigen Partner, der nicht nur durch Kreativität glänzt, sondern auch durch effiziente Planung und Umsetzung. Das Team überzeugt durch Professionalität und Leidenschaft für jedes Projekt.",
      image: user3,
    },
    {
      name: "Max Weber",
      title: "Homeowner",
      review:
        "Ihr steht für eine sehr enge Zusammenarbeit mit den Kunden. Ihr Team bringt frische Ideen und präzise Planung zusammen, um funktionale Ergebnisse zu erzielen.",
      image: user4,
    },
    {
      name: "Sarah Fischer",
      title: "Homeowner",
      review:
        "Bei Lunar trifft kreative Vision auf präzise Ausführung. Das Team arbeitet mit viel Hingabe an jedem Projekt, innovative Lösungen, die über Erwartungen hinausgehen.",
      image: user5,
    },
    {
      name: "Nina Wagner",
      title: "Homeowner",
      review:
        "Ihr bietet nicht nur architektonische Expertise, sondern auch ein hohes Mass an Empathie für die Bedürfnisse der Kunden. Mit ihrer kreativen Herangehensweise.",
      image: user6,
    },
  ],
};

export const CONTACT_INFO = {
  text: "Sie haben Fragen oder benötigen weitere Informationen? Setzen Sie sich mit uns in Verbindung, wir helfen Ihnen gerne weiter.",
  phone: {
    label: "Phone",
    value: "(123) 456-7890",
  },
  email: {
    label: "Email",
    value: "info@lunarcreation.com",
  },
  address: {
    label: "Address",
    value: "1234 Lunar ABC",
  },
};
