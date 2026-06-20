const ADMIN_EMAIL    = "palakarora955@gmail.com";
const ADMIN_PASSWORD = "SahilHotel@#1718";
let authed = false;

// ===== LOGIN =====
function doLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const pwd   = document.getElementById("loginPassword").value;
  if (email === ADMIN_EMAIL && pwd === ADMIN_PASSWORD) {
    authed = true;
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("adminWrap").style.display   = "flex";
    loadAll();
  } else {
    document.getElementById("loginError").textContent = "❌ Incorrect email or password. Try again.";
  }
}

function logout() {
  authed = false;
  document.getElementById("loginScreen").style.display = "flex";
  document.getElementById("adminWrap").style.display   = "none";
  document.getElementById("loginEmail").value    = "";
  document.getElementById("loginPassword").value = "";
}

// ===== TAB SWITCHING =====
const tabTitles = {
  dashboard: ["Dashboard", "Overview of all activity"],
  bookings:  ["Room Bookings", "All room reservations"],
  orders:    ["Food Orders",   "All food cart orders"],
  contacts:  ["Enquiries",     "All contact form messages"],
};

function switchTab(name, el) {
  document.querySelectorAll(".tab-content").forEach(t => t.style.display = "none");
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  document.getElementById(`tab-${name}`).style.display = "block";
  if (el) el.classList.add("active");
  else document.querySelector(`[data-tab="${name}"]`).classList.add("active");
  const [title, sub] = tabTitles[name];
  document.getElementById("pageTitle").textContent    = title;
  document.getElementById("pageSubtitle").textContent = sub;
}

// ===== API CALLS =====
async function apiFetch(path) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      "x-admin-email":    ADMIN_EMAIL,
      "x-admin-password": ADMIN_PASSWORD
    }
  });
  return res.json();
}

async function loadAll() {
  await Promise.all([loadStats(), loadBookings(), loadOrders(), loadContacts()]);
  showToast("✅ Data refreshed!", "green");
}

// ===== STATS =====
async function loadStats() {
  try {
    const r = await apiFetch("/api/admin/stats");
    if (!r.success) return;
    const d = r.data;
    document.getElementById("statBookings").textContent = d.bookings;
    document.getElementById("statOrders").textContent   = d.orders;
    document.getElementById("statContacts").textContent = d.contacts;
    document.getElementById("statRevenue").textContent  = `₹${Number(d.revenue).toLocaleString("en-IN")}`;
    document.getElementById("statTodayB").textContent   = d.todayBookings;
    document.getElementById("statTodayO").textContent   = d.todayOrders;
    document.getElementById("bookBadge").textContent    = d.bookings;
    document.getElementById("orderBadge").textContent   = d.orders;
    document.getElementById("contactBadge").textContent = d.contacts;
  } catch(e) { console.error("Stats load failed:", e); }
}

// ===== BOOKINGS =====
async function loadBookings() {
  try {
    const r = await apiFetch("/api/admin/bookings");
    if (!r.success) return;
    const rows = r.data;
    document.getElementById("bookingsTotal").textContent = `${rows.length} total`;

    const html = rows.length === 0
      ? `<div class="empty-state"><div class="empty-icon">🏨</div><p>No bookings yet</p></div>`
      : `<table>
          <thead><tr>
            <th>#</th><th>Guest</th><th>Phone</th><th>Room</th>
            <th>Check-in</th><th>Check-out</th><th>Nights</th>
            <th>Guests</th><th>Total</th><th>Payment</th><th>Status</th><th>Actions</th><th>Date</th>
          </tr></thead>
          <tbody>${rows.map(b => `
            <tr id="row-${b.id}">
              <td>${b.id}</td>
              <td><strong>${b.guest_name}</strong></td>
              <td><a href="tel:${b.phone}">${b.phone}</a></td>
              <td>${b.room_name}</td>
              <td>${fmtDate(b.checkin)}</td>
              <td>${fmtDate(b.checkout)}</td>
              <td>${b.nights}</td>
              <td>${b.guests}</td>
              <td><strong>₹${Number(b.total).toLocaleString("en-IN")}</strong></td>
              <td>${b.payment_method || "upi"}</td>
              <td><span class="badge badge-${b.status||'pending'}">${statusLabel(b.status)}</span></td>
              <td>
                ${b.status === 'pending' ? `
                  <div class="action-btns">
                    <button class="btn-confirm" onclick='confirmBooking(${JSON.stringify(b)})'>✅ Confirm</button>
                    <button class="btn-cancel"  onclick="cancelBooking(${b.id})">❌ Cancel</button>
                  </div>
                ` : b.status === 'confirmed' ? `
                  <div class="action-btns">
                    <button class="btn-whatsapp" onclick='sendWhatsApp(${JSON.stringify(b)})'>📲 WhatsApp</button>
                    <button class="btn-cancel" onclick="cancelBooking(${b.id})">❌ Cancel</button>
                  </div>
                ` : `<span style="color:#999;font-size:.8rem">—</span>`}
              </td>
              <td>${fmtDateTime(b.created_at)}</td>
            </tr>`).join("")}
          </tbody>
        </table>`;

    document.getElementById("bookingsTable").innerHTML  = html;
    document.getElementById("recentBookings").innerHTML = rows.length === 0
      ? `<div class="empty-state"><div class="empty-icon">🏨</div><p>No bookings yet</p></div>`
      : `<table>
          <thead><tr><th>#</th><th>Guest</th><th>Room</th><th>Check-in</th><th>Total</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>${rows.slice(0,5).map(b=>`
            <tr>
              <td>${b.id}</td>
              <td><strong>${b.guest_name}</strong><br/><small>${b.phone}</small></td>
              <td>${b.room_name}</td>
              <td>${fmtDate(b.checkin)}</td>
              <td><strong>₹${Number(b.total).toLocaleString("en-IN")}</strong></td>
              <td><span class="badge badge-${b.status||"pending"}">${statusLabel(b.status)}</span></td>
              <td>${b.status === 'pending' ? `<button class="btn-confirm" onclick='confirmBooking(${JSON.stringify(b)})'>✅ Confirm</button>` : ''}</td>
            </tr>`).join("")}
          </tbody>
        </table>`;
  } catch(e) { document.getElementById("bookingsTable").innerHTML = `<div class="loading">Failed to load</div>`; }
}


