export type ImageAsset = {
  src: string;
  alt: string;
  label: string;
};

export type MenuItemData = {
  name: string;
  price: string;
  hrDescription: string;
  enDescription: string;
  imageSrc?: string;
};

export const imageAssets = {
  // Replace these src paths with real images in /public/images while keeping filenames stable.
  heroItalianClub: {
    src: "/images/breakfast 1.jpg",
    alt: "The Italian Club hero image",
    label: "Hero image - The Italian Club"
  },
  chefMarco: {
    src: "/images/breakfast 1.jpg",
    alt: "Portrait of chef Marco Esposito",
    label: "Chef portrait - Marco Esposito"
  },
  pastaGrid: [
    {
      src: "/images/breakfast 1.jpg",
      alt: "Breakfast plate detail 1",
      label: "Breakfast image 1"
    },
    {
      src: "/images/Breakfast 2.jpg",
      alt: "Breakfast plate detail 2",
      label: "Breakfast image 2"
    },
    {
      src: "/images/Breakfast 3.jpg",
      alt: "Breakfast plate detail 3",
      label: "Breakfast image 3"
    }
  ] as ImageAsset[],
  breakfastHero: {
    src: "/images/breakfast-hero.jpg",
    alt: "Breakfast couture hero image",
    label: "Breakfast hero image"
  },
  breakfastGrid: [
    {
      src: "/images/breakfast 1.jpg",
      alt: "Breakfast plate",
      label: "Breakfast plate 1"
    },
    {
      src: "/images/Breakfast 2.jpg",
      alt: "Brunch table arrangement",
      label: "Breakfast plate 2"
    },
    {
      src: "/images/Breakfast 3.jpg",
      alt: "View of Dubrovnik while dining",
      label: "Breakfast plate 3"
    }
  ] as ImageAsset[],
  mapPlaceholder: {
    src: "/images/mapsnew.png",
    alt: "Map location view",
    label: "Map image"
  }
};

export const homepageContent = {
  // Centralized homepage text content. Edit here for future copy updates.
  heroTitle: "The Italian Club",
  introText:
    "U kuhinji pričamo talijanski, kuhamo talijanski. koristimo isključivo namirnice koje stižu iz Italije, a sva naša tjestenina je fatto a mano, ručno rađena po receptu talijanskog kuhara Marco Esposito koji je glavna zvijezda restorana.",
  maestroHeading: "Incontra il Maestro",
  maestroBodyParagraphs: [
    "Marco Esposito, rodom iz Italije, svoju je kulinarsku filozofiju klesao u najboljim talijanskim kuhinjama diljem svijeta. Nakon godina vođenja prestižnih restorana, od kojih je zadnja postaja bila blještavi Miami, odlučio je svoju strast i znanje donijeti upravo ovdje u Dubrovnik.",
    "Nije došao sam, sa sobom je doveo tim talijanskih stručnjaka koji u našoj kuhinji dišu, pričaju i stvaraju kao jedan. Svaki tanjur koji izađe pred vas nosi njegov potpis, autentični recept i iskustvo stečeno na svjetskoj gastronomskoj mapi."
  ],
  pastaFeatureHeading: "La nostra pasta fatta a mano",
  pastaFeatureSubheading: "Naša ručno rađena tjestenina.",
  pastaFeatureBody: [
    "Vjerujemo da se prava talijanska priča ne može ispričati bez izvornih namirnica. Zato smo učinili upravo to, donijeli smo Italiju k vama. Naši kolutovi sira, u kojima šef pred vašim očima dovršava manistru pretvarajući je u kremasto savršenstvo, stižu izravno s talijanskih imanja.",
    "Od najfinijeg brašna za našu ručno rađenu tjesteninu do maslinovog ulja i sira, svaki sastojak ima talijansku putovnicu."
  ],
  breakfastHeroTitle: "Breakfast Couture",
  breakfastHeading: "Jutro s najljepšim pogledom na grad.",
  breakfastBody:
    "Prije nego što kuhinjom zavlada miris svježe manistre, Stradoon je oaza mira i vrhunskog bruncha. Naš koncept spaja najfinije sezonske namirnice s modernom prezentacijom. Izabrali smo devet autentičnih doručaka, devet vizualnih i gastronomskih remek-djela dizajniranih za početak dana. Uživajte u okusima koji prate ritam Straduna, uz jedinstven pogled na crkvu sv. Vlaha koji svako jutro čini nezaboravnim.",
  contactHeading: "Find us:",
  email: "stradoon@juznivjetar.com",
  phone: "+385 99 3388 276"
};

