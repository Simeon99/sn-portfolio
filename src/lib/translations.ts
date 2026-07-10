type PricingPlan = {
  name: string;
  badgeLabel?: string;
  description: string;
  features: string[];
};

const en = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    pricing: "Pricing",
    contact: "Contact",
  },
  menu: {
    menu: "Menu",
  },
  hero: {
    servicesList: [
      "Content & Video Production",
      "Web Development",
      "Social Media Marketing",
      "Ongoing Support",
    ],
    headlineTop: "Digital",
    headlineBottomLeft: "Creative",
    headlineBottomRight: "Studio",
    subtext:
      "We handle video, social, and web - all under one roof. Your brand doesn't need five different vendors. It needs one team that gets it done.",
  },
  stats: {
    kicker: "Let's talk",
    heading: "Our work speaks through numbers. Here's what we've achieved so far.",
    items: [
      {
        value: "10+",
        label: "Clients served",
        description: "Campaigns and sites shipped for our clients.",
      },
      {
        value: "1.5M+",
        label: "Views generated",
        description: "Video and social content reaching real audiences.",
      },
      {
        value: "98%",
        label: "Client satisfaction rate",
        description: "We build long-term partnerships through proven results.",
      },
      {
        value: "3+",
        label: "Years of expertise",
        description: "Combined experience across video, social, and web.",
      },
    ],
  },
  zoomText: {
    lineOne: "From ordinary",
    lineTwo: "to extraordinary",
  },
  brandStatement: {
    lineOne: "Work that's built to last",
    lineTwo: "and grow with your business.",
    scrollDown: "Scroll down",
  },
  priorityFeatures: {
    heading: "Why brands choose S&N",
    subheading:
      "A full-service creative partner from the first idea to the final upload — here's what working with us actually looks like.",
    card1: {
      title: "One team, no hand-offs",
      descriptionBefore: "From first call to final delivery, you work with",
      highlight: "the same small team",
      descriptionAfter: "— no account managers relaying messages along the way.",
    },
    card2: {
      titleLine1: "A process",
      titleLine2: "you can follow",
      descriptionBefore: "Every project moves through the",
      highlight: "same clear stages",
      descriptionAfter: "- so you always know what's next and when.",
      timelineLabel: "Project timeline",
      doneItems: ["Discovery call", "Concept & scripting", "Production"],
      todoItems: ["Client review", "Final delivery"],
      turnaround: "Typical turnaround: 3-6 weeks",
    },
    card3: {
      engagementLabel: "Engagement, last 90 days",
      title: "Growth you can measure",
      descriptionBefore: "Every deliverable is built to perform, not just look good -",
      highlight: "real metrics, reported monthly",
      descriptionAfter: ".",
    },
    card4: {
      weekLabels: ["S", "M", "T", "W", "T", "F", "S"],
      dayNames: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      nextOpeningPrefix: "Next opening:",
      nextOpeningTime: "10:00 AM",
      title: "Ready when you are",
      description: "Book a free 20-minute call and let's talk about your next project.",
      cta: "Book a call",
    },
  },
  selectedWork: {
    kicker: "Selected work",
    headingLine1: "Proven results,",
    headingLine2: "stunning designs",
    yearTag: "2K25",
    allCases: "All cases",
  },
  servicesList: {
    kicker: "Services",
    seePricing: "See pricing",
    items: [
      {
        label: "Social & Ads",
        description:
          "We plan, create, and run social content and ad campaigns that turn scrolls into results.",
      },
      {
        label: "Websites",
        description:
          "We design and build fast, modern websites that convert visitors into customers.",
      },
      {
        label: "Video & Photo",
        description:
          "We produce cinematic video and photo content that captures attention and tells your brand's story.",
      },
      {
        label: "Design & Copy",
        description:
          "We craft visual design and copy that make your brand impossible to ignore.",
      },
    ],
  },
  pricing: {
    heading: "Flexible pricing",
    subheading:
      "Choose the plan that fits where your brand is headed.",
    subheadingLine2: "From a solid foundation to a fully optimized growth engine.",
    socialTab: "Social Media",
    webTab: "Web Development",
    monthly: "Monthly",
    annual: "Annual",
    saveBadge: "Save 10%",
    perMonth: "/month",
    startingAt: "Starting at",
    oneTime: "one-time project",
    customPrice: "Let's Talk",
    whatsIncluded: "What's Included:",
    choosePlan: "Choose this plan",
    socialPlans: [
      {
        name: "Spark",
        description:
          "For brands that need a consistent, professional social media presence.",
        features: [
          "8 social media posts / month",
          "10 stories / month",
          "1 content shoot / month",
          "Social media strategy & content planning",
          "Copywriting & content creation",
          "Design, editing & post-production",
          "Scheduling & publishing",
        ],
      },
      {
        name: "Momentum",
        badgeLabel: "Most popular",
        description:
          "For growing brands ready to turn attention into results with ads and campaigns.",
        features: [
          "12 social media posts / month",
          "15 stories / month",
          "Up to 2 content shoots / month",
          "Social media strategy & content planning",
          "Copywriting & content creation",
          "Design, editing & post-production",
          "Scheduling & publishing",
          "Community management (comments & messages)",
          "Paid ads management",
          "Campaign planning & creative concepts",
        ],
      },
      {
        name: "Amplify",
        badgeLabel: "Premium",
        description:
          "For established brands that want a full creative team running their entire social presence.",
        features: [
          "16 social media posts / month",
          "20 stories / month",
          "Up to 3 content shoots / month",
          "Full social media management",
          "Content planning & production",
          "Copywriting, design & post-production",
          "Full community management",
          "Paid ads management",
          "Campaign concepts & execution",
          "Influencer outreach & coordination",
          "Advanced reporting & optimization",
          "Priority creative support",
          "Custom mini-website (up to 3 pages)",
        ],
      },
    ] as PricingPlan[],
    webPlans: [
      {
        name: "Launch",
        description:
          "For businesses that need a fast, modern website to establish their online presence.",
        features: [
          "Custom website design",
          "Up to 5 pages",
          "Mobile-first responsive design",
          "Contact forms & essential integrations",
          "Basic SEO setup",
          "Analytics setup",
          "Speed optimization",
          "2 rounds of revisions",
        ],
      },
      {
        name: "Scale",
        badgeLabel: "Most popular",
        description:
          "For brands that want a fully custom site built to convert and grow with them.",
        features: [
          "Fully custom website design & development",
          "Up to 10 pages",
          "Advanced animations & interactions",
          "Conversion-focused UX",
          "Advanced SEO setup",
          "CMS & easy content management",
          "Booking & custom integrations",
          "Multilingual functionality",
          "Advanced performance optimization",
          "3 rounds of revisions",
          "30 days of post-launch support",
        ],
      },
      {
        name: "Custom",
        badgeLabel: "Premium",
        description:
          "For ambitious projects that need a fully tailored digital experience.",
        features: [
          "Fully tailored digital experience",
          "Page count tailored to project scope",
          "Advanced scroll-driven experiences",
          "E-commerce functionality",
          "Custom features & integrations",
          "Multilingual functionality",
          "CMS & custom content architecture",
          "Advanced performance optimization",
          "Extended post-launch support",
        ],
      },
    ] as PricingPlan[],
  },
  process: {
    heading: "Our process",
    subheading:
      "Our four-step process keeps you informed and involved at every stage, ensuring the final result meets your goals and resonates with your audience.",
    cta: "Schedule a consultation",
    steps: [
      {
        number: "01",
        title: "Discovery & Strategy",
        description:
          "We learn your brand, audience, and goals, then map out the content and design direction that will move the needle.",
      },
      {
        number: "02",
        title: "Creative Concept",
        description:
          "We shape the look, story, and messaging — mood boards, scripts, and wireframes you review before anything is built.",
      },
      {
        number: "03",
        title: "Production & Development",
        description:
          "Our team shoots, edits, designs, and builds — turning the approved concept into finished video, social, and web assets.",
      },
      {
        number: "04",
        title: "Launch & Support",
        description:
          "We launch, track performance, and keep optimizing — with ongoing support long after the first release.",
      },
    ],
  },
  faq: {
    heading: "FAQ",
    subheading: "We've heard it all. Here's everything you need to know before working with us.",
    cta: "Ask a question",
    items: [
      {
        question: "What's your process for taking on a new project?",
        answer:
          "We start by understanding your brand, goals, and audience, then map out a creative direction across video, social, and web. Once you approve the concept, we move into production and development, testing everything before launch.",
      },
      {
        question: "What if I need changes or new content after launch?",
        answer:
          "No problem — most of our plans include ongoing revisions and fresh content each month. If you need something outside your plan, we scope it quickly and get to work.",
      },
      {
        question: "Do you handle social media management and paid ads?",
        answer:
          "Yes. We plan, create, and post content, and we manage Meta and Google ad campaigns end to end, from creative to targeting to reporting.",
      },
      {
        question: "How long does it typically take to see results?",
        answer:
          "Most clients see initial engagement and traffic gains within the first month, with stronger results building over 60-90 days as content and campaigns compound.",
      },
      {
        question: "How do you make sure everything stays on-brand and mobile-friendly?",
        answer:
          "Every deliverable follows the brand guidelines we set together at kickoff, and every site and asset is tested across devices before it ever reaches your audience.",
      },
    ],
  },
  contact: {
    kicker: "Contact us",
    heading: "Let's bring your vision to life",
    description:
      "Our team is here to make sure your experience with S&N is smooth from the first message to the final launch. Reach out anytime - we're here to help you feel confident and supported.",
    managerName: "Simeon Ilić",
    managerRole: "Software Engineer",
    bookingTitle: "Book a free intro call",
    bookingDescription:
      "Pick a time that works for you and let's talk about your project - 20 minutes, no strings attached.",
    bookingCta: "Book a call",
  },
  footer: {
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Services", href: "/#services" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Process", href: "/#process" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/#contact" },
    ],
    bookTitle: "Ready to start?",
    bookDescription:
      "Book a free 20-minute call and let's talk about your next project.",
    bookCta: "Book a call",
    bottomDescription:
      "With S&N, your brand gets more than content. We create video, social, and web experiences that resonate with your audience and drive real results.",
  },
  languageToggle: {
    switchTo: "SR",
    ariaLabel: "Switch to Serbian",
  },
  aboutPage: {
    heading: "About us",
    meetTheTeam: "Meet the team",
    introSmall:
      "Two graduates, two very different degrees, one shared instinct: most agencies overcomplicate a simple problem.",
    founderRole: "Software Engineer",
    introLarge:
      "We don't believe in overcomplicating things, using the tools and strategies that make the most sense for your goals. If custom code is needed, we write it. If something works out of the box, we won't reinvent it.",
    introLargeSecondary:
      "We approach each project with the same questions: what does this need to do, who will use it, and how can we make it as simple and effective as possible?",
    joinUs: "Let’s work together",
    joinUsDescription: "Ready to grow your brand? Tell us what you’re working on and let’s see what we can build together.",
    letsTalk: "Book a call",
    team: [
      { name: "Simeon", role: "Co-founder, Software Engineer" },
      { name: "Nevena", role: "Co-founder, Marketing Manager" },
    ],
    approach: "Approach",
    approachLarge:
      "S&N started with two young, talented people who'd already proven their skills in practice — one with a degree in Software Engineering, the other with a Master's in Marketing Management. Instead of going separate ways, into separate companies, they built one studio where both disciplines sit at the same table.",
    approachSecondary:
      "That's still how we work today. Every site we ship is held to a developer's standard for what \"done\" means, and every campaign is held to a marketer's standard for what \"working\" means. Nothing gets lost in translation between departments, because there aren't any — just two people who studied this for years, and now do it for you.",
  },
  projectsPage: {
    heading: "Projects",
    description:
      "Every project we deliver is a reflection of our commitment to quality, designed to inspire and drive real results.",
    allFilter: "All",
  },
};

