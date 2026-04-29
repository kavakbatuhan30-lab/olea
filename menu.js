// Olea menü verisi — kategoriler ve tüm ürünler
// Fiyatlar EUR cinsinden (Brüksel)

export const CATEGORIES = [
  { id: 'breakfast',      name: 'Kahvaltı',         emoji: '🍳' },
  { id: 'toast',          name: 'Toast',            emoji: '🥪' },
  { id: 'eggs',           name: 'Yumurta',          emoji: '🍳' },
  { id: 'salad',          name: 'Salata',           emoji: '🥗' },
  { id: 'soup',           name: 'Çorba',            emoji: '🍲' },
  { id: 'sweet',          name: 'Tatlı Kahvaltı',   emoji: '🥞' },
  { id: 'bowl',           name: 'Bowl',             emoji: '🥣' },
  { id: 'coffee',         name: 'Kahve',            emoji: '☕' },
  { id: 'caffeine-free',  name: 'Kafeinsiz',        emoji: '🍵' },
  { id: 'smoothies',      name: 'Smoothie',         emoji: '🍓' },
  { id: 'milkshakes',     name: 'Milkshake',        emoji: '🥤' },
  { id: 'mojito',         name: 'Mojito',           emoji: '🍹' },
  { id: 'softs',          name: 'İçecekler',        emoji: '🥤' },
  { id: 'pastries',       name: 'Kurabiye & Çörek', emoji: '🥐' },
  { id: 'desserts',       name: 'Tatlılar',         emoji: '🍰' },
];

