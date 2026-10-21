import type { Locale } from "./content";

export type L3<T> = Record<Locale, T>;

export const photos = {
  rambla: { src: "/images/rambla-de-catalunya.jpg", width: 1920, height: 1440 },
  bahia: { src: "/images/bahia-de-roses.jpg", width: 1920, height: 1280 },
  frente: { src: "/images/frente-maritimo-roses.jpg", width: 1920, height: 810 },
  fachada: { src: "/images/fachada-modernista.jpg", width: 1920, height: 1122 },
  eixample: { src: "/images/eixample-desde-montjuic.jpg", width: 1920, height: 1280 },
  ciutadella: { src: "/images/ciutadella-de-roses.jpg", width: 1920, height: 1145 },
} as const;

export type PhotoKey = keyof typeof photos;

export const photoAlt: Record<PhotoKey, L3<string>> = {
  rambla: {
    es: "La Rambla de Catalunya de Barcelona, bordeada de plátanos y edificios modernistas.",
    ca: "La Rambla de Catalunya de Barcelona, amb plàtans i edificis modernistes.",
    en: "Rambla de Catalunya in Barcelona, lined with plane trees and modernist buildings.",
  },
  bahia: {
    es: "La bahía de Roses vista desde las alturas, con el Mediterráneo y las montañas al fondo.",
    ca: "La badia de Roses vista des de dalt, amb la Mediterrània i les muntanyes al fons.",
    en: "The bay of Roses seen from above, with the Mediterranean and the mountains beyond.",
  },
  frente: {
    es: "El frente marítimo de Roses con el Pirineo nevado al fondo.",
    ca: "El front marítim de Roses amb el Pirineu nevat al fons.",
    en: "The Roses seafront with the snow-capped Pyrenees behind.",
  },
  fachada: {
    es: "Fachada modernista del Eixample de Barcelona con balcón de hierro forjado.",
    ca: "Façana modernista de l'Eixample de Barcelona amb balcó de ferro forjat.",
    en: "Modernist façade in Barcelona's Eixample with a wrought-iron balcony.",
  },
  eixample: {
    es: "El Eixample de Barcelona visto desde Montjuïc.",
    ca: "L'Eixample de Barcelona vist des de Montjuïc.",
    en: "Barcelona's Eixample seen from Montjuïc.",
  },
  ciutadella: {
    es: "Las murallas de la ciudadela de Roses y gaviotas sobre el césped.",
    ca: "Les muralles de la ciutadella de Roses amb gavines sobre l'herba.",
    en: "The walls of the Roses citadel with gulls on the grass.",
  },
};

export const credits: { photo: string; title: string; by: string; licence: string; licenceUrl: string; page: string }[] = [
  {
    photo: "rambla",
    title: "Dreta de l Eixample, Barcelona (P1170611)",
    by: "Matti Blume",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    page: "https://commons.wikimedia.org/wiki/File:Dreta_de_l_Eixample,_Barcelona_(P1170611).jpg",
  },
  {
    photo: "bahia",
    title: "Golfo de Rosas",
    by: "",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    page: "https://commons.wikimedia.org/wiki/File:Golfo_de_Rosas.jpg",
  },
  {
    photo: "frente",
    title: "Roses al fons els Pirineus - panoramio",
    by: "klimmanet",
    licence: "CC BY 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by/3.0/",
    page: "https://commons.wikimedia.org/wiki/File:Roses_al_fons_els_Pirineus_-_panoramio.jpg",
  },
  {
    photo: "fachada",
    title: "The top floor of a small apartment building in the Eixample, Barcelona (49731113776)",
    by: "Spencer Means",
    licence: "CC BY-SA 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    page: "https://commons.wikimedia.org/wiki/File:The_top_floor_of_a_small_apartment_building_in_the_Eixample,_Barcelona_(49731113776).jpg",
  },
  {
    photo: "eixample",
    title: "Barcelona Eixample & Gràcia cityscape from Montjuïc 2026-08-14",
    by: "Ilkka Simomaa",
    licence: "CC BY 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by/4.0/",
    page: "https://commons.wikimedia.org/wiki/File:Barcelona_Eixample_%26_Gr%C3%A0cia_cityscape_from_Montju%C3%AFc_2026-08-14.jpg",
  },
  {
    photo: "ciutadella",
    title: "Ciutadella de Roses-2022",
    by: "Gordito1869",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    page: "https://commons.wikimedia.org/wiki/File:Ciutadella_de_Roses-2022.jpg",
  },
];

