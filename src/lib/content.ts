export type Locale = "es" | "ca" | "en";

export const locales: Locale[] = ["es", "ca", "en"];
export const defaultLocale: Locale = "es";

// Locales we know exist on the live site but haven't been ported into this
// preview yet. Kept here so the language switcher / routing can grow into
// them without re-architecting anything.
export const plannedLocales = ["de", "fr", "nl"] as const;

export const localeLabel: Record<Locale, string> = {
  es: "Español",
  ca: "Català",
  en: "English",
};

export const localePrefix: Record<Locale, string> = {
  es: "",
  ca: "/ca",
  en: "/en",
};

export const siteName = "MH & MG Abogados";

export const offices = {
  barcelona: {
    name: "Barcelona",
    address: "Rambla Catalunya 92, 3º 2D",
    postalCode: "08008",
    city: "Barcelona",
    phone: "+34933683202",
    phoneDisplay: "93 368 32 02",
    fax: "+34933683177",
    faxDisplay: "93 368 31 77",
  },
  roses: {
    name: "Roses (Girona)",
    address: "José Espronceda 10, Local C6",
    postalCode: "17480",
    city: "Roses",
    phone: "+34972152432",
    phoneDisplay: "972 15 24 32",
    fax: "+34972153487",
    faxDisplay: "972 15 34 87",
  },
  whatsapp: "+34653964658",
  whatsappDisplay: "653 964 658",
  email: "info@mhmgabogados.com",
};

export type NavStrings = {
  firma: string;
  servicios: string;
  actualidad: string;
  contacto: string;
  cta: string;
  home: string;
};

export const nav: Record<Locale, NavStrings> = {
  es: { firma: "La firma", servicios: "Servicios", actualidad: "Actualidad", contacto: "Contacto", cta: "Pide tu cita", home: "Inicio" },
  ca: { firma: "La firma", servicios: "Serveis", actualidad: "Actualitat", contacto: "Contacte", cta: "Demana la teva cita", home: "Inici" },
  en: { firma: "The firm", servicios: "Services", actualidad: "News", contacto: "Contact", cta: "Book your appointment", home: "Home" },
};

export const ui = {
  es: {
    readMore: "Ver más",
    needHelp: "¿Necesitas ayuda de un experto?",
    contactCta: "Contacta",
    servicesTitle: "Servicios",
    experience: "+25 años de experiencia",
    offices2: "2 sedes",
    languages5: "5 idiomas",
    mediators: "Mediadores registrados",
    rights: "Todos los derechos reservados",
    privacy: "Política de privacidad",
    whatsapp: "WhatsApp",
    phone: "Teléfono",
    email: "Email",
    address: "Dirección",
  },
  ca: {
    readMore: "Veure més",
    needHelp: "Necessites ajuda d'un expert?",
    contactCta: "Contacta",
    servicesTitle: "Serveis",
    experience: "+25 anys d'experiència",
    offices2: "2 seus",
    languages5: "5 idiomes",
    mediators: "Mediadors registrats",
    rights: "Tots els drets reservats",
    privacy: "Política de privacitat",
    whatsapp: "WhatsApp",
    phone: "Telèfon",
    email: "Correu electrònic",
    address: "Adreça",
  },
  en: {
    readMore: "Learn more",
    needHelp: "Need help from an expert?",
    contactCta: "Contact",
    servicesTitle: "Services",
    experience: "+25 years of experience",
    offices2: "2 offices",
    languages5: "5 languages",
    mediators: "Registered mediators",
    rights: "All rights reserved",
    privacy: "Privacy Policy",
    whatsapp: "WhatsApp",
    phone: "Phone",
    email: "Email",
    address: "Address",
  },
};

export type PracticeArea = {
  group: string;
  slug: Record<Locale, string>;
  navTitle: Record<Locale, string>;
  title: Record<Locale, string>;
  metaTitle: Record<Locale, string>;
  metaDescription: Record<Locale, string>;
  intro: Record<Locale, string[]>;
  services: Record<Locale, string[]>;
};