export const MENU = [
  // ─── KAHVALTI ──────────────────────────────────────
  { id: 'serpme',         cat: 'breakfast', name: 'Olea Serpme',           desc: '2 kişilik klasik kahvaltı tabağı, peynirler, zeytin, reçeller, simit, börek',  price: 25.00, photo: 'photos/serpme-platter.jpg', priceNote: 'kişi başı' },
  { id: 'simit',          cat: 'breakfast', name: 'Simit',                 desc: 'Geleneksel Türk simidi tabağı, peynirler ve mevsim sebzeleriyle',              price: 16.00, photo: 'photos/simit-board.jpg' },
  { id: 'french',         cat: 'breakfast', name: 'French',                desc: 'Avrupa kahvaltı tabağı, peynir çeşitleri, jambon, taze ekmek',                 price: 17.00, photo: 'photos/french-board.jpg' },
  { id: 'mirror-eggs',    cat: 'breakfast', name: 'Sahanda Yumurta',       desc: 'Tereyağında pişmiş, ekstra olarak',                                            price: 5.50,  emoji: '🍳' },
  { id: 'menemen',        cat: 'breakfast', name: 'Menemen',               desc: 'Domates, biber, soğan ile özel yumurta',                                       price: 7.00,  emoji: '🍳' },
  { id: 'sucuk-eggs',     cat: 'breakfast', name: 'Sucuklu Yumurta',       desc: 'Çıtır sucuk üzerine sahanda yumurta',                                          price: 7.00,  emoji: '🍳' },
  { id: 'kuymak',         cat: 'breakfast', name: 'Kuymak',                desc: 'Karadeniz mısır unu ve peynir özel yemeği',                                    price: 7.00,  emoji: '🧀' },
  { id: 'halloumi',       cat: 'breakfast', name: 'Hellim Peyniri',        desc: 'Izgarada altın renginde, ekstra olarak',                                       price: 7.00,  emoji: '🧀' },
  { id: 'avocado',        cat: 'breakfast', name: 'Avokado',               desc: 'Taze dilimlenmiş avokado, ekstra',                                             price: 3.50,  emoji: '🥑' },
  { id: 'borek-cigar',    cat: 'breakfast', name: 'Sigara Böreği',         desc: 'Çıtır peynirli sigara böreği',                                                 price: 7.00,  emoji: '🥟' },
  { id: 'pisi',           cat: 'breakfast', name: 'Pişi (5 adet)',         desc: 'Geleneksel sıcak hamur işi',                                                   price: 7.00,  emoji: '🥖' },
  { id: 'bread-basket',   cat: 'breakfast', name: 'Ekmek Sepeti',          desc: 'Çeşitli taze ekmekler',                                                        price: 4.50,  emoji: '🥖' },

  // ─── TOAST ─────────────────────────────────────────
  { id: 'original-avo',   cat: 'toast', name: 'Original Avo',              desc: 'Avokado ezmesi, taze ekmek, mevsim otları',                                    price: 14.00, photo: 'photos/original-avo.jpg' },
  { id: 'naughty-salmon', cat: 'toast', name: 'Naughty Salmon',            desc: 'Tütsülenmiş somon, krem peynir, kapari, soğan',                                price: 15.00, photo: 'photos/naughty-salmon.jpg' },
  { id: 'olea-toast',     cat: 'toast', name: 'Olea Toast',                desc: 'İmza toast: hellim, avokado, mevsim otları, tahıllı ekmek',                    price: 16.50, photo: 'photos/olea-toast.jpg' },
  { id: 'benedict-green', cat: 'toast', name: 'Benedict Green',            desc: 'Yeşil hollandaise, poşe yumurta, ıspanak, taze ekmek',                         price: 17.00, photo: 'photos/benedict-green.jpg' },

  // ─── ÖZEL YUMURTALAR ───────────────────────────────
  { id: 'cilbir',         cat: 'eggs', name: 'Çılbır',                     desc: 'Türk usulü poşe yumurta, sarımsaklı yoğurt, közlenmiş tereyağı',               price: 15.00, photo: 'photos/cilbir-egg.jpg' },
  { id: 'omelette',       cat: 'eggs', name: 'Omlet',                      desc: 'Klasik Fransız omleti, mevsim otları',                                         price: 13.00, emoji: '🍳' },
  { id: 'shakshuka',      cat: 'eggs', name: 'Shakshuka',                  desc: 'Domates, biber sosunda poşe yumurta',                                          price: 14.00, emoji: '🍳' },

  // ─── SALATALAR ─────────────────────────────────────
  { id: 'burrata-salad',  cat: 'salad', name: 'Burrata Salata',            desc: 'Taze burrata, kiraz domates, fesleğen, balzamik',                              price: 15.00, photo: 'photos/burrata-salad.jpg' },
  { id: 'olea-salad',     cat: 'salad', name: 'Olea Salata',               desc: 'İmza salata: roka, hellim, avokado, nar',                                      price: 16.50, photo: 'photos/olea-salad-new.jpg' },

  // ─── ÇORBALAR ──────────────────────────────────────
  { id: 'lentil-soup',    cat: 'soup', name: 'Mercimek Çorbası',           desc: 'Kırmızı mercimek, kimyon, limon',                                              price: 7.00, emoji: '🍲' },
  { id: 'tomato-soup',    cat: 'soup', name: 'Domates Çorbası',            desc: 'Klasik domates çorbası, fesleğen',                                             price: 7.00, emoji: '🍅' },

  // ─── TATLI KAHVALTI ────────────────────────────────
  { id: 'french-toast',   cat: 'sweet', name: 'French Toast',              desc: 'Brioche ekmek, vanilya, akçaağaç şurubu',                                      price: 12.00, emoji: '🍞' },
  { id: 'pancakes',       cat: 'sweet', name: 'American Pancakes',         desc: 'Klasik Amerikan pankek, taze meyve',                                           price: 13.00, emoji: '🥞' },
  { id: 'classic-crepes', cat: 'sweet', name: 'Klasik Krep',               desc: 'İnce Fransız krep, şeker veya bal',                                            price: 9.00,  emoji: '🥞' },
  { id: 'banana-crepes',  cat: 'sweet', name: 'Muzlu Krep',                desc: 'Taze muz, çikolata sos, fındık',                                               price: 13.00, emoji: '🍌' },
  { id: 'choco-crepes',   cat: 'sweet', name: 'Çikolatalı Krep',           desc: 'Bol çikolata, krema, granola',                                                 price: 13.00, emoji: '🍫' },
  { id: 'olea-crepes',    cat: 'sweet', name: 'Olea Krep',                 desc: 'İmza krep: ev yapımı reçel, peynir, otlar',                                    price: 14.50, emoji: '🥞' },

  // ─── BOWL ──────────────────────────────────────────
  { id: 'banana-choco-bowl', cat: 'bowl', name: 'Banana Chocolate Bowl',   desc: 'Muzlu acai bowl, çikolata, granola, taze meyve',                               price: 11.00, emoji: '🥣' },

  // ─── KAHVELER ──────────────────────────────────────
  { id: 'espresso',        cat: 'coffee', name: 'Espresso',                desc: 'Tek shot İtalyan kahvesi',                                                     price: 3.00, emoji: '☕' },
  { id: 'doppio',          cat: 'coffee', name: 'Doppio',                  desc: 'Çift shot espresso',                                                           price: 3.50, emoji: '☕' },
  { id: 'americano',       cat: 'coffee', name: 'Americano',               desc: 'Espresso + sıcak su',                                                          price: 3.50, emoji: '☕' },
  { id: 'cappuccino',      cat: 'coffee', name: 'Cappuccino',              desc: 'Espresso, buharlanmış süt, köpük',                                             price: 4.00, emoji: '☕' },
  { id: 'latte-macchiato', cat: 'coffee', name: 'Latte Macchiato',         desc: 'Bol süt, espresso shot',                                                       price: 4.50, emoji: '☕' },
  { id: 'cafe-latte',      cat: 'coffee', name: 'Cafe Latte',              desc: 'Espresso, buharlanmış süt',                                                    price: 5.00, emoji: '☕' },
  { id: 'iced-latte',      cat: 'coffee', name: 'Iced Latte',              desc: 'Soğuk latte, buz',                                                             price: 5.00, emoji: '🧊' },
  { id: 'iced-americano',  cat: 'coffee', name: 'Iced Americano',          desc: 'Soğuk americano',                                                              price: 3.50, emoji: '🧊' },
  { id: 'honey-lime-coffee', cat: 'coffee', name: 'Honey Lime Coffee',     desc: 'Bal, lime, soğuk kahve',                                                       price: 6.00, emoji: '🍯' },
  { id: 'turkish-coffee',  cat: 'coffee', name: 'Türk Kahvesi',            desc: 'Geleneksel Türk kahvesi',                                                      price: 4.00, emoji: '☕' },

  // ─── KAFEİNSİZ ─────────────────────────────────────
  { id: 'matcha-latte',     cat: 'caffeine-free', name: 'Matcha Latte',     desc: 'Japon matcha, buharlanmış süt',                                               price: 6.50, emoji: '🍵' },
  { id: 'matcha-coconut',   cat: 'caffeine-free', name: 'Matcha Coconut',   desc: 'Matcha + hindistan cevizi sütü',                                              price: 7.50, emoji: '🍵' },
  { id: 'matcha-strawberry',cat: 'caffeine-free', name: 'Matcha Strawberry',desc: 'Matcha + taze çilek',                                                          price: 7.50, emoji: '🍵' },
  { id: 'matcha-praline',   cat: 'caffeine-free', name: 'Matcha Praline',   desc: 'Matcha + praline',                                                            price: 7.50, emoji: '🍵' },
  { id: 'ube-latte',        cat: 'caffeine-free', name: 'Ube Latte',        desc: 'Mor patates latte, klasik',                                                   price: 7.50, emoji: '💜' },
  { id: 'ube-strawberry',   cat: 'caffeine-free', name: 'Ube Strawberry',   desc: 'Ube + çilek',                                                                 price: 7.50, emoji: '💜' },
  { id: 'ube-mango',        cat: 'caffeine-free', name: 'Ube Mango',        desc: 'Ube + mango',                                                                 price: 7.50, emoji: '💜' },
  { id: 'hot-chocolate',    cat: 'caffeine-free', name: 'Sıcak Çikolata',   desc: 'Bol süt, premium çikolata',                                                   price: 5.00, emoji: '🍫' },
  { id: 'mint-tea',         cat: 'caffeine-free', name: 'Taze Naneli Çay',  desc: 'Taze nane yaprakları',                                                        price: 4.50, emoji: '🌿' },
  { id: 'chamomile',        cat: 'caffeine-free', name: 'Papatya',          desc: 'Sakinleştirici papatya çayı',                                                 price: 4.50, emoji: '🌼' },
  { id: 'turkish-tea',      cat: 'caffeine-free', name: 'Türk Çayı',        desc: 'Klasik demli Türk çayı',                                                      price: 3.50, emoji: '🫖' },

  // ─── SMOOTHIE ──────────────────────────────────────
  { id: 'berry-passion',    cat: 'smoothies', name: 'Berry Passion',        desc: 'Ahududu, çilek, böğürtlen',                                                   price: 8.50, emoji: '🫐' },
  { id: 'tropi-colada',     cat: 'smoothies', name: 'Tropi Colada',         desc: 'Hindistan cevizi, ananas, mango',                                             price: 8.50, emoji: '🥥' },
  { id: 'mango-paradise',   cat: 'smoothies', name: 'Mango Paradise',       desc: 'Mango, portakal, taze',                                                       price: 8.50, emoji: '🥭' },
  { id: 'mighty-green',     cat: 'smoothies', name: 'Mighty Green',         desc: 'Ispanak, elma, kivi, zencefil',                                               price: 8.50, emoji: '🥬' },
  { id: 'raspberry-heaven', cat: 'smoothies', name: 'Raspberry Heaven',     desc: 'Ahududu, muz, vanilya',                                                       price: 8.50, emoji: '🍓' },

  // ─── MİLKSHAKE ─────────────────────────────────────
  { id: 'ms-strawberry',  cat: 'milkshakes', name: 'Çilekli Milkshake',     desc: 'Taze çilek, vanilya dondurması',                                              price: 7.00, emoji: '🍓' },
  { id: 'ms-vanilla',     cat: 'milkshakes', name: 'Vanilyalı Milkshake',   desc: 'Madagaskar vanilyası',                                                        price: 7.00, emoji: '🥛' },
  { id: 'ms-chocolate',   cat: 'milkshakes', name: 'Çikolatalı Milkshake',  desc: 'Bol çikolata, krema',                                                         price: 7.00, emoji: '🍫' },

  // ─── MOJITO ────────────────────────────────────────
  { id: 'mojito-classic',   cat: 'mojito', name: 'Klasik Mojito',           desc: 'Nane, lime, soda (alkolsüz)',                                                 price: 7.50, emoji: '🍹' },
  { id: 'mojito-passion',   cat: 'mojito', name: 'Passion Mojito',          desc: 'Çarkıfelek meyvesi, nane, lime',                                              price: 7.50, emoji: '🍹' },
  { id: 'mojito-strawberry',cat: 'mojito', name: 'Çilekli Mojito',          desc: 'Taze çilek, nane, soda',                                                      price: 7.50, emoji: '🍹' },
  { id: 'mojito-raspberry', cat: 'mojito', name: 'Ahudulu Mojito',          desc: 'Ahududu, nane, soda',                                                         price: 7.50, emoji: '🍹' },

  // ─── SOFT İÇECEKLER ────────────────────────────────
  { id: 'coca',           cat: 'softs', name: 'Coca-Cola',                  desc: '33cl',                                                                        price: 3.00, emoji: '🥤' },
  { id: 'fanta',          cat: 'softs', name: 'Fanta',                      desc: '33cl',                                                                        price: 3.00, emoji: '🥤' },
  { id: 'sprite',         cat: 'softs', name: 'Sprite',                     desc: '33cl',                                                                        price: 3.00, emoji: '🥤' },
  { id: 'tonic',          cat: 'softs', name: 'Schweppes Tonic',            desc: '33cl',                                                                        price: 3.00, emoji: '🥤' },
  { id: 'agrume',         cat: 'softs', name: 'Schweppes Agrume',           desc: '33cl',                                                                        price: 3.00, emoji: '🥤' },
  { id: 'icetea-peach',   cat: 'softs', name: 'Ice Tea Şeftali',            desc: '33cl',                                                                        price: 3.00, emoji: '🥤' },
  { id: 'icetea-sparkle', cat: 'softs', name: 'Ice Tea Pétillant',          desc: '33cl, gazlı',                                                                 price: 3.00, emoji: '🥤' },
  { id: 'looza-orange',   cat: 'softs', name: 'Looza Portakal',             desc: 'Doğal portakal suyu',                                                         price: 3.00, emoji: '🍊' },
  { id: 'looza-apple',    cat: 'softs', name: 'Looza Elma',                 desc: 'Doğal elma suyu',                                                             price: 3.00, emoji: '🍎' },
  { id: 'looza-ace',      cat: 'softs', name: 'Looza ACE',                  desc: 'Vitamin meyve suyu',                                                          price: 3.00, emoji: '🥕' },
  { id: 'looza-cherry',   cat: 'softs', name: 'Looza Elma-Vişne',           desc: 'Doğal meyve suyu',                                                            price: 3.00, emoji: '🍒' },
  { id: 'sch-pomelo',     cat: 'softs', name: 'Schweppes Pomelo',           desc: 'Premium pomelo',                                                              price: 3.80, emoji: '🥤' },
  { id: 'sch-hibiscus',   cat: 'softs', name: 'Schweppes Hibiscus',         desc: 'Premium hibiscus',                                                            price: 3.80, emoji: '🌺' },
  { id: 'sch-lemon',      cat: 'softs', name: 'Schweppes Lemon',            desc: 'Premium limon',                                                               price: 3.80, emoji: '🍋' },
  { id: 'red-bull',       cat: 'softs', name: 'Red Bull',                   desc: 'Enerji içeceği',                                                              price: 4.50, emoji: '⚡' },
  { id: 'spa-still-25',   cat: 'softs', name: 'Spa Sade 25cl',              desc: 'Doğal kaynak suyu',                                                           price: 2.50, emoji: '💧' },
  { id: 'spa-spark-25',   cat: 'softs', name: 'Spa Maden 25cl',             desc: 'Doğal maden suyu',                                                            price: 2.50, emoji: '💧' },
  { id: 'spa-still-50',   cat: 'softs', name: 'Spa Sade 50cl',              desc: 'Doğal kaynak suyu',                                                           price: 4.80, emoji: '💧' },
  { id: 'spa-spark-50',   cat: 'softs', name: 'Spa Maden 50cl',             desc: 'Doğal maden suyu',                                                            price: 4.80, emoji: '💧' },

  // ─── KURABİYE & ÇÖREK ──────────────────────────────
  { id: 'apple-cake',         cat: 'pastries', name: 'Elmalı Kek',          desc: 'Ev yapımı, tarçınlı',                                                         price: 4.50, emoji: '🍎' },
  { id: 'carrot-cake',        cat: 'pastries', name: 'Havuçlu Kek',         desc: 'Krem peynirli kremalı',                                                       price: 4.50, emoji: '🥕' },
  { id: 'cookie-classic',     cat: 'pastries', name: 'Klasik Kurabiye',     desc: 'Tereyağlı, çikolata damlalı',                                                 price: 3.00, emoji: '🍪' },
  { id: 'dark-choco-cookie',  cat: 'pastries', name: 'Bitter Çikolatalı',   desc: 'Yoğun bitter çikolata',                                                       price: 3.00, emoji: '🍪' },
  { id: 'croissant',          cat: 'pastries', name: 'Kruvasan',            desc: 'Tereyağlı, taze fırınlanmış',                                                 price: 3.00, emoji: '🥐' },
  { id: 'pain-au-chocolat',   cat: 'pastries', name: 'Pain au Chocolat',    desc: 'Çikolatalı kruvasan',                                                         price: 3.00, emoji: '🥐' },

  // ─── TATLILAR ──────────────────────────────────────
  { id: 'san-sebastian',      cat: 'desserts', name: 'San Sebastián',       desc: 'Yanık üstlü Bask cheesecake',                                                 price: 9.50,  emoji: '🍰' },
  { id: 'cheesecake-pistachio',cat: 'desserts', name: 'Antep Fıstıklı Cheesecake', desc: 'Taze fıstık üstüne',                                                   price: 9.50,  emoji: '🥮' },
  { id: 'tiramisu',           cat: 'desserts', name: 'Tiramisu Pull Me',    desc: 'Klasik İtalyan tiramisu',                                                     price: 11.50, emoji: '🍰' },
  { id: 'cheesecake',         cat: 'desserts', name: 'Cheesecake',          desc: 'New York usulü, klasik',                                                      price: 8.50,  emoji: '🍰' },
  { id: 'brownie',            cat: 'desserts', name: 'Brownie',             desc: 'Sıcak çikolatalı brownie',                                                    price: 8.50,  emoji: '🍫' },
  { id: 'lava-cake',          cat: 'desserts', name: 'Çikolatalı Lava Kek', desc: 'Akan çikolatalı, sıcak',                                                      price: 8.50,  emoji: '🍫' },
  { id: '3-agrumes',          cat: 'desserts', name: '3 Agrumes',           desc: 'Üç narenciyeli özel tatlı',                                                   price: 8.50,  emoji: '🍊' },
  { id: 'creme-brulee',       cat: 'desserts', name: 'Crème Brûlée',        desc: 'Klasik Fransız tatlısı, çikolata',                                            price: 8.50,  emoji: '🍮' },
  { id: 'coffee-bean',        cat: 'desserts', name: 'Coffee Bean',         desc: 'Kahve bazlı imza tatlı',                                                      price: 8.50,  emoji: '☕' },
  { id: 'pistachio-orange',   cat: 'desserts', name: 'Pistachio Orange Blossom', desc: 'Antep fıstığı, portakal çiçeği',                                         price: 8.50,  emoji: '🍊' },
  { id: 'passion',            cat: 'desserts', name: 'Passion',             desc: 'Çarkıfelek meyvesi tatlısı',                                                  price: 8.50,  emoji: '💛' },
  { id: 'all-nutty',          cat: 'desserts', name: 'All Nutty',           desc: 'Karışık kuruyemişli imza',                                                    price: 8.50,  emoji: '🥜' },
  { id: 'poire-speculoos',    cat: 'desserts', name: 'Poire au Spéculoos',  desc: 'Armut + spéculoos kreması',                                                   price: 8.50,  emoji: '🍐' },
];

export function getMenuItem(id) {
  return MENU.find(i => i.id === id);
}

export function getItemsByCategory(catId) {
  return MENU.filter(i => i.cat === catId);
}
