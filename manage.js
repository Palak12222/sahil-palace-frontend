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
            <th>Guests</th><th>Total</th><th>Payment</th><th>Status</th><th>Date</th>
          </tr></thead>
          <tbody>${rows.map(b => `
            <tr>
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
              <td>
                <select class="status-select" onchange="updateStatus(${b.id}, this.value)">
                  <option value="pending"   ${b.status==="pending"   ?"selected":""}>⏳ Pending</option>
                  <option value="confirmed" ${b.status==="confirmed" ?"selected":""}>✅ Confirmed</option>
                  <option value="cancelled" ${b.status==="cancelled" ?"selected":""}>❌ Cancelled</option>
                </select>
              </td>
              <td>${fmtDateTime(b.created_at)}</td>
            </tr>`).join("")}
          </tbody>
        </table>`;

    document.getElementById("bookingsTable").innerHTML  = html;
    document.getElementById("recentBookings").innerHTML = rows.length === 0
      ? `<div class="empty-state"><div class="empty-icon">🏨</div><p>No bookings yet</p></div>`
      : `<table>
          <thead><tr><th>#</th><th>Guest</th><th>Room</th><th>Check-in</th><th>Total</th><th>Status</th></tr></thead>
          <tbody>${rows.slice(0,5).map(b=>`
            <tr>
              <td>${b.id}</td>
              <td><strong>${b.guest_name}</strong><br/><small>${b.phone}</small></td>
              <td>${b.room_name}</td>
              <td>${fmtDate(b.checkin)}</td>
              <td><strong>₹${Number(b.total).toLocaleString("en-IN")}</strong></td>
              <td><span class="badge badge-${b.status||"pending"}">${b.status||"pending"}</span></td>
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
          <thead><tr><th>#</th><th>Items</th><th>Total</th><th>Payment</th><th>Phone</th><th>Date</th></tr></thead>
          <tbody>${rows.map(o => {
            const items = typeof o.items === "string" ? JSON.parse(o.items) : o.items;
            const itemStr = Array.isArray(items) ? items.map(i=>`${i.name} ×${i.qty}`).join(", ") : "-";
            return `<tr>
              <td>${o.id}</td>
              <td>${itemStr}</td>
              <td><strong>₹${Number(o.total).toLocaleString("en-IN")}</strong></td>
              <td>${o.payment_method||"upi"}</td>
              <td>${o.phone||"-"}</td>
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

// ===== UPDATE BOOKING STATUS =====
async function updateStatus(id, status) {
  try {
    await fetch(`${API_BASE}/api/admin/bookings/${id}`, {
      method:  "PATCH",
      headers: {
        "Content-Type":     "application/json",
        "x-admin-email":    ADMIN_EMAIL,
        "x-admin-password": ADMIN_PASSWORD
      },
      body: JSON.stringify({ status })
    });
    showToast(`✅ Booking #${id} marked as ${status}`, "green");
  } catch(e) { showToast("Failed to update status", "red"); }
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