export const breakfastMenuItems: MenuItemData[] = [
  // Breakfast menu items (HR + EN). Add, remove, or reorder as needed.
  {
    name: "FALAFEL FIESTA",
    price: "€ 13.00",
    imageSrc: "/images/1. Falafel Fiesta.jpg",
    hrDescription:
      "Veganska zdjela koja se sastoji od slanutkovih kuglica, baby špinata, kvinoje, mrkve, avokada, crvenog kupusa, zapečenog slanutka, rajčice, krastavaca, humusa od cikle, sezamovih sjemenki i šipka.",
    enDescription:
      "A vegan bowl consisting of chickpea balls, baby spinach, quinoa, carrots, avocado, red cabbage, baked chickpeas, tomatoes, cucumbers, beetroot hummus, sesame seeds and pomegranate."
  },
  {
    name: "SIZZLE SHAKSHUKA",
    price: "€ 14.00",
    imageSrc: "/images/2. Sizzle Shakshuka.jpg",
    hrDescription:
      "Shakshuka od paprike, crvenog luka, baby špinata, maslina, feta sira, zapečenog slanutka te na samom vrhu servirano prženo jaje.",
    enDescription:
      "Shakshuka made of peppers, red onions, baby spinach, olives, feta cheese, baked chickpeas and a fried egg served on top."
  },
  {
    name: "OMELET OF THE GODS",
    price: "€ 14.50",
    imageSrc: "/images/3. Omlet of the Gods.jpg",
    hrDescription:
      "Omlet poslužen s rikulom, parmezanom, preljevom od jogurta i maslacem od pinjola.",
    enDescription:
      "Omelet served with arugula, parmesan cheese, yogurt dressing and pine nut butter."
  },
  {
    name: "EGGS ROYALE ON BLACK GOLD",
    price: "€ 17.00",
    imageSrc: "/images/4. Eggs Royale on Black Gold.jpg",
    hrDescription:
      "Dimljeni losos poslužen na tostiranom crnom kruhu s poširanim jajima, baby špinatom, hollandaise umakom od tartufa i šipkom.",
    enDescription:
      "Smoked salmon served on toasted black bread with poached eggs, baby spinach, truffle hollandaise sauce and pomegranate."
  },
  {
    name: "THE TOFU EGGSTRAVAGANZA",
    price: "€ 14.50",
    imageSrc: "/images/5. The Tofu Eggstravaganza.jpg",
    hrDescription:
      "Tostirani crni kruh poslužen s tofu sirom, grilanom pancetom, avokadom i poširanim jajima.",
    enDescription:
      "Toasted black bread served with tofu cheese, grilled bacon, avocado and poached eggs."
  },
  {
    name: "THE NUTTY AVOCROISSANT",
    price: "€ 15.00",
    imageSrc: "/images/6. The Nutty Avocroissant.jpg",
    hrDescription:
      "Tostirani kroasan s kremom od avokada, poširanim jajem, rukolom, parmezanom i pinjolima.",
    enDescription:
      "Toasted croissant with avocado cream, poached egg, argula, parmesan and pine nuts."
  },
  {
    name: "BANANA PANCAKE PARTY",
    price: "€ 15.00",
    imageSrc: "/images/7. Banana Pancake Party.jpg",
    hrDescription:
      "Palačinke s javorovim sirupom, coulis od malina, karamelizirana banana, sezonsko voće i sladoled od vanilije.",
    enDescription:
      "Pancakes with maple syrup, raspberry coulis, caramelized banana, seasonal fruit and vanilla ice cream."
  },
  {
    name: "HONEY, I’M FLAKY!",
    price: "€ 14.00",
    imageSrc: "/images/8. Honey, I'm Flaky.jpg",
    hrDescription:
      "Kroasan poslužen s maslacem, medom, linoladom i sezonskim voćem.",
    enDescription:
      "Croissant served with butter, honey, linolada and seasonal fruit."
  },
  {
    name: "YOGURT & THE GRANOLA GANG",
    price: "€ 13.50",
    imageSrc: "/images/9. Yogurt & Granola Gang.jpg",
    hrDescription:
      "Domaća granola poslužena s grčkim jogurtom, sezonskim voćem i medom.",
    enDescription:
      "Homemade granola served with Greek yogurt, seasonal fruit and honey."
  }
];