export const shell: L3<{
  skip: string;
  menu: string;
  close: string;
  navLabel: string;
  actionLabel: string;
  footerNav: string;
  footerContact: string;
  credits: string;
  viaCommons: string;
  facebook: string;
}> = {
  es: {
    skip: "Saltar al contenido",
    menu: "Menú",
    close: "Cerrar",
    navLabel: "Principal",
    actionLabel: "Pide tu cita",
    footerNav: "Navegación",
    footerContact: "Contacto",
    credits: "Fotografías",
    viaCommons: "vía Wikimedia Commons",
    facebook: "Facebook",
  },
  ca: {
    skip: "Saltar al contingut",
    menu: "Menú",
    close: "Tancar",
    navLabel: "Principal",
    actionLabel: "Demana cita",
    footerNav: "Navegació",
    footerContact: "Contacte",
    credits: "Fotografies",
    viaCommons: "via Wikimedia Commons",
    facebook: "Facebook",
  },
  en: {
    skip: "Skip to content",
    menu: "Menu",
    close: "Close",
    navLabel: "Main",
    actionLabel: "Book now",
    footerNav: "Navigation",
    footerContact: "Contact",
    credits: "Pictures",
    viaCommons: "via Wikimedia Commons",
    facebook: "Facebook",
  },
};