export const practiceAreas: PracticeArea[] = [
  {
    group: "comunidades",
    slug: { es: "abogado-comunidades-propietarios", ca: "comunitats-de-propietaris", en: "homeowners-associations" },
    navTitle: { es: "Comunidades de Propietarios", ca: "Comunitats de Propietaris", en: "Homeowners Associations" },
    title: { es: "Comunidades de Propietarios", ca: "Comunitats de Propietaris", en: "Homeowners Associations" },
    metaTitle: {
      es: "Abogado de Comunidades de Propietarios en Barcelona y Roses",
      ca: "Advocat de Comunitats de Propietaris a Barcelona i Roses",
      en: "Homeowners Associations Lawyer in Barcelona and Roses",
    },
    metaDescription: {
      es: "Gestión y defensa jurídica de comunidades de propietarios en Barcelona y Costa Brava: juntas, actas, presupuestos y procedimientos judiciales.",
      ca: "Gestió i defensa jurídica de comunitats de propietaris a Barcelona i Costa Brava: juntes, actes, pressupostos i procediments judicials.",
      en: "Legal management and defence of homeowners associations in Barcelona and the Costa Brava: meetings, minutes, budgets and legal proceedings.",
    },
    intro: {
      es: [
        "La firma cuenta con un departamento que se ocupa de la gestión de comunidades de propietarios, tanto en la provincia de Barcelona como en la Costa Brava. Este proceso se realiza de manera detallada, con un control de los acuerdos y presupuestos aprobados, recogidos de manera minuciosa en el Libro de Actas, mediante la exhaustiva ejecución de los acuerdos adoptados, ofreciendo asistencia personal y directa a los copropietarios antes, durante y después de cada Junta, buscando lo mejor para tu propiedad y en defensa de tu patrimonio.",
        "También somos especialistas en procedimientos judiciales en defensa de los intereses de las comunidades de propietarios. Si tienes problemas con tu administración de fincas actual, tu comunidad de propietarios ha sido demandada o deseas demandar, o simplemente quieres conocernos, solicita un presupuesto sin compromiso.",
      ],
      ca: [
        "La firma compta amb un departament que s’ocupa de la gestió de comunitats de propietaris, tant a la província de Barcelona com a la Costa Brava. Aquest procés es realitza de manera detallada, amb un control dels acords i pressupostos aprovats, recollits de manera minuciosa al Llibre d’Actes, mitjançant l’exhaustiva execució dels acords adoptats, oferint assistència personal i directa als copropietaris abans, durant i després de cada Junta, cercant sempre el millor per a la teva propietat i en defensa del teu patrimoni.",
        "També som especialistes en procediments judicials en defensa dels interessos de les comunitats de propietaris. Si tens problemes amb la teva administració de finques actual, la teva comunitat de propietaris ha estat demandada o vols demandar, o simplement vols conèixer-nos, sol·licita un pressupost sense compromís.",
      ],
      en: [
        "Our firm has a department dedicated to the management of homeowners associations, both in the province of Barcelona and on the Costa Brava. This process is carried out in detail, with careful control of agreements and approved budgets, meticulously recorded in the Minutes Book, through the thorough execution of the resolutions adopted, offering personal and direct assistance to co-owners before, during and after each General Meeting, always seeking what is best for your property and in defence of your assets.",
        "We are also specialists in legal proceedings defending the interests of homeowners associations. If you are having problems with your current property management company, your homeowners association has been sued or you wish to bring a claim, or you simply want to get to know us, request a no-obligation quote.",
      ],
    },
    services: {
      es: ["Derecho Administrativo", "Derecho Civil", "Derecho de Extranjería", "Derecho de Familia", "Derecho de la Discapacidad", "Derecho de Sucesiones", "Derecho Inmobiliario", "Derecho Laboral", "Derecho Penal", "Mediación"],
      ca: ["Dret administratiu", "Dret civil", "Dret d'estrangeria", "Dret de família", "Dret de la discapacitat", "Dret de successions", "Dret immobiliari", "Dret laboral", "Dret penal", "Mediació"],
      en: ["Administrative Law", "Civil Law", "Immigration Law", "Family Law", "Disability Law", "Inheritance Law", "Real Estate Law", "Employment Law", "Criminal Law", "Mediation"],
    },
  },
  {
    group: "administrativo",
    slug: { es: "abogado-contencioso-administrativo", ca: "dret-administratiu", en: "administrative-law" },
    navTitle: { es: "Derecho Administrativo y Contencioso Administrativo", ca: "Dret Administratiu i Contenciós Administratiu", en: "Administrative and Contentious-Administrative Law" },
    title: { es: "Derecho Administrativo y Contencioso Administrativo", ca: "Dret Administratiu i Contenciós Administratiu", en: "Administrative and Contentious-Administrative Law" },
    metaTitle: {
      es: "Abogado Contencioso Administrativo en Barcelona y Roses",
      ca: "Advocat de Dret Administratiu a Barcelona i Roses",
      en: "Administrative Law Lawyer in Barcelona and Roses",
    },
    metaDescription: {
      es: "Abogados de derecho administrativo en Barcelona y Roses: subvenciones, sancionadores, contencioso-administrativo y reclamaciones patrimoniales.",
      ca: "Advocats de dret administratiu a Barcelona i Roses: subvencions, sancionadors, contenciós-administratiu i reclamacions patrimonials.",
      en: "Administrative law lawyers in Barcelona and Roses: grants, sanctioning proceedings, contentious-administrative matters and liability claims.",
    },
    intro: {
      es: [
        "Nuestro despacho está especializado en Derecho Administrativo, ofreciéndote una atención personalizada para que afrontes los procesos administrativos y judiciales con la tranquilidad de estar convenientemente asesorado, informado y defendido en todo momento.",
        "Si necesitas ayuda personalizada para tu asunto, deseas comentarnos tu situación particular o requieres asesoramiento, puedes solicitar una cita presencial o una videollamada online en cualquiera de nuestros despachos en Barcelona o Roses (Girona).",
      ],
      ca: [
        "El nostre despatx està especialitzat en Dret Administratiu, oferint-te una atenció personalitzada perquè afrontis els processos administratius i judicials amb la tranquil·litat d’estar convenientment assessorat, informat i defensat en tot moment.",
        "Si necessites ajuda personalitzada per al teu assumpte, vols comentar-nos la teva situació particular o requereixes assessorament, pots sol·licitar una cita presencial o una videotrucada en línia en qualsevol dels nostres despatxos a Barcelona o Roses (Girona).",
      ],
      en: [
        "Our firm specialises in Administrative Law, offering you personalised attention so you can face administrative and judicial proceedings with the peace of mind of being properly advised, informed and defended at all times.",
        "If you need personalised help with your case, would like to tell us about your particular situation or require advice, you can request an in-person appointment or an online video call at either of our offices in Barcelona or Roses (Girona).",
      ],
    },
    services: {
      es: ["Solicitud de subvenciones públicas", "Procedimientos sancionadores", "Procedimientos contencioso-administrativos", "Reclamaciones patrimoniales contra la Administración", "Otros asesoramientos jurídicos relacionados"],
      ca: ["Sol·licitud de subvencions públiques", "Procediments sancionadors", "Procediments contenciosos-administratius", "Reclamacions patrimonials contra l'Administració", "Altres assessoraments jurídics relacionats"],
      en: ["Applications for public grants and subsidies", "Sanctioning proceedings", "Contentious-administrative proceedings", "Liability claims against the Administration", "Other related legal advice"],
    },
  },
  {
    group: "civil",
    slug: { es: "abogado-civil", ca: "dret-civil", en: "civil-law" },
    navTitle: { es: "Derecho Civil", ca: "Dret Civil", en: "Civil Law" },
    title: { es: "Derecho Civil", ca: "Dret Civil", en: "Civil Law" },
    metaTitle: {
      es: "Abogado de Derecho Civil en Barcelona y Roses",
      ca: "Advocat de Dret Civil a Barcelona i Roses",
      en: "Civil Law Lawyer in Barcelona and Roses",
    },
    metaDescription: {
      es: "Abogados de derecho civil en Barcelona y Roses: contratos, reclamaciones de cantidad, responsabilidad civil y subastas judiciales.",
      ca: "Advocats de dret civil a Barcelona i Roses: contractes, reclamacions de quantitat, responsabilitat civil i subhastes judicials.",
      en: "Civil law lawyers in Barcelona and Roses: contracts, payment claims, civil liability and judicial auctions.",
    },
    intro: {
      es: [
        "Al estar especializados en Derecho Civil, podemos ofrecerte una atención personalizada para definir la mejor estrategia para tu asunto, tratando de agilizar los procesos al máximo y buscando tu tranquilidad al sentirte bien asesorado, informado y defendido por abogados expertos en Derecho Civil.",
        "Si necesitas ayuda personalizada para tu asunto, deseas comentarnos tu situación particular o requieres asesoramiento, tienes la opción de solicitar una cita presencial o una videollamada online en cualquiera de nuestros despachos en Barcelona o Roses (Girona).",
      ],
      ca: [
        "En estar especialitzats en Dret Civil, podem oferir-te una atenció personalitzada per definir la millor estratègia per al teu assumpte, intentant agilitzar els processos al màxim i cercant la teva tranquil·litat en sentir-te ben assessorat, informat i defensat per advocats experts en Dret Civil.",
        "Si necessites ajuda personalitzada per al teu assumpte, vols comentar-nos la teva situació particular o requereixes assessorament, tens l’opció de sol·licitar una cita presencial o una videotrucada en línia en qualsevol dels nostres despatxos a Barcelona o Roses (Girona).",
      ],
      en: [
        "As specialists in Civil Law, we can offer you personalised attention to define the best strategy for your case, working to speed up the process as much as possible and helping you feel at ease, well advised, informed and defended by expert Civil Law lawyers.",
        "If you need personalised help with your case, would like to tell us about your particular situation or require advice, you can request an in-person appointment or an online video call at either of our offices in Barcelona or Roses (Girona).",
      ],
    },
    services: {
      es: ["Contratos: redacción y análisis de todo tipo de contratos", "Reclamaciones de cantidad e impagos", "Nulidad de contratos o pactos", "Ejecución de derechos reales (servidumbre, usufructo)", "Reclamación de responsabilidad civil por daños y perjuicios", "Incumplimientos contractuales", "Reclamación de los derechos y garantías del consumidor", "Subastas judiciales"],
      ca: ["Contractes: redacció i anàlisi de tot tipus de contractes", "Reclamacions de quantitat i impagaments", "Nul·litat de contractes o pactes", "Execució de drets reals (servitud, usdefruit)", "Reclamació de responsabilitat civil per danys i perjudicis", "Incompliments contractuals", "Reclamació dels drets i garanties del consumidor", "Subhastes judicials"],
      en: ["Contracts: drafting and review of all types of contracts", "Claims for payment and non-payment", "Nullity of contracts or agreements", "Enforcement of real rights (easements, usufruct)", "Civil liability claims for damages", "Breach of contract", "Enforcement of consumer rights and guarantees", "Judicial auctions"],
    },
  },
  {
    group: "extranjeria",
    slug: { es: "abogado-extranjeria", ca: "dret-destrangeria", en: "immigration-law" },
    navTitle: { es: "Derecho de Extranjería", ca: "Estrangeria", en: "Immigration Law" },
    title: { es: "Derecho de Extranjería", ca: "Estrangeria", en: "Immigration Law" },
    metaTitle: {
      es: "Abogado de Extranjería en Barcelona y Roses",
      ca: "Advocat d'Estrangeria a Barcelona i Roses",
      en: "Immigration Law Lawyer in Barcelona and Roses",
    },
    metaDescription: {
      es: "Abogados de extranjería en Barcelona y Roses: arraigo, nacionalidad, visados, Golden Visa, permisos de trabajo y asilo.",
      ca: "Advocats d'estrangeria a Barcelona i Roses: arrelament, nacionalitat, visats, Golden Visa, permisos de treball i asil.",
      en: "Immigration lawyers in Barcelona and Roses: rootedness, nationality, visas, Golden Visa, work permits and asylum.",
    },
    intro: {
      es: [
        "Nuestro despacho está especializado en Derecho de Extranjería, ofreciéndote una atención personalizada para que acudas a los procesos administrativos y judiciales con la tranquilidad de estar convenientemente asesorado, informado y defendido en todo momento.",
        "Si necesitas ayuda personalizada para tu caso, deseas comentarnos tu situación particular o requieres asesoramiento, puedes solicitar una cita presencial o una videollamada online en cualquiera de nuestros despachos en Barcelona o Roses (Girona).",
      ],
      ca: [
        "El nostre despatx està especialitzat en Dret d'Estrangeria, oferint-te una atenció personalitzada perquè acudeixis als processos administratius i judicials amb la tranquil·litat d'estar convenientment assessorat, informat i defensat en tot moment.",
        "Si necessites ajuda personalitzada per al teu cas, vols comentar-nos la teva situació particular o requereixes assessorament, pots sol·licitar una cita presencial o una videotrucada en línia en qualsevol dels nostres despatxos a Barcelona o Roses (Girona).",
      ],
      en: [
        "Our firm specialises in Immigration Law, offering you personalised attention so that you can approach administrative and judicial proceedings with the peace of mind of being properly advised, informed and defended at all times.",
        "If you need personalised help with your case, would like to discuss your particular situation, or require advice, you can request an in-person appointment or an online video call at any of our offices in Barcelona or Roses (Girona).",
      ],
    },
    services: {
      es: ["Tarjeta de familiar de ciudadano comunitario", "Arraigo laboral y social", "Visado de nómada digital", "Nacionalidad española", "Certificado de la UE", "Contratación de extranjeros en España", "Visado para estudiar en España", "Emprender en España", "Golden Visa", "Permiso de residencia no lucrativa", "Autorizaciones de trabajo", "Asilo", "Estatus de refugiado", "Sanciones y expulsiones"],
      ca: ["Targeta de familiar de ciutadà comunitari", "Arrelament laboral i social", "Visat de nòmada digital", "Nacionalitat espanyola", "Certificat de la UE", "Contractació d'estrangers a Espanya", "Visat per estudiar a Espanya", "Emprendre a Espanya", "Golden Visa", "Permís de residència no lucrativa", "Autoritzacions de treball", "Asil", "Estatus de refugiat", "Sancions i expulsions"],
      en: ["EU family member card", "Labour and social rootedness (arraigo)", "Digital nomad visa", "Spanish nationality", "EU registration certificate", "Hiring foreign workers in Spain", "Student visa for Spain", "Starting a business in Spain", "Golden Visa", "Non-lucrative residence permit", "Work authorisations", "Asylum", "Refugee status", "Sanctions and expulsions"],
    },
  },
  {
    group: "familia",
    slug: { es: "abogado-familia", ca: "dret-de-familia", en: "family-law" },
    navTitle: { es: "Derecho de Familia", ca: "Dret de Família", en: "Family Law" },
    title: { es: "Derecho de Familia", ca: "Dret de Família", en: "Family Law" },
    metaTitle: {
      es: "Abogado de Familia en Barcelona y Roses",
      ca: "Advocat de Dret de Família a Barcelona i Roses",
      en: "Family Law Lawyer in Barcelona and Roses",
    },
    metaDescription: {
      es: "Abogado de familia en Barcelona y Roses para separaciones, divorcios, custodia y medidas familiares, con atención cercana y soluciones personalizadas.",
      ca: "Advocat de família a Barcelona i Roses per a separacions, divorcis, custòdia i mesures familiars, amb atenció propera i solucions personalitzades.",
      en: "Specialist family law lawyers in Barcelona and Roses. Divorce, separation, child custody and alimony. Contact MH & MG Abogados today.",
    },
    intro: {
      es: [
        "Nuestra experiencia nos avala en asuntos de Derecho de Familia; somos especialistas. Nuestro mejor aval es el gran número de procedimientos de familia que llevamos a cabo cada año, y la satisfacción de nuestros clientes es nuestra mejor recompensa.",
        "El Derecho de Familia es, sin duda, una de las ramas del derecho en la que los clientes necesitan mayor apoyo y seguridad durante el proceso. En MH & MG Abogados somos conscientes de que, además de nuestra profesionalidad, ese apoyo emocional es tan necesario como un buen asesoramiento legal y un eficaz servicio jurídico.",
        "Nuestros servicios jurídicos abarcan el estudio y asesoramiento personalizado de cada caso, ya sea un divorcio exprés, un divorcio de mutuo acuerdo con o sin negociación extrajudicial, una modificación de medidas, un divorcio contencioso o el reparto de bienes tras una ruptura.",
      ],
      ca: [
        "La nostra experiència ens avala en assumptes de Dret de Família; en som especialistes. El nostre millor aval és el gran nombre de procediments de família que duem a terme cada any, i la satisfacció dels nostres clients és la nostra millor recompensa.",
        "El Dret de Família és, sens dubte, una de les branques del dret en què els clients necessiten més suport i seguretat durant el procés. MH & MG Abogados és conscient que, a més de la nostra professionalitat, aquest suport emocional és tan necessari com un bon assessorament legal i un servei jurídic eficaç.",
        "Els nostres serveis jurídics abasten l’estudi i l’assessorament personalitzat de cada cas, ja sigui un divorci exprés, un divorci de mutu acord amb o sense negociació extrajudicial, una modificació de mesures, un divorci contenciós o el repartiment de béns després d’una ruptura.",
      ],
      en: [
        "Our experience speaks for itself in Family Law matters; we specialize in this field. Our best guarantee is the large number of family proceedings we handle every year, and our clients' satisfaction is our greatest reward.",
        "Family Law is, without doubt, one of the branches of law in which clients need the most support and reassurance throughout the process. MH & MG Abogados is aware that, beyond our professionalism, this emotional support is just as necessary as sound legal advice and effective legal service.",
        "Our legal services cover the personalized study and advice of each case, whether it is an express divorce, a divorce by mutual agreement with or without out-of-court negotiation, a modification of measures, a contentious divorce, or the division of assets following a breakup.",
      ],
    },
    services: {
      es: ["Separación o divorcio matrimonial", "Divorcio de mutuo acuerdo o contencioso", "Custodia compartida", "Reclamaciones de pensión alimenticia", "Reclamaciones de pensión compensatoria", "Uso y disfrute de la vivienda conyugal", "Procedimientos sobre filiación y/o paternidad", "Liquidación del régimen económico matrimonial", "Liquidación de la sociedad de gananciales", "Modificación de medidas definitivas", "Violencia de género", "Nulidad civil y eclesiástica del matrimonio", "Custodia compartida de mascotas en divorcios"],
      ca: ["Separació o divorci matrimonial", "Divorci de mutu acord o contenciós", "Custòdia compartida", "Reclamacions de pensió alimentària", "Reclamacions de pensió compensatòria", "Ús i gaudi de l'habitatge conjugal", "Procediments sobre filiació i/o paternitat", "Liquidació del règim econòmic matrimonial", "Liquidació de la societat de guanys", "Modificació de mesures definitives", "Violència de gènere", "Nul·litat civil i eclesiàstica del matrimoni", "Custòdia compartida de la mascota en divorcis"],
      en: ["Marital separation or divorce", "Divorce by mutual agreement or contentious divorce", "Joint custody", "Child maintenance claims", "Compensatory pension claims", "Use and enjoyment of the marital home", "Filiation and/or paternity proceedings", "Liquidation of the matrimonial economic regime", "Liquidation of the community property regime", "Proceedings to modify final measures", "Gender-based violence", "Civil and ecclesiastical marriage annulment", "Pets in divorce proceedings (shared custody of pets)"],
    },
  },
  {
    group: "discapacidad",
    slug: { es: "abogado-discapacidad", ca: "dret-de-les-persones-amb-discapacitat-i-dependents", en: "disability-and-dependent-persons-law" },
    navTitle: { es: "Derecho de las Personas con Discapacidad y Dependientes", ca: "Discapacitat i Dependència", en: "Disability and Dependency Law" },
    title: { es: "Derecho de las Personas con Discapacidad y Dependientes", ca: "Dret de les Persones amb Discapacitat i Dependents", en: "Disability and Dependent Persons Law" },
    metaTitle: {
      es: "Abogado de Discapacidad y Dependencia en Barcelona y Roses",
      ca: "Advocat de Discapacitat a Barcelona i Roses",
      en: "Disability Law Lawyer in Barcelona and Roses",
    },
    metaDescription: {
      es: "Asesoramiento legal en ley de dependencia, grado de discapacidad, curatelas y procesos sobre la capacidad de las personas en Barcelona y Roses.",
      ca: "Assessorament legal en llei de dependència, grau de discapacitat, curateles i processos sobre la capacitat de les persones a Barcelona i Roses.",
      en: "Legal advice on dependency law, disability assessment, guardianships and legal capacity proceedings in Barcelona and Roses.",
    },
    intro: {
      es: [
        "Nuestro despacho está especializado en el Derecho de las Personas con Discapacidad y Dependientes, ofreciéndote una atención personalizada para que acudas a los procesos administrativos y judiciales con la tranquilidad de estar convenientemente asesorado, informado y defendido en todo momento.",
        "Si necesitas ayuda personalizada para tu asunto, deseas comentarnos tu situación particular o requieres asesoramiento, puedes solicitar una cita presencial o una videollamada online en cualquiera de nuestros despachos en Barcelona o Roses (Girona).",
      ],
      ca: [
        "El nostre despatx està especialitzat en el Dret de les Persones amb Discapacitat i Dependents, oferint-te una atenció personalitzada perquè acudeixis als processos administratius i judicials amb la tranquil·litat d'estar convenientment assessorat, informat i defensat en tot moment.",
        "Si necessites ajuda personalitzada per al teu assumpte, vols comentar-nos la teva situació particular o requereixes assessorament, pots sol·licitar una cita presencial o una videotrucada en línia a qualsevol dels nostres despatxos a Barcelona o Roses (Girona).",
      ],
      en: [
        "Our firm specializes in Disability and Dependent Persons Law, offering you personalized attention so that you can face administrative and judicial proceedings with the peace of mind of being properly advised, informed and defended at all times.",
        "If you need personalized help with your case, want to tell us about your particular situation or require advice, you can request an in-person appointment or an online video call at any of our offices in Barcelona or Roses (Girona).",
      ],
    },
    services: {
      es: ["Ley de dependencia", "Declaración de grado de discapacidad", "Procesos sobre la capacidad de las personas: asistencias, curatelas, nombramiento de tutor y rendición de cuentas"],
      ca: ["Llei de dependència", "Declaració de grau de discapacitat", "Processos sobre la capacitat de les persones: assistències, curateles, nomenament de tutor i rendició de comptes"],
      en: ["Dependency Law", "Declaration of degree of disability", "Processes concerning legal capacity: assistance measures, guardianships, appointment of a guardian and accounting"],
    },
  },
  {
    group: "sucesiones",
    slug: { es: "abogado-herencias-sucesiones", ca: "dret-de-successions", en: "inheritance-law" },
    navTitle: { es: "Derecho de Sucesiones", ca: "Successions", en: "Inheritance Law" },
    title: { es: "Derecho de Sucesiones", ca: "Dret de Successions", en: "Inheritance Law" },
    metaTitle: {
      es: "Abogado de Herencias y Sucesiones en Barcelona y Roses",
      ca: "Advocat de Successions a Barcelona i Roses",
      en: "Inheritance Law Lawyer in Barcelona and Roses",
    },
    metaDescription: {
      es: "Abogados de herencias y sucesiones en Barcelona y Roses: testamentos, disolución de herencia, herencia judicial e impuestos sucesorios.",
      ca: "Advocats de successions a Barcelona i Roses: testaments, dissolució d'herència, herència judicial i impostos successoris.",
      en: "Inheritance lawyers in Barcelona and Roses: wills, estate settlement, judicial probate and inheritance taxes.",
    },
    intro: {
      es: [
        "El Derecho de Sucesiones es, indudablemente, una de las ramas del derecho en la que los clientes necesitan mayor apoyo y seguridad durante el proceso. En MH & MG Abogados somos conscientes de que, además de nuestra profesionalidad, ese apoyo emocional es tan necesario como un buen asesoramiento legal y un eficaz servicio jurídico.",
        "El gran número de procedimientos extrajudiciales y judiciales de disolución de herencias que llevamos a cabo anualmente, junto con la satisfacción de nuestros clientes, nos avalan como especialistas en Derecho Sucesorio.",
      ],
      ca: [
        "El Dret de Successions és, sens dubte, una de les branques del dret en què els clients necessiten més suport i seguretat durant el procés. A MH & MG Abogados som conscients que, a més de la nostra professionalitat, aquest suport emocional és tan necessari com un bon assessorament legal i un servei jurídic eficaç.",
        "El gran nombre de procediments extrajudicials i judicials de dissolució d'herències que duem a terme anualment, juntament amb la satisfacció dels nostres clients, ens avalen com a especialistes en Dret Successori.",
      ],
      en: [
        "Inheritance and succession law is, without doubt, one of the branches of law in which clients need the most support and reassurance throughout the process. At MH & MG Abogados we are aware that, beyond our professionalism, this emotional support is just as necessary as sound legal advice and effective legal service.",
        "The large number of out-of-court and judicial estate settlement proceedings we handle every year, together with our clients' satisfaction, are our best credentials as specialists in Inheritance Law.",
      ],
    },
    services: {
      es: ["Disolución de herencia", "Herencia judicial", "Herencia a beneficio de inventario", "Herencias con menores o personas con discapacidad", "Testamentos", "Impuestos de una herencia"],
      ca: ["Dissolució d'herència", "Herència judicial", "Herència a benefici d'inventari", "Herències amb menors o persones amb discapacitat", "Testaments", "Impostos d'una herència"],
      en: ["Estate settlement (dissolution of inheritance)", "Judicial probate proceedings", "Inheritance accepted under benefit of inventory", "Inheritances involving minors or people with disabilities", "Wills", "Inheritance taxes"],
    },
  },
  {
    group: "inmobiliario",
    slug: { es: "abogado-inmobiliario", ca: "dret-immobiliari", en: "real-estate-law" },
    navTitle: { es: "Derecho Inmobiliario", ca: "Dret Immobiliari", en: "Real Estate Law" },
    title: { es: "Derecho Inmobiliario", ca: "Dret Immobiliari", en: "Real Estate Law" },
    metaTitle: {
      es: "Abogado Inmobiliario en Barcelona y Roses",
      ca: "Advocat de Dret Immobiliari a Barcelona i Roses",
      en: "Real Estate Law Lawyer in Barcelona and Roses",
    },
    metaDescription: {
      es: "Abogados inmobiliarios en Barcelona y Roses: contratos de compraventa, desahucios, vicios ocultos, urbanismo y usucapión.",
      ca: "Advocats immobiliaris a Barcelona i Roses: contractes de compravenda, desnonaments, vicis ocults, urbanisme i usucapió.",
      en: "Real estate lawyers in Barcelona and Roses: purchase agreements, evictions, hidden defects, urban planning and adverse possession.",
    },
    intro: {
      es: [
        "Nuestra firma se define por la relación interpersonal con el cliente (comunicación y confianza), así como por el conocimiento del derecho, tanto legislativo como jurisprudencial.",
        "Estamos especializados en Derecho Inmobiliario en todas sus vertientes, y también en Derecho de la Construcción, asesorando y defendiendo tanto a empresas inmobiliarias, promotoras o constructoras, como a multitud de clientes particulares en estas materias.",
        "El Derecho Inmobiliario es, indudablemente, una de las ramas del derecho en la que los clientes necesitan mayor apoyo y seguridad durante el proceso, tanto para la compra, el arrendamiento o la construcción.",
      ],
      ca: [
        "El nostre despatx es defineix per la relació interpersonal amb el client (comunicació i confiança), així com pel coneixement del dret, tant legislatiu com jurisprudencial.",
        "Estem especialitzats en Dret Immobiliari en totes les seves vessants, i també en Dret de la Construcció, assessorant i defensant tant a empreses immobiliàries, promotores o constructores, com a multitud de clients particulars en aquestes matèries.",
        "El Dret Immobiliari és, sens dubte, una de les branques del dret en què els clients necessiten més suport i seguretat durant el procés, tant per a la compra, l'arrendament o la construcció.",
      ],
      en: [
        "Our firm is defined by the interpersonal relationship with the client (communication and trust), as well as by our knowledge of the law, both legislative and case law.",
        "We specialize in Real Estate Law in all its aspects, as well as in Construction Law, advising and defending real estate companies, developers and construction firms, as well as a large number of private clients in these matters.",
        "Real Estate Law is, without doubt, one of the branches of law in which clients need the greatest support and reassurance throughout the process, whether for a purchase, a lease or a construction matter.",
      ],
    },
    services: {
      es: ["Negociación y análisis de contratos de arras y compraventa", "Defectos constructivos y vicios ocultos", "Incumplimiento contractual", "Retrasos en la entrega de viviendas de obra nueva", "Urbanismo", "Disolución de cosa común y extinción de condominio", "Arrendamientos urbanos y rústicos", "Desahucios e impago de rentas", "Desahucio precario", "Interdictos de obra nueva e inmatriculación de fincas", "Declarativos de dominio", "Usucapión"],
      ca: ["Negociació i anàlisi de contractes d'arres i compravenda", "Defectes constructius i vicis ocults", "Incompliment contractual", "Retards en el lliurament d'habitatges d'obra nova", "Urbanisme", "Dissolució de cosa comuna i extinció de condomini", "Arrendaments urbans i rústics", "Desnonaments i impagament de rendes", "Desnonament per precari", "Interdictes d'obra nova i immatriculació de finques", "Declaratius de domini", "Usucapió"],
      en: ["Negotiation and review of earnest-money and purchase agreements", "Construction defects and hidden defects", "Breach of contract", "Delays in the delivery of newly built homes", "Urban planning law", "Dissolution of co-ownership and termination of joint ownership", "Urban and rural leases", "Evictions and non-payment of rent", "Eviction for unlawful occupation (precario)", "Injunctions against new construction and first registration of property", "Declaratory actions of ownership", "Adverse possession"],
    },
  },
  {
    group: "laboral",
    slug: { es: "abogado-laboral", ca: "dret-laboral", en: "employment-law" },
    navTitle: { es: "Derecho Laboral", ca: "Dret Laboral", en: "Employment Law" },
    title: { es: "Derecho Laboral", ca: "Dret Laboral", en: "Employment Law" },
    metaTitle: {
      es: "Abogado Laboral en Barcelona y Roses",
      ca: "Advocat de Dret Laboral a Barcelona i Roses",
      en: "Employment Law Lawyer in Barcelona and Roses",
    },
    metaDescription: {
      es: "Abogados laboralistas en Barcelona y Roses: despidos, incapacidades, jubilación y reclamaciones ante la Seguridad Social.",
      ca: "Advocats laboralistes a Barcelona i Roses: acomiadaments, incapacitats, jubilació i reclamacions davant la Seguretat Social.",
      en: "Employment lawyers in Barcelona and Roses: dismissals, disability claims, retirement and Social Security claims.",
    },
    intro: {
      es: [
        "Nuestro despacho está especializado en Derecho Laboral, ofreciéndote una atención personalizada para que afrontes los procesos administrativos y judiciales con la tranquilidad de estar convenientemente asesorado, informado y defendido en todo momento.",
        "Si necesitas ayuda personalizada para tu asunto, deseas comentarnos tu situación particular o requieres asesoramiento, puedes solicitar una cita presencial o una videollamada online en cualquiera de nuestros despachos en Barcelona o Roses (Girona).",
      ],
      ca: [
        "El nostre despatx està especialitzat en Dret Laboral, oferint-vos una atenció personalitzada perquè afronteu els processos administratius i judicials amb la tranquil·litat d'estar convenientment assessorats, informats i defensats en tot moment.",
        "Si necessiteu ajuda personalitzada per al vostre cas, voleu comentar-nos la vostra situació particular o requeriu assessorament, podeu sol·licitar una cita presencial o una videotrucada en línia a qualsevol dels nostres despatxos a Barcelona o Roses (Girona).",
      ],
      en: [
        "Our firm specializes in Employment Law, offering you personalized attention so that you can face administrative and judicial proceedings with the peace of mind of being properly advised, informed and defended at all times.",
        "If you need personalized help with your case, wish to discuss your particular situation with us, or require advice, you can request an in-person appointment or an online video call at either of our offices in Barcelona or Roses (Girona).",
      ],
    },
    services: {
      es: ["Elaboración de nóminas", "Altas y bajas", "Reclamaciones por despido", "Autorizaciones de trabajo", "Reclamaciones ante la Seguridad Social", "Incapacidad permanente", "Incapacidad absoluta", "Jubilación", "Impugnación de alta en la Seguridad Social", "Baja laboral por contingencia profesional o común"],
      ca: ["Elaboració de nòmines", "Altes i baixes", "Reclamacions per acomiadament", "Autoritzacions de treball", "Reclamacions davant la Seguretat Social", "Incapacitat permanent", "Incapacitat absoluta", "Jubilació", "Impugnació d'alta a la Seguretat Social", "Baixa laboral per contingència professional o comuna"],
      en: ["Payroll preparation", "Employment registration and termination with Social Security", "Wrongful dismissal claims", "Work permits", "Claims before the Social Security administration", "Permanent disability", "Total disability", "Retirement", "Challenging Social Security registration", "Sick leave due to occupational or common causes"],
    },
  },
  {
    group: "penal",
    slug: { es: "abogado-penal", ca: "dret-penal", en: "criminal-law" },
    navTitle: { es: "Derecho Penal", ca: "Dret Penal", en: "Criminal Law" },
    title: { es: "Derecho Penal", ca: "Dret Penal", en: "Criminal Law" },
    metaTitle: {
      es: "Abogado Penalista en Barcelona y Roses",
      ca: "Advocat de Dret Penal a Barcelona i Roses",
      en: "Criminal Law Lawyer in Barcelona and Roses",
    },
    metaDescription: {
      es: "Defensa penal en Barcelona y Roses: alcoholemias, violencia de género, delitos informáticos, estafas y accidentes de tráfico.",
      ca: "Defensa penal a Barcelona i Roses: alcoholèmies, violència de gènere, delictes informàtics, estafes i accidents de trànsit.",
      en: "Criminal defence in Barcelona and Roses: drink-driving, gender-based violence, cybercrime, fraud and traffic accidents.",
    },
    intro: {
      es: [
        "En MH & MG Abogados ofrecemos defensa penal cercana, rigurosa y personalizada en Barcelona y Roses (Girona), desde la primera declaración hasta la resolución del procedimiento.",
        "Asistimos en controles de alcoholemia, atestados, juicios rápidos, retirada de permiso y procedimientos por accidentes de tráfico. Valoramos la estrategia de defensa o acusación, preparamos la comparecencia y protegemos tus derechos en cada fase del proceso.",
        "Ofrecemos también acompañamiento jurídico en asuntos sensibles como violencia de género y delitos informáticos, con atención confidencial y una respuesta ágil ante denuncias, investigaciones y citaciones.",
      ],
      ca: [
        "El nostre despatx està especialitzat en Dret Penal, oferint-te una atenció personalitzada perquè afrontis els processos penals amb la tranquil·litat d'estar convenientment assessorat, informat i defensat en tot moment.",
        "Si necessites ajuda personalitzada per al teu assumpte, vols comentar-nos la teva situació particular o requereixes assessorament, pots sol·licitar una cita presencial o una videotrucada en línia en qualsevol dels nostres despatxos a Barcelona o Roses (Girona).",
      ],
      en: [
        "Our firm specialises in Criminal Law, offering you personalised attention so that you can face criminal proceedings with the peace of mind of being properly advised, informed and defended at all times.",
        "If you need personalised help with your matter, would like to discuss your particular situation, or require advice, you can request an in-person appointment or an online video call at any of our offices in Barcelona or Roses (Girona).",
      ],
    },
    services: {
      es: ["Delitos contra la libertad sexual", "Amenazas y delitos de odio", "Delitos informáticos", "Seguridad vial y alcoholemias", "Delitos leves", "Delitos contra los derechos de los trabajadores", "Estafas y apropiaciones indebidas", "Violencia de género", "Denuncias y querellas", "Accidentes de tráfico"],
      ca: ["Delictes contra la llibertat sexual", "Amenaces i delictes d'odi", "Delictes informàtics", "Seguretat viària i alcoholèmies", "Delictes lleus", "Delictes contra els drets dels treballadors", "Estafes i apropiacions indegudes", "Violència de gènere", "Denúncies i querelles", "Accidents de trànsit"],
      en: ["Crimes against sexual freedom", "Threats and hate crimes", "Cybercrime", "Road safety and drink-driving offences", "Minor offences", "Crimes against workers' rights", "Fraud and misappropriation", "Gender-based violence", "Complaints and criminal charges", "Traffic accidents"],
    },
  },
  {
    group: "mediacion",
    slug: { es: "abogado-mediacion", ca: "mediacio", en: "mediation" },
    navTitle: { es: "Mediación", ca: "Mediació", en: "Mediation" },
    title: { es: "Mediación", ca: "Mediació", en: "Mediation" },
    metaTitle: {
      es: "Mediación en Barcelona y Roses",
      ca: "Mediació a Barcelona i Roses",
      en: "Mediation Services in Barcelona and Roses",
    },
    metaDescription: {
      es: "Mediadores registrados en Barcelona y Roses para mediación familiar y laboral, como alternativa ágil a la vía judicial.",
      ca: "Mediadors registrats a Barcelona i Roses per a mediació familiar i laboral, com a alternativa àgil a la via judicial.",
      en: "Registered mediators in Barcelona and Roses for family and employment mediation, a fast alternative to litigation.",
    },
    intro: {
      es: [
        "Nuestro despacho está especializado en mediación, contando con mediadores registrados y ofreciéndote una atención personalizada para que afrontes los procesos de mediación con la tranquilidad de estar convenientemente asesorado, informado y defendido en todo momento.",
        "Si necesitas ayuda personalizada para tu asunto, deseas comentarnos tu situación particular o requieres asesoramiento, puedes solicitar una cita presencial o una videollamada online en cualquiera de nuestros despachos en Barcelona o Roses (Girona).",
      ],
      ca: [
        "El nostre despatx està especialitzat en mediació, comptant amb mediadors registrats i oferint-te una atenció personalitzada perquè afrontis els processos de mediació amb la tranquil·litat d'estar convenientment assessorat, informat i defensat en tot moment.",
        "Si necessites ajuda personalitzada per al teu assumpte, vols comentar-nos la teva situació particular o requereixes assessorament, pots sol·licitar una cita presencial o una videotrucada en línia en qualsevol dels nostres despatxos a Barcelona o Roses (Girona).",
      ],
      en: [
        "Our firm specialises in mediation, with registered mediators on our team, offering you personalised attention so you can approach mediation processes with the peace of mind of being properly advised, informed and represented at all times.",
        "If you need personalised help with your case, would like to tell us about your particular situation or require advice, you can request an in-person appointment or an online video call at either of our offices in Barcelona or Roses (Girona).",
      ],
    },
    services: {
      es: ["Mediación laboral", "Mediación familiar"],
      ca: ["Mediació laboral", "Mediació familiar"],
      en: ["Employment mediation", "Family mediation"],
    },
  },
];