// ===== ORDERS =====
async function loadOrders() {
  try {
    const r = await apiFetch("/api/admin/orders");
    if (!r.success) return;
    const rows = r.data;
    document.getElementById("ordersTotal").textContent = `${rows.length} total`;

    document.getElementById("ordersTable").innerHTML = rows.length === 0
      ? `<div class="empty-state"><div class="empty-icon">🍽️</div><p>No orders yet</p></div>`
      : `<table>
          <thead><tr>
            <th>#</th><th>Items</th><th>Total</th><th>Payment</th>
            <th>Phone</th><th>Status</th><th>Actions</th><th>Date</th>
          </tr></thead>
          <tbody>${rows.map(o => {
            const items = typeof o.items === "string" ? JSON.parse(o.items) : o.items;
            const itemStr = Array.isArray(items) ? items.map(i=>`${i.name} ×${i.qty}`).join(", ") : "-";
            return `<tr id="orow-${o.id}">
              <td>${o.id}</td>
              <td style="max-width:220px">${itemStr}</td>
              <td><strong>₹${Number(o.total).toLocaleString("en-IN")}</strong></td>
              <td>${o.payment_method||"upi"}</td>
              <td>${o.phone ? `<a href="tel:${o.phone}">${o.phone}</a>` : "-"}</td>
              <td><span class="badge badge-${o.status||'pending'}">${statusLabel(o.status)}</span></td>
              <td>
                ${o.status === 'pending' ? `
                  <div class="action-btns">
                    <button class="btn-confirm" onclick='confirmOrder(${JSON.stringify({...o, items: itemStr})})'>✅ Confirm</button>
                    <button class="btn-cancel"  onclick="cancelOrder(${o.id})">❌ Cancel</button>
                  </div>
                ` : o.status === 'confirmed' ? `
                  <div class="action-btns">
                    <button class="btn-whatsapp" onclick='sendOrderWhatsApp(${JSON.stringify({...o, items: itemStr})})'>📲 WhatsApp</button>
                    <button class="btn-cancel" onclick="cancelOrder(${o.id})">❌ Cancel</button>
                  </div>
                ` : `<span style="color:#999;font-size:.8rem">—</span>`}
              </td>
              <td>${fmtDateTime(o.created_at)}</td>
            </tr>`;
          }).join("")}
          </tbody>
        </table>`;
  } catch(e) { document.getElementById("ordersTable").innerHTML = `<div class="loading">Failed to load</div>`; }
}


// ===== CONTACTS =====
async function loadContacts() {
  try {
    const r = await apiFetch("/api/admin/contacts");
    if (!r.success) return;
    const rows = r.data;
    document.getElementById("contactsTotal").textContent = `${rows.length} total`;

    document.getElementById("contactsTable").innerHTML = rows.length === 0
      ? `<div class="empty-state"><div class="empty-icon">📞</div><p>No enquiries yet</p></div>`
      : `<table>
          <thead><tr><th>#</th><th>Name</th><th>Phone</th><th>Subject</th><th>Message</th><th>Date</th></tr></thead>
          <tbody>${rows.map(c=>`
            <tr>
              <td>${c.id}</td>
              <td><strong>${c.name}</strong></td>
              <td><a href="tel:${c.phone}">${c.phone}</a></td>
              <td>${c.subject||"-"}</td>
              <td style="max-width:260px;word-break:break-word">${c.message||"-"}</td>
              <td>${fmtDateTime(c.created_at)}</td>
            </tr>`).join("")}
          </tbody>
        </table>`;
  } catch(e) { document.getElementById("contactsTable").innerHTML = `<div class="loading">Failed to load</div>`; }
}

