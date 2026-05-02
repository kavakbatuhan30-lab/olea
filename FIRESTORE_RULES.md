# Firestore Security Rules

Bu kuralları **Firebase Console → Firestore → Rules** sekmesine yapıştır, **Publish** bas. 30 günlük "test mode" yerine kalıcı + sıkılaştırılmış kurallar olur.

## Kurallar

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // ── ACTIVE ORDERS ──────────────────────────────
    match /orders/{orderId} {
      // Herkes aktif siparişleri okuyabilir (admin paneli + müşteri onay)
      allow read: if true;

      // Yeni sipariş oluşturma — şekil kontrol
      allow create: if isValidOrder(request.resource.data);

      // Durum güncelleme — sadece valid durumlara
      allow update: if isValidStatusUpdate(request.resource.data, resource.data);

      // Silme (iptal) — şimdilik herkes
      allow delete: if true;
    }

    // ── ARCHIVE (servis edilmiş) ───────────────────
    match /archive/{orderId} {
      allow read: if true;
      allow create: if request.resource.data.status == 'served';
      allow update, delete: if true;
    }

    // ── DİĞER HER ŞEY KAPALI ──────────────────────
    match /{document=**} {
      allow read, write: if false;
    }

    // ── HELPERLAR ──────────────────────────────────
    function isValidOrder(data) {
      return data.keys().hasAll(['table', 'items', 'total', 'status', 'createdAt'])
        && data.table is int && data.table > 0 && data.table < 1000
        && data.items is list && data.items.size() > 0 && data.items.size() < 100
        && data.total is number && data.total >= 0 && data.total < 10000
        && data.status == 'new'
        && data.createdAt is int
        && (data.notes == null || (data.notes is string && data.notes.size() < 500));
    }

    function isValidStatusUpdate(newData, oldData) {
      return newData.status in ['new', 'preparing', 'ready', 'served']
        && newData.table == oldData.table
        && newData.items == oldData.items
        && newData.total == oldData.total
        && newData.createdAt == oldData.createdAt;
    }
  }
}
```

## Bu kurallar ne yapıyor

✅ **İzin veriyor:**
- Müşteri yeni sipariş oluşturabilir (şekil doğru ise)
- Personel paneli aktif siparişleri okuyabilir
- Durum değiştirebilir (Yeni → Hazırlanıyor → Hazır → Servis)
- Sipariş silebilir (iptal)
- Servis edilen → arşive geçer

❌ **Engelliyor:**
- Saçma masa numarası (negatif, 1000+)
- Boş ürün listesi
- 100+ ürün tek siparişte (DDoS önlemi)
- Toplam >€10.000 (data validation)
- Bilinmeyen statuses
- Sipariş sonrası table/items/total/createdAt değiştirilemez (immutable)
- 500+ karakter not (spam önlemi)
- `orders` ve `archive` dışındaki herhangi bir koleksiyona erişim

## Sonraki adım — Firebase Auth (gerçek güvenlik)

Şu an "anonim kullanıcı" admin paneline erişebilir. **Auth eklediğimizde:**

```
allow update, delete: if request.auth != null && request.auth.token.admin == true;
```

Olur. Ama ondan önce admin kullanıcı oluşturma akışı lazım. Şimdilik password gate (`olea2026`) UX engeli olarak yetiyor.

## Nasıl Publish edilir

1. https://console.firebase.google.com/ → projeni seç
2. **Build → Firestore Database** → **Rules** sekmesi
3. Editör'deki tüm metni sil
4. Yukarıdaki kuralları yapıştır
5. **Publish** (mavi buton sağ üstte)
6. "Are you sure?" → **Publish** tekrar
