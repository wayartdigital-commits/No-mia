(function () {
  "use strict";

  var LANG_KEY = "noemia-lang";
  var HTML_LANG = { pt: "pt-PT", en: "en", es: "es", fr: "fr" };
  var FLAGS = { pt: "🇵🇹", en: "🇬🇧", es: "🇪🇸", fr: "🇫🇷" };

  var translations = {
    pt: {
      "meta.tagline": "Noémia · Vinhos, Tapas e Fados",
      "meta.title.index": "Noémia · Restaurante de Fado, Vinhos e Tapas em Lisboa",
      "meta.description.index": "Restaurante de fado ao vivo em Lisboa. Tapas portuguesas, vinhos de produtores nacionais e noites de fado no Noémia. Reserve a sua mesa.",
      "meta.title.carta": "Carta de Tapas Portuguesas · Noémia Lisboa",
      "meta.description.carta": "Carta de tapas portuguesas do Noémia em Lisboa: couvert, tapas, tibornas e cachorros para partilhar à mesa.",
      "meta.title.vinhos": "Vinhos Portugueses em Lisboa · Carta de Vinhos Noémia",
      "meta.description.vinhos": "Carta de vinhos portugueses do Noémia em Lisboa: tintos, brancos, rosés e verdes de produtores nacionais, do Douro ao Alentejo.",

      "nav.conceito": "Conceito",
      "nav.fado": "Fado",
      "nav.vinhos": "Vinhos",
      "nav.carta": "Carta",
      "nav.reservas": "Reservas",
      "nav.reservar": "Reservar",
      "nav.toggle.aria": "Abrir menu",
      "back.link": "Voltar ao Noémia",
      "cta.reservarmesa": "Reservar Mesa",
      "footer.text": "Noémia · Vinhos, Tapas e Fados. Todos os direitos reservados.",

      "hero.h1": "Noémia — Restaurante de Fado, Vinhos e Tapas em Lisboa",
      "hero.img.alt": "Sala do Noémia com andorinhas pintadas no teto e lustre de cristal",
      "hero.img2.alt": "Prato de tapas a ser servido no Noémia",
      "hero.img3.alt": "Sala interior do Noémia com garrafeira de vinhos",
      "hero.img5.alt": "Prato do Noémia com legumes salteados",
      "reservas.map.title": "Localização do Noémia",
      "hero.cta.vermenu": "Ver o Menu",

      "conceito.eyebrow": "O Conceito",
      "conceito.heading": "Simples, bom,<br>e sem pressa de acabar.",
      "conceito.lead": "O Noémia oferece comida portuguesa feita com cuidado, pensada para partilhar em forma de tapas, sem cerimónia, sem demoras. Pratos pequenos para acompanhar com um copo de vinho da nossa garrafeira totalmente nacional, numa sala que convida a ficar até a noite virar fado.",

      "pillar.tapas.title": "Tapas",
      "pillar.tapas.desc": "Petiscos portugueses servidos para partilhar. Simples, saborosos, sem demoras.",
      "pillar.tapas.link": "Ver a carta",
      "pillar.vinho.title": "Vinho",
      "pillar.vinho.desc": "Garrafeira própria, com produtores portugueses do Douro ao Alentejo.",
      "pillar.vinho.link": "Ver os vinhos",
      "pillar.fado.title": "Fado",
      "pillar.fado.desc": "Noites em que a música se junta à mesa, sem palco, sem distância.",
      "pillar.fado.link": "Ouvir mais",

      "img.alt.salavinhos": "Sala interior do Noémia com garrafeira de vinhos e mesas de jantar",
      "img.alt.decorvintage": "Natureza-morta com garrafa de rosé e conservas portuguesas",

      "fado.img.alt": "Fadista com guitarra portuguesa numa noite de fado no Noémia",
      "fado.eyebrow": "Fado",
      "fado.heading": "Quando a noite pede fado",
      "fado.lead": "Entre taças por acabar e conversas sem pressa, o Noémia guarda noites em que o fado acontece perto.",
      "fado.info.line1": "Espetáculos ao vivo a cada 30 minutos",
      "fado.info.line2": "De Sexta a Segunda",
      "fado.info.line3": "Das 20h às 23h",

      "splitpanel.vinhos.img.alt": "Parede de garrafas de vinho expostas no Noémia",
      "splitpanel.vinhos.title": "Vinhos",
      "splitpanel.vinhos.desc": "Dezenas de referências portuguesas, tintos, brancos, rosés e verdes, escolhidas a preceito para acompanhar cada petisco. Do Douro ao Alentejo, da Bairrada a Monção e Melgaço.",
      "wine.stat.referencias": "Referências",
      "wine.stat.regioes": "Regiões",
      "wine.stat.nacionais": "Nacionais",
      "splitpanel.vinhos.cta": "Ver Carta de Vinhos",
      "splitpanel.tapas.img.alt": "Seleção de tapas e conservas portuguesas com vinho",
      "splitpanel.tapas.title": "Tapas",
      "splitpanel.tapas.desc": "Do couvert aos cachorros, passando pelas tibornas, pratos pequenos, pensados para chegar depressa e serem partilhados à mesa, entre um copo de vinho e outro.",
      "splitpanel.tapas.cta": "Ver Menu Completo",

      "reservas.eyebrow": "Reservas",
      "reservas.heading": "Reserve a sua mesa",
      "reservas.cta": "Reservar Mesa",
      "reservas.label.morada": "Morada",
      "reservas.label.telefone": "Telefone",
      "reservas.label.email": "Email",
      "reservas.label.horario": "Horário",
      "faq.eyebrow": "Perguntas Frequentes",
      "faq.heading": "Tudo o que precisa de saber",
      "faq.q1": "Onde fica o Noémia?",
      "faq.a1": "O Noémia fica na R. do Duque, 21, 1200-158 Lisboa.",
      "faq.q2": "Que horas abre o Noémia?",
      "faq.a2": "O Noémia abre à Quinta-feira das 18h às 23h, e de Sexta a Segunda-feira das 19h às 23h. Encerrado à Terça e Quarta-feira.",
      "faq.q3": "Há fado ao vivo todas as noites?",
      "faq.a3": "Há espetáculos de fado ao vivo a cada 30 minutos, de Sexta a Segunda-feira, das 20h às 23h.",
      "faq.q4": "Preciso de reservar mesa?",
      "faq.a4": "Recomendamos reserva antecipada, especialmente nas noites de fado, através do nosso sistema de reservas online ou por telefone.",
      "faq.q5": "Qual é a faixa de preço do Noémia?",
      "faq.a5": "O Noémia tem uma faixa de preço moderada (€€), com tapas para partilhar e vinhos portugueses por copo ou garrafa.",
      "cookie.text": "Usamos cookies e armazenamento local para melhorar a sua experiência. Ao continuar, aceita a nossa",
      "cookie.link": "Política de Privacidade e Cookies",
      "cookie.accept": "Aceitar",
      "reservas.label.instagram": "Instagram",
      "hours.quinta": "Quinta-feira",
      "hours.sexta_a_segunda": "Sexta a Segunda-feira",
      "hours.terca_e_quarta": "Terça e Quarta-feira",
      "hours.closed": "Encerrado",

      "carta.eyebrow": "A Carta",
      "carta.heading": "Tapas para partilhar",

      "cat.couvert": "Couvert",
      "cat.tapas": "Tapas",
      "cat.tibornas": "Tibornas",
      "cat.cachorros": "Cachorros",

      "item.pao": "Pão",
      "item.azeitonas": "Azeitonas",
      "item.manteigacabra": "Manteiga de cabra",
      "item.presunto": "Presunto e queijo amanteigado",
      "item.vieiras": "Vieiras seladas, puré de aipo e presunto",
      "item.gambas": "Gambas fritas, molho piri-piri",
      "item.picadinho": "Picadinho do lombo com pickles",
      "item.camembert": "Camembert derretido, especiarias e compota de figo",
      "item.mistoqueijos": "Misto de queijos portugueses, frutos secos e compota",
      "item.crumble": "Crumble de morcela com maçã assada",
      "item.charuto": "Charuto de alheira com esparregado",
      "item.migas": "Migas de bacon com espargos e ovo estrelado",
      "item.atum": "Atum braseado em crosta de sésamo, molho de abacate",
      "item.mistolegumes": "Misto de legumes grelhados, molho agridoce",
      "item.beterraba": "Beterraba com queijo feta e funcho",
      "item.bacalhaufumado": "Bacalhau fumado laminado, alcaparras, salsa e azeite",
      "item.carpaccio": "Carpaccio de pêra, foie gras caramelizado e mel",
      "item.peixebranco": "Peixe branco curado, toranja, limão e funcho",
      "item.empada": "Empada XL (frango ou pato)",
      "item.queijoserra": "Queijo da serra, cogumelos e presunto",
      "item.polvo": "Polvo, puré de cenoura, vinagrete de coentros e mostarda",
      "item.camarao": "Camarão salteado, molho de manga",
      "item.bacalhaulascado": "Bacalhau lascado, húmus e ovo cozido",
      "item.tomatemozz": "Tomate e mozzarella com manjericão",
      "item.ovosmexidos": "Ovos mexidos com espargos e queijo da ilha",
      "item.sardinha": "Sardinha confitada, compota de pimentos",
      "item.foiegras": "Foie gras e puré de maçã, pão brioche",
      "item.pernil": "Pernil, pickles e maionese de hortelã",
      "item.lavagante": "Lavagante, nata azeda e aipo",

      "vinhos.eyebrow": "Carta de Vinhos",
      "vinhos.heading": "Uma garrafeira que conta histórias",
      "cat.tintos": "Tintos",
      "cat.brancos": "Brancos",
      "cat.rose": "Rosé",
      "cat.verdes": "Verdes",
      "wine.note.1": "Alicante Bouschet — Profundo e estruturado.",
      "wine.note.2": "Aragonez, Syrah, Trincadeira, Alicante Bouschet — Elegância e equilíbrio.",
      "wine.note.3": "Aragonez, Trincadeira, Alicante Bouschet — Complexo e persistente.",
      "wine.note.4": "Aragonez, Alicante Bouschet, Syrah — Talha com personalidade.",
      "wine.note.5": "Syrah, Aragonez, Alicante Bouschet — Grande profundidade.",
      "wine.note.6": "Aragonez, Trincadeira, Cabernet Sauvignon, Alicante Bouschet — Clássico alentejano.",
      "wine.note.7": "Syrah — Especiado e sedutor.",
      "wine.note.8": "Castelão — Expressão da casta.",
      "wine.note.9": "Touriga Nacional, Jaen, Alfrocheiro — Elegância serrana.",
      "wine.note.10": "Touriga Nacional, Touriga Franca, Tinta Roriz — Equilibrado e intenso.",
      "wine.note.11": "Touriga Nacional, Touriga Franca — Mineral e envolvente.",
      "wine.note.12": "Mistura de vinhas velhas — Juventude duriense.",
      "wine.note.13": "Touriga Nacional, Touriga Franca — Fruta vibrante.",
      "wine.note.14": "Touriga Franca, Tinta Roriz — Fresco e gastronómico.",
      "wine.note.15": "Touriga Franca, Tinta Roriz — Douro contemporâneo.",
      "wine.note.16": "Touriga Nacional, Touriga Franca, Tinta Roriz — Direto e elegante.",
      "wine.note.17": "Touriga Nacional, Touriga Franca, Tinta Roriz — Estrutura e finesse.",
      "wine.note.18": "Touriga Nacional, Touriga Franca, Tinta Roriz — Profundo e complexo.",
      "wine.note.19": "Bastardo — Raro e delicado.",
      "wine.note.20": "Viognier — Aromático e untuoso.",
      "wine.note.21": "Antão Vaz, Arinto — Fresco e equilibrado.",
      "wine.note.22": "Arinto, Roupeiro, Antão Vaz — Elegância e frescura.",
      "wine.note.23": "Antão Vaz, Arinto, Verdelho — Talha e mineralidade.",
      "wine.note.24": "Sauvignon Blanc — Cítrico e vibrante.",
      "wine.note.25": "Chardonnay — Volume e frescura.",
      "wine.note.26": "Viosinho, Gouveio — Mineral e preciso.",
      "wine.note.27": "Rabigato, Viosinho — Expressivo e fresco.",
      "wine.note.28": "Gouveio, Arinto — Elegante e floral.",
      "wine.note.29": "Códega, Rabigato — Muito gastronómico.",
      "wine.note.30": "Rabigato, Códega — Seco e equilibrado.",
      "wine.note.31": "Rabigato, Viosinho, Códega do Larinho — Fruta e frescura.",
      "wine.note.32": "Encruzado — Fino e mineral.",
      "wine.note.33": "Touriga Nacional — Fresco e delicado.",
      "wine.note.34": "Syrah, Touriga Nacional — Verão em copo.",
      "wine.note.35": "Avesso — Textura e frescura.",
      "wine.note.36": "Alvarinho — Aromático e elegante."
    },

    en: {
      "meta.tagline": "Noémia · Wine, Tapas and Fado",
      "meta.title.index": "Noémia · Live Fado, Wine & Tapas Restaurant in Lisbon",
      "meta.description.index": "Live fado restaurant in Lisbon. Portuguese tapas, wines from national producers and fado nights at Noémia. Book your table.",
      "meta.title.carta": "Portuguese Tapas Menu · Noémia Lisbon",
      "meta.description.carta": "Noémia's Portuguese tapas menu in Lisbon: couvert, tapas, tibornas and hot dogs to share at the table.",
      "meta.title.vinhos": "Portuguese Wines in Lisbon · Noémia Wine List",
      "meta.description.vinhos": "Noémia's Portuguese wine list in Lisbon: reds, whites, rosés and Vinho Verde wines from national producers, from Douro to Alentejo.",

      "nav.conceito": "Concept",
      "nav.fado": "Fado",
      "nav.vinhos": "Wines",
      "nav.carta": "Menu",
      "nav.reservas": "Reservations",
      "nav.reservar": "Book Now",
      "nav.toggle.aria": "Open menu",
      "back.link": "Back to Noémia",
      "cta.reservarmesa": "Book a Table",
      "footer.text": "Noémia · Wine, Tapas and Fado. All rights reserved.",

      "hero.h1": "Noémia — Live Fado, Portuguese Wine & Tapas Restaurant in Lisbon",
      "hero.img.alt": "Noémia dining room with swallows painted on the ceiling and a crystal chandelier",
      "hero.img2.alt": "Plate of tapas being served at Noémia",
      "hero.img3.alt": "Noémia's interior dining room with wine cellar",
      "hero.img5.alt": "Noémia dish with sautéed vegetables",
      "reservas.map.title": "Noémia's location",
      "hero.cta.vermenu": "View Menu",

      "conceito.eyebrow": "The Concept",
      "conceito.heading": "Simple, good,<br>with no rush to end.",
      "conceito.lead": "Noémia offers Portuguese food made with care, designed to share as tapas, without ceremony, without delay. Small plates to go with a glass of wine from our fully Portuguese wine cellar, in a room that invites you to stay until the night turns to fado.",

      "pillar.tapas.title": "Tapas",
      "pillar.tapas.desc": "Portuguese petiscos served to share. Simple, tasty, no delays.",
      "pillar.tapas.link": "View the menu",
      "pillar.vinho.title": "Wine",
      "pillar.vinho.desc": "Our own wine cellar, with Portuguese producers from the Douro to the Alentejo.",
      "pillar.vinho.link": "View the wines",
      "pillar.fado.title": "Fado",
      "pillar.fado.desc": "Nights when the music joins the table, no stage, no distance.",
      "pillar.fado.link": "Listen more",

      "img.alt.salavinhos": "Noémia interior room with wine cellar and dining tables",
      "img.alt.decorvintage": "Still life with a bottle of rosé and Portuguese preserves",

      "fado.img.alt": "Fado singer with Portuguese guitar on a fado night at Noémia",
      "fado.eyebrow": "Fado",
      "fado.heading": "When the night calls for fado",
      "fado.lead": "Between glasses not yet finished and unhurried conversations, Noémia holds nights when fado happens close by.",
      "fado.info.line1": "Live performances every 30 minutes",
      "fado.info.line2": "Friday to Monday",
      "fado.info.line3": "8pm to 11pm",

      "splitpanel.vinhos.img.alt": "Wall of wine bottles on display at Noémia",
      "splitpanel.vinhos.title": "Wines",
      "splitpanel.vinhos.desc": "Dozens of Portuguese references, reds, whites, rosés and Vinho Verde wines, carefully chosen to go with every petisco. From the Douro to the Alentejo, from Bairrada to Monção and Melgaço.",
      "wine.stat.referencias": "References",
      "wine.stat.regioes": "Regions",
      "wine.stat.nacionais": "Portuguese",
      "splitpanel.vinhos.cta": "View Wine List",
      "splitpanel.tapas.img.alt": "Selection of Portuguese tapas and preserves with wine",
      "splitpanel.tapas.title": "Tapas",
      "splitpanel.tapas.desc": "From the couvert to the hot dogs, by way of the tibornas, small plates designed to arrive quickly and be shared at the table, between one glass of wine and the next.",
      "splitpanel.tapas.cta": "View Full Menu",

      "reservas.eyebrow": "Reservations",
      "reservas.heading": "Book your table",
      "reservas.cta": "Book a Table",
      "reservas.label.morada": "Address",
      "reservas.label.telefone": "Phone",
      "reservas.label.email": "Email",
      "reservas.label.horario": "Hours",
      "faq.eyebrow": "Frequently Asked Questions",
      "faq.heading": "Everything you need to know",
      "faq.q1": "Where is Noémia located?",
      "faq.a1": "Noémia is located at R. do Duque, 21, 1200-158 Lisbon.",
      "faq.q2": "What are Noémia's opening hours?",
      "faq.a2": "Noémia is open Thursday from 6pm to 11pm, and Friday to Monday from 7pm to 11pm. Closed on Tuesday and Wednesday.",
      "faq.q3": "Is there live fado every night?",
      "faq.a3": "There are live fado performances every 30 minutes, Friday to Monday, from 8pm to 11pm.",
      "faq.q4": "Do I need to book a table?",
      "faq.a4": "We recommend booking in advance, especially on fado nights, through our online booking system or by phone.",
      "faq.q5": "What is Noémia's price range?",
      "faq.a5": "Noémia has a moderate price range (€€), with tapas to share and Portuguese wines by the glass or bottle.",
      "cookie.text": "We use cookies and local storage to improve your experience. By continuing, you accept our",
      "cookie.link": "Privacy and Cookie Policy",
      "cookie.accept": "Accept",
      "reservas.label.instagram": "Instagram",
      "hours.quinta": "Thursday",
      "hours.sexta_a_segunda": "Friday to Monday",
      "hours.terca_e_quarta": "Tuesday and Wednesday",
      "hours.closed": "Closed",

      "carta.eyebrow": "The Menu",
      "carta.heading": "Tapas to share",

      "cat.couvert": "Couvert",
      "cat.tapas": "Tapas",
      "cat.tibornas": "Tibornas",
      "cat.cachorros": "Hot Dogs",

      "item.pao": "Bread",
      "item.azeitonas": "Olives",
      "item.manteigacabra": "Goat butter",
      "item.presunto": "Cured ham and creamy cheese",
      "item.vieiras": "Seared scallops with celery root purée and cured ham",
      "item.gambas": "Fried prawns with piri-piri sauce",
      "item.picadinho": "Diced tenderloin with pickles",
      "item.camembert": "Melted Camembert cheese with spices and fig jam",
      "item.mistoqueijos": "Selection of Portuguese cheeses with dried fruits and jam",
      "item.crumble": "Blood sausage crumble with baked apple",
      "item.charuto": "Alheira sausage roll with creamed greens",
      "item.migas": "Bacon migas (bread crumbles) with asparagus and fried egg",
      "item.atum": "Seared tuna in a sesame seed crust with avocado sauce",
      "item.mistolegumes": "Mixed grilled vegetables with sweet-and-sour sauce",
      "item.beterraba": "Beetroot with feta cheese and fennel",
      "item.bacalhaufumado": "Sliced smoked cod with capers, parsley and olive oil",
      "item.carpaccio": "Pear carpaccio with caramelised foie gras and honey",
      "item.peixebranco": "Cured white fish with grapefruit, lemon and fennel",
      "item.empada": "XL pie (chicken or duck)",
      "item.queijoserra": "Serra cheese, mushrooms and cured ham",
      "item.polvo": "Octopus with carrot purée and coriander-mustard vinaigrette",
      "item.camarao": "Sautéed prawns with mango sauce",
      "item.bacalhaulascado": "Flaked cod with hummus and boiled egg",
      "item.tomatemozz": "Tomato and mozzarella with basil",
      "item.ovosmexidos": "Scrambled eggs with asparagus and Ilha cheese (from Azores)",
      "item.sardinha": "Confit sardine with pepper jam",
      "item.foiegras": "Foie gras and apple purée, on brioche bread",
      "item.pernil": "Pork shank with pickles and mint mayonnaise",
      "item.lavagante": "Lobster with sour cream and celery",

      "vinhos.eyebrow": "Wine List",
      "vinhos.heading": "A wine cellar that tells stories",
      "cat.tintos": "Reds",
      "cat.brancos": "Whites",
      "cat.rose": "Rosé",
      "cat.verdes": "Vinho Verde",
      "wine.note.1": "Alicante Bouschet — Deep and structured.",
      "wine.note.2": "Aragonez, Syrah, Trincadeira, Alicante Bouschet — Elegance and balance.",
      "wine.note.3": "Aragonez, Trincadeira, Alicante Bouschet — Complex and persistent.",
      "wine.note.4": "Aragonez, Alicante Bouschet, Syrah — Amphora-aged, full of character.",
      "wine.note.5": "Syrah, Aragonez, Alicante Bouschet — Great depth.",
      "wine.note.6": "Aragonez, Trincadeira, Cabernet Sauvignon, Alicante Bouschet — Classic Alentejo style.",
      "wine.note.7": "Syrah — Spicy and seductive.",
      "wine.note.8": "Castelão — A pure expression of the grape.",
      "wine.note.9": "Touriga Nacional, Jaen, Alfrocheiro — Elegance from the highlands.",
      "wine.note.10": "Touriga Nacional, Touriga Franca, Tinta Roriz — Balanced and intense.",
      "wine.note.11": "Touriga Nacional, Touriga Franca — Mineral and enveloping.",
      "wine.note.12": "Blend of old vines — Youthful Douro character.",
      "wine.note.13": "Touriga Nacional, Touriga Franca — Vibrant fruit.",
      "wine.note.14": "Touriga Franca, Tinta Roriz — Fresh and food-friendly.",
      "wine.note.15": "Touriga Franca, Tinta Roriz — Contemporary Douro.",
      "wine.note.16": "Touriga Nacional, Touriga Franca, Tinta Roriz — Direct and elegant.",
      "wine.note.17": "Touriga Nacional, Touriga Franca, Tinta Roriz — Structure and finesse.",
      "wine.note.18": "Touriga Nacional, Touriga Franca, Tinta Roriz — Deep and complex.",
      "wine.note.19": "Bastardo — Rare and delicate.",
      "wine.note.20": "Viognier — Aromatic and unctuous.",
      "wine.note.21": "Antão Vaz, Arinto — Fresh and balanced.",
      "wine.note.22": "Arinto, Roupeiro, Antão Vaz — Elegance and freshness.",
      "wine.note.23": "Antão Vaz, Arinto, Verdelho — Amphora-aged and mineral.",
      "wine.note.24": "Sauvignon Blanc — Citrusy and vibrant.",
      "wine.note.25": "Chardonnay — Volume and freshness.",
      "wine.note.26": "Viosinho, Gouveio — Mineral and precise.",
      "wine.note.27": "Rabigato, Viosinho — Expressive and fresh.",
      "wine.note.28": "Gouveio, Arinto — Elegant and floral.",
      "wine.note.29": "Códega, Rabigato — Very food-friendly.",
      "wine.note.30": "Rabigato, Códega — Dry and balanced.",
      "wine.note.31": "Rabigato, Viosinho, Códega do Larinho — Fruit and freshness.",
      "wine.note.32": "Encruzado — Fine and mineral.",
      "wine.note.33": "Touriga Nacional — Fresh and delicate.",
      "wine.note.34": "Syrah, Touriga Nacional — Summer in a glass.",
      "wine.note.35": "Avesso — Texture and freshness.",
      "wine.note.36": "Alvarinho — Aromatic and elegant."
    },

    es: {
      "meta.tagline": "Noémia · Vinos, Tapas y Fado",
      "meta.title.index": "Noémia · Restaurante de Fado, Vinos y Tapas en Lisboa",
      "meta.description.index": "Restaurante de fado en vivo en Lisboa. Tapas portuguesas, vinos de productores nacionales y noches de fado en Noémia. Reserve su mesa.",
      "meta.title.carta": "Carta de Tapas Portuguesas · Noémia Lisboa",
      "meta.description.carta": "Carta de tapas portuguesas de Noémia en Lisboa: couvert, tapas, tibornas y perritos calientes para compartir en la mesa.",
      "meta.title.vinhos": "Vinos Portugueses en Lisboa · Carta de Vinos Noémia",
      "meta.description.vinhos": "Carta de vinos portugueses de Noémia en Lisboa: tintos, blancos, rosados y Vinho Verde de productores nacionales, del Duero al Alentejo.",

      "nav.conceito": "Concepto",
      "nav.fado": "Fado",
      "nav.vinhos": "Vinos",
      "nav.carta": "Carta",
      "nav.reservas": "Reservas",
      "nav.reservar": "Reservar",
      "nav.toggle.aria": "Abrir menú",
      "back.link": "Volver a Noémia",
      "cta.reservarmesa": "Reservar Mesa",
      "footer.text": "Noémia · Vinos, Tapas y Fado. Todos los derechos reservados.",

      "hero.h1": "Noémia — Restaurante de Fado, Vinos y Tapas en Lisboa",
      "hero.img.alt": "Sala de Noémia con golondrinas pintadas en el techo y lámpara de cristal",
      "hero.img2.alt": "Plato de tapas siendo servido en Noémia",
      "hero.img3.alt": "Sala interior de Noémia con bodega de vinos",
      "hero.img5.alt": "Plato de Noémia con verduras salteadas",
      "reservas.map.title": "Ubicación de Noémia",
      "hero.cta.vermenu": "Ver el Menú",

      "conceito.eyebrow": "El Concepto",
      "conceito.heading": "Sencillo, bueno,<br>sin prisa por acabar.",
      "conceito.lead": "Noémia ofrece comida portuguesa hecha con cuidado, pensada para compartir en forma de tapas, sin ceremonias, sin esperas. Platos pequeños para acompañar con una copa de vino de nuestra bodega totalmente nacional, en una sala que invita a quedarse hasta que la noche se convierta en fado.",

      "pillar.tapas.title": "Tapas",
      "pillar.tapas.desc": "Petiscos portugueses servidos para compartir. Sencillos, sabrosos, sin esperas.",
      "pillar.tapas.link": "Ver la carta",
      "pillar.vinho.title": "Vino",
      "pillar.vinho.desc": "Bodega propia, con productores portugueses desde el Duero hasta el Alentejo.",
      "pillar.vinho.link": "Ver los vinos",
      "pillar.fado.title": "Fado",
      "pillar.fado.desc": "Noches en las que la música se une a la mesa, sin escenario, sin distancia.",
      "pillar.fado.link": "Escuchar más",

      "img.alt.salavinhos": "Sala interior de Noémia con bodega de vinos y mesas de comedor",
      "img.alt.decorvintage": "Bodegón con botella de rosado y conservas portuguesas",

      "fado.img.alt": "Fadista con guitarra portuguesa en una noche de fado en Noémia",
      "fado.eyebrow": "Fado",
      "fado.heading": "Cuando la noche pide fado",
      "fado.lead": "Entre copas por terminar y conversaciones sin prisa, Noémia guarda noches en las que el fado sucede cerca.",
      "fado.info.line1": "Actuaciones en vivo cada 30 minutos",
      "fado.info.line2": "De viernes a lunes",
      "fado.info.line3": "De 20h a 23h",

      "splitpanel.vinhos.img.alt": "Pared de botellas de vino expuestas en Noémia",
      "splitpanel.vinhos.title": "Vinos",
      "splitpanel.vinhos.desc": "Decenas de referencias portuguesas, tintos, blancos, rosados y verdes, elegidas con esmero para acompañar cada petisco. Desde el Duero hasta el Alentejo, desde Bairrada hasta Monção y Melgaço.",
      "wine.stat.referencias": "Referencias",
      "wine.stat.regioes": "Regiones",
      "wine.stat.nacionais": "Nacionales",
      "splitpanel.vinhos.cta": "Ver Carta de Vinos",
      "splitpanel.tapas.img.alt": "Selección de tapas y conservas portuguesas con vino",
      "splitpanel.tapas.title": "Tapas",
      "splitpanel.tapas.desc": "Desde el couvert hasta los perritos calientes, pasando por las tibornas, platos pequeños pensados para llegar rápido y compartirse en la mesa, entre una copa de vino y otra.",
      "splitpanel.tapas.cta": "Ver Menú Completo",

      "reservas.eyebrow": "Reservas",
      "reservas.heading": "Reserve su mesa",
      "reservas.cta": "Reservar Mesa",
      "reservas.label.morada": "Dirección",
      "reservas.label.telefone": "Teléfono",
      "reservas.label.email": "Email",
      "reservas.label.horario": "Horario",
      "faq.eyebrow": "Preguntas Frecuentes",
      "faq.heading": "Todo lo que necesita saber",
      "faq.q1": "¿Dónde está Noémia?",
      "faq.a1": "Noémia está en R. do Duque, 21, 1200-158 Lisboa.",
      "faq.q2": "¿Cuál es el horario de Noémia?",
      "faq.a2": "Noémia abre el jueves de 18h a 23h, y de viernes a lunes de 19h a 23h. Cerrado los martes y miércoles.",
      "faq.q3": "¿Hay fado en vivo todas las noches?",
      "faq.a3": "Hay espectáculos de fado en vivo cada 30 minutos, de viernes a lunes, de 20h a 23h.",
      "faq.q4": "¿Necesito reservar mesa?",
      "faq.a4": "Recomendamos reservar con antelación, especialmente en las noches de fado, a través de nuestro sistema de reservas online o por teléfono.",
      "faq.q5": "¿Cuál es el rango de precios de Noémia?",
      "faq.a5": "Noémia tiene un rango de precios moderado (€€), con tapas para compartir y vinos portugueses por copa o botella.",
      "cookie.text": "Usamos cookies y almacenamiento local para mejorar su experiencia. Al continuar, acepta nuestra",
      "cookie.link": "Política de Privacidad y Cookies",
      "cookie.accept": "Aceptar",
      "reservas.label.instagram": "Instagram",
      "hours.quinta": "Jueves",
      "hours.sexta_a_segunda": "Viernes a Lunes",
      "hours.terca_e_quarta": "Martes y Miércoles",
      "hours.closed": "Cerrado",

      "carta.eyebrow": "La Carta",
      "carta.heading": "Tapas para compartir",

      "cat.couvert": "Couvert",
      "cat.tapas": "Tapas",
      "cat.tibornas": "Tibornas",
      "cat.cachorros": "Perritos Calientes",

      "item.pao": "Pan",
      "item.azeitonas": "Aceitunas",
      "item.manteigacabra": "Mantequilla de cabra",
      "item.presunto": "Jamón y queso cremoso",
      "item.vieiras": "Vieiras selladas con puré de apio y jamón",
      "item.gambas": "Gambas fritas con salsa piri-piri",
      "item.picadinho": "Picadillo de lomo con pepinillos",
      "item.camembert": "Camembert fundido con especias y mermelada de higo",
      "item.mistoqueijos": "Selección de quesos portugueses con frutos secos y mermelada",
      "item.crumble": "Crumble de morcilla con manzana asada",
      "item.charuto": "Rollito de alheira con puré de verduras",
      "item.migas": "Migas de panceta con espárragos y huevo frito",
      "item.atum": "Atún sellado en costra de sésamo con salsa de aguacate",
      "item.mistolegumes": "Verduras a la parrilla con salsa agridulce",
      "item.beterraba": "Remolacha con queso feta e hinojo",
      "item.bacalhaufumado": "Bacalao ahumado laminado con alcaparras, perejil y aceite de oliva",
      "item.carpaccio": "Carpaccio de pera con foie gras caramelizado y miel",
      "item.peixebranco": "Pescado blanco curado con pomelo, limón e hinojo",
      "item.empada": "Empanada XL (pollo o pato)",
      "item.queijoserra": "Queso da serra, champiñones y jamón",
      "item.polvo": "Pulpo con puré de zanahoria y vinagreta de cilantro y mostaza",
      "item.camarao": "Camarones salteados con salsa de mango",
      "item.bacalhaulascado": "Bacalao desmenuzado con hummus y huevo cocido",
      "item.tomatemozz": "Tomate y mozzarella con albahaca",
      "item.ovosmexidos": "Huevos revueltos con espárragos y queso da ilha (Azores)",
      "item.sardinha": "Sardina confitada con mermelada de pimientos",
      "item.foiegras": "Foie gras y puré de manzana, pan brioche",
      "item.pernil": "Pernil con pepinillos y mayonesa de menta",
      "item.lavagante": "Bogavante con nata agria y apio",

      "vinhos.eyebrow": "Carta de Vinos",
      "vinhos.heading": "Una bodega que cuenta historias",
      "cat.tintos": "Tintos",
      "cat.brancos": "Blancos",
      "cat.rose": "Rosados",
      "cat.verdes": "Vinho Verde",
      "wine.note.1": "Alicante Bouschet — Profundo y estructurado.",
      "wine.note.2": "Aragonez, Syrah, Trincadeira, Alicante Bouschet — Elegancia y equilibrio.",
      "wine.note.3": "Aragonez, Trincadeira, Alicante Bouschet — Complejo y persistente.",
      "wine.note.4": "Aragonez, Alicante Bouschet, Syrah — Vinificado en tinaja, con personalidad.",
      "wine.note.5": "Syrah, Aragonez, Alicante Bouschet — Gran profundidad.",
      "wine.note.6": "Aragonez, Trincadeira, Cabernet Sauvignon, Alicante Bouschet — Clásico alentejano.",
      "wine.note.7": "Syrah — Especiado y seductor.",
      "wine.note.8": "Castelão — Expresión pura de la variedad.",
      "wine.note.9": "Touriga Nacional, Jaen, Alfrocheiro — Elegancia serrana.",
      "wine.note.10": "Touriga Nacional, Touriga Franca, Tinta Roriz — Equilibrado e intenso.",
      "wine.note.11": "Touriga Nacional, Touriga Franca — Mineral y envolvente.",
      "wine.note.12": "Mezcla de viñas viejas — Juventud duriense.",
      "wine.note.13": "Touriga Nacional, Touriga Franca — Fruta vibrante.",
      "wine.note.14": "Touriga Franca, Tinta Roriz — Fresco y gastronómico.",
      "wine.note.15": "Touriga Franca, Tinta Roriz — Douro contemporáneo.",
      "wine.note.16": "Touriga Nacional, Touriga Franca, Tinta Roriz — Directo y elegante.",
      "wine.note.17": "Touriga Nacional, Touriga Franca, Tinta Roriz — Estructura y finura.",
      "wine.note.18": "Touriga Nacional, Touriga Franca, Tinta Roriz — Profundo y complejo.",
      "wine.note.19": "Bastardo — Raro y delicado.",
      "wine.note.20": "Viognier — Aromático y untuoso.",
      "wine.note.21": "Antão Vaz, Arinto — Fresco y equilibrado.",
      "wine.note.22": "Arinto, Roupeiro, Antão Vaz — Elegancia y frescura.",
      "wine.note.23": "Antão Vaz, Arinto, Verdelho — Tinaja y mineralidad.",
      "wine.note.24": "Sauvignon Blanc — Cítrico y vibrante.",
      "wine.note.25": "Chardonnay — Volumen y frescura.",
      "wine.note.26": "Viosinho, Gouveio — Mineral y preciso.",
      "wine.note.27": "Rabigato, Viosinho — Expresivo y fresco.",
      "wine.note.28": "Gouveio, Arinto — Elegante y floral.",
      "wine.note.29": "Códega, Rabigato — Muy gastronómico.",
      "wine.note.30": "Rabigato, Códega — Seco y equilibrado.",
      "wine.note.31": "Rabigato, Viosinho, Códega do Larinho — Fruta y frescura.",
      "wine.note.32": "Encruzado — Fino y mineral.",
      "wine.note.33": "Touriga Nacional — Fresco y delicado.",
      "wine.note.34": "Syrah, Touriga Nacional — Verano en una copa.",
      "wine.note.35": "Avesso — Textura y frescura.",
      "wine.note.36": "Alvarinho — Aromático y elegante."
    },

    fr: {
      "meta.tagline": "Noémia · Vins, Tapas et Fado",
      "meta.title.index": "Noémia · Restaurant de Fado, Vins et Tapas à Lisbonne",
      "meta.description.index": "Restaurant de fado en direct à Lisbonne. Tapas portugaises, vins de producteurs nationaux et soirées de fado au Noémia. Réservez votre table.",
      "meta.title.carta": "Carte de Tapas Portugaises · Noémia Lisbonne",
      "meta.description.carta": "Carte de tapas portugaises du Noémia à Lisbonne : couvert, tapas, tibornas et hot-dogs à partager à table.",
      "meta.title.vinhos": "Vins Portugais à Lisbonne · Carte des Vins Noémia",
      "meta.description.vinhos": "La carte des vins portugais du Noémia à Lisbonne : rouges, blancs, rosés et Vinho Verde de producteurs nationaux, du Douro à l'Alentejo.",

      "nav.conceito": "Concept",
      "nav.fado": "Fado",
      "nav.vinhos": "Vins",
      "nav.carta": "Carte",
      "nav.reservas": "Réservations",
      "nav.reservar": "Réserver",
      "nav.toggle.aria": "Ouvrir le menu",
      "back.link": "Retour à Noémia",
      "cta.reservarmesa": "Réserver une Table",
      "footer.text": "Noémia · Vins, Tapas et Fado. Tous droits réservés.",

      "hero.h1": "Noémia — Restaurant de Fado, Vins et Tapas à Lisbonne",
      "hero.img.alt": "Salle du Noémia avec des hirondelles peintes au plafond et un lustre en cristal",
      "hero.img2.alt": "Assiette de tapas servie au Noémia",
      "hero.img3.alt": "Salle intérieure du Noémia avec cave à vins",
      "hero.img5.alt": "Plat du Noémia avec légumes sautés",
      "reservas.map.title": "Localisation du Noémia",
      "hero.cta.vermenu": "Voir le Menu",

      "conceito.eyebrow": "Le Concept",
      "conceito.heading": "Simple, bon,<br>sans hâte de finir.",
      "conceito.lead": "Noémia propose une cuisine portugaise préparée avec soin, pensée pour être partagée sous forme de tapas, sans cérémonie, sans attente. Des petits plats à accompagner d'un verre de vin de notre cave entièrement portugaise, dans une salle qui invite à rester jusqu'à ce que la nuit se transforme en fado.",

      "pillar.tapas.title": "Tapas",
      "pillar.tapas.desc": "Petiscos portugais servis à partager. Simples, savoureux, sans attente.",
      "pillar.tapas.link": "Voir la carte",
      "pillar.vinho.title": "Vin",
      "pillar.vinho.desc": "Cave à vins propre, avec des producteurs portugais du Douro à l'Alentejo.",
      "pillar.vinho.link": "Voir les vins",
      "pillar.fado.title": "Fado",
      "pillar.fado.desc": "Des soirées où la musique se joint à la table, sans scène, sans distance.",
      "pillar.fado.link": "En savoir plus",

      "img.alt.salavinhos": "Salle intérieure du Noémia avec cave à vins et tables",
      "img.alt.decorvintage": "Nature morte avec une bouteille de rosé et des conserves portugaises",

      "fado.img.alt": "Fadista avec une guitare portugaise lors d'une soirée de fado au Noémia",
      "fado.eyebrow": "Fado",
      "fado.heading": "Quand la nuit appelle le fado",
      "fado.lead": "Entre les verres pas encore terminés et les conversations sans hâte, Noémia vit des soirées où le fado se produit tout près.",
      "fado.info.line1": "Représentations en direct toutes les 30 minutes",
      "fado.info.line2": "Du vendredi au lundi",
      "fado.info.line3": "De 20h à 23h",

      "splitpanel.vinhos.img.alt": "Mur de bouteilles de vin exposées au Noémia",
      "splitpanel.vinhos.title": "Vins",
      "splitpanel.vinhos.desc": "Des dizaines de références portugaises, rouges, blancs, rosés et Vinho Verde, choisies avec soin pour accompagner chaque petisco. Du Douro à l'Alentejo, de Bairrada à Monção et Melgaço.",
      "wine.stat.referencias": "Références",
      "wine.stat.regioes": "Régions",
      "wine.stat.nacionais": "Portugais",
      "splitpanel.vinhos.cta": "Voir la Carte des Vins",
      "splitpanel.tapas.img.alt": "Sélection de tapas et conserves portugaises avec du vin",
      "splitpanel.tapas.title": "Tapas",
      "splitpanel.tapas.desc": "Du couvert aux hot-dogs, en passant par les tibornas, des petits plats pensés pour arriver vite et être partagés à table, entre un verre de vin et un autre.",
      "splitpanel.tapas.cta": "Voir le Menu Complet",

      "reservas.eyebrow": "Réservations",
      "reservas.heading": "Réservez votre table",
      "reservas.cta": "Réserver une Table",
      "reservas.label.morada": "Adresse",
      "reservas.label.telefone": "Téléphone",
      "reservas.label.email": "Email",
      "reservas.label.horario": "Horaires",
      "faq.eyebrow": "Questions Fréquentes",
      "faq.heading": "Tout ce qu'il faut savoir",
      "faq.q1": "Où se trouve le Noémia ?",
      "faq.a1": "Le Noémia se trouve R. do Duque, 21, 1200-158 Lisbonne.",
      "faq.q2": "Quels sont les horaires du Noémia ?",
      "faq.a2": "Le Noémia est ouvert le jeudi de 18h à 23h, et du vendredi au lundi de 19h à 23h. Fermé le mardi et le mercredi.",
      "faq.q3": "Y a-t-il du fado en direct tous les soirs ?",
      "faq.a3": "Il y a des spectacles de fado en direct toutes les 30 minutes, du vendredi au lundi, de 20h à 23h.",
      "faq.q4": "Faut-il réserver une table ?",
      "faq.a4": "Nous recommandons de réserver à l'avance, surtout les soirs de fado, via notre système de réservation en ligne ou par téléphone.",
      "faq.q5": "Quelle est la gamme de prix du Noémia ?",
      "faq.a5": "Le Noémia a une gamme de prix modérée (€€), avec des tapas à partager et des vins portugais au verre ou à la bouteille.",
      "cookie.text": "Nous utilisons des cookies et le stockage local pour améliorer votre expérience. En continuant, vous acceptez notre",
      "cookie.link": "Politique de Confidentialité et de Cookies",
      "cookie.accept": "Accepter",
      "reservas.label.instagram": "Instagram",
      "hours.quinta": "Jeudi",
      "hours.sexta_a_segunda": "Vendredi à Lundi",
      "hours.terca_e_quarta": "Mardi et Mercredi",
      "hours.closed": "Fermé",

      "carta.eyebrow": "La Carte",
      "carta.heading": "Tapas à partager",

      "cat.couvert": "Couvert",
      "cat.tapas": "Tapas",
      "cat.tibornas": "Tibornas",
      "cat.cachorros": "Hot-Dogs",

      "item.pao": "Pain",
      "item.azeitonas": "Olives",
      "item.manteigacabra": "Beurre de chèvre",
      "item.presunto": "Jambon cru et fromage crémeux",
      "item.vieiras": "Noix de Saint-Jacques poêlées, purée de céleri et jambon cru",
      "item.gambas": "Gambas frites, sauce piri-piri",
      "item.picadinho": "Filet mignon en dés avec pickles",
      "item.camembert": "Camembert fondu, épices et confiture de figue",
      "item.mistoqueijos": "Assortiment de fromages portugais, fruits secs et confiture",
      "item.crumble": "Crumble de boudin noir avec pomme rôtie",
      "item.charuto": "Rouleau d'alheira avec purée d'épinards",
      "item.migas": "Migas de lard aux asperges et œuf au plat",
      "item.atum": "Thon saisi en croûte de sésame, sauce à l'avocat",
      "item.mistolegumes": "Assortiment de légumes grillés, sauce aigre-douce",
      "item.beterraba": "Betterave, feta et fenouil",
      "item.bacalhaufumado": "Morue fumée tranchée, câpres, persil et huile d'olive",
      "item.carpaccio": "Carpaccio de poire, foie gras caramélisé et miel",
      "item.peixebranco": "Poisson blanc mariné, pamplemousse, citron et fenouil",
      "item.empada": "Tourte XL (poulet ou canard)",
      "item.queijoserra": "Fromage da Serra, champignons et jambon cru",
      "item.polvo": "Poulpe, purée de carotte, vinaigrette à la coriandre et moutarde",
      "item.camarao": "Crevettes sautées, sauce à la mangue",
      "item.bacalhaulascado": "Morue effilochée, houmous et œuf dur",
      "item.tomatemozz": "Tomate et mozzarella au basilic",
      "item.ovosmexidos": "Œufs brouillés, asperges et fromage da ilha (Açores)",
      "item.sardinha": "Sardine confite, confiture de poivrons",
      "item.foiegras": "Foie gras et purée de pomme, pain brioché",
      "item.pernil": "Jarret de porc, pickles et mayonnaise à la menthe",
      "item.lavagante": "Homard, crème aigre et céleri",

      "vinhos.eyebrow": "Carte des Vins",
      "vinhos.heading": "Une cave qui raconte des histoires",
      "cat.tintos": "Rouges",
      "cat.brancos": "Blancs",
      "cat.rose": "Rosé",
      "cat.verdes": "Vinho Verde",
      "wine.note.1": "Alicante Bouschet — Profond et structuré.",
      "wine.note.2": "Aragonez, Syrah, Trincadeira, Alicante Bouschet — Élégance et équilibre.",
      "wine.note.3": "Aragonez, Trincadeira, Alicante Bouschet — Complexe et persistant.",
      "wine.note.4": "Aragonez, Alicante Bouschet, Syrah — Vinifié en amphore, plein de caractère.",
      "wine.note.5": "Syrah, Aragonez, Alicante Bouschet — Grande profondeur.",
      "wine.note.6": "Aragonez, Trincadeira, Cabernet Sauvignon, Alicante Bouschet — Classique de l'Alentejo.",
      "wine.note.7": "Syrah — Épicé et séduisant.",
      "wine.note.8": "Castelão — Expression pure du cépage.",
      "wine.note.9": "Touriga Nacional, Jaen, Alfrocheiro — Élégance de montagne.",
      "wine.note.10": "Touriga Nacional, Touriga Franca, Tinta Roriz — Équilibré et intense.",
      "wine.note.11": "Touriga Nacional, Touriga Franca — Minéral et enveloppant.",
      "wine.note.12": "Assemblage de vieilles vignes — Jeunesse du Douro.",
      "wine.note.13": "Touriga Nacional, Touriga Franca — Fruit vibrant.",
      "wine.note.14": "Touriga Franca, Tinta Roriz — Frais et gastronomique.",
      "wine.note.15": "Touriga Franca, Tinta Roriz — Douro contemporain.",
      "wine.note.16": "Touriga Nacional, Touriga Franca, Tinta Roriz — Direct et élégant.",
      "wine.note.17": "Touriga Nacional, Touriga Franca, Tinta Roriz — Structure et finesse.",
      "wine.note.18": "Touriga Nacional, Touriga Franca, Tinta Roriz — Profond et complexe.",
      "wine.note.19": "Bastardo — Rare et délicat.",
      "wine.note.20": "Viognier — Aromatique et onctueux.",
      "wine.note.21": "Antão Vaz, Arinto — Frais et équilibré.",
      "wine.note.22": "Arinto, Roupeiro, Antão Vaz — Élégance et fraîcheur.",
      "wine.note.23": "Antão Vaz, Arinto, Verdelho — Amphore et minéralité.",
      "wine.note.24": "Sauvignon Blanc — Citronné et vibrant.",
      "wine.note.25": "Chardonnay — Volume et fraîcheur.",
      "wine.note.26": "Viosinho, Gouveio — Minéral et précis.",
      "wine.note.27": "Rabigato, Viosinho — Expressif et frais.",
      "wine.note.28": "Gouveio, Arinto — Élégant et floral.",
      "wine.note.29": "Códega, Rabigato — Très gastronomique.",
      "wine.note.30": "Rabigato, Códega — Sec et équilibré.",
      "wine.note.31": "Rabigato, Viosinho, Códega do Larinho — Fruit et fraîcheur.",
      "wine.note.32": "Encruzado — Fin et minéral.",
      "wine.note.33": "Touriga Nacional — Frais et délicat.",
      "wine.note.34": "Syrah, Touriga Nacional — L'été en un verre.",
      "wine.note.35": "Avesso — Texture et fraîcheur.",
      "wine.note.36": "Alvarinho — Aromatique et élégant."
    }
  };

  function getLang() {
    if (window.location.pathname.indexOf("/en/") !== -1) {
      return "en";
    }
    var stored = null;
    try {
      stored = window.localStorage.getItem(LANG_KEY);
    } catch (e) {}
    return translations[stored] ? stored : "pt";
  }

  function applyTranslations(lang) {
    var dict = translations[lang] || translations.pt;

    document.documentElement.setAttribute("lang", HTML_LANG[lang] || "pt-PT");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) {
        if (el.tagName === "TITLE") {
          el.textContent = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (dict[key] != null) {
        el.setAttribute("alt", dict[key]);
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria-label");
      if (dict[key] != null) {
        el.setAttribute("aria-label", dict[key]);
      }
    });

    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-title");
      if (dict[key] != null) {
        el.setAttribute("title", dict[key]);
      }
    });

    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-content");
      if (dict[key] != null) {
        el.setAttribute("content", dict[key]);
      }
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-current", isActive ? "true" : "false");
    });

    document.querySelectorAll(".lang-toggle").forEach(function (toggle) {
      var flagEl = toggle.querySelector(".lang-flag");
      var codeEl = toggle.querySelector(".lang-current-code");
      if (flagEl) { flagEl.textContent = FLAGS[lang] || FLAGS.pt; }
      if (codeEl) { codeEl.textContent = lang.toUpperCase(); }
    });
  }

  function setLang(lang) {
    if (!translations[lang]) { lang = "pt"; }
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch (e) {}
    applyTranslations(lang);
  }

  function closeLangMenus() {
    document.querySelectorAll(".lang-switch.is-open").forEach(function (el) {
      el.classList.remove("is-open");
      var toggle = el.querySelector(".lang-toggle");
      if (toggle) { toggle.setAttribute("aria-expanded", "false"); }
    });
  }

  function init() {
    applyTranslations(getLang());

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
        closeLangMenus();
      });
    });

    document.querySelectorAll(".lang-toggle").forEach(function (toggle) {
      toggle.addEventListener("click", function (e) {
        e.stopPropagation();
        var switchEl = toggle.closest(".lang-switch");
        var wasOpen = switchEl.classList.contains("is-open");
        closeLangMenus();
        if (!wasOpen) {
          switchEl.classList.add("is-open");
          toggle.setAttribute("aria-expanded", "true");
        }
      });
    });

    document.addEventListener("click", closeLangMenus);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { closeLangMenus(); }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
