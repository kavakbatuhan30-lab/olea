# Olea — QR Masada Sipariş Demosu

Olea (olea-menu.netlify.app) için QR kod ile masada sipariş demosu. Müşteri telefondan menüyü açar, sepete ekler, sipariş verir; personel canlı admin panelinde anında görür.

## Hızlı Başlangıç (Yerel Test)

Static dosyalar — build / npm install YOK. Tek gereken bir HTTP sunucu (`file://` ile çalışmaz).

### Windows için en kolay yol — Python ile

PowerShell veya CMD'de bu klasörde:

```powershell
python -m http.server 8765
```

Sonra tarayıcıda:

- **Müşteri:** http://localhost:8765/?masa=5
- **Personel paneli:** http://localhost:8765/admin.html

Demo için iki tarayıcı penceresi aç (Ctrl+N). Birinde `?masa=5` ile menü, diğerinde `admin.html`. Birinden sipariş ver, diğerinde anında belirsin.

### Alternatif — Node varsa

```bash
npx serve -l 8765
```

## Demo Akışı (Patron Sunumu)

1. **Laptop'ta `admin.html`** — solda büyük pencere (Personel Paneli)
2. **Sağda yeni pencere** — `?masa=5` ile müşteri görünümü (Ctrl+Shift+M ile mobil cihaz simüle et)
3. Sağdan birkaç ürün seç → "+" tuşu → sepet pill belirir → "Sepetimi Görüntüle"
4. Not yaz, **"Siparişi Gönder"**
5. Sol panelde:
   - 🔔 Bip sesi (zarif çift tonlu)
   - Yeni kart yeşil flash ile slide-in
   - "Aktif: N" sayacı artar
6. Patron "Hazırlamaya Başla" → "Hazır" → "Servis Edildi" akışını dener
7. Müşteri tarafında onay ekranı durum çubuğu canlı güncellenir
8. **Bonus konuşma:** "Bunu Firebase'e bağlarsak telefon-laptop arası gerçek olur, 5 dk işi"

## Deploy (Yarın için, opsiyonel — daha "havalı" gözükür)

### Netlify Drag & Drop (en hızlı, ~30 sn)

1. https://app.netlify.com/drop adresini aç (hesap gerekmez)
2. Tüm `3dqrmenu` klasörünü tarayıcıya sürükle
3. Anında bir URL verir: `https://random-name-xyz.netlify.app`
4. Müşteri linki: `https://random-name-xyz.netlify.app/?masa=5`
5. Admin linki:  `https://random-name-xyz.netlify.app/admin.html`

**Avantaj:** Telefonla QR okutabilirsin. Patron iyice etkilenir.
**Sınır:** Faz 1 hala localStorage tabanlı — telefon ile laptop *farklı tarayıcılar* olduğu için cihazlar arası sync yok. Bu demoda bunun farkına varılmaz, çünkü iki farklı pencerede de aynı tarayıcıyı (laptop) kullanırsın.

### Firebase yükseltmesi (Faz 2 — yarın değil)

`store.js`'i Firebase Firestore'a bağlayınca aynı arayüzle gerçek cihazlar arası sync olur. Bunun için ayrı bir tur yapacağız.

## Dosya Yapısı

```
3dqrmenu/
├── index.html          # Müşteri menüsü (React inline, Babel CDN)
├── admin.html          # Personel paneli
├── menu.js             # Tüm Olea ürünleri (~95 adet, 15 kategori)
├── store.js            # localStorage + BroadcastChannel sarmalı
├── styles.css          # Tailwind üzeri özel stiller
├── photos/             # Ürün fotoğrafları (10 hero + sonradan eklenenler)
├── design.md           # Detaylı tasarım dokümanı
└── README.md           # Bu dosya
```

## Yeni Fotoğraf Ekleme

1. Fotoğrafı `photos/` klasörüne koy (örn. `photos/sucuklu.jpg`)
2. `menu.js`'i aç, ilgili ürünü bul
3. `emoji: '🍳'` satırını sil veya `photo: 'photos/sucuklu.jpg'` ekle:

```js
{ id: 'sucuk-eggs', cat: 'breakfast', name: 'Sucuklu Yumurta',
  desc: '...', price: 7.00, photo: 'photos/sucuklu.jpg' },
```

4. Sayfayı yenile.

## Yapılandırma

### Masa numarasını URL'den al

QR kodlar bu format ile üretilmeli:

```
https://your-site.com/?masa=1
https://your-site.com/?masa=2
...
https://your-site.com/?masa=15
```

URL'de `masa` parametresi yoksa müşteri elle girer (yedek).

### QR kod üretmek

[qrcode-monkey.com](https://www.qrcode-monkey.com/) gibi bir araçla yukarıdaki URL'leri QR'a çevir, restoran masalarına bas.

## Bilinen Sınırlamalar (Demo Notları)

- **Tek tarayıcı sync** (Faz 1): localStorage + BroadcastChannel, sadece aynı tarayıcıdaki sekmeler arasında çalışır. Patron demosu için yeterli.
- **Auth yok**: `admin.html` herkesin erişimine açık. Gerçek deploymentte korunması gerekir (basit şifre veya Firebase Auth).
- **Ödeme yok**: Demo amaçlı, "Ödeme masada alınır" notu var.
- **Çoklu dil yok**: Sadece TR. FR/EN/NL eklemek için menü datasına çoklu isim alanı eklemek lazım.
- **Babel-standalone tarayıcıda transpile ediyor**: Yavaş ilk yükleme (1-2 sn). Production'da Vite/Parcel ile pre-bundle edilmeli.

## Hata Ayıklama

**Sayfa boş açıyor:**
- DevTools (F12) → Console → kırmızı hata var mı?
- En sık neden: `file://` ile açıldı. Mutlaka `python -m http.server` kullan.

**Foto görünmüyor:**
- `photos/` klasörünün içinde mi? `menu.js`'deki path doğru mu (`photos/serpme-platter.jpg`)?

**Bip sesi gelmiyor:**
- Tarayıcı izinleri: ilk olarak sayfaya tıklamak lazım (browser autoplay policy)
- Header'daki 🔔/🔕 butonu aktif mi?

**Admin'de sipariş görünmüyor:**
- Aynı tarayıcıda mı? Faz 1 sadece tek tarayıcı.
- DevTools → Application → Local Storage → `olea:orders` anahtarını kontrol et.
- Sıfırlamak için admin'deki "Sıfırla" butonu.

## Teknik Stack

- **React 18** (esm.sh CDN, build YOK)
- **Tailwind CSS** (CDN)
- **Babel Standalone** (tarayıcıda JSX transpile)
- **Web Platform API'leri**: `BroadcastChannel`, `localStorage`, `Notification`, Web Audio API
- **Bundler / npm install YOK** — sadece HTML + JS, kopyala-yapıştır deploy edilir.