export const home: L3<{
  h1: string[];
  sub: string;
  cta: string;
  factNumber: string;
  factText: string;
  captionBarcelona: string;
  captionRoses: string;
  introSlogan: string[];
  introWord: string;
  introWordNote: string;
  introText: string;
  listHeading: string[];
  listGroups: string[];
  stepsLines: string[];
  stepsTexts: string[];
  aboutFacts: { label: string; value: string }[];
  aboutNews: string;
  aboutNewsLink: string;
  faqHeading: string[];
  faq: { q: string; a: string }[];
  contactHeading: string;
  contactSentence: string;
}> = {
  es: {
    h1: ["Especialistas", "en tu derecho"],
    sub: "Abogados en Barcelona y Roses desde 2001. Te atendemos en cinco idiomas y con presupuesto cerrado.",
    cta: "Pide tu cita",
    factNumber: "25",
    factText: "años a tu lado",
    captionBarcelona: "Barcelona",
    captionRoses: "Roses",
    introSlogan: ["Barcelona", "y Roses"],
    introWord: "2001",
    introWordNote: "Año de fundación",
    introText:
      "El despacho se constituyó en 2001 por un grupo de profesionales del derecho con amplia experiencia e implicación social. Hoy lo dirigen la abogada Mª Isabel Martín Hermosín y el abogado Alexander Merino Heerze, letrados en ejercicio y mediadores registrados. Atendemos a particulares y empresas en Barcelona y en Roses, en español, català, English, Nederlands y Deutsch. Nuestro lema es la transparencia, la honestidad y el acompañamiento continuo. No podemos garantizarte el resultado de tu proceso, pero sí el cuidado, la profesionalidad y la atención con que se tratará tu asunto.",
    listHeading: ["Once áreas", "del derecho"],
    listGroups: ["Familia y personas", "Vivienda y propiedad", "Trabajo y justicia"],
    stepsLines: ["Primero, escuchamos tu caso.", "Después, diseñamos tu estrategia.", "Por último, te defendemos."],
    stepsTexts: [
      "Analizamos los detalles y te damos una primera orientación sobre tus opciones legales.",
      "Un plan personalizado, basado en las leyes aplicables y en las circunstancias de tu situación.",
      "En negociaciones, tribunales o trámites, y te mantenemos informado durante todo el proceso.",
    ],
    aboutFacts: [
      { label: "Fundado en", value: "2001" },
      { label: "Sedes", value: "Barcelona y Roses" },
      { label: "Socios directores", value: "Mª Isabel Martín Hermosín y Alexander Merino Heerze" },
    ],
    aboutNews: "Actualidad",
    aboutNewsLink: "Ver toda la actualidad",
    faqHeading: ["Preguntas", "frecuentes"],
    faq: [
      {
        q: "¿Dónde podemos vernos?",
        a: "En Barcelona, en Rambla Catalunya 92, 3º 2D, y en Roses, en José Espronceda 10, local C6. También puedes pedir una videollamada.",
      },
      { q: "¿En qué idiomas atendéis?", a: "En español, català, English, Nederlands y Deutsch." },
      {
        q: "¿Cuánto me costará?",
        a: "Te damos un presupuesto sin compromiso, totalmente cerrado y con facilidades de pago.",
      },
      {
        q: "¿Podéis garantizarme el resultado?",
        a: "No podemos garantizar el resultado de un proceso. Sí podemos asegurarte el cuidado, la profesionalidad y la atención con que se tratará tu asunto.",
      },
      {
        q: "¿Puedo evitar ir a juicio?",
        a: "Si el caso lo permite, sí. Contamos con mediadores registrados para la mediación familiar y laboral, una alternativa ágil a la vía judicial.",
      },
      {
        q: "¿Cómo es el primer paso?",
        a: "Escuchamos tu caso, analizamos los detalles y te damos una primera orientación sobre tus opciones legales.",
      },
    ],
    contactHeading: "Pide tu cita",
    contactSentence:
      "Divorcios, herencias, extranjería, contratos o despidos: cuéntanos tu caso y te respondemos.",
  },
  ca: {
    h1: ["Especialistes", "en el teu dret"],
    sub: "Advocats a Barcelona i Roses des del 2001. T'atenem en cinc idiomes i amb pressupost tancat.",
    cta: "Demana la teva cita",
    factNumber: "25",
    factText: "anys al teu costat",
    captionBarcelona: "Barcelona",
    captionRoses: "Roses",
    introSlogan: ["Barcelona", "i Roses"],
    introWord: "2001",
    introWordNote: "Any de fundació",
    introText:
      "El despatx es va constituir l'any 2001 per un grup de professionals del dret amb àmplia experiència i implicació social. Avui el dirigeixen l'advocada Mª Isabel Martín Hermosín i l'advocat Alexander Merino Heerze, lletrats en exercici i mediadors registrats. Atenem particulars i empreses a Barcelona i a Roses, en català, español, English, Nederlands i Deutsch. El nostre lema és la transparència, l'honestedat i l'acompanyament continu. No podem garantir-te el resultat del teu procés, però sí la cura, la professionalitat i l'atenció amb què es tractarà el teu assumpte.",
    listHeading: ["Onze àrees", "del dret"],
    listGroups: ["Família i persones", "Habitatge i propietat", "Treball i justícia"],
    stepsLines: ["Primer, escoltem el teu cas.", "Després, dissenyem la teva estratègia.", "Finalment, et defensem."],
    stepsTexts: [
      "Analitzem els detalls i t'oferim una primera orientació sobre les teves opcions legals.",
      "Un pla personalitzat, basat en les lleis aplicables i en les circumstàncies de la teva situació.",
      "En negociacions, tribunals o tràmits, i et mantenim informat durant tot el procés.",
    ],
    aboutFacts: [
      { label: "Fundat el", value: "2001" },
      { label: "Seus", value: "Barcelona i Roses" },
      { label: "Socis directors", value: "Mª Isabel Martín Hermosín i Alexander Merino Heerze" },
    ],
    aboutNews: "Actualitat",
    aboutNewsLink: "Veure tota l'actualitat",
    faqHeading: ["Preguntes", "freqüents"],
    faq: [
      {
        q: "On podem veure'ns?",
        a: "A Barcelona, a Rambla Catalunya 92, 3r 2D, i a Roses, a José Espronceda 10, local C6. També pots demanar una videotrucada.",
      },
      { q: "En quins idiomes atenguem?", a: "En català, español, English, Nederlands i Deutsch." },
      {
        q: "Quant em costarà?",
        a: "T'oferim un pressupost sense compromís, totalment tancat i amb facilitats de pagament.",
      },
      {
        q: "Podeu garantir-me el resultat?",
        a: "No podem garantir el resultat d'un procés. Sí que podem assegurar-te la cura, la professionalitat i l'atenció amb què es tractarà el teu assumpte.",
      },
      {
        q: "Puc evitar anar a judici?",
        a: "Si el cas ho permet, sí. Comptem amb mediadors registrats per a la mediació familiar i laboral, una alternativa àgil a la via judicial.",
      },
      {
        q: "Com és el primer pas?",
        a: "Escoltem el teu cas, n'analitzem els detalls i t'oferim una primera orientació sobre les teves opcions legals.",
      },
    ],
    contactHeading: "Demana la teva cita",
    contactSentence:
      "Divorcis, herències, estrangeria, contractes o acomiadaments: explica'ns el teu cas i et responem.",
  },
  en: {
    h1: ["Specialists", "in your rights"],
    sub: "Lawyers in Barcelona and Roses since 2001. We work in five languages and give you a fixed quote.",
    cta: "Book your appointment",
    factNumber: "25",
    factText: "years by your side",
    captionBarcelona: "Barcelona",
    captionRoses: "Roses",
    introSlogan: ["Barcelona", "and Roses"],
    introWord: "2001",
    introWordNote: "Year founded",
    introText:
      "The firm was founded in 2001 by a group of legal professionals with extensive experience and social commitment. Today it is led by lawyer Mª Isabel Martín Hermosín and lawyer Alexander Merino Heerze, practising attorneys and registered mediators. We act for individuals and businesses in Barcelona and in Roses, in Spanish, Catalan, English, Dutch and German. Our motto is transparency, honesty and continuous support. We cannot guarantee the outcome of your case, but we do guarantee the care, professionalism and attention with which your matter is handled.",
    listHeading: ["Eleven areas", "of law"],
    listGroups: ["Family and people", "Home and property", "Work and justice"],
    stepsLines: ["First, we listen to your case.", "Then, we design your strategy.", "Finally, we defend you."],
    stepsTexts: [
      "We go through the details and give you a first view of your legal options.",
      "A tailored plan, built on the applicable law and the circumstances of your situation.",
      "In negotiations, courts or paperwork, keeping you informed throughout the process.",
    ],
    aboutFacts: [
      { label: "Founded", value: "2001" },
      { label: "Offices", value: "Barcelona and Roses" },
      { label: "Managing partners", value: "Mª Isabel Martín Hermosín and Alexander Merino Heerze" },
    ],
    aboutNews: "News",
    aboutNewsLink: "See all news",
    faqHeading: ["Common", "questions"],
    faq: [
      {
        q: "Where can we meet?",
        a: "In Barcelona, at Rambla Catalunya 92, 3º 2D, and in Roses, at José Espronceda 10, unit C6. You can also ask for a video call.",
      },
      { q: "Which languages do you work in?", a: "Spanish, Catalan, English, Dutch and German." },
      {
        q: "How much will it cost?",
        a: "We give you a no-obligation quote, fully fixed, with payment facilities.",
      },
      {
        q: "Can you guarantee the outcome?",
        a: "We cannot guarantee the outcome of a case. We can assure you of the care, professionalism and attention with which your matter will be handled.",
      },
      {
        q: "Can I avoid going to court?",
        a: "If your case allows it, yes. We have registered mediators for family and employment mediation, a faster alternative to going to court.",
      },
      {
        q: "What is the first step?",
        a: "We listen to your case, go through the details and give you a first view of your legal options.",
      },
    ],
    contactHeading: "Book your appointment",
    contactSentence:
      "Divorce, inheritance, immigration, contracts or dismissal: tell us your case and we will reply.",
  },
};

