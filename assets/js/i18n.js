(function () {
  "use strict";

  var LANG_KEY = "noemia-lang";
  var HTML_LANG = { pt: "pt-PT", en: "en", es: "es" };

  var translations = {
    pt: {
      "meta.tagline": "Noémia · Vinhos, Tapas e Fados",
      "meta.title.index": "Noémia · Vinhos, Tapas e Fados",
      "meta.description.index": "Noémia: tapas portuguesas simples e rápidas, vinhos de qualidade e noites de fado. Reserve a sua mesa.",
      "meta.title.carta": "A Carta · Noémia",
      "meta.description.carta": "A carta completa do Noémia: couvert, tapas, tibornas e cachorros para partilhar à mesa.",
      "meta.title.vinhos": "Carta de Vinhos · Noémia",
      "meta.description.vinhos": "A carta de vinhos completa do Noémia: tintos, brancos, rosés e verdes de produtores portugueses.",

      "embreve.langswitch.aria": "Mudar idioma",
      "embreve.eyebrow": "Já estamos abertos",
      "embreve.heading": "O site ainda está a decantar!",
      "embreve.tagline": "Restaurante de Vinhos, Tapas e Fados em Lisboa",
      "embreve.cta.reserva": "Fazer Reserva",

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

      "hero.img.alt": "Sala do Noémia com andorinhas pintadas no teto e lustre de cristal",
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
      "fado.lead": "Entre taças por acabar e conversas sem pressa, o Noémia guarda noites em que o fado acontece perto, sem palco, sem distância, só a voz e a guitarra portuguesa a soar mesmo ao lado da mesa.",
      "fado.note": "Fado ao vivo às 6ªs, sábados, domingos e 2ªs-feiras, das 20h00 às 23h00.",

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
      "reservas.lead": "Ligue-nos ou envie uma mensagem, teremos todo o gosto em receber consigo uma noite de tapas, vinho e fado.",
      "reservas.cta": "Reservar por telefone",
      "reservas.label.morada": "Morada",
      "reservas.label.telefone": "Telefone",
      "reservas.label.email": "Email",
      "reservas.label.horario": "Horário",
      "reservas.label.instagram": "Instagram",

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
      "cat.verdes": "Verdes"
    },

    en: {
      "meta.tagline": "Noémia · Wine, Tapas and Fado",
      "meta.title.index": "Noémia · Wine, Tapas and Fado",
      "meta.description.index": "Noémia: simple and quick Portuguese tapas, quality wines and fado nights. Book your table.",
      "meta.title.carta": "The Menu · Noémia",
      "meta.description.carta": "Noémia's full menu: couvert, tapas, tibornas and hot dogs to share at the table.",
      "meta.title.vinhos": "Wine List · Noémia",
      "meta.description.vinhos": "Noémia's full wine list: reds, whites, rosés and vinho verdes from Portuguese producers.",

      "embreve.langswitch.aria": "Change language",
      "embreve.eyebrow": "We're already open",
      "embreve.heading": "The website is still decanting!",
      "embreve.tagline": "Restaurant of Wine, Tapas and Fado in Lisbon",
      "embreve.cta.reserva": "Book a Table",

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

      "hero.img.alt": "Noémia dining room with swallows painted on the ceiling and a crystal chandelier",
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
      "fado.lead": "Between glasses not yet finished and unhurried conversations, Noémia holds nights when fado happens close by, no stage, no distance, just the voice and the Portuguese guitar sounding right next to the table.",
      "fado.note": "Live fado on Fridays, Saturdays, Sundays and Mondays, from 8pm to 11pm.",

      "splitpanel.vinhos.img.alt": "Wall of wine bottles on display at Noémia",
      "splitpanel.vinhos.title": "Wines",
      "splitpanel.vinhos.desc": "Dozens of Portuguese references, reds, whites, rosés and vinho verdes, carefully chosen to go with every petisco. From the Douro to the Alentejo, from Bairrada to Monção e Melgaço.",
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
      "reservas.lead": "Call us or send a message, we'll be delighted to welcome you for a night of tapas, wine and fado.",
      "reservas.cta": "Book by phone",
      "reservas.label.morada": "Address",
      "reservas.label.telefone": "Phone",
      "reservas.label.email": "Email",
      "reservas.label.horario": "Hours",
      "reservas.label.instagram": "Instagram",

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
      "cat.tintos": "Red",
      "cat.brancos": "White",
      "cat.rose": "Rosé",
      "cat.verdes": "Vinho Verde"
    },

    es: {
      "meta.tagline": "Noémia · Vinos, Tapas y Fado",
      "meta.title.index": "Noémia · Vinos, Tapas y Fado",
      "meta.description.index": "Noémia: tapas portuguesas sencillas y rápidas, vinos de calidad y noches de fado. Reserve su mesa.",
      "meta.title.carta": "La Carta · Noémia",
      "meta.description.carta": "La carta completa de Noémia: couvert, tapas, tibornas y perritos calientes para compartir en la mesa.",
      "meta.title.vinhos": "Carta de Vinos · Noémia",
      "meta.description.vinhos": "La carta de vinos completa de Noémia: tintos, blancos, rosados y verdes de productores portugueses.",

      "embreve.langswitch.aria": "Cambiar idioma",
      "embreve.eyebrow": "Ya estamos abiertos",
      "embreve.heading": "¡El sitio web todavía está decantando!",
      "embreve.tagline": "Restaurante de Vinos, Tapas y Fado en Lisboa",
      "embreve.cta.reserva": "Reservar Mesa",

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

      "hero.img.alt": "Sala de Noémia con golondrinas pintadas en el techo y lámpara de cristal",
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
      "fado.lead": "Entre copas por terminar y conversaciones sin prisa, Noémia guarda noches en las que el fado sucede cerca, sin escenario, sin distancia, solo la voz y la guitarra portuguesa sonando justo al lado de la mesa.",
      "fado.note": "Fado en vivo los viernes, sábados, domingos y lunes, de 20h00 a 23h00.",

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
      "reservas.lead": "Llámenos o envíe un mensaje, será un placer recibirlo para una noche de tapas, vino y fado.",
      "reservas.cta": "Reservar por teléfono",
      "reservas.label.morada": "Dirección",
      "reservas.label.telefone": "Teléfono",
      "reservas.label.email": "Email",
      "reservas.label.horario": "Horario",
      "reservas.label.instagram": "Instagram",

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
      "cat.verdes": "Verdes"
    }
  };

  function getLang() {
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
  }

  function setLang(lang) {
    if (!translations[lang]) { lang = "pt"; }
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch (e) {}
    applyTranslations(lang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyTranslations(getLang());

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });
  });
})();