export const cocktailMenuContent = {
  brunchTitle: {
    hr: "BRUNCH",
    en: "BRUNCH"
  },
  nonAlcoholTitle: {
    hr: "NON ALCO BRUNCH",
    en: "NON ALCOHOLIC BRUNCH"
  },
  bondBarTitle: {
    hr: '"Bond\'s Bar"',
    en: '"Bond\'s Bar"'
  },
  shootersTitle: {
    hr: "SHOOTERS",
    en: "SHOOTERS"
  },
  virginTitle: {
    hr: "VIRGIN",
    en: "VIRGIN"
  }
};

export const cocktailMenuItems: MenuItemData[] = [
  // BRUNCH
  {
    name: "MARTINI FIERO & TONIC",
    price: "12.00 €",
    hrDescription: "MARTINI FIERO, SCHWEPPES TONIC WATER",
    enDescription: "MARTINI FIERO, SCHWEPPES TONIC WATER"
  },
  {
    name: "MANGO SAPPHIRE",
    price: "12.00 €",
    hrDescription: "BOMBAY SAPPHIRE GIN, LIME JUICE, HOMEMADE MANGO-TURMERIC AND CHILLY SYRUP, SCHWEPPES TONIC WATER",
    enDescription: "BOMBAY SAPPHIRE GIN, LIME JUICE, HOMEMADE MANGO-TURMERIC AND CHILLY SYRUP, SCHWEPPES TONIC WATER"
  },
  {
    name: "MINT TWIST",
    price: "12.00 €",
    hrDescription: "FINLANDIA VODKA, HOMEMADE MINT SYRUP, SCHWEPPES TONIC WATER",
    enDescription: "FINLANDIA VODKA, HOMEMADE MINT SYRUP, SCHWEPPES TONIC WATER"
  },
  {
    name: "STRADOON MIMOSA",
    price: "12.00 €",
    hrDescription: "ORANGE JUICE, MARTINI PROSECCO",
    enDescription: "ORANGE JUICE, MARTINI PROSECCO"
  },
  {
    name: "HUGO",
    price: "14.00 €",
    hrDescription: "ST. GERMAIN ELDERFLOWER LIQUEUR, LIME, MINT, MARTINI PROSECCO",
    enDescription: "ST. GERMAIN ELDERFLOWER LIQUEUR, LIME, MINT, MARTINI PROSECCO"
  },
  {
    name: "APEROL SPRITZ",
    price: "14.00 €",
    hrDescription: "MARTINI PROSECCO, APEROL, SPLASH SODA",
    enDescription: "MARTINI PROSECCO, APEROL, SPLASH SODA"
  },
  // NON ALCOHOLIC BRUNCH
  {
    name: "FLOREALE TONIC",
    price: "10.00 €",
    hrDescription: "MARTINI FLOREALE, SCHWEPPES TONIC WATER",
    enDescription: "MARTINI FLOREALE, SCHWEPPES TONIC WATER"
  },
  {
    name: "VIBRANTE TONIC",
    price: "10.00 €",
    hrDescription: "MARTINI VIBRANTE, SCHWEPPES TONIC WATER",
    enDescription: "MARTINI VIBRANTE, SCHWEPPES TONIC WATER"
  },
  // Bond's Bar
  {
    name: "ESPRESSO MARTINI",
    price: "14.50 €",
    hrDescription: "FINLANDIA VODKA, KAHLUA, SHOT ESPRESSO, HONEY",
    enDescription: "FINLANDIA VODKA, KAHLUA, SHOT ESPRESSO, HONEY"
  },
  {
    name: "MARTINI ROYALE",
    price: "14.00 €",
    hrDescription: "BOMBAY SAPPHIRE GIN/FINLANDIA VODKA, MARTINI EXTRA DRY, OLIVES",
    enDescription: "BOMBAY SAPPHIRE GIN/FINLANDIA VODKA, MARTINI EXTRA DRY, OLIVES"
  },
  {
    name: "THE BONDHATTAN",
    price: "16.00 €",
    hrDescription: "WOODFORD RESERVE BOURBON, MARTINI ROSSO, DASH ANGOSTURA",
    enDescription: "WOODFORD RESERVE BOURBON, MARTINI ROSSO, DASH ANGOSTURA"
  },
  {
    name: "ANGOSTURA NEGRONI",
    price: "15.00 €",
    hrDescription: "BOMBAY SAPPHIRE GIN, MARTINI RISERVA SPECIALE BITTER, MARTINI ROSSO, DASH ANGOSTURA",
    enDescription: "BOMBAY SAPPHIRE GIN, MARTINI RISERVA SPECIALE BITTER, MARTINI ROSSO, DASH ANGOSTURA"
  },
  {
    name: "OCHO OLD FASHIONED",
    price: "15.00 €",
    hrDescription: "BACARDI RESERVA OCHO GOLD RUM, CARDAMOM, DASH ANGOSTURA",
    enDescription: "BACARDI RESERVA OCHO GOLD RUM, CARDAMOM, DASH ANGOSTURA"
  },
  {
    name: "THE VESPER MULE",
    price: "13.50 €",
    hrDescription: "BACARDI CARTA ORO RUM, LIME JUICE, THREE CENTS GINGER BEER",
    enDescription: "BACARDI CARTA ORO RUM, LIME JUICE, THREE CENTS GINGER BEER"
  },
  {
    name: "THE GREENFINGER",
    price: "14.00 €",
    hrDescription: "BOMBAY SAPPHIRE GIN, LIME, ST. GERMAIN ELDERFLOWER LIQUEUR, BASIL, LIME JUICE",
    enDescription: "BOMBAY SAPPHIRE GIN, LIME, ST. GERMAIN ELDERFLOWER LIQUEUR, BASIL, LIME JUICE"
  },
  {
    name: "CUCUMBER CONFIDENTIAL",
    price: "13.50 €",
    hrDescription: "FINLANDIA VODKA, LEMON JUICE, SUGAR, MINT, CUCUMBER, SODA",
    enDescription: "FINLANDIA VODKA, LEMON JUICE, SUGAR, MINT, CUCUMBER, SODA"
  },
  {
    name: "THE BONDITO MULE",
    price: "14.00 €",
    hrDescription: "EL JIMADOR BLANCO TEQUILA, LIME JUICE, AGAVA SYRUP, THREE CENTS GINGER BEER",
    enDescription: "EL JIMADOR BLANCO TEQUILA, LIME JUICE, AGAVA SYRUP, THREE CENTS GINGER BEER"
  },
  {
    name: "THE BONDSTAR MARTINI",
    price: "15.00 €",
    hrDescription: "FINLANDIA VODKA, PASSION FRUIT PUREE, PASSOA, LIME JUICE, VANILLA SYRUP, MARTINI PROSECCO",
    enDescription: "FINLANDIA VODKA, PASSION FRUIT PUREE, PASSOA, LIME JUICE, VANILLA SYRUP, MARTINI PROSECCO"
  },
  {
    name: "THE MARGARITA PROTOCOL",
    price: "14.00 €",
    hrDescription: "EL JIMADOR BLANCO TEQUILA, COINTREAU, LIME JUICE, AGAVA SYRUP",
    enDescription: "EL JIMADOR BLANCO TEQUILA, COINTREAU, LIME JUICE, AGAVA SYRUP"
  },
  {
    name: "THE MOJITO REACTOR",
    price: "14.00 €",
    hrDescription: "BACARDI CARTA BLANCA RUM, LIME, BROWN SUGAR, MINT, SPLASH SODA",
    enDescription: "BACARDI CARTA BLANCA RUM, LIME, BROWN SUGAR, MINT, SPLASH SODA"
  },
  {
    name: "PALOMA ON THE RUN",
    price: "14.00 €",
    hrDescription: "PATRON SILVER TEQUILA, LIME JUICE, THREE CENTS PINK GRAPEFRUIT SODA",
    enDescription: "PATRON SILVER TEQUILA, LIME JUICE, THREE CENTS PINK GRAPEFRUIT SODA"
  },
  {
    name: "DAIQUIRI 007",
    price: "14.50 €",
    hrDescription: "BACARDI CARTA BLANCA RUM, LIME, SUGAR",
    enDescription: "BACARDI CARTA BLANCA RUM, LIME, SUGAR"
  },
  {
    name: "AGENT BOURBON",
    price: "16.00 €",
    hrDescription: "WOODFORD RESERVE BOURBON, LEMON JUICE, SIMPLE SYRUP, EGG WHITE",
    enDescription: "WOODFORD RESERVE BOURBON, LEMON JUICE, SIMPLE SYRUP, EGG WHITE"
  },
  // Shooters
  {
    name: "B-52",
    price: "8.00 €",
    hrDescription: "BAILEY'S, KAHLUA, STROH",
    enDescription: "BAILEY'S, KAHLUA, STROH"
  },
  {
    name: "KAMIKAZE",
    price: "8.00 €",
    hrDescription: "FINLANDIA VODKA, COINTREAU, LIME JUICE",
    enDescription: "FINLANDIA VODKA, COINTREAU, LIME JUICE"
  },
  {
    name: "LEMON DROP",
    price: "8.00 €",
    hrDescription: "FINLANDIA VODKA, LEMON JUICE, SUGAR SYRUP",
    enDescription: "FINLANDIA VODKA, LEMON JUICE, SUGAR SYRUP"
  },
  {
    name: "SLIPPERY NIPPLE",
    price: "8.00 €",
    hrDescription: "SAMBUCA, BAILEY'S, GRENADINE",
    enDescription: "SAMBUCA, BAILEY'S, GRENADINE"
  },
  // Virgin
  {
    name: "VIRGIN FLOREALE TONIC",
    price: "10.00 €",
    hrDescription: "MARTINI FLOREALE, SCHWEPPES TONIC WATER",
    enDescription: "MARTINI FLOREALE, SCHWEPPES TONIC WATER"
  },
  {
    name: "VIRGIN VIBRANTE TONIC",
    price: "10.00 €",
    hrDescription: "MARTINI VIBRANTE, SCHWEPPES TONIC WATER",
    enDescription: "MARTINI VIBRANTE, SCHWEPPES TONIC WATER"
  },
  {
    name: "VIRGIN MOJITO",
    price: "10.00 €",
    hrDescription: "SPRITE, LIME, PASSION PUREE, MINT",
    enDescription: "SPRITE, LIME, PASSION PUREE, MINT"
  },
  {
    name: "CINDERELLA",
    price: "10.00 €",
    hrDescription: "ORANGE JUICE, PINEAPPLE JUICE, LEMON JUICE, GRENADINE, THREE CENTS GINGER BEER",
    enDescription: "ORANGE JUICE, PINEAPPLE JUICE, LEMON JUICE, GRENADINE, THREE CENTS GINGER BEER"
  }
];