export type AreaMeta = { short: string; blurb: string };

export const areaMeta: Record<string, L3<AreaMeta>> = {
  familia: {
    es: { short: "Familia", blurb: "Divorcios, custodia, pensiones" },
    ca: { short: "Família", blurb: "Divorcis, custòdia, pensions" },
    en: { short: "Family", blurb: "Divorce, custody, maintenance" },
  },
  sucesiones: {
    es: { short: "Sucesiones", blurb: "Herencias, testamentos, impuestos" },
    ca: { short: "Successions", blurb: "Herències, testaments, impostos" },
    en: { short: "Inheritance", blurb: "Estates, wills, inheritance tax" },
  },
  discapacidad: {
    es: { short: "Discapacidad y dependencia", blurb: "Dependencia, curatelas, grado de discapacidad" },
    ca: { short: "Discapacitat i dependència", blurb: "Dependència, curateles, grau de discapacitat" },
    en: { short: "Disability and dependency", blurb: "Dependency, guardianship, disability grading" },
  },
  extranjeria: {
    es: { short: "Extranjería", blurb: "Arraigo, nacionalidad, Golden Visa" },
    ca: { short: "Estrangeria", blurb: "Arrelament, nacionalitat, Golden Visa" },
    en: { short: "Immigration", blurb: "Rootedness, nationality, Golden Visa" },
  },
  inmobiliario: {
    es: { short: "Inmobiliario", blurb: "Compraventa, desahucios, urbanismo" },
    ca: { short: "Immobiliari", blurb: "Compravenda, desnonaments, urbanisme" },
    en: { short: "Real estate", blurb: "Purchases, evictions, urban planning" },
  },
  comunidades: {
    es: { short: "Comunidades de propietarios", blurb: "Juntas, actas, procedimientos judiciales" },
    ca: { short: "Comunitats de propietaris", blurb: "Juntes, actes, procediments judicials" },
    en: { short: "Homeowners associations", blurb: "Meetings, minutes, legal proceedings" },
  },
  civil: {
    es: { short: "Civil", blurb: "Contratos, reclamaciones, responsabilidad" },
    ca: { short: "Civil", blurb: "Contractes, reclamacions, responsabilitat" },
    en: { short: "Civil", blurb: "Contracts, claims, civil liability" },
  },
  administrativo: {
    es: { short: "Administrativo", blurb: "Subvenciones, sanciones, contencioso" },
    ca: { short: "Administratiu", blurb: "Subvencions, sancions, contenciós" },
    en: { short: "Administrative", blurb: "Grants, sanctions, contentious cases" },
  },
  laboral: {
    es: { short: "Laboral", blurb: "Despidos, incapacidades, jubilación" },
    ca: { short: "Laboral", blurb: "Acomiadaments, incapacitats, jubilació" },
    en: { short: "Employment", blurb: "Dismissals, disability, retirement" },
  },
  penal: {
    es: { short: "Penal", blurb: "Alcoholemias, estafas, violencia de género" },
    ca: { short: "Penal", blurb: "Alcoholèmies, estafes, violència de gènere" },
    en: { short: "Criminal", blurb: "Drink-driving, fraud, gender-based violence" },
  },
  mediacion: {
    es: { short: "Mediación", blurb: "Mediación familiar y laboral" },
    ca: { short: "Mediació", blurb: "Mediació familiar i laboral" },
    en: { short: "Mediation", blurb: "Family and employment mediation" },
  },
};

