const VALID_EMAILS    = ["palakarora955@gmail.com"];
const VALID_PASSWORDS = ["SahilHotel@#1718", "sahilpalace2025"];
let authed = false;

function getAdminHeaders() {
  const email = sessionStorage.getItem("adminEmail") || "palakarora955@gmail.com";
  const pwd   = sessionStorage.getItem("adminPwd")   || "SahilHotel@#1718";
  return {
    "Content-Type": "application/json",
    "x-admin-email": email,
    "x-admin-password": pwd
  };
}

// ===== LOGIN =====
function doLogin() {
  const emailInput = document.getElementById("loginEmail").value.trim().toLowerCase();
  const pwdInput   = document.getElementById("loginPassword").value.trim();
  const errEl      = document.getElementById("loginError");

  if (!emailInput || !pwdInput) {
    errEl.textContent = "❌ Please enter both email and password.";
    return;
  }

  if (VALID_EMAILS.includes(emailInput) && VALID_PASSWORDS.includes(pwdInput)) {
    authed = true;
    sessionStorage.setItem("adminAuthed", "true");
    sessionStorage.setItem("adminEmail", emailInput);
    sessionStorage.setItem("adminPwd", pwdInput);
    errEl.textContent = "";
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("adminWrap").style.display   = "flex";
    loadAll();
  } else {
    errEl.textContent = "❌ Incorrect email or password. Try again.";
  }
}

function logout() {
  authed = false;
  sessionStorage.removeItem("adminAuthed");
  sessionStorage.removeItem("adminEmail");
  sessionStorage.removeItem("adminPwd");
  document.getElementById("loginScreen").style.display = "flex";
  document.getElementById("adminWrap").style.display   = "none";
  document.getElementById("loginEmail").value    = "";
  document.getElementById("loginPassword").value = "";
  document.getElementById("loginError").textContent = "";
}

// Auto-check login on load
window.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("adminAuthed") === "true") {
    authed = true;
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("adminWrap").style.display   = "flex";
    loadAll();
  }
});

// ===== TAB SWITCHING =====
const tabTitles = {
  dashboard: ["Dashboard", "Overview of all activity"],
  bookings:  ["Room Bookings", "All room reservations"],
  orders:    ["Food Orders",   "All food cart orders"],
  contacts:  ["Enquiries",     "All contact form messages"],
  reviews:   ["Reviews",       "Approve or reject customer reviews"],
  events:    ["Event Enquiries", "All event & banquet booking requests"],
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
    headers: getAdminHeaders()
  });
  return res.json();
}