export function findPracticeAreaBySlug(locale: Locale, slug: string) {
  return practiceAreas.find((p) => p.slug[locale] === slug);
}

export const staticSlugs: Record<"firma" | "contacto" | "servicios" | "actualidad" | "privacidad", Record<Locale, string>> = {
  firma: { es: "firma", ca: "la-firma", en: "the-firm" },
  contacto: { es: "contacto", ca: "contacte", en: "contact" },
  servicios: { es: "asesoria-barcelona-roses", ca: "serveis", en: "legal-services" },
  actualidad: { es: "actualidad", ca: "actualitat", en: "news" },
  privacidad: { es: "politica-privacidad", ca: "politica-de-privacitat", en: "privacy-policy" },
};

export const homeCopy = {
  es: {
    kicker: "Abogados en Barcelona y Roses (Girona)",
    h1: "Especialistas en tu derecho, con más de 25 años a tu lado",
    sub: "Asesoramiento jurídico cercano y multilingüe — español, català, English, Deutsch, Nederlands, français.",
    ctaPrimary: "Pide tu cita",
    ctaSecondary: "Ver áreas de práctica",
    firmTitle: "La firma",
    firmText: "La firma se constituyó en 2001 por un grupo de profesionales del derecho con amplia experiencia e implicación social. Hoy la dirigen la abogada Mª Isabel Martín Hermosín y el abogado Alexander Merino Heerze, letrados en ejercicio y mediadores registrados, con más de 25 años defendiendo los intereses de nuestros clientes como si fueran propios.",
    firmCta: "Conócenos",
    howWeWork: "Cómo trabajamos",
    steps: [
      { title: "Consulta", text: "Escuchamos tu caso, analizamos los detalles y te ofrecemos una primera orientación sobre tus opciones legales." },
      { title: "Estrategia", text: "Desarrollamos un plan personalizado basado en las leyes aplicables y las circunstancias de tu situación." },
      { title: "Representación", text: "Defendemos tus intereses en negociaciones, tribunales o trámites, y te mantenemos informado durante todo el proceso." },
    ],
    areasTitle: "Nuestras áreas de práctica",
    areasSub: "Asesoramos a particulares y empresas en las principales ramas del derecho, en Barcelona y Roses (Girona).",
    appointmentTitle: "Pide tu cita",
    appointmentText: "Reserva tu cita presencial o telemática. Presupuesto sin compromiso, totalmente cerrado y con facilidades de pago. Cercanía con el cliente, por ubicación y trato.",
  },
  ca: {
    kicker: "Advocats a Barcelona i Roses (Girona)",
    h1: "Especialistes en el teu dret, amb més de 25 anys al teu costat",
    sub: "Assessorament jurídic proper i multilingüe — català, español, English, Deutsch, Nederlands, français.",
    ctaPrimary: "Demana la teva cita",
    ctaSecondary: "Veure àrees de pràctica",
    firmTitle: "El despatx",
    firmText: "El despatx es va constituir l'any 2001 per un grup de professionals del dret amb àmplia experiència i implicació social. Avui el dirigeixen l'advocada Mª Isabel Martín Hermosín i l'advocat Alexander Merino Heerze, lletrats en exercici i mediadors registrats, amb més de 25 anys defensant els interessos dels nostres clients com si fossin propis.",
    firmCta: "Coneix-nos",
    howWeWork: "Com treballem",
    steps: [
      { title: "Consulta", text: "Escoltem el teu cas, n'analitzem els detalls i t'oferim una primera orientació sobre les teves opcions legals." },
      { title: "Estratègia", text: "Desenvolupem un pla personalitzat basat en les lleis aplicables i les circumstàncies de la teva situació." },
      { title: "Representació", text: "Defensem els teus interessos en negociacions, tribunals o tràmits, i et mantenim informat durant tot el procés." },
    ],
    areasTitle: "Les nostres àrees de pràctica",
    areasSub: "Assessorem particulars i empreses en les principals branques del dret, a Barcelona i Roses (Girona).",
    appointmentTitle: "Demana la teva cita",
    appointmentText: "Reserva la teva cita presencial o telemàtica. Pressupost sense compromís, totalment tancat i amb facilitats de pagament. Proximitat amb el client, per ubicació i tracte.",
  },
  en: {
    kicker: "Lawyers in Barcelona and Roses (Girona)",
    h1: "Specialists in your rights, by your side for more than 25 years",
    sub: "Close, multilingual legal advice — Spanish, Catalan, English, German, Dutch, French.",
    ctaPrimary: "Book your appointment",
    ctaSecondary: "View practice areas",
    firmTitle: "The firm",
    firmText: "The firm was founded in 2001 by a group of legal professionals with extensive experience and social commitment. Today it is led by lawyer Mª Isabel Martín Hermosín and lawyer Alexander Merino Heerze, practising attorneys and registered mediators, with more than 25 years defending our clients' interests as if they were our own.",
    firmCta: "About us",
    howWeWork: "How we work",
    steps: [
      { title: "Consultation", text: "We listen to your case, analyse the details, and give you initial guidance on your legal options." },
      { title: "Strategy", text: "We develop a tailored plan based on the applicable laws and the circumstances of your situation." },
      { title: "Representation", text: "We defend your interests in negotiations, courts or procedures, and keep you informed throughout the process." },
    ],
    areasTitle: "Our practice areas",
    areasSub: "We advise individuals and businesses across the main areas of law, in Barcelona and Roses (Girona).",
    appointmentTitle: "Book your appointment",
    appointmentText: "Book your in-person or online appointment. A no-obligation, fully fixed quote with flexible payment options. Close to our clients, both in location and in how we treat them.",
  },
};