export const areaGroups: string[][] = [
  ["familia", "sucesiones", "discapacidad", "extranjeria"],
  ["inmobiliario", "comunidades", "civil", "administrativo"],
  ["laboral", "penal", "mediacion"],
];

// The live site lists the other practice areas under "Comunidades de propietarios";
// this replaces that menu scrape with what the page text actually describes.
export const comunidadesServices: L3<string[]> = {
  es: [
    "Control de los acuerdos y presupuestos aprobados",
    "Libro de Actas al día",
    "Asistencia a los copropietarios antes, durante y después de cada junta",
    "Procedimientos judiciales en defensa de la comunidad",
  ],
  ca: [
    "Control dels acords i pressupostos aprovats",
    "Llibre d'Actes al dia",
    "Assistència als copropietaris abans, durant i després de cada junta",
    "Procediments judicials en defensa de la comunitat",
  ],
  en: [
    "Control of approved resolutions and budgets",
    "Minutes Book kept up to date",
    "Support for co-owners before, during and after each meeting",
    "Legal proceedings in defence of the community",
  ],
};

export const tool: L3<{
  topicLabel: string;
  topicPlaceholder: string;
  topicOther: string;
  whereLabel: string;
  whereBarcelona: string;
  whereRoses: string;
  whereVideo: string;
  emptyTitle: string;
  emptyText: string;
  topicTitle: string;
  whereAt: string;
  whatsapp: string;
  email: string;
  call: string;
  waMessage: (topic: string, where: string) => string;
  mailSubject: (topic: string) => string;
  whereInline: { barcelona: string; roses: string; video: string };
  mailBody: (topic: string, where: string) => string;
}> = {
  es: {
    topicLabel: "Tu consulta",
    topicPlaceholder: "Elige un tema",
    topicOther: "Otro asunto",
    whereLabel: "Dónde prefieres que te atendamos",
    whereBarcelona: "Barcelona",
    whereRoses: "Roses",
    whereVideo: "Videollamada",
    emptyTitle: "Elige un tema",
    emptyText: "Verás en qué podemos ayudarte y cómo contactar con la sede que prefieras.",
    topicTitle: "En este tema nos ocupamos de",
    whereAt: "Te atendemos en",
    whatsapp: "Escribir por WhatsApp",
    email: "Enviar un correo",
    call: "Llamar al",
    waMessage: (topic, where) => `Hola, quiero consultar sobre ${topic}. Prefiero que me atendáis ${where}.`,
    mailSubject: (topic) => `Consulta: ${topic}`,
    whereInline: { barcelona: "en Barcelona", roses: "en Roses", video: "por videollamada" },
    mailBody: (topic, where) =>
      `Hola,\n\nQuiero consultar sobre ${topic}. Prefiero que me atendáis ${where}.\n\nMi nombre y teléfono:\n`,
  },
  ca: {
    topicLabel: "La teva consulta",
    topicPlaceholder: "Tria un tema",
    topicOther: "Un altre assumpte",
    whereLabel: "On prefereixes que t'atenguem",
    whereBarcelona: "Barcelona",
    whereRoses: "Roses",
    whereVideo: "Videotrucada",
    emptyTitle: "Tria un tema",
    emptyText: "Veuràs en què et podem ajudar i com contactar amb la seu que prefereixis.",
    topicTitle: "En aquest tema ens ocupem de",
    whereAt: "T'atenem a",
    whatsapp: "Escriure per WhatsApp",
    email: "Enviar un correu",
    call: "Trucar al",
    waMessage: (topic, where) => `Hola, vull consultar sobre ${topic}. Prefereixo que m'atengueu ${where}.`,
    mailSubject: (topic) => `Consulta: ${topic}`,
    whereInline: { barcelona: "a Barcelona", roses: "a Roses", video: "per videotrucada" },
    mailBody: (topic, where) =>
      `Hola,\n\nVull consultar sobre ${topic}. Prefereixo que m'atengueu ${where}.\n\nEl meu nom i telèfon:\n`,
  },
  en: {
    topicLabel: "Your enquiry",
    topicPlaceholder: "Choose a topic",
    topicOther: "Something else",
    whereLabel: "Where would you like to meet",
    whereBarcelona: "Barcelona",
    whereRoses: "Roses",
    whereVideo: "Video call",
    emptyTitle: "Choose a topic",
    emptyText: "You will see how we can help and how to reach the office you prefer.",
    topicTitle: "On this topic we handle",
    whereAt: "We see you at",
    whatsapp: "Write on WhatsApp",
    email: "Send an email",
    call: "Call",
    waMessage: (topic, where) => `Hello, I would like to ask about ${topic}. I would prefer to meet ${where}.`,
    mailSubject: (topic) => `Enquiry: ${topic}`,
    whereInline: { barcelona: "in Barcelona", roses: "in Roses", video: "by video call" },
    mailBody: (topic, where) =>
      `Hello,\n\nI would like to ask about ${topic}. I would prefer to meet ${where}.\n\nMy name and phone number:\n`,
  },
};

