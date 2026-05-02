// Olea sipariş deposu — Firebase Firestore versiyonu
// Cihazlar arası gerçek-zamanlı sync. Telefon → laptop / mutfak / her yerde anlık.

// Firebase'in resmi gstatic CDN'inden ESM modülleri (modüller birbiriyle uyumlu).
// esm.sh'nin firebase/app ve firebase/firestore'u ayrı bundle olarak verip
// singleton'u paylaşmadığını gördük → resmi CDN bunu çözüyor.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  writeBatch,
} from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js';

// ── Firebase config (Olea project) ─────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyCyQJRYy2DcLk46-QJpxId20lXg0hlkX5M",
  authDomain: "olea-393c4.firebaseapp.com",
  projectId: "olea-393c4",
  storageBucket: "olea-393c4.firebasestorage.app",
  messagingSenderId: "746846923153",
  appId: "1:746846923153:web:81052e9e85f0357a97d230",
  measurementId: "G-HD352RBMQ5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ORDERS_COL = 'orders';
const ARCHIVE_COL = 'archive';

// ── Local cache (sync getters için) ────────────────────────
let activeCache = [];
let archiveCache = [];
let firstActiveSnapshot = true;
let firstArchiveSnapshot = true;
const knownActiveIds = new Set();
const subscribers = new Set();

function notify(msg) {
  for (const s of subscribers) {
    try { s(msg); } catch (e) { console.error('[store] subscriber error', e); }
  }
}

// ── Realtime subscription: aktif siparişler ────────────────
onSnapshot(
  query(collection(db, ORDERS_COL), orderBy('createdAt', 'desc')),
  (snap) => {
    snap.docChanges().forEach(change => {
      const id = change.doc.id;
      const data = { id, ...change.doc.data() };
      if (change.type === 'added') {
        if (!firstActiveSnapshot && !knownActiveIds.has(id)) {
          // Gerçek yeni sipariş (initial load değil)
          notify({ type: 'order:new', order: data });
        }
        knownActiveIds.add(id);
      } else if (change.type === 'modified') {
        notify({ type: 'order:update', id, status: data.status, order: data });
      } else if (change.type === 'removed') {
        knownActiveIds.delete(id);
      }
    });
    activeCache = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    firstActiveSnapshot = false;
    notify({ type: 'storage:change' });
  },
  (err) => {
    console.error('[store] active orders snapshot error', err);
  }
);

// ── Realtime subscription: arşiv ───────────────────────────
onSnapshot(
  query(collection(db, ARCHIVE_COL), orderBy('updatedAt', 'desc')),
  (snap) => {
    snap.docChanges().forEach(change => {
      if (!firstArchiveSnapshot && change.type === 'added') {
        notify({ type: 'order:served', id: change.doc.id });
      }
    });
    archiveCache = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    firstArchiveSnapshot = false;
    notify({ type: 'storage:change' });
  },
  (err) => {
    console.error('[store] archive snapshot error', err);
  }
);

// ── Public API ─────────────────────────────────────────────

export function getActiveOrders() {
  return [...activeCache];
}

export function getArchivedOrders() {
  return [...archiveCache];
}

export function getOrderById(id) {
  return activeCache.find(o => o.id === id) || archiveCache.find(o => o.id === id) || null;
}

/**
 * Sipariş oluşturur. ASYNC — Firebase yazımı için await gerekir.
 * Optimistic UI için sync gibi davranabilirsin (id önceden üretiliyor).
 */
export async function placeOrder({ table, items, notes, total }) {
  const id = (crypto.randomUUID && crypto.randomUUID()) || `o_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const order = {
    id,
    table,
    items,
    notes: notes || '',
    total,
    status: 'new',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  // Optimistic local cache (UI hemen güncellensin)
  activeCache = [order, ...activeCache];
  knownActiveIds.add(id);
  notify({ type: 'order:new', order });
  // Firestore'a yaz (await edilirse confirm olur)
  await setDoc(doc(db, ORDERS_COL, id), order);
  return order;
}

/**
 * Sipariş durumunu günceller. 'served' → arşive taşı.
 */
export async function updateOrderStatus(id, status) {
  const existing = activeCache.find(o => o.id === id);
  if (!existing) return null;

  const updated = { ...existing, status, updatedAt: Date.now() };

  if (status === 'served') {
    // Arşive taşı (atomik batch)
    const batch = writeBatch(db);
    batch.set(doc(db, ARCHIVE_COL, id), updated);
    batch.delete(doc(db, ORDERS_COL, id));
    // Optimistic
    activeCache = activeCache.filter(o => o.id !== id);
    archiveCache = [updated, ...archiveCache];
    knownActiveIds.delete(id);
    notify({ type: 'order:served', id });
    await batch.commit();
  } else {
    // Sadece status update
    activeCache = activeCache.map(o => o.id === id ? updated : o);
    notify({ type: 'order:update', id, status, order: updated });
    await updateDoc(doc(db, ORDERS_COL, id), {
      status,
      updatedAt: updated.updatedAt,
    });
  }
  return updated;
}

export async function deleteOrder(id) {
  // Optimistic
  activeCache = activeCache.filter(o => o.id !== id);
  knownActiveIds.delete(id);
  notify({ type: 'order:delete', id });
  await deleteDoc(doc(db, ORDERS_COL, id));
}

/** Aboneliği kaldıran fonksiyonu döndürür */
export function subscribe(handler) {
  subscribers.add(handler);
  return () => subscribers.delete(handler);
}

/** Demo için: tüm aktif + arşiv siparişleri sıfırla */
export async function clearAll() {
  const [active, archive] = await Promise.all([
    getDocs(collection(db, ORDERS_COL)),
    getDocs(collection(db, ARCHIVE_COL)),
  ]);
  const batch = writeBatch(db);
  active.forEach(d => batch.delete(d.ref));
  archive.forEach(d => batch.delete(d.ref));
  // Optimistic
  activeCache = [];
  archiveCache = [];
  knownActiveIds.clear();
  notify({ type: 'reset' });
  await batch.commit();
}

// Bağlantı durumu için diagnostik (opsiyonel)
window.__oleaStore = {
  app, db, getActive: () => activeCache, getArchive: () => archiveCache,
};