export const firmPage = {
  es: {
    title: "La Firma",
    kicker: "Encuéntranos en Roses (Girona) & Barcelona",
    historyTitle: "Nuestra historia",
    historyKicker: "Abogados en Barcelona",
    quote: "«Especialistes en el seu dret.»",
    history: "La firma se constituyó en el año 2001 por un grupo de profesionales del derecho con amplia experiencia e implicación social. Actualmente, son socios directores la abogada Mª Isabel Martín Hermosín y el abogado Alexander Merino Heerze, letrados en ejercicio y mediadores registrados, con más de 25 años de experiencia en la defensa de intereses judiciales, ocupándose de los intereses de nuestros clientes como si fueran los suyos propios. Esta amplia experiencia se ha trasladado al ámbito de la docencia y el asesoramiento social, nutriendo el despacho con los principios y valores de estas competencias.",
    whyTitle: "Por qué elegirnos",
    whyKicker: "Abogados en Girona",
    why: "Nuestro lema es la transparencia, la honestidad y el acompañamiento continuo en el proceso litigioso o en la defensa de los intereses de nuestros clientes. Ofrecemos servicios en varios idiomas: español, catalán, inglés, holandés y alemán, para adaptarnos a tus necesidades y las de todos nuestros clientes.\n\nNo podemos garantizarte el resultado de tu proceso, pero sí podemos asegurar el cuidado, la profesionalidad y la atención con los que se va a tratar tu asunto. Por ello, la filosofía de la firma es la de ser especialistas en tu derecho.",
    howTitle: "Cómo trabajamos",
    howKicker: "Abogados especializados",
    how: "Somos un equipo de abogados dedicados a defender tus derechos, adaptándonos a las particularidades de tu caso. Analizamos cada situación de manera personalizada, diseñando estrategias legales efectivas y acompañándote en todo el proceso para que te sientas respaldado en cada paso.",
  },
  ca: {
    title: "La Firma",
    kicker: "Troba'ns a Roses (Girona) i Barcelona",
    historyTitle: "La nostra història",
    historyKicker: "Advocats a Barcelona",
    quote: "«Especialistes en el seu dret.»",
    history: "La firma es va constituir l'any 2001 per un grup de professionals del dret amb àmplia experiència i implicació social. Actualment, són sòcies directores l'advocada Mª Isabel Martín Hermosín i l'advocat Alexander Merino Heerze, lletrats en exercici i mediadors registrats, amb més de 25 anys d'experiència en la defensa d'interessos judicials, ocupant-se dels interessos dels nostres clients com si fossin els seus propis. Aquesta àmplia experiència s'ha traslladat a l'àmbit de la docència i l'assessorament social, nodrint el despatx amb els principis i valors d'aquestes competències.",
    whyTitle: "Per què triar-nos",
    whyKicker: "Advocats a Girona",
    why: "El nostre lema és la transparència, l'honestedat i l'acompanyament continu en el procés litigiós o en la defensa dels interessos dels nostres clients. Oferim serveis en diversos idiomes: espanyol, català, anglès, neerlandès i alemany, per adaptar-nos a les teves necessitats i a les de tots els nostres clients.\n\nNo podem garantir-te el resultat del teu procés, però sí que podem assegurar la cura, la professionalitat i l'atenció amb què es tractarà el teu assumpte. Per això, la filosofia de la firma és la de ser especialistes en el teu dret.",
    howTitle: "Com treballem",
    howKicker: "Advocats especialitzats",
    how: "Som un equip d'advocats dedicats a defensar els teus drets, adaptant-nos a les particularitats del teu cas. Analitzem cada situació de manera personalitzada, dissenyant estratègies legals efectives i acompanyant-te en tot el procés perquè et sentis recolzat en cada pas.",
  },
  en: {
    title: "The Firm",
    kicker: "Find us in Roses (Girona) & Barcelona",
    historyTitle: "Our history",
    historyKicker: "Lawyers in Barcelona",
    quote: "“Specialists in your rights.”",
    history: "The firm was established in 2001 by a group of legal professionals with extensive experience and social commitment. The managing partners are currently the lawyer Mª Isabel Martín Hermosín and the lawyer Alexander Merino Heerze, practising attorneys and registered mediators, with over 25 years of experience defending judicial interests, handling our clients' interests as if they were their own. This extensive experience has carried over into teaching and social counselling, enriching the firm with the principles and values of these fields.",
    whyTitle: "Why choose us",
    whyKicker: "Lawyers in Girona",
    why: "Our motto is transparency, honesty and continuous support throughout the litigation process or in defending our clients' interests. We offer services in several languages: Spanish, Catalan, English, Dutch and German, to adapt to your needs and those of all our clients.\n\nWe cannot guarantee the outcome of your case, but we can assure you of the care, professionalism and attention with which your matter will be handled. This is why the firm's philosophy is to be specialists in your rights.",
    howTitle: "How we work",
    howKicker: "Specialized lawyers",
    how: "We are a team of lawyers dedicated to defending your rights, adapting to the particularities of your case. We analyse each situation individually, designing effective legal strategies and supporting you throughout the whole process so that you feel backed at every step.",
  },
};