async function loadAll() {
  try {
    await Promise.all([loadStats(), loadBookings(), loadOrders(), loadContacts(), loadReviews(), loadEvents()]);
    showToast("✅ Data refreshed!", "green");
  } catch(e) {
    showToast("⚠️ Could not load data. Check server connection.", "red");
  }
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
              <td>${(b.payment_method || "upi").toUpperCase()}</td>
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
            <th>#</th><th>Customer</th><th>Phone</th><th>Address</th>
            <th>Items</th><th>Total</th><th>Payment</th>
            <th>Status</th><th>Actions</th><th>Date</th>
          </tr></thead>
          <tbody>${rows.map(o => {
            let parsed, customer = {}, itemsList = [];
            try {
              parsed = typeof o.items === "string" ? JSON.parse(o.items) : o.items;
              if (parsed && parsed.customer) {
                customer  = parsed.customer;
                itemsList = parsed.items || [];
              } else {
                itemsList = Array.isArray(parsed) ? parsed : [];
              }
            } catch(e) { itemsList = []; }
            const itemStr  = itemsList.map(i => `${i.name} ×${i.qty}`).join(", ") || "-";
            const custName = customer.name  || o.phone || "-";
            const custAddr = customer.address || "-";
            const custPhone = customer.phone || o.phone || "-";
            const pmLabel = (o.payment_method || "upi").toUpperCase();
            return `<tr id="orow-${o.id}">
              <td>${o.id}</td>
              <td><strong>${custName}</strong></td>
              <td><a href="tel:${custPhone}">${custPhone}</a></td>
              <td style="max-width:140px;font-size:.8rem;color:#444">${custAddr}</td>
              <td style="max-width:200px;font-size:.82rem">${itemStr}</td>
              <td><strong>₹${Number(o.total).toLocaleString("en-IN")}</strong></td>
              <td><span class="badge badge-pending">${pmLabel}</span></td>
              <td><span class="badge badge-${o.status||'pending'}">${statusLabel(o.status)}</span></td>
              <td>
                ${o.status === 'pending' ? `
                  <div class="action-btns">
                    <button class="btn-confirm" onclick='confirmOrder(${JSON.stringify({...o, _custName: custName, _custPhone: custPhone, items: itemStr})})'>✅ Confirm</button>
                    <button class="btn-cancel"  onclick="cancelOrder(${o.id})">❌ Cancel</button>
                  </div>
                ` : o.status === 'confirmed' ? `
                  <div class="action-btns">
                    <button class="btn-whatsapp" onclick='sendOrderWhatsApp(${JSON.stringify({...o, _custName: custName, _custPhone: custPhone, items: itemStr})})'>📲 WhatsApp</button>
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

// ===== REVIEWS =====
async function loadReviews() {
  try {
    const r = await apiFetch("/api/admin/reviews");
    if (!r.success) return;
    const rows = r.data;
    const pending = rows.filter(x => x.status === "pending").length;
    document.getElementById("reviewsTotal").textContent = `${rows.length} total`;
    document.getElementById("reviewBadge").textContent  = pending;

    document.getElementById("reviewsTable").innerHTML = rows.length === 0
      ? `<div class="empty-state"><div class="empty-icon">⭐</div><p>No reviews yet</p></div>`
      : `<table>
          <thead><tr>
            <th>#</th><th>Name</th><th>Location</th><th>Rating</th>
            <th>Review</th><th>Status</th><th>Actions</th><th>Date</th>
          </tr></thead>
          <tbody>${rows.map(rv => `
            <tr id="rvrow-${rv.id}">
              <td>${rv.id}</td>
              <td><strong>${rv.name}</strong></td>
              <td>${rv.location || "-"}</td>
              <td>${"⭐".repeat(Math.min(5, rv.rating || 5))}</td>
              <td style="max-width:260px;word-break:break-word;font-style:italic">"${rv.message}"</td>
              <td><span class="badge badge-${rv.status === 'approved' ? 'confirmed' : rv.status === 'rejected' ? 'cancelled' : 'pending'}">
                ${rv.status === 'approved' ? '✅ Approved' : rv.status === 'rejected' ? '❌ Rejected' : '⏳ Pending'}
              </span></td>
              <td>
                ${rv.status === 'pending' ? `
                  <div class="action-btns">
                    <button class="btn-confirm" onclick="approveReview(${rv.id})">✅ Approve</button>
                    <button class="btn-cancel"  onclick="rejectReview(${rv.id})">❌ Reject</button>
                  </div>` : rv.status === 'approved' ? `
                  <button class="btn-cancel" onclick="rejectReview(${rv.id})">❌ Reject</button>` : `
                  <button class="btn-confirm" onclick="approveReview(${rv.id})">✅ Approve</button>`}
              </td>
              <td>${fmtDateTime(rv.created_at)}</td>
            </tr>`).join("")}
          </tbody>
        </table>`;
  } catch(e) { document.getElementById("reviewsTable").innerHTML = `<div class="loading">Failed to load</div>`; }
}

async function updateReviewStatus(id, status) {
  try {
    const res = await fetch(`${API_BASE}/api/admin/reviews/${id}`, {
      method:  "PATCH",
      headers: getAdminHeaders(),
      body:    JSON.stringify({ status })
    });
    return res.ok;
  } catch(e) { showToast("Failed to update review", "red"); return false; }
}

async function approveReview(id) {
  const ok = await updateReviewStatus(id, "approved");
  if (ok) { showToast(`✅ Review #${id} approved — now live on website!`, "green"); await loadReviews(); }
}

async function rejectReview(id) {
  if (!confirm(`Reject review #${id}?`)) return;
  const ok = await updateReviewStatus(id, "rejected");
  if (ok) { showToast(`❌ Review #${id} rejected`, "red"); await loadReviews(); }
}


// ===== EVENT ENQUIRIES =====
async function loadEvents() {
  try {
    const r = await apiFetch("/api/admin/events");
    if (!r.success) return;
    const rows = r.data;
    const newCount = rows.filter(x => !x.status || x.status === "new").length;
    document.getElementById("eventsTotal").textContent = `${rows.length} total`;
    document.getElementById("eventBadge").textContent  = newCount;

    document.getElementById("eventsTable").innerHTML = rows.length === 0
      ? `<div class="empty-state"><div class="empty-icon">🎊</div><p>No event enquiries yet</p></div>`
      : `<table>
          <thead><tr>
            <th>#</th><th>Name</th><th>Phone</th><th>Event Type</th>
            <th>Date</th><th>Guests</th><th>Venue</th><th>Message</th><th>Status</th><th>Action</th><th>Received</th>
          </tr></thead>
          <tbody>${rows.map(ev => `
            <tr>
              <td>${ev.id}</td>
              <td><strong>${ev.name}</strong></td>
              <td><a href="tel:${ev.phone}">${ev.phone}</a></td>
              <td>${ev.event_type || "-"}</td>
              <td>${ev.event_date ? new Date(ev.event_date).toLocaleDateString("en-IN") : "-"}</td>
              <td>${ev.guests || "-"}</td>
              <td>${ev.venue || "-"}</td>
              <td style="max-width:200px;word-break:break-word;font-size:.82rem">${ev.message || "-"}</td>
              <td><span class="badge badge-${ev.status === 'called' ? 'confirmed' : ev.status === 'closed' ? 'cancelled' : 'pending'}">
                ${ev.status === 'called' ? '✅ Called' : ev.status === 'closed' ? '❌ Closed' : '⏳ New'}
              </span></td>
              <td>
                <div class="action-btns">
                  <button class="btn-whatsapp" onclick="callEventEnquirer(${ev.id},'${ev.name}','${ev.phone}','${(ev.event_type||'').replace(/'/g,"'")}')">📲 WhatsApp</button>
                  ${ev.status !== 'called' ? `<button class="btn-confirm" onclick="markEventCalled(${ev.id})">✅ Mark Called</button>` : ""}
                </div>
              </td>
              <td>${fmtDateTime(ev.created_at)}</td>
            </tr>`).join("")}
          </tbody>
        </table>`;
  } catch(e) { document.getElementById("eventsTable").innerHTML = `<div class="loading">Failed to load</div>`; }
}

function callEventEnquirer(id, name, phone, eventType) {
  const waMsg = `Hi ${name}! 🙏\n\nThank you for enquiring about *${eventType}* at Sahil Palace.\n\nWe would love to host your event! Please let us know a convenient time to discuss the details.\n\n📍 Sahil Palace, Sangaria\n📞 8742026903`;
  window.open(`https://wa.me/91${phone}?text=${encodeURIComponent(waMsg)}`, "_blank");
}

async function markEventCalled(id) {
  try {
    const res = await fetch(`${API_BASE}/api/admin/events/${id}`, {
      method: "PATCH",
      headers: getAdminHeaders(),
      body: JSON.stringify({ status: "called" })
    });
    if (res.ok) { showToast("✅ Marked as called", "green"); await loadEvents(); }
  } catch(e) { showToast("Failed to update", "red"); }
}


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
      headers: getAdminHeaders(),
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

function cleanPhone(p) {
  if (!p) return "";
  const digits = String(p).replace(/\D/g, "");
  return digits.length >= 10 ? `91${digits.slice(-10)}` : "";
}

function sendWhatsApp(b) {
  const dialCode = cleanPhone(b.phone);
  if (!dialCode) { showToast("No valid phone number for this booking", "red"); return; }
  const msg = encodeURIComponent(
`🏨 *Sahil Palace Hotel*

Namaste *${b.guest_name}* ji! 🙏

Aapki room booking *confirm* ho gayi hai! ✅

📋 *Booking Details:*
🛏️ Room: ${b.room_name}
📅 Check-in: ${fmtDate(b.checkin)}
📅 Check-out: ${fmtDate(b.checkout)}
🌙 Nights: ${b.nights}
👥 Guests: ${b.guests}
💰 Total: ₹${Number(b.total).toLocaleString("en-IN")}
💳 Payment: ${(b.payment_method || "UPI").toUpperCase()}

Aapka Sahil Palace mein swagat hai! 🌟
Kisi bhi query ke liye call karein: 📞 8742026903

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
      headers: getAdminHeaders(),
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
  const custPhone = o._custPhone || o.phone;
  const dialCode  = cleanPhone(custPhone);
  if (!dialCode) { showToast("No valid phone number for this order", "red"); return; }
  const custName  = o._custName || "Customer";
  const msg = encodeURIComponent(
`🍽️ *Sahil Palace Restaurant*

Namaste *${custName}* ji! 🙏

Aapka food order *confirm* ho gaya hai! ✅

📋 *Order Details (#${o.id}):*
🛒 Items: ${o.items}
💰 Total: ₹${Number(o.total).toLocaleString("en-IN")}
💳 Payment Method: ${(o.payment_method || "UPI").toUpperCase()}

Aapka khana jald taiyar hokar deliver ho jayega! ⏰
Restaurant Contact: 📞 8742026903

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
  if (!t) return;
  t.textContent = msg;
  t.style.background = color==="red" ? "#c0392b" : "#27ae60";
  t.style.opacity = "1";
  clearTimeout(t._t);
  t._t = setTimeout(() => t.style.opacity="0", 3000);
}