// ===== STATUS LABEL HELPER =====
function statusLabel(s) {
  if (s === "confirmed") return "✅ Confirmed";
  if (s === "cancelled") return "❌ Cancelled";
  return "⏳ Pending";
}

// ===== UPDATE BOOKING STATUS =====
async function updateStatus(id, status) {
  try {
    const res = await fetch(`${API_BASE}/api/admin/bookings/${id}`, {
      method:  "PATCH",
      headers: {
        "Content-Type":     "application/json",
        "x-admin-email":    ADMIN_EMAIL,
        "x-admin-password": ADMIN_PASSWORD
      },
      body: JSON.stringify({ status })
    });
    return res.ok;
  } catch(e) { showToast("Failed to update status", "red"); return false; }
}

// ===== CONFIRM BOOKING + WHATSAPP =====
async function confirmBooking(b) {
  const ok = await updateStatus(b.id, "confirmed");
  if (!ok) return;
  showToast(`✅ Booking #${b.id} confirmed!`, "green");
  await loadBookings();
  sendWhatsApp(b);
}

function sendWhatsApp(b) {
  const phone = String(b.phone).replace(/\D/g, "");
  const dialCode = phone.startsWith("91") ? phone : `91${phone}`;
  const msg = encodeURIComponent(
`🏨 *Sahil Palace Hotel*

Namaste *${b.guest_name}* ji! 🙏

Aapki booking *confirm* ho gayi hai! ✅

📋 *Booking Details:*
🛏️ Room: ${b.room_name}
📅 Check-in: ${fmtDate(b.checkin)}
📅 Check-out: ${fmtDate(b.checkout)}
🌙 Nights: ${b.nights}
👥 Guests: ${b.guests}
💰 Total: ₹${Number(b.total).toLocaleString("en-IN")}
💳 Payment: ${b.payment_method || "UPI"}

Aapka Sahil Palace mein swagat hai! 🌟
Kisi bhi query ke liye call karein.

_Thank you for choosing Sahil Palace!_ 🏨`
  );
  window.open(`https://wa.me/${dialCode}?text=${msg}`, "_blank");
}

// ===== CANCEL BOOKING =====
async function cancelBooking(id) {
  if (!confirm(`Booking #${id} cancel karna chahte hain?`)) return;
  const ok = await updateStatus(id, "cancelled");
  if (ok) { showToast(`❌ Booking #${id} cancelled`, "red"); await loadBookings(); }
}

// ===== UPDATE ORDER STATUS =====
async function updateOrderStatus(id, status) {
  try {
    const res = await fetch(`${API_BASE}/api/admin/orders/${id}`, {
      method:  "PATCH",
      headers: {
        "Content-Type":     "application/json",
        "x-admin-email":    ADMIN_EMAIL,
        "x-admin-password": ADMIN_PASSWORD
      },
      body: JSON.stringify({ status })
    });
    return res.ok;
  } catch(e) { showToast("Failed to update order", "red"); return false; }
}

// ===== CONFIRM ORDER + WHATSAPP =====
async function confirmOrder(o) {
  const ok = await updateOrderStatus(o.id, "confirmed");
  if (!ok) return;
  showToast(`✅ Order #${o.id} confirmed!`, "green");
  await loadOrders();
  sendOrderWhatsApp(o);
}

function sendOrderWhatsApp(o) {
  if (!o.phone) { showToast("No phone number for this order", "red"); return; }
  const phone = String(o.phone).replace(/\D/g, "");
  const dialCode = phone.startsWith("91") ? phone : `91${phone}`;
  const msg = encodeURIComponent(
`🍽️ *Sahil Palace Restaurant*

Namaste! 🙏

Aapka food order *confirm* ho gaya hai! ✅

📋 *Order Details:*
🛒 Items: ${o.items}
💰 Total: ₹${Number(o.total).toLocaleString("en-IN")}
💳 Payment: ${o.payment_method || "UPI"}

Aapka khana jald taiyar hoga! ⏰
Kisi bhi query ke liye call karein.

_Thank you for ordering from Sahil Palace!_ 🏨`
  );
  window.open(`https://wa.me/${dialCode}?text=${msg}`, "_blank");
}

// ===== CANCEL ORDER =====
async function cancelOrder(id) {
  if (!confirm(`Order #${id} cancel karna chahte hain?`)) return;
  const ok = await updateOrderStatus(id, "cancelled");
  if (ok) { showToast(`❌ Order #${id} cancelled`, "red"); await loadOrders(); }
}


// ===== HELPERS =====
function fmtDate(d) {
  if (!d) return "-";
  return new Date(d).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});
}
function fmtDateTime(d) {
  if (!d) return "-";
  return new Date(d).toLocaleString("en-IN",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"});
}

function showToast(msg, color="green") {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.background = color==="red" ? "#c0392b" : "#27ae60";
  t.style.opacity = "1";
  clearTimeout(t._t);
  t._t = setTimeout(() => t.style.opacity="0", 3000);
}