export const contactPage = {
  es: {
    title: "Contacto",
    kicker: "Contacta con nosotros",
    intro: [
      "Reserva ahora tu cita con un clic. Confía en la experiencia a tu servicio en las distintas especialidades.",
      "Más de 25 años de experiencia y miles de procedimientos judiciales resueltos a favor de nuestros clientes.",
      "Pide tu cita presencial o telemática para exponernos tu caso, siempre asesorado por un abogado especializado según la materia.",
      "Presupuesto sin compromiso, totalmente cerrado y con facilidades de pago.",
    ],
  },
  ca: {
    title: "Contacte",
    kicker: "Contacta amb nosaltres",
    intro: [
      "Reserva ara la teva cita amb un clic. Confia en l'experiència al teu servei en les diferents especialitats.",
      "Més de 25 anys d'experiència i milers de procediments judicials resolts a favor dels nostres clients.",
      "Demana la teva cita presencial o telemàtica per exposar-nos el teu cas, sempre assessorat per un advocat especialitzat segons la matèria.",
      "Pressupost sense compromís, totalment tancat i amb facilitats de pagament.",
    ],
  },
  en: {
    title: "Contact",
    kicker: "Contact us",
    intro: [
      "Book your appointment now with just one click. Trust the experience at your service across our different areas of practice.",
      "Over 25 years of experience and thousands of legal proceedings resolved in favour of our clients.",
      "Request your in-person or online appointment to explain your case, always advised by a lawyer specialised in the relevant area.",
      "No-obligation quote, completely closed and with payment facilities.",
    ],
  },
};