const sr: typeof en = {
  nav: {
    home: "Početna",
    about: "O nama",
    projects: "Projekti",
    pricing: "Cene",
    contact: "Kontakt",
  },
  menu: {
    menu: "Meni",
  },
  hero: {
    servicesList: [
      "Produkcija sadržaja i videa",
      "Izrada sajtova",
      "Marketing na društvenim mrežama",
      "Stalna podrška",
    ],
    headlineTop: "Digital",
    headlineBottomLeft: "Creative",
    headlineBottomRight: "Studio",
    subtext:
      "Bavimo se videom, društvenim mrežama i izradom sajtova — sve na jednom mestu. Vašem brendu nije potrebno pet različitih izvođača. Potreban mu je jedan tim koji sve to sprovede do kraja.",
  },
  stats: {
    kicker: "Popričajmo",
    heading: "Naš rad govori kroz brojke. Evo šta smo do sada postigli.",
    items: [
      {
        value: "10+",
        label: "Zadovoljnih klijenata",
        description: "Kampanje i sajtovi koje smo isporučili našim klijentima.",
      },
      {
        value: "1.5M+",
        label: "Generisanih pregleda",
        description: "Video i sadržaj za društvene mreže koji dopire do prave publike.",
      },
      {
        value: "98%",
        label: "Zadovoljstvo klijenata",
        description: "Gradimo dugoročna partnerstva kroz proverene rezultate.",
      },
      {
        value: "3+",
        label: "Godina iskustva",
        description: "Zajedničko iskustvo u videu, društvenim mrežama i izradi sajtova.",
      },
    ],
  },
  zoomText: {
    lineOne: "Od običnog",
    lineTwo: "do izuzetnog",
  },
  brandStatement: {
    lineOne: "Rad koji traje",
    lineTwo: "i raste zajedno sa vašim biznisom.",
    scrollDown: "Pomeri se nadole",
  },
  priorityFeatures: {
    heading: "Zašto brendovi biraju S&N",
    subheading:
      "Kreativni partner koji pokriva sve, od prve ideje do finalnog objavljivanja — evo kako izgleda saradnja sa nama.",
    card1: {
      title: "Jedan tim, bez prebacivanja",
      descriptionBefore: "Od prvog poziva do finalne isporuke, radite sa",
      highlight: "istim malim timom",
      descriptionAfter: "— bez menadžera koji prenose poruke između vas i nas.",
    },
    card2: {
      titleLine1: "Proces",
      titleLine2: "koji možete da pratite",
      descriptionBefore: "Svaki projekat prolazi kroz",
      highlight: "iste jasne faze",
      descriptionAfter: "— tako uvek znate šta sledi i kada.",
      timelineLabel: "Tok projekta",
      doneItems: ["Uvodni poziv", "Koncept i scenario", "Produkcija"],
      todoItems: ["Pregled sa klijentom", "Finalna isporuka"],
      turnaround: "Uobičajeni rok: 3-6 nedelje",
    },
    card3: {
      engagementLabel: "Angažovanje, poslednjih 90 dana",
      title: "Rast koji možete izmeriti",
      descriptionBefore: "Svaki rezultat je napravljen da donese učinak, ne samo da lepo izgleda -",
      highlight: "prave metrike, izveštaj svakog meseca",
      descriptionAfter: ".",
    },
    card4: {
      weekLabels: ["N", "P", "U", "S", "Č", "P", "S"],
      dayNames: [
        "nedelja",
        "ponedeljak",
        "utorak",
        "sreda",
        "četvrtak",
        "petak",
        "subota",
      ],
      nextOpeningPrefix: "Prvi slobodan termin:",
      nextOpeningTime: "10:00",
      title: "Spremni smo kad i vi",
      description: "Zakažite besplatan poziv od 20 minuta i popričajmo o vašem sledećem projektu.",
      cta: "Zakaži poziv",
    },
  },
  selectedWork: {
    kicker: "Izdvojeni radovi",
    headingLine1: "Dokazani rezultati,",
    headingLine2: "upečatljiv dizajn",
    yearTag: "2K25",
    allCases: "Svi projekti",
  },
  servicesList: {
    kicker: "Usluge",
    seePricing: "Pogledaj cene",
    items: [
      {
        label: "Društvene mreže i oglasi",
        description:
          "Planiramo, kreiramo i vodimo sadržaj za društvene mreže i kampanje koje pretvaraju skrolovanje u rezultate.",
      },
      {
        label: "Sajtovi",
        description:
          "Dizajniramo i pravimo brze, moderne sajtove koji pretvaraju posetioce u kupce.",
      },
      {
        label: "Video i foto",
        description:
          "Produciramo filmski video i foto sadržaj koji privlači pažnju i priča priču vašeg brenda.",
      },
      {
        label: "Dizajn i tekst",
        description:
          "Kreiramo vizuelni dizajn i tekstove zbog kojih vaš brend ne može da se ignoriše.",
      },
    ],
  },
  pricing: {
    heading: "Fleksibilne cene",
    subheading: "Izaberite paket koji odgovara pravcu u kom se kreće vaš brend.",
    subheadingLine2: "Od solidnih temelja do potpuno optimizovanog rasta.",
    socialTab: "Društvene mreže",
    webTab: "Izrada sajtova",
    monthly: "Mesečno",
    annual: "Godišnje",
    saveBadge: "Ušteda 10%",
    perMonth: "/mesečno",
    startingAt: "Već od",
    oneTime: "jednokratan projekat",
    customPrice: "Dogovorimo se",
    whatsIncluded: "Šta je uključeno:",
    choosePlan: "Izaberi ovaj paket",
    socialPlans: [
      {
        name: "Spark",
        description:
          "Za brendove kojima je potrebno dosledno i profesionalno prisustvo na društvenim mrežama.",
        features: [
          "8 objava mesečno",
          "10 priča (stories) mesečno",
          "1 snimanje sadržaja mesečno",
          "Strategija i planiranje sadržaja",
          "Copywriting i kreiranje sadržaja",
          "Dizajn, montaža i postprodukcija",
          "Zakazivanje i objavljivanje",
        ],
      },
      {
        name: "Momentum",
        badgeLabel: "Najpopularniji",
        description:
          "Za brendove u rastu spremne da uz oglase i kampanje pretvore pažnju u rezultate.",
        features: [
          "12 objava mesečno",
          "15 priča (stories) mesečno",
          "Do 2 snimanja sadržaja mesečno",
          "Strategija i planiranje sadržaja",
          "Copywriting i kreiranje sadržaja",
          "Dizajn, montaža i postprodukcija",
          "Zakazivanje i objavljivanje",
          "Upravljanje zajednicom (komentari i poruke)",
          "Upravljanje plaćenim oglasima",
          "Planiranje kampanja i kreativni koncepti",
        ],
      },
      {
        name: "Amplify",
        badgeLabel: "Premijum",
        description:
          "Za etablirane brendove koji žele kompletan kreativni tim za celokupno prisustvo na mrežama.",
        features: [
          "16 objava mesečno",
          "20 priča (stories) mesečno",
          "Do 3 snimanja sadržaja mesečno",
          "Kompletno vođenje društvenih mreža",
          "Planiranje i produkcija sadržaja",
          "Copywriting, dizajn i postprodukcija",
          "Kompletno upravljanje zajednicom",
          "Upravljanje plaćenim oglasima",
          "Koncepti i realizacija kampanja",
          "Saradnja i koordinacija sa influenserima",
          "Napredni izveštaji i optimizacija",
          "Prioritetna kreativna podrška",
          "Mini-sajt po meri (do 3 stranice)",
        ],
      },
    ] as PricingPlan[],
    webPlans: [
      {
        name: "Launch",
        description:
          "Za preduzeća kojima je potreban brz, moderan sajt za snažno prisustvo na internetu.",
        features: [
          "Dizajn sajta po meri",
          "Do 5 stranica",
          "Responzivan dizajn prilagođen telefonima",
          "Kontakt forme i ključne integracije",
          "Osnovna SEO optimizacija",
          "Podešavanje analitike",
          "Optimizacija brzine",
          "2 runde izmena",
        ],
      },
      {
        name: "Scale",
        badgeLabel: "Najpopularniji",
        description:
          "Za brendove koji žele potpuno prilagođen sajt napravljen da prodaje i raste sa njima.",
        features: [
          "Potpuno prilagođen dizajn i razvoj sajta",
          "Do 10 stranica",
          "Napredne animacije i interakcije",
          "UX fokusiran na konverzije",
          "Napredna SEO optimizacija",
          "CMS i lako uređivanje sadržaja",
          "Zakazivanje i integracije po meri",
          "Višejezična funkcionalnost",
          "Napredna optimizacija performansi",
          "3 runde izmena",
          "30 dana podrške nakon lansiranja",
        ],
      },
      {
        name: "Custom",
        badgeLabel: "Premijum",
        description:
          "Za ambiciozne projekte kojima je potrebno potpuno prilagođeno digitalno iskustvo.",
        features: [
          "Potpuno prilagođeno digitalno iskustvo",
          "Broj stranica prema obimu projekta",
          "Napredna scroll iskustva",
          "Funkcionalnost onlajn prodavnice",
          "Funkcionalnosti i integracije po meri",
          "Višejezična funkcionalnost",
          "CMS i arhitektura sadržaja po meri",
          "Napredna optimizacija performansi",
          "Produžena podrška nakon lansiranja",
        ],
      },
    ] as PricingPlan[],
  },
  process: {
    heading: "Naš proces",
    subheading:
      "Naš proces u četiri koraka vas drži informisanim i uključenim u svakoj fazi, tako da finalni rezultat ispunjava vaše ciljeve i ostavlja utisak na vašu publiku.",
    cta: "Zakaži konsultacije",
    steps: [
      {
        number: "01",
        title: "Istraživanje i strategija",
        description:
          "Upoznajemo vaš brend, publiku i ciljeve, a zatim definišemo pravac sadržaja i dizajna koji donosi rezultate.",
      },
      {
        number: "02",
        title: "Kreativni koncept",
        description:
          "Oblikujemo izgled, priču i poruku — mud borde, scenarija i skice koje pregledate pre nego što bilo šta krenemo da gradimo.",
      },
      {
        number: "03",
        title: "Produkcija i razvoj",
        description:
          "Naš tim snima, montira, dizajnira i gradi — pretvarajući odobreni koncept u gotov video, sadržaj za društvene mreže i sajt.",
      },
      {
        number: "04",
        title: "Lansiranje i podrška",
        description:
          "Lansiramo, pratimo učinak i stalno optimizujemo — uz stalnu podršku dugo nakon prvog objavljivanja.",
      },
    ],
  },
  faq: {
    heading: "Česta pitanja",
    subheading:
      "Čuli smo sva moguća pitanja. Evo svega što treba da znate pre nego što počnemo saradnju.",
    cta: "Postavi pitanje",
    items: [
      {
        question: "Kako izgleda vaš proces kada krenemo na novom projektu?",
        answer:
          "Prvo upoznajemo vaš brend, ciljeve i publiku, a zatim definišemo kreativni pravac za video, društvene mreže i sajt. Kada odobrite koncept, prelazimo na produkciju i razvoj, i sve testiramo pre lansiranja.",
      },
      {
        question: "Šta ako mi zatrebaju izmene ili novi sadržaj posle lansiranja?",
        answer:
          "Nema problema — većina naših paketa uključuje stalne izmene i novi sadržaj svakog meseca. Ako vam treba nešto van paketa, brzo to definišemo i krećemo na posao.",
      },
      {
        question: "Da li se bavite vođenjem društvenih mreža i plaćenim oglasima?",
        answer:
          "Da. Planiramo, kreiramo i objavljujemo sadržaj, a takođe vodimo Meta i Google kampanje od kreative, preko targetiranja, do izveštavanja.",
      },
      {
        question: "Koliko obično traje da se vide prvi rezultati?",
        answer:
          "Većina klijenata primeti prvi rast angažovanja i posete već u prvom mesecu, dok se jači rezultati grade tokom 60-90 dana kako se sadržaj i kampanje nadograđuju.",
      },
      {
        question: "Kako obezbeđujete da sve ostane u duhu brenda i prilagođeno mobilnim uređajima?",
        answer:
          "Svaki rezultat prati smernice brenda koje zajedno definišemo na početku, a svaki sajt i materijal testiramo na više uređaja pre nego što stigne do vaše publike.",
      },
    ],
  },
  contact: {
    kicker: "Kontaktirajte nas",
    heading: "Hajde da vašu viziju pretvorimo u stvarnost",
    description:
      "Naš tim je tu da vaše iskustvo sa S&N bude glatko od prve poruke do finalnog lansiranja. Javite nam se kad god poželite - tu smo da se osećate sigurno i podržano.",
    managerName: "Simeon Ilić",
    managerRole: "Softverski inženjer",
    bookingTitle: "Zakažite besplatan uvodni poziv",
    bookingDescription:
      "Izaberite termin koji vam odgovara i popričajmo o vašem projektu - 20 minuta, bez ikakve obaveze.",
    bookingCta: "Zakažite poziv",
  },
  footer: {
    links: [
      { label: "Početna", href: "/" },
      { label: "O nama", href: "/about" },
      { label: "Projekti", href: "/projects" },
      { label: "Usluge", href: "/#services" },
      { label: "Cene", href: "/#pricing" },
      { label: "Proces", href: "/#process" },
      { label: "Česta pitanja", href: "/#faq" },
      { label: "Kontakt", href: "/#contact" },
    ],
    bookTitle: "Spremni da počnemo?",
    bookDescription:
      "Zakažite besplatan poziv od 20 minuta i popričajmo o vašem sledećem projektu.",
    bookCta: "Zakažite poziv",
    bottomDescription:
      "Uz S&N, vaš brend dobija više od sadržaja. Kreiramo video, društvene mreže i veb iskustva koja ostavljaju utisak na vašu publiku i donose prave rezultate.",
  },
  languageToggle: {
    switchTo: "EN",
    ariaLabel: "Switch to English",
  },
  aboutPage: {
    heading: "O nama",
    meetTheTeam: "Upoznajte tim",
    introSmall:
      "Dvoje diplomaca, dva veoma različita smera, jedan zajednički instinkt: većina agencija nepotrebno komplikuje jednostavan problem.",
    founderRole: "Softverski inženjer",
    introLarge:
      "Ne verujemo u nepotrebno komplikovanje stvari — koristimo alate i strategije koje imaju najviše smisla za vaše ciljeve. Ako je potreban prilagođen kod, mi ga pišemo. Ako nešto već radi kako treba, nećemo ponovo izmišljati toplu vodu.",
    introLargeSecondary:
      "Svakom projektu pristupamo sa istim pitanjima: šta ovo treba da radi, ko će to koristiti, i kako da to uradimo što jednostavnije i efikasnije?",
    joinUs: "Hajde da radimo zajedno",
    joinUsDescription: "Spremni ste da unapredite svoj brend? Recite nam na čemu radite i hajde da vidimo šta možemo da stvorimo zajedno.",
    letsTalk: "Zakažite poziv",
    team: [
      { name: "Simeon", role: "Suosnivač, softverski inženjer" },
      { name: "Nevena", role: "Suosnivač, marketing menadžer" },
    ],
    approach: "Pristup",
    approachLarge:
      "S&N su pokrenula dvoje mladih, talentovanih ljudi koji su svoje veštine već dokazali u praksi — jedno sa diplomom softverskog inženjerstva, drugo sa masterom iz marketing menadžmenta. Umesto da krenu svako svojim putem, u odvojene kompanije, izgradili su jedan studio u kom obe struke sede za istim stolom.",
    approachSecondary:
      "Tako radimo i danas. Svaki sajt koji isporučimo mora da zadovolji standarde programera za to šta znači „gotovo“, a svaka kampanja mora da zadovolji standarde marketara za to šta znači „funkcioniše“. Ništa se ne izgubi između odeljenja, jer odeljenja ni nema — samo dvoje ljudi koji su ovo godinama učili, a sada to rade za vas.",
  },
  projectsPage: {
    heading: "Projekti",
    description:
      "Svaki projekat koji isporučimo odražava našu posvećenost kvalitetu, osmišljen da inspiriše i donese prave rezultate.",
    allFilter: "Sve",
  },
};

export const translations = { en, sr };
export type Translations = typeof en;