export const inner: L3<{
  areas: string;
  whatWeDo: string;
  needHelp: string;
  cta: string;
  firmaPhotos: string;
  contactOffices: string;
  newsTitle: string;
  newsNote: string;
}> = {
  es: {
    areas: "Áreas",
    whatWeDo: "Qué hacemos",
    needHelp: "¿Necesitas ayuda de un experto?",
    cta: "Pide tu cita",
    firmaPhotos: "Las dos sedes",
    contactOffices: "Nuestras sedes",
    newsTitle: "Actualidad",
    newsNote: "Artículos del despacho sobre novedades legales.",
  },
  ca: {
    areas: "Àrees",
    whatWeDo: "Què fem",
    needHelp: "Necessites ajuda d'un expert?",
    cta: "Demana la teva cita",
    firmaPhotos: "Les dues seus",
    contactOffices: "Les nostres seus",
    newsTitle: "Actualitat",
    newsNote: "Articles del despatx sobre novetats legals.",
  },
  en: {
    areas: "Areas",
    whatWeDo: "What we do",
    needHelp: "Need help from an expert?",
    cta: "Book your appointment",
    firmaPhotos: "The two offices",
    contactOffices: "Our offices",
    newsTitle: "News",
    newsNote: "Articles from the firm on legal developments.",
  },
};

export const areaH1: Partial<Record<string, L3<string>>> = {
  administrativo: { es: "Derecho Administrativo", ca: "Dret Administratiu", en: "Administrative Law" },
  discapacidad: { es: "Discapacidad y dependencia", ca: "Discapacitat i dependència", en: "Disability and dependency" },
};

export const photoStrips: PhotoKey[][] = [
  ["rambla", "bahia", "fachada", "ciutadella"],
  ["eixample", "frente", "rambla", "fachada"],
  ["bahia", "ciutadella", "eixample", "frente"],
];
