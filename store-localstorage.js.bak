// Olea sipariş deposu
// localStorage = kalıcı depo (sayfa yenilense bile siparişler korunur)
// BroadcastChannel = aynı tarayıcıda iki sekme/pencere arası canlı sinyal

const ACTIVE_KEY = 'olea:orders';
const ARCHIVE_KEY = 'olea:archive';
const channel = typeof BroadcastChannel !== 'undefined'
  ? new BroadcastChannel('olea')
  : null;

function read(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || '[]');
  } catch {
    return [];
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function broadcast(message) {
  if (channel) channel.postMessage(message);
}

// ── Public API ─────────────────────────────────────────────

export function getActiveOrders() {
  return read(ACTIVE_KEY).sort((a, b) => b.createdAt - a.createdAt);
}

export function getArchivedOrders() {
  return read(ARCHIVE_KEY).sort((a, b) => b.updatedAt - a.updatedAt);
}

export function getOrderById(id) {
  const all = [...read(ACTIVE_KEY), ...read(ARCHIVE_KEY)];
  return all.find(o => o.id === id);
}

export function placeOrder({ table, items, notes, total }) {
  const order = {
    id: (crypto.randomUUID && crypto.randomUUID()) || `o_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    table,
    items,
    notes: notes || '',
    total,
    status: 'new',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  const orders = read(ACTIVE_KEY);
  orders.push(order);
  write(ACTIVE_KEY, orders);
  broadcast({ type: 'order:new', order });
  return order;
}

export function updateOrderStatus(id, status) {
  const orders = read(ACTIVE_KEY);
  const idx = orders.findIndex(o => o.id === id);
  if (idx === -1) return null;

  const order = orders[idx];
  order.status = status;
  order.updatedAt = Date.now();

  if (status === 'served') {
    // arşive taşı
    const archive = read(ARCHIVE_KEY);
    archive.push(order);
    write(ARCHIVE_KEY, archive);
    orders.splice(idx, 1);
    write(ACTIVE_KEY, orders);
    broadcast({ type: 'order:served', id });
  } else {
    write(ACTIVE_KEY, orders);
    broadcast({ type: 'order:update', id, status, order });
  }
  return order;
}

export function deleteOrder(id) {
  const orders = read(ACTIVE_KEY).filter(o => o.id !== id);
  write(ACTIVE_KEY, orders);
  broadcast({ type: 'order:delete', id });
}

// Aboneliği kaldıracak fonksiyon döndürür
export function subscribe(handler) {
  if (!channel) return () => {};
  const listener = (e) => handler(e.data);
  channel.addEventListener('message', listener);
  // localStorage 'storage' eventi de yedek olarak (farklı pencereler)
  const storageListener = (e) => {
    if (e.key === ACTIVE_KEY || e.key === ARCHIVE_KEY) {
      handler({ type: 'storage:change' });
    }
  };
  window.addEventListener('storage', storageListener);
  return () => {
    channel.removeEventListener('message', listener);
    window.removeEventListener('storage', storageListener);
  };
}

// Demo için: tüm siparişleri sıfırla
export function clearAll() {
  localStorage.removeItem(ACTIVE_KEY);
  localStorage.removeItem(ARCHIVE_KEY);
  broadcast({ type: 'reset' });
}
