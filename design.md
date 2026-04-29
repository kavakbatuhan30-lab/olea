# Olea — Masada Sipariş Sistemi · Tasarım

**Tarih:** 2026-04-29
**Hedef:** Yarınki patron sunumu için çalışan bir QR-masa sipariş demosu

## 1. Amaç

Olea restoranı (olea-menu.netlify.app) için QR-tabanlı masada sipariş sistemi. Müşteri masadaki QR'ı okutur, menüyü görür, sipariş verir; personel canlı admin panelinden siparişleri takip eder. Tek geliştiricilik, ~5-6 saatlik bütçe.

## 2. Bağlam

- Olea: Brüksel'de Mediterranean kahvaltı/brunch restoranı, ~80+ ürün, 15 kategori
- Mevcut menü sitesi sadece statik (sipariş yok)
- 10 hero ürün fotoğrafı verilmiş (proje kökünde)
- Yarın patron demosu — "wow" anı: müşteriden sipariş → admin panelde anında belirsin
- Demo, tek laptop'ta iki tarayıcı penceresiyle çalışacak (Faz 1). Faz 2'de Firebase ile gerçek cihazlar arası.

## 3. Kullanıcı Akışları

### Müşteri
1. QR okutur → `index.html?masa=5`
2. Üstte masa rozetiyle Olea menüsünü görür
3. Kategoriler arası gezer, ürünleri sepete ekler
4. Sepeti açar, opsiyonel not yazar, "Sipariş Ver" basar
5. Onay ekranı: "Siparişiniz mutfağa iletildi · Masa 5 · ~15 dk"
6. Açık kalırsa durum güncellemelerini görür ("Hazırlanıyor", "Hazır")

### Personel
1. `admin.html` açar (tablet/laptop)
2. Aktif siparişleri canlı listede görür
3. Yeni sipariş → bip sesi + yeşil flash + masaüstü bildirimi
4. Durum güncel: Yeni → Hazırlanıyor → Hazır → Servis Edildi
5. Servis edilenler arşive düşer

## 4. Görsel Sistem

| | |
|---|---|
| Zemin | warm cream `#FBF7F0` |
| Birincil metin | charcoal `#2C2A26` |
| İkincil metin | muted `#7A746B` |
| Aksan | warm gold `#B8956A` |
| Yardımcı | olive `#5A6B45` |
| Kart kenarı | `#E8E0D0` |
| Tipografi | Inter (Google Fonts) + system-ui fallback |
| Spacing | bol whitespace, cömert padding |
| Köşeler | yumuşak (12-16px) |
| Gölgeler | hafif (`shadow-sm`) |

Olea referansı: minimalist, foto-ağırlıklı, dekoratif unsur az, kategori bold başlıklarla ayrılmış.

## 5. Sayfalar

### 5.1 `index.html` — Müşteri Menüsü

**Header (sticky):**
- Olea logo (yazı, ince serif/sans)
- Masa rozeti: nokta (yeşil) + "Masa N · Hoşgeldiniz"
- Sağda dil placeholder (FR/EN/NL/TR — TR aktif, diğerleri pasif/sonra)

**Kategori navigasyonu (sticky, header altında):**
Yatay scroll, aktif kategori altın çizgiyle:
Petit Déjeuner / Toast / Œufs / Salade / Soupe / Sucré / Bowl / Café / Sans Caféine / Smoothies / Milkshakes / Mojito / Softs / Pâtisseries / Desserts

**İçerik:**
- Her kategori için `<section>` başlık + ürün grid'i (mobilde 1 kolon, geniş ekranda 2)
- Ürün kartı:
  - Fotoğraf (varsa) veya zarif placeholder (kategori rengi blok + küçük emoji)
  - İsim (medium weight)
  - Açıklama (1-2 satır, muted)
  - Fiyat (gold) + "+" butonu (yuvarlak, gold border)

**Yüzen sepet pill (sağ alt):**
- 0 ürünken gizli
- "3 ürün · €42.50" (gold zemin, beyaz metin)
- Tıkla → sepet modal

