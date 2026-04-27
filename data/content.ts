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
  heroImage: {
    src: "/images/hero.jpg",
    alt: "Stradoon hero image",
    label: "Hero image"
  },
  firstRowImages: [
    {
      src: "/images/firstRowFirstImage.jpg",
      alt: "First row image 1",
      label: "First row image 1"
    },
    {
      src: "/images/firstRowSecondImage.jpg",
      alt: "First row image 2",
      label: "First row image 2"
    },
    {
      src: "/images/firstRowThirdImage.jpg",
      alt: "First row image 3",
      label: "First row image 3"
    }
  ] as ImageAsset[],
  artOfStradoonImage: {
    src: "/images/The art of.jpg",
    alt: "The Art of Stradoon",
    label: "The Art of Stradoon"
  },
  secondRowImages: [
    {
      src: "/images/secondRowFirstImage.jpg",
      alt: "Second row image 1",
      label: "Second row image 1"
    },
    {
      src: "/images/secondRowSecondImage.jpg",
      alt: "Second row image 2",
      label: "Second row image 2"
    },
    {
      src: "/images/secondRowThirdImage.jpg",
      alt: "Second row image 3",
      label: "Second row image 3"
    }
  ] as ImageAsset[],
  mapPlaceholder: {
    src: "/images/mapsnew.png",
    alt: "Map location view",
    label: "Map image"
  }
};

export const homepageContent = {
  heroSubtitle: "Welcome",
  heroTitle: "Martini & Restaurant",
  introTextHr:
    "Mjesto gdje se povijest susreće s modernim užitkom. Od prvih jutarnjih zraka sunca na Stradunu do elegantnih večeri uz Martini, dobrodošli u naš svijet.",
  introTextEn:
    "A place where history meets modern pleasure. From the first morning rays of sun on Stradoon to elegant evenings with Martini, welcome to our world.",
  artOfStradoonHeading: "The Art of",
  artOfStradoonHeadingAccent: "Stradoon",
  artOfStradoonTextHr: [
    "Stradoon nije samo adresa, već tradicija koja se neprestano razvija. Kao prvi Martini bar u Hrvatskoj i omiljeno okupljalište s pogledom na crkvu sv. Vlaha, godinama gradimo priču temeljenu na iznimnoj lokaciji i beskompromisnoj kvaliteti.",
    "Danas, Stradoon stoji na pragu nove ere. Spajajući modernu gastronomiju i vrhunske namirnice, specijalizirali smo se za ranojutarnje rituale kroz naš Breakfast Couture koncept te signature Martini koktele koji su postali simbol dubrovačkih večeri. Naš restoran je mjesto gdje se susreću elegancije i opuštenosti."
  ],
  artOfStradoonTextEn: [
    "Stradoon is not just an address, but a tradition that constantly evolves. As the first Martini bar in Croatia and a beloved gathering spot with a view of St. Blaise's Church, we have been building a story based on an exceptional location and uncompromising quality for years.",
    "Today, Stradoon stands at the threshold of a new era. Combining modern gastronomy and premium ingredients, we have specialized in early morning rituals through our Breakfast Couture concept and signature Martini cocktails that have become a symbol of Dubrovnik evenings. Our restaurant is a place where elegance meets relaxation."
  ],
  contactHeading: "Find us:",
  email: "stradoon@juznivjetar.com",
  phone: "+385 99 3388 276"
};

