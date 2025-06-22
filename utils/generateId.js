export function generateOrderId() {
  const date = new Date();
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2,'0');
  const d = String(date.getDate()).padStart(2,'0');
  const rnd = Math.floor(Math.random()*10000).toString().padStart(4,'0');
  return `ORD-${y}${m}${d}-${rnd}`;
}
