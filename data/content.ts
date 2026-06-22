export type ImageAsset = {
  src: string;
  alt: string;
  label: string;
};

export type MenuItemData = {
  name: string;
  nameHr?: string;
  nameEn?: string;
  price: string;
  hrDescription: string;
  enDescription: string;
  imageSrc?: string;
};

export type PastaMenuCategory = {
  titleHr: string;
  titleEn: string;
  items: MenuItemData[];
};

export const imageAssets = {
  heroImage: {
    src: "/images/hero.jpg",
    alt: "Stradoon hero image",
    label: "Hero image"
  },
  firstRowImages: [
    {
      src: "/images/frfi.JPG",
      alt: "First row image 1",
      label: "First row image 1"
    },
    {
      src: "/images/frsi.JPG",
      alt: "First row image 2",
      label: "First row image 2"
    },
    {
      src: "/images/frti.jpg",
      alt: "First row image 3",
      label: "First row image 3"
    },
    {
      src: "/images/fr4i.jpg",
      alt: "First row image 4",
      label: "First row image 4"
    },
    {
      src: "/images/fr5i.jpg",
      alt: "First row image 5",
      label: "First row image 5"
    }
  ] as ImageAsset[],
  pastaRowImages: [
    {
      src: "/images/pr1i.JPG",
      alt: "Handmade pasta detail 1",
      label: "Pasta image 1"
    },
    {
      src: "/images/pr2i.JPG",
      alt: "Handmade pasta detail 2",
      label: "Pasta image 2"
    },
    {
      src: "/images/pr3i.jpg",
      alt: "Handmade pasta detail 3",
      label: "Pasta image 3"
    },
    {
      src: "/images/pr4i.jpg",
      alt: "Handmade pasta detail 4",
      label: "Pasta image 4"
    },
    {
      src: "/images/pr5i.jpg",
      alt: "Handmade pasta detail 5",
      label: "Pasta image 5"
    }
  ] as ImageAsset[],
  pastaPageRowImages: [
    {
      src: "/images/ps1i.jpg",
      alt: "Pasta menu image 1",
      label: "Pasta menu image 1"
    },
    {
      src: "/images/ps2i.jpg",
      alt: "Pasta menu image 2",
      label: "Pasta menu image 2"
    },
    {
      src: "/images/ps3i.jpg",
      alt: "Pasta menu image 3",
      label: "Pasta menu image 3"
    }
  ] as ImageAsset[],
  pastaVideo: "/images/pasta-hero.mp4",
  artOfStradoonImage: {
    src: "/images/The art of.jpg",
    alt: "The Art of Stradoon",
    label: "The Art of Stradoon"
  },
  secondRowImages: [
    {
      src: "/images/sr1i.jpg",
      alt: "Breakfast row image 1",
      label: "Breakfast row image 1"
    },
    {
      src: "/images/sr2i.jpg",
      alt: "Breakfast row image 2",
      label: "Breakfast row image 2"
    },
    {
      src: "/images/sr3i.jpg",
      alt: "Breakfast row image 3",
      label: "Breakfast row image 3"
    },
    {
      src: "/images/sr4i.jpg",
      alt: "Breakfast row image 4",
      label: "Breakfast row image 4"
    },
    {
      src: "/images/sr5i.jpg",
      alt: "Breakfast row image 5",
      label: "Breakfast row image 5"
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
  introHeadingHr: "Martini & Pasta bar u Dubrovniku",
  introHeadingEn: "Martini & Pasta bar in Dubrovnik",
  introTextHr:
    "Mjesto gdje se povijest susreće s modernim užitkom. Od prvih jutarnjih zraka sunca na Stradunu do elegantnih večeri uz Martini i ručno rađenu tjesteninu, dobrodošli u naš svijet.",
  introTextEn:
    "A place where history meets modern pleasure. From the first morning rays of sun on Stradun to elegant evenings with Martinis and hand-crafted pasta, welcome to our world.",
  artOfStradoonHeading: "The Art of",
  artOfStradoonHeadingAccent: "Stradoon",
  artOfStradoonTextHr: [
    "Stradoon nije samo adresa, već tradicija koja se neprestano razvija. Kao prvi Martini bar u Hrvatskoj i omiljeno okupljalište s pogledom na crkvu sv. Vlaha, godinama gradimo priču temeljenu na iznimnoj lokaciji i beskompromisnoj kvaliteti.",
    "Danas, Stradoon stoji na pragu nove ere. Spajajući modernu gastronomiju i vrhunske namirnice, specijalizirali smo se za ranojutarnje rituale kroz naš Breakfast Couture koncept. Kako dan prelazi u noć, naša kulinarska priča nastavlja se ručno rađenom, Italijom inspiriranom tjesteninom i signature Martini koktelima koji su postali simbol dubrovačkih večeri."
  ],
  artOfStradoonTextEn: [
    "Stradoon is not just an address, but a tradition that constantly evolves. As the first Martini bar in Croatia and a beloved gathering spot with a view of St. Blaise's Church, we have been building a story based on an exceptional location and uncompromising quality for years.",
    "Today, Stradoon stands at the threshold of a new era. Combining modern gastronomy and premium ingredients, we have specialized in early morning rituals through our Breakfast Couture concept. As day turns to night, our culinary story continues with handmade, Italy-inspired pasta and signature Martini cocktails that have become a symbol of Dubrovnik evenings."
  ],
  pastaSectionHeadingHr: "Inspirirana Italijom, ručno rađena u Dubrovniku",
  pastaSectionHeadingEn: "Inspired by Italy, Handmade in Dubrovnik",
  pastaSectionTitleHr: "Ručno rađena tjestenina",
  pastaSectionTitleEn: "Handmade pasta",
  pastaSectionTextHr:
    "Inspirirana Italijom, stvorena ručno. Svakoga dana pretvaramo vrhunske talijanske sastojke u svježu, tjesteninu napravljenu u našoj kuhinji. Podignite doživljaj večere na novu razinu i isprobajte prepoznatljivi specijalitet napravljen i poslužen izravno iz bogatog koluta sira, istinski kulinarski ritual koji nosi samu srž talijanske tradicije.",
  pastaSectionTextEn:
    "Inspired by Italy, crafted by hand. Every day, we transform premium Italian ingredients into fresh, silky pasta made from scratch. Elevate your dining experience and try our signature selection tossed and served directly from a rich wheel of cheese, a true culinary ritual that captures the essence of tradition.",
  pastaMenuIntroHr:
    "Okusi Italije u srcu Dubrovnika. Ručno rađena tjestenina i specijalna jela servirana iz koluta sira. Istraži meni i prepusti se gastronomskom putovanju.",
  pastaMenuIntroEn:
    "The flavors of Italy in the heart of Dubrovnik. Handmade pasta and specialty dishes served from a wheel of cheese. Explore the menu and indulge in a gastronomic journey.",
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

export const pastaMenuCategories: PastaMenuCategory[] = [
  {
    titleHr: "Predjela",
    titleEn: "Starters",
    items: [
      {
        name: "Prosciutto crudo & mozzarella di bufala",
        price: "21 €",
        hrDescription:
          "Pršut crudo, mozzarella di bufala, domaći pesto Genovese, pinjoli, sušene rajčice, rikola i Parmigiano Reggiano.",
        enDescription:
          "Prosciutto crudo, mozzarella di bufala, homemade Genovese pesto, pine nuts, dehydrated tomatoes, arugula and Parmigiano Reggiano."
      },
      {
        name: "Caprese s dimljenom provolom",
        nameHr: "Caprese s dimljenom provolom",
        nameEn: "Caprese with smoked provola cheese",
        price: "18 €",
        hrDescription:
          "Svježa dimljena provola, rajčica, rikola, domaći pesto Genovese, pinjoli i maslinovo ulje.",
        enDescription:
          "Fresh smoked provola cheese, tomatoes, arugula, homemade Genovese pesto, pine nuts and olive oil."
      },
      {
        name: "Selekcija sireva",
        nameHr: "Selekcija sireva",
        nameEn: "Cheese selection",
        price: "28 €",
        hrDescription:
          "Selekcija talijanskih i lokalnih sireva, poslužena s orašastim plodovima, suhim voćem i domaćim dodacima.",
        enDescription:
          "A selection of Italian and local cheeses served with nuts, dried fruits and house accompaniments."
      }
    ]
  },
  {
    titleHr: "Domaća tjestenina",
    titleEn: "Homemade Pasta",
    items: [
      {
        name: "Tagliatelle cacio e pepe",
        price: "22 €",
        hrDescription: "Pecorino Romano, Parmigiano Reggiano i svježe mljeveni crni papar.",
        enDescription: "Pecorino Romano, Parmigiano Reggiano and freshly cracked black pepper."
      },
      {
        name: "Pappardelle al pesto Genovese",
        price: "23 €",
        hrDescription: "Domaći pesto od bosiljka, Parmigiano Reggiano, pinjoli i maslinovo ulje.",
        enDescription: "Homemade basil pesto, Parmigiano Reggiano, pine nuts and olive oil."
      },
      {
        name: "Spaghetti alla carbonara",
        price: "24 €",
        hrDescription: "Guanciale, Pecorino Romano, Parmigiano Reggiano, jaja i crni papar.",
        enDescription: "Guanciale, Pecorino Romano, Parmigiano Reggiano, eggs and black pepper."
      },
      {
        name: "Ravioli ricotta & špinat alla Bolognese",
        price: "26 €",
        hrDescription:
          "Domaći ravioli punjeni ricottom i špinatom, tradicionalni bolognese ragù, Parmigiano Reggiano i svježi bosiljak.",
        enDescription:
          "Homemade ravioli filled with ricotta and spinach, traditional Bolognese ragù, Parmigiano Reggiano and fresh basil."
      },
      {
        name: "Ravioli quattro formaggi s umakom od oraha",
        price: "25 €",
        hrDescription:
          "Ravioli s četiri vrste sira u kremastom umaku od oraha, završeni Parmigiano Reggianom i svježim origanom.",
        enDescription:
          "Four cheese ravioli in a creamy walnut sauce, finished with Parmigiano Reggiano and fresh oregano."
      }
    ]
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
    hr: '"Bondov Bar"',
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