export const breakfastMenuItems: MenuItemData[] = [
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
    name: "HONEY, I'M FLAKY!",
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
  {
    name: "Martini Fiero & Tonic",
    price: "12.00 €",
    hrDescription: "Martini Fiero, Schweppes Tonic Water",
    enDescription: "Martini Fiero, Schweppes Tonic Water"
  },
  {
    name: "Mango Sapphire",
    price: "12.00 €",
    hrDescription: "Bombay Sapphire Gin, Lime Juice, Homemade Mango-Turmeric and Chilly Syrup, Schweppes Tonic Water",
    enDescription: "Bombay Sapphire Gin, Lime Juice, Homemade Mango-Turmeric and Chilly Syrup, Schweppes Tonic Water"
  },
  {
    name: "Mint Twist",
    price: "12.00 €",
    hrDescription: "Finlandia Vodka, Homemade Mint Syrup, Schweppes Tonic Water",
    enDescription: "Finlandia Vodka, Homemade Mint Syrup, Schweppes Tonic Water"
  },
  {
    name: "Stradoon Mimosa",
    price: "12.00 €",
    hrDescription: "Orange Juice, Martini Prosecco",
    enDescription: "Orange Juice, Martini Prosecco"
  },
  {
    name: "Hugo",
    price: "14.00 €",
    hrDescription: "St. Germain Elderflower Liqueur, Lime, Mint, Martini Prosecco",
    enDescription: "St. Germain Elderflower Liqueur, Lime, Mint, Martini Prosecco"
  },
  {
    name: "Aperol Spritz",
    price: "14.00 €",
    hrDescription: "Martini Prosecco, Aperol, Splash Soda",
    enDescription: "Martini Prosecco, Aperol, Splash Soda"
  },
  {
    name: "Floreale Tonic",
    price: "10.00 €",
    hrDescription: "Martini Floreale, Schweppes Tonic Water",
    enDescription: "Martini Floreale, Schweppes Tonic Water"
  },
  {
    name: "Vibrante Tonic",
    price: "10.00 €",
    hrDescription: "Martini Vibrante, Schweppes Tonic Water",
    enDescription: "Martini Vibrante, Schweppes Tonic Water"
  },
  {
    name: "Espresso Martini",
    price: "14.50 €",
    hrDescription: "Finlandia Vodka, Kahlua, Shot Espresso, Honey",
    enDescription: "Finlandia Vodka, Kahlua, Shot Espresso, Honey"
  },
  {
    name: "Martini Royale",
    price: "14.00 €",
    hrDescription: "Bombay Sapphire Gin/Finlandia Vodka, Martini Extra Dry, Olives",
    enDescription: "Bombay Sapphire Gin/Finlandia Vodka, Martini Extra Dry, Olives"
  },
  {
    name: "The Bondhattan",
    price: "16.00 €",
    hrDescription: "Woodford Reserve Bourbon, Martini Rosso, Dash Angostura",
    enDescription: "Woodford Reserve Bourbon, Martini Rosso, Dash Angostura"
  },
  {
    name: "Angostura Negroni",
    price: "15.00 €",
    hrDescription: "Bombay Sapphire Gin, Martini Riserva Speciale Bitter, Martini Rosso, Dash Angostura",
    enDescription: "Bombay Sapphire Gin, Martini Riserva Speciale Bitter, Martini Rosso, Dash Angostura"
  },
  {
    name: "Ocho Old Fashioned",
    price: "15.00 €",
    hrDescription: "Bacardi Reserva Ocho Gold Rum, Cardamom, Dash Angostura",
    enDescription: "Bacardi Reserva Ocho Gold Rum, Cardamom, Dash Angostura"
  },
  {
    name: "The Vesper Mule",
    price: "13.50 €",
    hrDescription: "Bacardi Carta Oro Rum, Lime Juice, Three Cents Ginger Beer",
    enDescription: "Bacardi Carta Oro Rum, Lime Juice, Three Cents Ginger Beer"
  },
  {
    name: "The Greenfinger",
    price: "14.00 €",
    hrDescription: "Bombay Sapphire Gin, Lime, St. Germain Elderflower Liqueur, Basil, Lime Juice",
    enDescription: "Bombay Sapphire Gin, Lime, St. Germain Elderflower Liqueur, Basil, Lime Juice"
  },
  {
    name: "Cucumber Confidential",
    price: "13.50 €",
    hrDescription: "Finlandia Vodka, Lemon Juice, Sugar, Mint, Cucumber, Soda",
    enDescription: "Finlandia Vodka, Lemon Juice, Sugar, Mint, Cucumber, Soda"
  },
  {
    name: "The Bondito Mule",
    price: "14.00 €",
    hrDescription: "El Jimador Blanco Tequila, Lime Juice, Agave Syrup, Three Cents Ginger Beer",
    enDescription: "El Jimador Blanco Tequila, Lime Juice, Agave Syrup, Three Cents Ginger Beer"
  },
  {
    name: "The Bondstar Martini",
    price: "15.00 €",
    hrDescription: "Finlandia Vodka, Passion Fruit Puree, Passoa, Lime Juice, Vanilla Syrup, Martini Prosecco",
    enDescription: "Finlandia Vodka, Passion Fruit Puree, Passoa, Lime Juice, Vanilla Syrup, Martini Prosecco"
  },
  {
    name: "The Margarita Protocol",
    price: "14.00 €",
    hrDescription: "El Jimador Blanco Tequila, Cointreau, Lime Juice, Agave Syrup",
    enDescription: "El Jimador Blanco Tequila, Cointreau, Lime Juice, Agave Syrup"
  },
  {
    name: "The Mojito Reactor",
    price: "14.00 €",
    hrDescription: "Bacardi Carta Blanca Rum, Lime, Brown Sugar, Mint, Splash Soda",
    enDescription: "Bacardi Carta Blanca Rum, Lime, Brown Sugar, Mint, Splash Soda"
  },
  {
    name: "Paloma on the Run",
    price: "14.00 €",
    hrDescription: "Patron Silver Tequila, Lime Juice, Three Cents Pink Grapefruit Soda",
    enDescription: "Patron Silver Tequila, Lime Juice, Three Cents Pink Grapefruit Soda"
  },
  {
    name: " Daiquiri 007",
    price: "14.50 €",
    hrDescription: "Bacardi Carta Blanca Rum, Lime, Sugar",
    enDescription: "Bacardi Carta Blanca Rum, Lime, Sugar"
  },
  {
    name: "Agent Bourbon",
    price: "16.00 €",
    hrDescription: "Woodford Reserve Bourbon, Lemon Juice, Simple Syrup, Egg White",
    enDescription: "Woodford Reserve Bourbon, Lemon Juice, Simple Syrup, Egg White"
  },
  {
    name: "B-52",
    price: "8.00 €",
    hrDescription: "Bailey's, Kahlua, Stroh",
    enDescription: "Bailey's, Kahlua, Stroh"
  },
  {
    name: "Kamikaze",
    price: "8.00 €",
    hrDescription: "Finlandia Vodka, Cointreau, Lime Juice",
    enDescription: "Finlandia Vodka, Cointreau, Lime Juice"
  },
  {
    name: "Lemon Drop",
    price: "8.00 €",
    hrDescription: "Finlandia Vodka, Lemon Juice, Sugar Syrup",
    enDescription: "Finlandia Vodka, Lemon Juice, Sugar Syrup"
  },
  {
    name: "Slippery Nipple",
    price: "8.00 €",
    hrDescription: "Sambuca, Bailey's, Grenadine",
    enDescription: "Sambuca, Bailey's, Grenadine"
  },
  {
    name: "Virgin Floreale Tonic",
    price: "10.00 €",
    hrDescription: "Martini Floreale, Schweppes Tonic Water",
    enDescription: "Martini Floreale, Schweppes Tonic Water"
  },
  {
    name: "Virgin Vibrante Tonic",
    price: "10.00 €",
    hrDescription: "Martini Vibrante, Schweppes Tonic Water",
    enDescription: "Martini Vibrante, Schweppes Tonic Water"
  },
  {
    name: "Virgin Mojito",
    price: "10.00 €",
    hrDescription: "Sprite, Lime, Passion Puree, Mint",
    enDescription: "Sprite, Lime, Passion Puree, Mint"
  },
  {
    name: "Cinderella",
    price: "10.00 €",
    hrDescription: "Orange Juice, Pineapple Juice, Lemon Juice, Grenadine, Three Cents Ginger Beer",
    enDescription: "Orange Juice, Pineapple Juice, Lemon Juice, Grenadine, Three Cents Ginger Beer"
  }
];