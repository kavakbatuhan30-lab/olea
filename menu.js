// Olea menü verisi — kategoriler ve tüm ürünler (4 dil: tr/en/fr/nl)
// Fiyatlar EUR cinsinden (Brüksel)

export const LANGS = [
  { code: 'tr', label: 'TR', name: 'Türkçe' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'nl', label: 'NL', name: 'Nederlands' },
];

// i18n helper — string ya da {tr,en,fr,nl} obje kabul eder
export function t(field, lang = 'tr') {
  if (field == null) return '';
  if (typeof field === 'string') return field;
  return field[lang] || field.en || field.tr || Object.values(field)[0] || '';
}

export const CATEGORIES = [
  { id: 'breakfast',     emoji: '🍳', name: { tr: 'Kahvaltı',          en: 'Breakfast',      fr: 'Petit Déjeuner', nl: 'Ontbijt' } },
  { id: 'toast',         emoji: '🥪', name: { tr: 'Toast',             en: 'Toast',          fr: 'Toast',          nl: 'Toast' } },
  { id: 'eggs',          emoji: '🍳', name: { tr: 'Yumurta',           en: 'Eggs',           fr: 'Œufs Spéciaux',  nl: 'Eieren' } },
  { id: 'salad',         emoji: '🥗', name: { tr: 'Salata',            en: 'Salads',         fr: 'Salades',        nl: 'Salades' } },
  { id: 'soup',          emoji: '🍲', name: { tr: 'Çorba',             en: 'Soup',           fr: 'Soupes',         nl: 'Soep' } },
  { id: 'sweet',         emoji: '🥞', name: { tr: 'Tatlı Kahvaltı',    en: 'Sweet & Brioche',fr: 'Sucré & Brioches', nl: 'Zoet & Brioche' } },
  { id: 'bowl',          emoji: '🥣', name: { tr: 'Bowl',              en: 'Bowls',          fr: 'Bowls',          nl: 'Bowls' } },
  { id: 'coffee',        emoji: '☕', name: { tr: 'Kahve',             en: 'Coffee',         fr: 'Café',           nl: 'Koffie' } },
  { id: 'caffeine-free', emoji: '🍵', name: { tr: 'Kafeinsiz',         en: 'Caffeine-Free',  fr: 'Sans Caféine',   nl: 'Cafeïnevrij' } },
  { id: 'smoothies',     emoji: '🍓', name: { tr: 'Smoothie',          en: 'Smoothies',      fr: 'Smoothies',      nl: 'Smoothies' } },
  { id: 'milkshakes',    emoji: '🥤', name: { tr: 'Milkshake',         en: 'Milkshakes',     fr: 'Milkshakes',     nl: 'Milkshakes' } },
  { id: 'mojito',        emoji: '🍹', name: { tr: 'Mojito',            en: 'Mojito',         fr: 'Mojito',         nl: 'Mojito' } },
  { id: 'softs',         emoji: '🥤', name: { tr: 'İçecekler',         en: 'Soft Drinks',    fr: 'Softs',          nl: 'Frisdranken' } },
  { id: 'pastries',      emoji: '🥐', name: { tr: 'Kurabiye & Çörek',  en: 'Pastries',       fr: 'Pâtisseries',    nl: 'Gebak' } },
  { id: 'desserts',      emoji: '🍰', name: { tr: 'Tatlılar',          en: 'Desserts',       fr: 'Desserts',       nl: 'Desserts' } },
];

// Kısa yardımcılar — açıklamayı yazmak yerine kompakt obje üretmek için
const D = (tr, en, fr, nl) => ({ tr, en, fr, nl });