**Sepet modal (full-screen mobilde):**
- Üstte X kapat, "Sepetin"
- Ürün satırları: foto thumbnail + isim + fiyat, sağda - / qty / + butonları
- Boş alanda "Sipariş Notu (opsiyonel)" textarea
- Alt: toplam (büyük gold) + "Sipariş Ver" butonu (full-width)

**Onay ekranı:**
- Ortalanmış: tik ikonu, "Siparişiniz alındı"
- "Masa N · ~15 dakika"
- Durum çubuğu: Yeni · Hazırlanıyor · Hazır · Servis (canlı güncellenir)
- "Yeni sipariş ver" butonu (tekrar menüye döner)

### 5.2 `admin.html` — Personel Paneli

**Header:**
- Olea logo + "Personel Paneli"
- Sayaç: "Aktif: 3" (gold rozet)
- Bildirim ikonu (ses on/off)

**Sipariş kartları (grid, 1-3 kolon):**
- Üst: "Masa N" (büyük) · zaman ("2 dk önce")
- Ürün listesi: "2× Çılbır", "1× Latte"
- Not (varsa): italic, kutuda
- Toplam (gold)
- Durum butonları (mevcut durum vurgulu):
  - Yeni → "Hazırlanıyor" butonu
  - Hazırlanıyor → "Hazır" butonu
  - Hazır → "Servis Edildi" butonu
  - Servis Edildi → otomatik arşive düşer (bu kart kaybolur)

**Yeni sipariş geldiğinde:**
- Kart üstten slide-in animasyon
- 1 sn yeşil halka pulse
- Bip sesi (`new-order.mp3` veya Web Audio API beep)
- Browser notification (izinliyse): "Yeni sipariş — Masa 5"

**Arşiv (alt):**
- Daraltılmış, "Bugün servis edilen: 12" tıkla aç

## 6. Veri Modeli

```js
// localStorage anahtar: 'olea:orders' (JSON array)
// localStorage anahtar: 'olea:archive' (JSON array)

const Order = {
  id: 'uuid',           // crypto.randomUUID()
  table: 5,
  items: [
    { id: 'cilbir', name: 'Çılbır Turkish Egg', price: 15.00, qty: 2 }
  ],
  notes: 'az pişmiş yumurta',  // opsiyonel
  total: 30.00,
  status: 'new',        // 'new' | 'preparing' | 'ready' | 'served'
  createdAt: 1714400000000,
  updatedAt: 1714400000000,
};

const MenuItem = {
  id: 'cilbir',         // slug
  category: 'oeufs',
  name: 'Çılbır Turkish Egg',
  description: 'Yoğurt, tereyağı, közlenmiş biber',
  price: 15.00,
  photo: 'photos/cilbir-egg.jpg',  // opsiyonel
  emoji: '🍳',          // fallback
};
```

## 7. Backend / Sync Stratejisi

### Faz 1 (yarın): localStorage + BroadcastChannel

```js
// store.js (özet)
const channel = new BroadcastChannel('olea');

export function placeOrder(order) {
  const orders = getOrders();
  orders.push(order);
  localStorage.setItem('olea:orders', JSON.stringify(orders));
  channel.postMessage({ type: 'order:new', order });
}

export function updateStatus(id, status) {
  const orders = getOrders();
  const o = orders.find(x => x.id === id);
  if (!o) return;
  o.status = status;
  o.updatedAt = Date.now();
  if (status === 'served') {
    // arşive taşı
    const archive = JSON.parse(localStorage.getItem('olea:archive') || '[]');
    archive.push(o);
    localStorage.setItem('olea:archive', JSON.stringify(archive));
    localStorage.setItem('olea:orders', JSON.stringify(orders.filter(x => x.id !== id)));
  } else {
    localStorage.setItem('olea:orders', JSON.stringify(orders));
  }
  channel.postMessage({ type: 'order:update', id, status });
}

export function subscribe(handler) {
  channel.onmessage = (e) => handler(e.data);
  return () => { channel.onmessage = null; };
}
```