export const blogPosts = [
  {
    slug: "abogado-de-habla-neerlandesa-en-girona",
    date: "2026-09-19",
    title: { es: "Abogado de habla neerlandesa en Girona | Asesoría legal para extranjeros y empresas", ca: "Advocat neerlandòfon a Girona | Assessorament jurídic per a estrangers i empreses", en: "Dutch-speaking lawyer in Girona | Legal advice for expats and businesses" },
    excerpt: {
      es: "¿Necesitas asesoramiento jurídico en neerlandés en Girona o la Costa Brava? En MH & MG Abogados atendemos a particulares, familias y empresas neerlandófonas.",
      ca: "Necessites assessorament jurídic en neerlandès a Girona o a la Costa Brava? MH & MG Abogados acompanya particulars i empreses en qüestions legals a Espanya.",
      en: "Need legal advice in Dutch in Girona or on the Costa Brava? MH & MG Abogados supports individuals and businesses with legal matters in Spain.",
    },
  },
  {
    slug: "regularizacion-extranjeria-2026",
    date: "2026-01-29",
    title: { es: "Regularización extranjería 2026", ca: "Regularització estrangeria 2026", en: "2026 immigration regularisation" },
    excerpt: {
      es: "De acuerdo con lo aprobado el 26 de enero en el Consejo de Ministros en el «Acuerdo por el que se autoriza la tramitación administrativa...»",
      ca: "D'acord amb el que es va aprovar el 26 de gener al Consell de Ministres.",
      en: "Following the agreement approved on 26 January by the Council of Ministers.",
    },
  },
  {
    slug: "desahucios-e-impago-de-rentas",
    date: "2025-09-27",
    title: { es: "Desahucios e impago de rentas", ca: "Desnonaments i impagament de rendes", en: "Evictions and non-payment of rent" },
    excerpt: {
      es: "Los desahucios e impagos de rentas son situaciones complejas que suponen un incumplimiento de las obligaciones por parte del arrendatario.",
      ca: "Els desnonaments i impagaments de rendes són situacions complexes que suposen un incompliment de les obligacions per part de l'arrendatari.",
      en: "Evictions and non-payment of rent are complex situations that amount to a breach of the tenant's obligations.",
    },
  },
  {
    slug: "delitos-informaticos-un-reto-legal-en-la-era-digital",
    date: "2025-09-12",
    title: { es: "Delitos informáticos: un reto legal en la era digital", ca: "Delictes informàtics: un repte legal a l'era digital", en: "Cybercrime: a legal challenge in the digital age" },
    excerpt: {
      es: "Nos encontramos en un momento donde la tecnología es una parte esencial de nuestras vidas y están surgiendo nuevos tipos de delitos.",
      ca: "Ens trobem en un moment on la tecnologia és una part essencial de les nostres vides i estan sorgint nous tipus de delictes.",
      en: "We are at a point where technology is an essential part of our lives, and new types of crime are emerging.",
    },
  },
  {
    slug: "el-derecho-penal-en-la-lucha-contra-la-violencia-de-genero",
    date: "2025-08-28",
    title: { es: "El derecho penal en la lucha contra la violencia de género", ca: "El dret penal en la lluita contra la violència de gènere", en: "Criminal law in the fight against gender-based violence" },
    excerpt: {
      es: "La violencia de género es uno de los problemas más graves y persistentes en muchas sociedades, afectando a millones de mujeres.",
      ca: "La violència de gènere és un dels problemes més greus i persistents en moltes societats, afectant milions de dones.",
      en: "Gender-based violence is one of the most serious and persistent problems in many societies, affecting millions of women.",
    },
  },
  {
    slug: "el-derecho-penal-defensa-y-proteccion-en-el-sistema-judicial",
    date: "2025-08-13",
    title: { es: "El derecho penal: defensa y protección en el sistema judicial", ca: "El dret penal: defensa i protecció en el sistema judicial", en: "Criminal law: defence and protection in the justice system" },
    excerpt: {
      es: "El derecho penal es una rama del derecho que regula los delitos y las penas en una sociedad.",
      ca: "El dret penal és una branca del dret que regula els delictes i les penes en una societat.",
      en: "Criminal law is a branch of law that regulates offences and penalties in a society.",
    },
  },
];