export const MENU = [
  // ─── KAHVALTI ──────────────────────────────────────
  { id: 'serpme',         cat: 'breakfast', name: 'Olea Serpme',
    desc: D(
      '2 kişilik klasik kahvaltı tabağı, peynirler, zeytin, reçeller, simit, börek',
      'Classic breakfast platter for 2, cheeses, olives, jams, simit, börek',
      'Plateau de petit-déjeuner classique pour 2, fromages, olives, confitures, simit, börek',
      'Klassiek ontbijtbord voor 2, kazen, olijven, jam, simit, börek'
    ),
    priceNote: D('kişi başı', 'per person', 'par personne', 'per persoon'),
    price: 25.00, photo: 'photos/serpme-platter.jpg' },

  { id: 'simit',          cat: 'breakfast', name: 'Simit',
    desc: D('Geleneksel Türk simidi tabağı, peynirler ve mevsim sebzeleriyle',
            'Traditional Turkish simit platter with cheeses and seasonal vegetables',
            'Plateau de simit turc traditionnel, fromages et légumes de saison',
            'Traditioneel Turks simit-bord met kazen en seizoensgroenten'),
    price: 16.00, photo: 'photos/simit-board.jpg' },

  { id: 'french',         cat: 'breakfast', name: 'French',
    desc: D('Avrupa kahvaltı tabağı, peynir çeşitleri, jambon, taze ekmek',
            'European breakfast board, assorted cheeses, ham, fresh bread',
            'Plateau de petit-déjeuner européen, fromages variés, jambon, pain frais',
            'Europees ontbijtbord, kaasassortiment, ham, vers brood'),
    price: 17.00, photo: 'photos/french-board.jpg' },

  { id: 'mirror-eggs',    cat: 'breakfast',
    name: D('Sahanda Yumurta', 'Mirror Eggs', 'Œufs au Plat', 'Spiegeleieren'),
    desc: D('Tereyağında pişmiş, ekstra olarak',
            'Cooked in butter, as an extra',
            'Cuits au beurre, en supplément',
            'Gebakken in boter, als extra'),
    price: 5.50, emoji: '🍳' },

  { id: 'menemen',        cat: 'breakfast', name: 'Menemen',
    desc: D('Domates, biber, soğan ile özel yumurta',
            'Eggs with tomato, peppers, onion (Turkish style)',
            'Œufs aux tomates, poivrons et oignons (style turc)',
            'Eieren met tomaat, paprika, ui (Turkse stijl)'),
    price: 7.00, emoji: '🍳' },

  { id: 'sucuk-eggs',     cat: 'breakfast',
    name: D('Sucuklu Yumurta', 'Sucuk & Eggs', 'Sucuk & Œufs', 'Sucuk & Eieren'),
    desc: D('Çıtır sucuk üzerine sahanda yumurta',
            'Mirror eggs on crispy Turkish sucuk sausage',
            'Œufs miroir sur saucisse turque sucuk croustillante',
            'Spiegeleieren op krokante Turkse sucuk-worst'),
    price: 7.00, emoji: '🍳' },

  { id: 'kuymak',         cat: 'breakfast', name: 'Kuymak',
    desc: D('Karadeniz mısır unu ve peynir özel yemeği',
            'Black Sea cornmeal & melted cheese specialty',
            'Spécialité de farine de maïs et fromage de la mer Noire',
            'Zwarte Zee specialiteit van maïsmeel en gesmolten kaas'),
    price: 7.00, emoji: '🧀' },

  { id: 'halloumi',       cat: 'breakfast',
    name: D('Hellim Peyniri', 'Halloumi Cheese', 'Halloumi', 'Halloumi Kaas'),
    desc: D('Izgarada altın renginde, ekstra olarak',
            'Grilled golden, as an extra',
            'Grillé doré, en supplément',
            'Goudbruin gegrild, als extra'),
    price: 7.00, emoji: '🧀' },

  { id: 'avocado',        cat: 'breakfast',
    name: D('Avokado', 'Avocado', 'Avocat', 'Avocado'),
    desc: D('Taze dilimlenmiş avokado, ekstra',
            'Fresh sliced avocado, extra',
            'Avocat frais en tranches, supplément',
            'Vers gesneden avocado, extra'),
    price: 3.50, emoji: '🥑' },

  { id: 'borek-cigar',    cat: 'breakfast',
    name: D('Sigara Böreği', 'Cigar Börek', 'Börek Cigare', 'Sigaar Börek'),
    desc: D('Çıtır peynirli sigara böreği',
            'Crispy cheese-filled phyllo rolls',
            'Rouleaux croustillants au fromage en pâte filo',
            'Knapperige filodeegrolletjes met kaas'),
    price: 7.00, emoji: '🥟' },

  { id: 'pisi',           cat: 'breakfast',
    name: D('Pişi (5 adet)', 'Pisi (5 pcs)', 'Pisi (5 pcs)', 'Pisi (5 stuks)'),
    desc: D('Geleneksel sıcak hamur işi',
            'Traditional warm fried dough',
            'Pâte frite traditionnelle, servie chaude',
            'Traditioneel warm gefrituurd deeg'),
    price: 7.00, emoji: '🥖' },

  { id: 'bread-basket',   cat: 'breakfast',
    name: D('Ekmek Sepeti', 'Bread Basket', 'Corbeille de Pain', 'Broodmandje'),
    desc: D('Çeşitli taze ekmekler',
            'Assortment of fresh breads',
            'Assortiment de pains frais',
            'Assortiment vers brood'),
    price: 4.50, emoji: '🥖' },

  // ─── TOAST ─────────────────────────────────────────
  { id: 'original-avo',   cat: 'toast', name: 'Original Avo',
    desc: D('Avokado ezmesi, taze ekmek, mevsim otları',
            'Smashed avocado on fresh bread, seasonal herbs',
            'Avocat écrasé sur pain frais, herbes de saison',
            'Geprakte avocado op vers brood, seizoenskruiden'),
    price: 14.00, photo: 'photos/original-avo.jpg' },

  { id: 'naughty-salmon', cat: 'toast', name: 'Naughty Salmon',
    desc: D('Tütsülenmiş somon, krem peynir, kapari, soğan',
            'Smoked salmon, cream cheese, capers, red onion',
            'Saumon fumé, fromage frais, câpres, oignon rouge',
            'Gerookte zalm, roomkaas, kappertjes, rode ui'),
    price: 15.00, photo: 'photos/naughty-salmon.jpg' },

  { id: 'olea-toast',     cat: 'toast', name: 'Olea Toast',
    desc: D('İmza toast: hellim, avokado, mevsim otları, tahıllı ekmek',
            'Signature toast: halloumi, avocado, seasonal herbs, multigrain',
            'Toast signature: halloumi, avocat, herbes de saison, pain multigrain',
            'Signature toast: halloumi, avocado, seizoenskruiden, meergranenbrood'),
    price: 16.50, photo: 'photos/olea-toast.jpg' },

  { id: 'benedict-green', cat: 'toast', name: 'Benedict Green',
    desc: D('Yeşil hollandaise, poşe yumurta, ıspanak, taze ekmek',
            'Green hollandaise, poached egg, spinach, fresh bread',
            'Hollandaise verte, œuf poché, épinards, pain frais',
            'Groene hollandaise, gepocheerd ei, spinazie, vers brood'),
    price: 17.00, photo: 'photos/benedict-green.jpg' },

  // ─── ÖZEL YUMURTALAR ───────────────────────────────
  { id: 'cilbir',         cat: 'eggs',
    name: D('Çılbır', 'Çılbır Turkish Egg', 'Çılbır Œuf Turc', 'Çılbır Turks Ei'),
    desc: D('Türk usulü poşe yumurta, sarımsaklı yoğurt, közlenmiş tereyağı',
            'Turkish poached egg, garlic yogurt, brown butter',
            'Œuf poché turc, yaourt à l\'ail, beurre noisette',
            'Turks gepocheerd ei, knoflookyoghurt, gebrande boter'),
    price: 15.00, photo: 'photos/cilbir-egg.jpg' },

  { id: 'omelette',       cat: 'eggs',
    name: D('Omlet', 'Omelette', 'Omelette', 'Omelet'),
    desc: D('Klasik Fransız omleti, mevsim otları',
            'Classic French omelette, seasonal herbs',
            'Omelette française classique, herbes de saison',
            'Klassieke Franse omelet, seizoenskruiden'),
    price: 13.00, emoji: '🍳' },

  { id: 'shakshuka',      cat: 'eggs', name: 'Shakshuka',
    desc: D('Domates, biber sosunda poşe yumurta',
            'Eggs poached in spiced tomato & pepper sauce',
            'Œufs pochés dans une sauce tomate et poivron épicée',
            'Eieren gepocheerd in pittige tomaten- en paprikasaus'),
    price: 14.00, emoji: '🍳' },

  // ─── SALATALAR ─────────────────────────────────────
  { id: 'burrata-salad',  cat: 'salad',
    name: D('Burrata Salata', 'Burrata Salad', 'Salade Burrata', 'Burrata Salade'),
    desc: D('Taze burrata, kiraz domates, fesleğen, balzamik',
            'Fresh burrata, cherry tomatoes, basil, balsamic',
            'Burrata fraîche, tomates cerises, basilic, balsamique',
            'Verse burrata, kerstomaten, basilicum, balsamico'),
    price: 15.00, photo: 'photos/burrata-salad.jpg' },

  { id: 'olea-salad',     cat: 'salad',
    name: D('Olea Salata', 'Olea Salad', 'Salade Olea', 'Olea Salade'),
    desc: D('İmza salata: roka, hellim, avokado, nar',
            'Signature salad: rocket, halloumi, avocado, pomegranate',
            'Salade signature: roquette, halloumi, avocat, grenade',
            'Signature salade: rucola, halloumi, avocado, granaatappel'),
    price: 16.50, photo: 'photos/olea-salad-new.jpg' },

  // ─── ÇORBALAR ──────────────────────────────────────
  { id: 'lentil-soup',    cat: 'soup',
    name: D('Mercimek Çorbası', 'Lentil Soup', 'Soupe de Lentilles', 'Linzensoep'),
    desc: D('Kırmızı mercimek, kimyon, limon',
            'Red lentil, cumin, lemon',
            'Lentilles rouges, cumin, citron',
            'Rode linzen, komijn, citroen'),
    price: 7.00, emoji: '🍲' },

  { id: 'tomato-soup',    cat: 'soup',
    name: D('Domates Çorbası', 'Tomato Soup', 'Soupe de Tomates', 'Tomatensoep'),
    desc: D('Klasik domates çorbası, fesleğen',
            'Classic tomato soup, basil',
            'Soupe de tomates classique, basilic',
            'Klassieke tomatensoep, basilicum'),
    price: 7.00, emoji: '🍅' },

  // ─── TATLI KAHVALTI ────────────────────────────────
  { id: 'french-toast',   cat: 'sweet', name: 'French Toast',
    desc: D('Brioche ekmek, vanilya, akçaağaç şurubu',
            'Brioche, vanilla, maple syrup',
            'Brioche, vanille, sirop d\'érable',
            'Brioche, vanille, ahornsiroop'),
    price: 12.00, emoji: '🍞' },

  { id: 'pancakes',       cat: 'sweet', name: 'American Pancakes',
    desc: D('Klasik Amerikan pankek, taze meyve',
            'Classic American pancakes, fresh fruit',
            'Pancakes américains classiques, fruits frais',
            'Klassieke Amerikaanse pannenkoeken, vers fruit'),
    price: 13.00, emoji: '🥞' },

  { id: 'classic-crepes', cat: 'sweet',
    name: D('Klasik Krep', 'Classic Crepes', 'Crêpes Classiques', 'Klassieke Crêpes'),
    desc: D('İnce Fransız krep, şeker veya bal',
            'Thin French crêpes, sugar or honey',
            'Fines crêpes françaises, sucre ou miel',
            'Dunne Franse crêpes, suiker of honing'),
    price: 9.00, emoji: '🥞' },

  { id: 'banana-crepes',  cat: 'sweet',
    name: D('Muzlu Krep', 'Banana Crepes', 'Crêpes Banane', 'Banaan Crêpes'),
    desc: D('Taze muz, çikolata sos, fındık',
            'Fresh banana, chocolate sauce, hazelnut',
            'Banane fraîche, sauce chocolat, noisettes',
            'Verse banaan, chocoladesaus, hazelnoot'),
    price: 13.00, emoji: '🍌' },

  { id: 'choco-crepes',   cat: 'sweet',
    name: D('Çikolatalı Krep', 'Chocolate Crepes', 'Crêpes Chocolat', 'Chocolade Crêpes'),
    desc: D('Bol çikolata, krema, granola',
            'Plenty of chocolate, cream, granola',
            'Beaucoup de chocolat, crème, granola',
            'Veel chocolade, room, granola'),
    price: 13.00, emoji: '🍫' },

  { id: 'olea-crepes',    cat: 'sweet',
    name: D('Olea Krep', 'Olea Crepes', 'Crêpes Olea', 'Olea Crêpes'),
    desc: D('İmza krep: ev yapımı reçel, peynir, otlar',
            'Signature crêpes: house jam, cheese, herbs',
            'Crêpes signature: confiture maison, fromage, herbes',
            'Signature crêpes: huisgemaakte jam, kaas, kruiden'),
    price: 14.50, emoji: '🥞' },

  // ─── BOWL ──────────────────────────────────────────
  { id: 'banana-choco-bowl', cat: 'bowl', name: 'Banana Chocolate Bowl',
    desc: D('Muzlu acai bowl, çikolata, granola, taze meyve',
            'Banana acai bowl, chocolate, granola, fresh fruit',
            'Bowl açai banane, chocolat, granola, fruits frais',
            'Banaan acai bowl, chocolade, granola, vers fruit'),
    price: 11.00, emoji: '🥣' },

  // ─── KAHVELER ──────────────────────────────────────
  { id: 'espresso',        cat: 'coffee', name: 'Espresso',
    desc: D('Tek shot İtalyan kahvesi', 'Single shot Italian coffee',
            'Un shot de café italien', 'Enkele shot Italiaanse koffie'),
    price: 3.00, emoji: '☕' },

  { id: 'doppio',          cat: 'coffee', name: 'Doppio',
    desc: D('Çift shot espresso', 'Double shot espresso',
            'Double shot d\'espresso', 'Dubbele shot espresso'),
    price: 3.50, emoji: '☕' },

  { id: 'americano',       cat: 'coffee', name: 'Americano',
    desc: D('Espresso + sıcak su', 'Espresso + hot water',
            'Espresso + eau chaude', 'Espresso + heet water'),
    price: 3.50, emoji: '☕' },

  { id: 'cappuccino',      cat: 'coffee', name: 'Cappuccino',
    desc: D('Espresso, buharlanmış süt, köpük', 'Espresso, steamed milk, foam',
            'Espresso, lait vapeur, mousse', 'Espresso, gestoomde melk, schuim'),
    price: 4.00, emoji: '☕' },

  { id: 'latte-macchiato', cat: 'coffee', name: 'Latte Macchiato',
    desc: D('Bol süt, espresso shot', 'Plenty of milk, espresso shot',
            'Beaucoup de lait, shot d\'espresso', 'Veel melk, espresso shot'),
    price: 4.50, emoji: '☕' },

  { id: 'cafe-latte',      cat: 'coffee', name: 'Cafe Latte',
    desc: D('Espresso, buharlanmış süt', 'Espresso, steamed milk',
            'Espresso, lait vapeur', 'Espresso, gestoomde melk'),
    price: 5.00, emoji: '☕' },

  { id: 'iced-latte',      cat: 'coffee', name: 'Iced Latte',
    desc: D('Soğuk latte, buz', 'Cold latte, ice',
            'Latte glacé, glace', 'Koude latte, ijs'),
    price: 5.00, emoji: '🧊' },

  { id: 'iced-americano',  cat: 'coffee', name: 'Iced Americano',
    desc: D('Soğuk americano', 'Cold americano',
            'Americano glacé', 'Koude americano'),
    price: 3.50, emoji: '🧊' },

  { id: 'honey-lime-coffee', cat: 'coffee', name: 'Honey Lime Coffee',
    desc: D('Bal, lime, soğuk kahve', 'Honey, lime, cold coffee',
            'Miel, citron vert, café froid', 'Honing, limoen, koude koffie'),
    price: 6.00, emoji: '🍯' },

  { id: 'turkish-coffee',  cat: 'coffee',
    name: D('Türk Kahvesi', 'Turkish Coffee', 'Café Turc', 'Turkse Koffie'),
    desc: D('Geleneksel Türk kahvesi', 'Traditional Turkish coffee',
            'Café turc traditionnel', 'Traditionele Turkse koffie'),
    price: 4.00, emoji: '☕' },

  // ─── KAFEİNSİZ ─────────────────────────────────────
  { id: 'matcha-latte',     cat: 'caffeine-free', name: 'Matcha Latte',
    desc: D('Japon matcha, buharlanmış süt', 'Japanese matcha, steamed milk',
            'Matcha japonais, lait vapeur', 'Japanse matcha, gestoomde melk'),
    price: 6.50, emoji: '🍵' },

  { id: 'matcha-coconut',   cat: 'caffeine-free', name: 'Matcha Coconut',
    desc: D('Matcha + hindistan cevizi sütü', 'Matcha + coconut milk',
            'Matcha + lait de coco', 'Matcha + kokosmelk'),
    price: 7.50, emoji: '🍵' },

  { id: 'matcha-strawberry',cat: 'caffeine-free', name: 'Matcha Strawberry',
    desc: D('Matcha + taze çilek', 'Matcha + fresh strawberry',
            'Matcha + fraise fraîche', 'Matcha + verse aardbei'),
    price: 7.50, emoji: '🍵' },

  { id: 'matcha-praline',   cat: 'caffeine-free', name: 'Matcha Praline',
    desc: D('Matcha + praline', 'Matcha + praline',
            'Matcha + praliné', 'Matcha + praliné'),
    price: 7.50, emoji: '🍵' },

  { id: 'ube-latte',        cat: 'caffeine-free', name: 'Ube Latte',
    desc: D('Mor patates latte, klasik', 'Purple yam latte, classic',
            'Latte à l\'igname pourpre, classique', 'Paarse yam latte, klassiek'),
    price: 7.50, emoji: '💜' },

  { id: 'ube-strawberry',   cat: 'caffeine-free', name: 'Ube Strawberry',
    desc: D('Ube + çilek', 'Ube + strawberry', 'Ube + fraise', 'Ube + aardbei'),
    price: 7.50, emoji: '💜' },

  { id: 'ube-mango',        cat: 'caffeine-free', name: 'Ube Mango',
    desc: D('Ube + mango', 'Ube + mango', 'Ube + mangue', 'Ube + mango'),
    price: 7.50, emoji: '💜' },

  { id: 'hot-chocolate',    cat: 'caffeine-free',
    name: D('Sıcak Çikolata', 'Hot Chocolate', 'Chocolat Chaud', 'Warme Chocolademelk'),
    desc: D('Bol süt, premium çikolata', 'Plenty of milk, premium chocolate',
            'Beaucoup de lait, chocolat premium', 'Veel melk, premium chocolade'),
    price: 5.00, emoji: '🍫' },

  { id: 'mint-tea',         cat: 'caffeine-free',
    name: D('Taze Naneli Çay', 'Fresh Mint Tea', 'Thé à la Menthe Fraîche', 'Verse Muntthee'),
    desc: D('Taze nane yaprakları', 'Fresh mint leaves',
            'Feuilles de menthe fraîche', 'Verse muntblaadjes'),
    price: 4.50, emoji: '🌿' },

  { id: 'chamomile',        cat: 'caffeine-free',
    name: D('Papatya', 'Chamomile', 'Camomille', 'Kamille'),
    desc: D('Sakinleştirici papatya çayı', 'Soothing chamomile tea',
            'Tisane apaisante à la camomille', 'Rustgevende kamillethee'),
    price: 4.50, emoji: '🌼' },

  { id: 'turkish-tea',      cat: 'caffeine-free',
    name: D('Türk Çayı', 'Turkish Tea', 'Thé Turc', 'Turkse Thee'),
    desc: D('Klasik demli Türk çayı', 'Classic brewed Turkish tea',
            'Thé turc infusé classique', 'Klassiek gezette Turkse thee'),
    price: 3.50, emoji: '🫖' },

  // ─── SMOOTHIE ──────────────────────────────────────
  { id: 'berry-passion',    cat: 'smoothies', name: 'Berry Passion',
    desc: D('Ahududu, çilek, böğürtlen', 'Raspberry, strawberry, blackberry',
            'Framboise, fraise, mûre', 'Framboos, aardbei, braam'),
    price: 8.50, emoji: '🫐' },

  { id: 'tropi-colada',     cat: 'smoothies', name: 'Tropi Colada',
    desc: D('Hindistan cevizi, ananas, mango', 'Coconut, pineapple, mango',
            'Noix de coco, ananas, mangue', 'Kokos, ananas, mango'),
    price: 8.50, emoji: '🥥' },

  { id: 'mango-paradise',   cat: 'smoothies', name: 'Mango Paradise',
    desc: D('Mango, portakal, taze', 'Mango, orange, fresh',
            'Mangue, orange, frais', 'Mango, sinaasappel, vers'),
    price: 8.50, emoji: '🥭' },

  { id: 'mighty-green',     cat: 'smoothies', name: 'Mighty Green',
    desc: D('Ispanak, elma, kivi, zencefil', 'Spinach, apple, kiwi, ginger',
            'Épinards, pomme, kiwi, gingembre', 'Spinazie, appel, kiwi, gember'),
    price: 8.50, emoji: '🥬' },

  { id: 'raspberry-heaven', cat: 'smoothies', name: 'Raspberry Heaven',
    desc: D('Ahududu, muz, vanilya', 'Raspberry, banana, vanilla',
            'Framboise, banane, vanille', 'Framboos, banaan, vanille'),
    price: 8.50, emoji: '🍓' },

  // ─── MİLKSHAKE ─────────────────────────────────────
  { id: 'ms-strawberry',  cat: 'milkshakes',
    name: D('Çilekli Milkshake', 'Strawberry Milkshake', 'Milkshake Fraise', 'Aardbei Milkshake'),
    desc: D('Taze çilek, vanilya dondurması', 'Fresh strawberry, vanilla ice cream',
            'Fraise fraîche, glace vanille', 'Verse aardbei, vanille-ijs'),
    price: 7.00, emoji: '🍓' },

  { id: 'ms-vanilla',     cat: 'milkshakes',
    name: D('Vanilyalı Milkshake', 'Vanilla Milkshake', 'Milkshake Vanille', 'Vanille Milkshake'),
    desc: D('Madagaskar vanilyası', 'Madagascar vanilla',
            'Vanille de Madagascar', 'Madagaskar vanille'),
    price: 7.00, emoji: '🥛' },

  { id: 'ms-chocolate',   cat: 'milkshakes',
    name: D('Çikolatalı Milkshake', 'Chocolate Milkshake', 'Milkshake Chocolat', 'Chocolade Milkshake'),
    desc: D('Bol çikolata, krema', 'Plenty of chocolate, cream',
            'Beaucoup de chocolat, crème', 'Veel chocolade, room'),
    price: 7.00, emoji: '🍫' },

  // ─── MOJITO ────────────────────────────────────────
  { id: 'mojito-classic',   cat: 'mojito',
    name: D('Klasik Mojito', 'Classic Mojito', 'Mojito Classique', 'Klassieke Mojito'),
    desc: D('Nane, lime, soda (alkolsüz)', 'Mint, lime, soda (non-alcoholic)',
            'Menthe, citron vert, soda (sans alcool)', 'Munt, limoen, soda (alcoholvrij)'),
    price: 7.50, emoji: '🍹' },

  { id: 'mojito-passion',   cat: 'mojito', name: 'Passion Mojito',
    desc: D('Çarkıfelek meyvesi, nane, lime', 'Passion fruit, mint, lime',
            'Fruit de la passion, menthe, citron vert', 'Passievrucht, munt, limoen'),
    price: 7.50, emoji: '🍹' },

  { id: 'mojito-strawberry',cat: 'mojito',
    name: D('Çilekli Mojito', 'Strawberry Mojito', 'Mojito Fraise', 'Aardbei Mojito'),
    desc: D('Taze çilek, nane, soda', 'Fresh strawberry, mint, soda',
            'Fraise fraîche, menthe, soda', 'Verse aardbei, munt, soda'),
    price: 7.50, emoji: '🍹' },

  { id: 'mojito-raspberry', cat: 'mojito',
    name: D('Ahudulu Mojito', 'Raspberry Mojito', 'Mojito Framboise', 'Framboos Mojito'),
    desc: D('Ahududu, nane, soda', 'Raspberry, mint, soda',
            'Framboise, menthe, soda', 'Framboos, munt, soda'),
    price: 7.50, emoji: '🍹' },

  // ─── SOFT İÇECEKLER ────────────────────────────────
  { id: 'coca',           cat: 'softs', name: 'Coca-Cola',           desc: '33cl', price: 3.00, emoji: '🥤' },
  { id: 'fanta',          cat: 'softs', name: 'Fanta',               desc: '33cl', price: 3.00, emoji: '🥤' },
  { id: 'sprite',         cat: 'softs', name: 'Sprite',              desc: '33cl', price: 3.00, emoji: '🥤' },
  { id: 'tonic',          cat: 'softs', name: 'Schweppes Tonic',     desc: '33cl', price: 3.00, emoji: '🥤' },
  { id: 'agrume',         cat: 'softs', name: 'Schweppes Agrume',    desc: '33cl', price: 3.00, emoji: '🥤' },
  { id: 'icetea-peach',   cat: 'softs',
    name: D('Ice Tea Şeftali', 'Ice Tea Peach', 'Ice Tea Pêche', 'Ice Tea Perzik'),
    desc: '33cl', price: 3.00, emoji: '🥤' },
  { id: 'icetea-sparkle', cat: 'softs', name: 'Ice Tea Pétillant',
    desc: D('33cl, gazlı', '33cl, sparkling', '33cl, pétillant', '33cl, bruisend'),
    price: 3.00, emoji: '🥤' },
  { id: 'looza-orange',   cat: 'softs',
    name: D('Looza Portakal', 'Looza Orange', 'Looza Orange', 'Looza Sinaasappel'),
    desc: D('Doğal portakal suyu', 'Natural orange juice',
            'Jus d\'orange naturel', 'Natuurlijk sinaasappelsap'),
    price: 3.00, emoji: '🍊' },
  { id: 'looza-apple',    cat: 'softs',
    name: D('Looza Elma', 'Looza Apple', 'Looza Pomme', 'Looza Appel'),
    desc: D('Doğal elma suyu', 'Natural apple juice',
            'Jus de pomme naturel', 'Natuurlijk appelsap'),
    price: 3.00, emoji: '🍎' },
  { id: 'looza-ace',      cat: 'softs', name: 'Looza ACE',
    desc: D('Vitamin meyve suyu', 'Vitamin fruit juice',
            'Jus de fruits vitaminé', 'Vitamine vruchtensap'),
    price: 3.00, emoji: '🥕' },
  { id: 'looza-cherry',   cat: 'softs',
    name: D('Looza Elma-Vişne', 'Looza Apple-Cherry', 'Looza Pomme-Cerise', 'Looza Appel-Kers'),
    desc: D('Doğal meyve suyu', 'Natural fruit juice',
            'Jus de fruits naturel', 'Natuurlijk vruchtensap'),
    price: 3.00, emoji: '🍒' },
  { id: 'sch-pomelo',     cat: 'softs', name: 'Schweppes Pomelo',
    desc: D('Premium pomelo', 'Premium pomelo', 'Pomelo premium', 'Premium pomelo'),
    price: 3.80, emoji: '🥤' },
  { id: 'sch-hibiscus',   cat: 'softs', name: 'Schweppes Hibiscus',
    desc: D('Premium hibiscus', 'Premium hibiscus', 'Hibiscus premium', 'Premium hibiscus'),
    price: 3.80, emoji: '🌺' },
  { id: 'sch-lemon',      cat: 'softs', name: 'Schweppes Lemon',
    desc: D('Premium limon', 'Premium lemon', 'Citron premium', 'Premium citroen'),
    price: 3.80, emoji: '🍋' },
  { id: 'red-bull',       cat: 'softs', name: 'Red Bull',
    desc: D('Enerji içeceği', 'Energy drink', 'Boisson énergisante', 'Energiedrank'),
    price: 4.50, emoji: '⚡' },
  { id: 'spa-still-25',   cat: 'softs',
    name: D('Spa Sade 25cl', 'Spa Still 25cl', 'Spa Plate 25cl', 'Spa Plat 25cl'),
    desc: D('Doğal kaynak suyu', 'Natural spring water',
            'Eau de source naturelle', 'Natuurlijk bronwater'),
    price: 2.50, emoji: '💧' },
  { id: 'spa-spark-25',   cat: 'softs',
    name: D('Spa Maden 25cl', 'Spa Sparkling 25cl', 'Spa Pétillante 25cl', 'Spa Bruisend 25cl'),
    desc: D('Doğal maden suyu', 'Natural sparkling water',
            'Eau pétillante naturelle', 'Natuurlijk bruisend water'),
    price: 2.50, emoji: '💧' },
  { id: 'spa-still-50',   cat: 'softs',
    name: D('Spa Sade 50cl', 'Spa Still 50cl', 'Spa Plate 50cl', 'Spa Plat 50cl'),
    desc: D('Doğal kaynak suyu', 'Natural spring water',
            'Eau de source naturelle', 'Natuurlijk bronwater'),
    price: 4.80, emoji: '💧' },
  { id: 'spa-spark-50',   cat: 'softs',
    name: D('Spa Maden 50cl', 'Spa Sparkling 50cl', 'Spa Pétillante 50cl', 'Spa Bruisend 50cl'),
    desc: D('Doğal maden suyu', 'Natural sparkling water',
            'Eau pétillante naturelle', 'Natuurlijk bruisend water'),
    price: 4.80, emoji: '💧' },

  // ─── KURABİYE & ÇÖREK ──────────────────────────────
  { id: 'apple-cake',         cat: 'pastries',
    name: D('Elmalı Kek', 'Apple Cake', 'Gâteau aux Pommes', 'Appeltaart'),
    desc: D('Ev yapımı, tarçınlı', 'Homemade, with cinnamon',
            'Maison, à la cannelle', 'Huisgemaakt, met kaneel'),
    price: 4.50, emoji: '🍎' },

  { id: 'carrot-cake',        cat: 'pastries',
    name: D('Havuçlu Kek', 'Carrot Cake', 'Carrot Cake', 'Wortelcake'),
    desc: D('Krem peynirli kremalı', 'With cream cheese frosting',
            'Avec glaçage au fromage frais', 'Met roomkaasglazuur'),
    price: 4.50, emoji: '🥕' },

  { id: 'cookie-classic',     cat: 'pastries',
    name: D('Klasik Kurabiye', 'Classic Cookie', 'Cookie Classique', 'Klassieke Cookie'),
    desc: D('Tereyağlı, çikolata damlalı', 'Buttery, chocolate chip',
            'Au beurre, pépites de chocolat', 'Boterachtig, chocoladestukjes'),
    price: 3.00, emoji: '🍪' },

  { id: 'dark-choco-cookie',  cat: 'pastries',
    name: D('Bitter Çikolatalı', 'Dark Chocolate Cookie', 'Cookie Chocolat Noir', 'Pure Chocolade Cookie'),
    desc: D('Yoğun bitter çikolata', 'Intense dark chocolate',
            'Chocolat noir intense', 'Intense pure chocolade'),
    price: 3.00, emoji: '🍪' },

  { id: 'croissant',          cat: 'pastries',
    name: D('Kruvasan', 'Croissant', 'Croissant', 'Croissant'),
    desc: D('Tereyağlı, taze fırınlanmış', 'Buttery, freshly baked',
            'Au beurre, fraîchement cuit', 'Boterachtig, vers gebakken'),
    price: 3.00, emoji: '🥐' },

  { id: 'pain-au-chocolat',   cat: 'pastries', name: 'Pain au Chocolat',
    desc: D('Çikolatalı kruvasan', 'Chocolate-filled croissant',
            'Croissant au chocolat', 'Croissant met chocolade'),
    price: 3.00, emoji: '🥐' },

  // ─── TATLILAR ──────────────────────────────────────
  { id: 'san-sebastian',      cat: 'desserts', name: 'San Sebastián',
    desc: D('Yanık üstlü Bask cheesecake', 'Burnt Basque cheesecake',
            'Cheesecake basque brûlé', 'Verbrande Baskische cheesecake'),
    price: 9.50,  emoji: '🍰' },

  { id: 'cheesecake-pistachio',cat: 'desserts',
    name: D('Antep Fıstıklı Cheesecake', 'Pistachio Cheesecake', 'Cheesecake Pistache', 'Pistache Cheesecake'),
    desc: D('Taze fıstık üstüne', 'Topped with fresh pistachios',
            'Garni de pistaches fraîches', 'Met verse pistaches'),
    price: 9.50,  emoji: '🥮' },

  { id: 'tiramisu',           cat: 'desserts', name: 'Tiramisu Pull Me',
    desc: D('Klasik İtalyan tiramisu', 'Classic Italian tiramisu',
            'Tiramisu italien classique', 'Klassieke Italiaanse tiramisu'),
    price: 11.50, emoji: '🍰' },

  { id: 'cheesecake',         cat: 'desserts', name: 'Cheesecake',
    desc: D('New York usulü, klasik', 'New York style, classic',
            'Style New York, classique', 'New York stijl, klassiek'),
    price: 8.50,  emoji: '🍰' },

  { id: 'brownie',            cat: 'desserts', name: 'Brownie',
    desc: D('Sıcak çikolatalı brownie', 'Warm chocolate brownie',
            'Brownie au chocolat tiède', 'Warme chocoladebrownie'),
    price: 8.50,  emoji: '🍫' },

  { id: 'lava-cake',          cat: 'desserts',
    name: D('Çikolatalı Lava Kek', 'Chocolate Lava Cake', 'Coulant au Chocolat', 'Chocolade Lavakoek'),
    desc: D('Akan çikolatalı, sıcak', 'Molten chocolate, warm',
            'Cœur fondant au chocolat, tiède', 'Smeltende chocolade, warm'),
    price: 8.50,  emoji: '🍫' },

  { id: '3-agrumes',          cat: 'desserts', name: '3 Agrumes',
    desc: D('Üç narenciyeli özel tatlı', 'Special dessert with three citrus fruits',
            'Dessert spécial aux trois agrumes', 'Speciaal dessert met drie citrusvruchten'),
    price: 8.50,  emoji: '🍊' },

  { id: 'creme-brulee',       cat: 'desserts', name: 'Crème Brûlée',
    desc: D('Klasik Fransız tatlısı, çikolata', 'Classic French dessert, chocolate',
            'Dessert français classique, chocolat', 'Klassiek Frans dessert, chocolade'),
    price: 8.50,  emoji: '🍮' },

  { id: 'coffee-bean',        cat: 'desserts', name: 'Coffee Bean',
    desc: D('Kahve bazlı imza tatlı', 'Coffee-based signature dessert',
            'Dessert signature à base de café', 'Koffie-gebaseerd signature dessert'),
    price: 8.50,  emoji: '☕' },

  { id: 'pistachio-orange',   cat: 'desserts', name: 'Pistachio Orange Blossom',
    desc: D('Antep fıstığı, portakal çiçeği', 'Pistachio, orange blossom',
            'Pistache, fleur d\'oranger', 'Pistache, oranjebloesem'),
    price: 8.50,  emoji: '🍊' },

  { id: 'passion',            cat: 'desserts', name: 'Passion',
    desc: D('Çarkıfelek meyvesi tatlısı', 'Passion fruit dessert',
            'Dessert au fruit de la passion', 'Passievrucht dessert'),
    price: 8.50,  emoji: '💛' },

  { id: 'all-nutty',          cat: 'desserts', name: 'All Nutty',
    desc: D('Karışık kuruyemişli imza', 'Mixed nuts signature',
            'Signature aux fruits secs mélangés', 'Signature met gemengde noten'),
    price: 8.50,  emoji: '🥜' },

  { id: 'poire-speculoos',    cat: 'desserts', name: 'Poire au Spéculoos',
    desc: D('Armut + spéculoos kreması', 'Pear + speculoos cream',
            'Poire + crème de spéculoos', 'Peer + speculoos crème'),
    price: 8.50,  emoji: '🍐' },
];

export function getMenuItem(id) {
  return MENU.find(i => i.id === id);
}

export function getItemsByCategory(catId) {
  return MENU.filter(i => i.cat === catId);
}