Aynı tarayıcıda iki sekme arasında real-time. Demo için yeterli.

### Faz 2 (zaman kalırsa): Firebase Firestore

Aynı `store.js` arayüzü, içinde Firestore çağrıları. Veri modeli aynı.

## 8. Dosya Yapısı

```
3dqrmenu/
├── index.html          # müşteri girişi (Tailwind, React, Babel CDN)
├── admin.html          # admin girişi (aynı CDN'ler)
├── menu.js             # tüm Olea ürünleri (data)
├── app.jsx             # müşteri React komponenti
├── admin.jsx           # admin React komponenti
├── store.js            # localStorage + BroadcastChannel sarmalı
├── styles.css          # Tailwind override + custom
├── photos/             # ürün fotoğrafları (mevcut 10 + sonraki)
│   ├── benedict-green.jpg
│   ├── burrata-salad.jpg
│   └── ... (toplam 10)
├── design.md           # bu dosya
└── code.html           # mevcut 3D iskele (sonra entegre)
```

## 9. Teknik Stack

- React 18 — `esm.sh/react@18` (CDN, build YOK)
- Tailwind CSS — CDN (`cdn.tailwindcss.com`)
- Babel Standalone — CDN (JSX'i tarayıcıda transpile eder, demo için OK)
- ES modules — `<script type="module">`
- Web platform API'leri: `BroadcastChannel`, `localStorage`, `crypto.randomUUID()`, `Notification`, Web Audio API (bip)
- Bundler/build/npm install YOK
- Deploy: Netlify drag-drop (klasörü browser'a sürükle, anında URL)

## 10. Foto Eşleşmesi

| Dosya | Ürün | Kategori |
|-------|------|----------|
| serpme-platter.jpg | Olea Serpme | Petit Déjeuner |
| simit-board.jpg | Simit | Petit Déjeuner |
| french-board.jpg | French | Petit Déjeuner |
| original-avo.jpg | Original Avo | Toast |
| naughty-salmon.jpg | Naughty Salmon | Toast |
| olea-toast.jpg | Olea | Toast |
| benedict-green.jpg | Benedict Green | Toast |
| cilbir-egg.jpg | Çılbır Turkish Egg | Œufs Spéciaux |
| burrata-salad.jpg | Burrata Salad | Salade |
| olea-salad-new.jpg | Olea Salad | Salade |

Diğer ~70 ürün → kategoriye uygun emoji + krem kart.

## 11. Kapsam Dışı (yarın için)

- Auth (admin panel açık; gerçek deploymentta korunur)
- Ödeme entegrasyonu
- Çoklu dil UI (TR'den başla; sonradan ekle)
- Müşteri profili / kayıt
- Sipariş geçmişi (masa bazlı)
- Fiş yazıcı entegrasyonu
- Mutfak ekranı (admin'den ayrı)
- 3D modeller (kullanıcı sonra entegre edecek)
- Cihazlar arası gerçek sync (Faz 2 / Firebase)

## 12. Sunum Akışı

1. Laptop'ta `admin.html` aç (sol pencere)
2. `index.html?masa=5` aç (sağ pencere, telefon-genişliğinde)
3. Sağdan birkaç ürün seç → sepete at
4. "Sipariş Ver"
5. Sol panelde bip sesi + sipariş kartı yeşil flash ile belirir
6. Patron "Hazırlanıyor" → "Hazır" → "Servis Edildi" akışını dener
7. Bonus konuşma: "Bunu Firebase'e bağlarsak telefon-laptop arası gerçek olur, 5 dk işi"

## 13. Süre Bütçesi

| Saat | İş |
|------|-----|
| 1 | Setup + base layout + menu data |
| 2 | Tüm kategoriler + ürün kartları + foto entegrasyonu |
| 3 | Sepet + sipariş akışı + onay ekranı |
| 4 | Admin panel + sipariş kartları + durum kontrolleri |
| 5 | BroadcastChannel sync + ses + bildirim + animasyonlar |
| 6 | Polish + bug fix + Netlify deploy |
