// ===== ROOM DATA =====
const rooms = [
  {
    id: 1, name: "Standard Single Room", price: 1000, badge: "Budget",
    desc: "Cozy single room with stylish décor, AC, and all basic amenities for a comfortable stay. Perfect for solo travellers looking for affordability without compromising comfort.",
    images: [
      { src: "images/1.jpg",  label: "Room View 1" },
      { src: "images/2.jpg",  label: "Room View 2" },
      { src: "images/3.jpg",  label: "Room View 3" },
      { src: "images/4.jpg",  label: "Room View 4" },
      { src: "images/5.jpg",  label: "Room View 5" },
      { src: "images/6.jpg",  label: "Room View 6" },
      { src: "images/7.jpg",  label: "Room View 7" },
      { src: "images/8.jpg",  label: "Room View 8" },
      { src: "images/9.jpg",  label: "Room View 9" },
      { src: "images/10.jpg", label: "Room View 10" },
      { src: "images/11.jpg", label: "Room View 11" }
    ],
    amenities: [
      { icon: "❄️", name: "Air Conditioning" }, { icon: "📶", name: "Free WiFi" },
      { icon: "📺", name: "LED TV" },           { icon: "🚿", name: "Hot Water" },
      { icon: "🧹", name: "Daily Housekeeping"},{ icon: "🔒", name: "In-room Safe" },
      { icon: "💡", name: "24/7 Power" },       { icon: "🛎️", name: "Room Service" }
    ]
  },
  {
    id: 2, name: "Standard Double Room", price: 1500, badge: "Popular",
    desc: "Spacious double room with modern interiors, perfect for couples or solo travellers who want extra space. Comes with a large comfortable bed and premium amenities.",
    images: [
      { src: "images/1.jpg",  label: "Room View 1" },
      { src: "images/2.jpg",  label: "Room View 2" },
      { src: "images/3.jpg",  label: "Room View 3" },
      { src: "images/4.jpg",  label: "Room View 4" },
      { src: "images/5.jpg",  label: "Room View 5" },
      { src: "images/6.jpg",  label: "Room View 6" },
      { src: "images/7.jpg",  label: "Room View 7" },
      { src: "images/8.jpg",  label: "Room View 8" },
      { src: "images/9.jpg",  label: "Room View 9" },
      { src: "images/10.jpg", label: "Room View 10" },
      { src: "images/11.jpg", label: "Room View 11" }
    ],
    amenities: [
      { icon: "❄️", name: "Air Conditioning" }, { icon: "📶", name: "Free WiFi" },
      { icon: "📺", name: "LED TV" },           { icon: "🚿", name: "Hot Water" },
      { icon: "🅿️", name: "Free Parking" },     { icon: "🧹", name: "Daily Housekeeping"},
      { icon: "💡", name: "24/7 Power" },       { icon: "🛎️", name: "Room Service" }
    ]
  },
  {
    id: 3, name: "Deluxe Single Room", price: 1800, badge: "Deluxe",
    desc: "Upgraded single room with premium bed, elegant panel wall and soft lighting. Ideal for business travellers and solo explorers wanting a step up in comfort.",
    images: [
      { src: "images/delux 1800/IMG_6134.jpg", label: "Room View 1" },
      { src: "images/delux 1800/IMG_6135.jpg", label: "Room View 2" },
      { src: "images/delux 1800/IMG_6136.jpg", label: "Room View 3" },
      { src: "images/delux 1800/IMG_6137.jpg", label: "Room View 4" },
      { src: "images/delux 1800/IMG_6138.jpg", label: "Room View 5" },
      { src: "images/delux 1800/IMG_6139.jpg", label: "Room View 6" },
      { src: "images/delux 1800/IMG_6140.jpg", label: "Room View 7" },
      { src: "images/delux 1800/IMG_6141.jpg", label: "Room View 8" },
      { src: "images/delux 1800/IMG_6142.jpg", label: "Room View 9" },
      { src: "images/delux 1800/IMG_6143.jpg", label: "Room View 10" },
      { src: "images/delux 1800/IMG_6144.jpg", label: "Room View 11" }
    ],
    amenities: [
      { icon: "❄️", name: "Air Conditioning" }, { icon: "📶", name: "Free WiFi" },
      { icon: "📺", name: "LED TV" },           { icon: "🚿", name: "Hot Water" },
      { icon: "🧊", name: "Mini Fridge" },      { icon: "🧹", name: "Daily Housekeeping"},
      { icon: "☕", name: "Tea / Coffee" },      { icon: "🛎️", name: "Room Service" }
    ]
  },
  {
    id: 4, name: "Deluxe Double Room", price: 2000, badge: "Best Value",
    desc: "Our most popular room — two plush beds, designer headboard wall and warm ambiance. The perfect choice for couples or friends travelling together.",
    images: [
      { src: "images/delux 2000/IMG_6160.jpg", label: "Room View 1" },
      { src: "images/delux 2000/IMG_6161.jpg", label: "Room View 2" },
      { src: "images/delux 2000/IMG_6162.jpg", label: "Room View 3" },
      { src: "images/delux 2000/IMG_6163.jpg", label: "Room View 4" },
      { src: "images/delux 2000/IMG_6164.jpg", label: "Room View 5" },
      { src: "images/delux 2000/IMG_6165.jpg", label: "Room View 6" },
      { src: "images/delux 2000/IMG_6166.jpg", label: "Room View 7" },
      { src: "images/delux 2000/IMG_6167.jpg", label: "Room View 8" },
      { src: "images/delux 2000/IMG_6168.jpg", label: "Room View 9" },
      { src: "images/delux 2000/IMG_6169.jpg", label: "Room View 10" },
      { src: "images/delux 2000/IMG_6170.jpg", label: "Room View 11" },
      { src: "images/delux 2000/IMG_6171.jpg", label: "Room View 12" }
    ],
    amenities: [
      { icon: "❄️", name: "Air Conditioning" }, { icon: "📶", name: "Free WiFi" },
      { icon: "📺", name: "LED TV" },           { icon: "🚿", name: "Hot Water" },
      { icon: "🌿", name: "Balcony View" },     { icon: "🧹", name: "Daily Housekeeping"},
      { icon: "☕", name: "Tea / Coffee" },      { icon: "🛎️", name: "Room Service" }
    ]
  },
  {
    id: 5, name: "Executive Room", price: 2500, badge: "Executive",
    desc: "Designed for business travellers — king bed, work desk, LED TV and premium AC. Stay productive and comfortable with high-speed WiFi and a fully equipped workspace.",
    images: [
      { src: "images/executive 2500/IMG_6147.jpg", label: "Room View 1" },
      { src: "images/executive 2500/IMG_6148.jpg", label: "Room View 2" },
      { src: "images/executive 2500/IMG_6149.jpg", label: "Room View 3" },
      { src: "images/executive 2500/IMG_6150.jpg", label: "Room View 4" },
      { src: "images/executive 2500/IMG_6151.jpg", label: "Room View 5" },
      { src: "images/executive 2500/IMG_6152.jpg", label: "Room View 6" },
      { src: "images/executive 2500/IMG_6153.jpg", label: "Room View 7" },
      { src: "images/executive 2500/IMG_6154.jpg", label: "Room View 8" },
      { src: "images/executive 2500/IMG_6155.jpg", label: "Room View 9" },
      { src: "images/executive 2500/IMG_6156.jpg", label: "Room View 10" },
      { src: "images/executive 2500/IMG_6157.jpg", label: "Room View 11" },
      { src: "images/executive 2500/IMG_6158.jpg", label: "Room View 12" }
    ],
    amenities: [
      { icon: "❄️", name: "Air Conditioning" }, { icon: "📶", name: "Free WiFi" },
      { icon: "📺", name: "LED TV" },           { icon: "🚿", name: "Hot Water" },
      { icon: "💼", name: "Work Desk" },        { icon: "🧹", name: "Daily Housekeeping"},
      { icon: "☕", name: "Tea / Coffee" },      { icon: "🛎️", name: "Room Service" }
    ]
  },
  {
    id: 6, name: "Family Room", price: 3000, badge: "Family",
    desc: "Extra-large room with two double beds, ample space for families travelling with kids. Enjoy a comfortable and relaxed stay with everything your family needs.",
    images: [
      { src: "images/Family 3000/IMG_6173.jpg", label: "Room View 1" },
      { src: "images/Family 3000/IMG_6174.jpg", label: "Room View 2" },
      { src: "images/Family 3000/IMG_6175.jpg", label: "Room View 3" },
      { src: "images/Family 3000/IMG_6176.jpg", label: "Room View 4" },
      { src: "images/Family 3000/IMG_6177.jpg", label: "Room View 5" },
      { src: "images/Family 3000/IMG_6178.jpg", label: "Room View 6" },
      { src: "images/Family 3000/IMG_6179.jpg", label: "Room View 7" },
      { src: "images/Family 3000/IMG_6180.jpg", label: "Room View 8" },
      { src: "images/Family 3000/IMG_6181.jpg", label: "Room View 9" },
      { src: "images/Family 3000/IMG_6182.jpg", label: "Room View 10" },
      { src: "images/Family 3000/IMG_6183.jpg", label: "Room View 11" },
      { src: "images/Family 3000/IMG_6184.jpg", label: "Room View 12" },
      { src: "images/Family 3000/IMG_6185.jpg", label: "Room View 13" },
      { src: "images/Family 3000/IMG_6186.jpg", label: "Room View 14" },
      { src: "images/Family 3000/IMG_6187.jpg", label: "Room View 15" },
      { src: "images/Family 3000/IMG_6188.jpg", label: "Room View 16" },
      { src: "images/Family 3000/IMG_6189.jpg", label: "Room View 17" },
      { src: "images/Family 3000/IMG_6190.jpg", label: "Room View 18" },
      { src: "images/Family 3000/IMG_6191.jpg", label: "Room View 19" },
      { src: "images/Family 3000/IMG_6192.jpg", label: "Room View 20" },
      { src: "images/Family 3000/IMG_6193.jpg", label: "Room View 21" }
    ],
    amenities: [
      { icon: "❄️", name: "Air Conditioning" }, { icon: "📶", name: "Free WiFi" },
      { icon: "📺", name: "LED TV" },           { icon: "🚿", name: "Hot Water" },
      { icon: "🛏️", name: "Extra Beds" },       { icon: "🧹", name: "Daily Housekeeping"},
      { icon: "🅿️", name: "Free Parking" },     { icon: "🛎️", name: "Room Service" }
    ]
  }
];

let currentSlide = 0;
let pendingPaymentTotal = 0;
let pendingBookingData  = null;

function renderRoomsListPage() {
  document.title = "Rooms – Sahil Palace & Restaurant";
  const listSection = document.getElementById("roomsListSection");
  const detailMain = document.getElementById("roomDetailMain");
  if (listSection) listSection.style.display = "block";
  if (detailMain) detailMain.style.display = "none";

  const listGrid = document.getElementById("roomsListGrid");
  if (!listGrid) return;

  listGrid.innerHTML = rooms.map(room => `
    <article class="room-list-card" onclick="window.location.href='room.html?id=${room.id}'" style="cursor:pointer">
      <img src="${room.images[0].src}" alt="${room.name}" loading="lazy" onerror="this.src='images/room_photo1.jpg'" />
      <div class="room-list-body">
        <span class="room-list-badge">${room.badge}</span>
        <h3>${room.name}</h3>
        <p>${room.desc}</p>
        <div class="room-list-meta">
          <span>💰 ₹${room.price.toLocaleString("en-IN")}/night</span>
          <span>🛏️ ${room.amenities.length} amenities</span>
        </div>
        <div class="room-list-actions">
          <a href="room.html?id=${room.id}" class="btn-room-view" onclick="event.stopPropagation()">View Details &amp; Book →</a>
          <a href="tel:8742026903" class="btn-room-call" onclick="event.stopPropagation()">Call Now</a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderRoomDetailPage(room) {
  document.title = `${room.name} – Sahil Palace & Restaurant`;
  document.getElementById("roomDetailMain").style.display = "block";
  document.getElementById("roomsListSection").style.display = "none";

  document.getElementById("breadRoom").textContent   = room.name;
  document.getElementById("roomTitle").textContent   = room.name;
  document.getElementById("roomDesc").textContent    = room.desc;
  document.getElementById("roomBadge").textContent   = room.badge;
  document.getElementById("bookPrice").textContent   = `₹${room.price.toLocaleString("en-IN")}`;

  const today = new Date().toISOString().split("T")[0];
  document.getElementById("rCheckIn").min  = today;
  document.getElementById("rCheckOut").min = today;

  const slideshow  = document.getElementById("slideshow");
  const slideDots  = document.getElementById("slideDots");
  const slideCount = document.getElementById("slideCounter");
  slideshow.innerHTML = "";
  slideDots.innerHTML = "";
  currentSlide = 0;

  room.images.forEach((img, i) => {
    const div = document.createElement("div");
    div.className = `slide${i === 0 ? " active" : ""}`;
    div.innerHTML = `<img src="${img.src}" alt="${img.label}" loading="${i===0?'eager':'lazy'}" onerror="this.src='images/room_photo1.jpg'"/>
      <div class="slide-label">${img.label}</div>`;
    slideshow.appendChild(div);

    const dot = document.createElement("div");
    dot.className = `dot${i === 0 ? " active" : ""}`;
    dot.onclick = () => goToSlide(i, room);
    slideDots.appendChild(dot);
  });

  goToSlide(0, room);

  const amenGrid = document.getElementById("amenitiesGrid");
  amenGrid.innerHTML = room.amenities.map(a => `<div class="amenity-item"><span class="icon">${a.icon}</span>${a.name}</div>`).join("");

  document.getElementById("rCheckIn").onchange = function() {
    const ci = this.value;
    if (!ci) return;
    const nextDay = new Date(ci);
    nextDay.setDate(nextDay.getDate() + 1);
    const nextDayStr = nextDay.toISOString().split("T")[0];
    const coInput = document.getElementById("rCheckOut");
    coInput.min = nextDayStr;
    if (!coInput.value || coInput.value <= ci) {
      coInput.value = nextDayStr;
    }
    updateSummary(room);
  };

  document.getElementById("rCheckOut").onchange = () => updateSummary(room);

  // Bind Step 3 Confirm Button
  const confirmBtn = document.getElementById("cardConfirmPayBtn");
  if (confirmBtn) {
    confirmBtn.onclick = () => confirmPayment(room);
  }

  // Bind Pay Options inside card
  document.querySelectorAll(".pay-option").forEach(opt => {
    opt.onclick = function() {
      document.querySelectorAll(".pay-option").forEach(o => o.classList.remove("selected"));
      this.classList.add("selected");
      this.querySelector("input").checked = true;
      document.getElementById("cardUpiDetails").style.display = this.dataset.method === "upi" ? "block" : "none";
    };
  });
}

function goToSlide(n, room) {
  document.querySelectorAll(".slide").forEach((s, i) => s.classList.toggle("active", i === n));
  document.querySelectorAll(".dot").forEach((d, i) => d.classList.toggle("active", i === n));
  currentSlide = n;
  document.getElementById("slideCounter").textContent = `${n + 1} / ${room.images.length}`;
}

document.getElementById("prevBtn").onclick = () => {
  const room = rooms.find(r => r.id === Number(new URLSearchParams(window.location.search).get("id"))) || rooms[0];
  goToSlide((currentSlide - 1 + room.images.length) % room.images.length, room);
};

document.getElementById("nextBtn").onclick = () => {
  const room = rooms.find(r => r.id === Number(new URLSearchParams(window.location.search).get("id"))) || rooms[0];
  goToSlide((currentSlide + 1) % room.images.length, room);
};

function updateSummary(room) {
  const ci = document.getElementById("rCheckIn").value;
  const co = document.getElementById("rCheckOut").value;
  if (!ci || !co || ci >= co) { document.getElementById("staySummary").style.display = "none"; return; }
  const nights = Math.ceil((new Date(co) - new Date(ci)) / (1000 * 60 * 60 * 24));
  const total = nights * room.price;
  document.getElementById("nightCount").textContent = nights;
  document.getElementById("rateVal").textContent = `₹${room.price.toLocaleString("en-IN")}/night`;
  document.getElementById("totalVal").textContent = `₹${total.toLocaleString("en-IN")}`;
  document.getElementById("staySummary").style.display = "block";
}

let currentBookingStep = 1;

function nextBookingStep(step) {
  const targetRoom = selectedRoom || rooms[0];
  const ci = document.getElementById("rCheckIn").value;
  const co = document.getElementById("rCheckOut").value;

  if (step === 2) {
    if (!ci || !co) { showToast("Please select check-in and check-out dates", "error"); return; }
    if (ci >= co) { showToast("Check-out must be after check-in", "error"); return; }
  }

  if (step === 3) {
    const nm = document.getElementById("rName").value.trim();
    const ph = document.getElementById("rPhone").value.trim();
    if (!nm) { showToast("Please enter your name", "error"); return; }
    if (!ph || ph.length < 10) { showToast("Please enter a valid phone number", "error"); return; }

    const nights = Math.ceil((new Date(co) - new Date(ci)) / (1000 * 60 * 60 * 24));
    const subtotal = nights * targetRoom.price;
    const gst = subtotal * 0.05;
    const grandTotal = subtotal + gst;
    pendingPaymentTotal = grandTotal;

    pendingBookingData = {
      room_name: targetRoom.name,
      room_price: targetRoom.price,
      checkin: ci,
      checkout: co,
      nights,
      guests: parseInt(document.getElementById("rGuests").value),
      guest_name: nm,
      phone: ph,
      total: grandTotal,
      payment_method: document.querySelector('input[name="payMethod"]:checked')?.value || "upi"
    };

    document.getElementById("bookingCardPaymentSummary").innerHTML = `
      <div>🏨 <strong>Room:</strong> ${targetRoom.name}</div>
      <div>📅 <strong>Check-in:</strong> ${fmt(ci)}</div>
      <div>📅 <strong>Check-out:</strong> ${fmt(co)}</div>
      <div>🌙 <strong>Nights:</strong> ${nights} (₹${targetRoom.price.toLocaleString("en-IN")}/night)</div>
      <div>👤 <strong>Name:</strong> ${nm}</div>
      <div>📞 <strong>Phone:</strong> ${ph}</div>
      <hr style="border:none; border-top:1px solid #f0e9d6; margin:8px 0;"/>
      <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
        <span>Room Price:</span>
        <span>₹${subtotal.toLocaleString("en-IN")}</span>
      </div>
      <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
        <span>GST (5%):</span>
        <span>₹${gst.toLocaleString("en-IN")}</span>
      </div>
      <div style="display:flex; justify-content:space-between; font-weight:700; font-size:1rem; color:var(--gold-dark); border-top:1px solid #f0e9d6; padding-top:6px; margin-top:6px;">
        <span>Grand Total:</span>
        <span>₹${grandTotal.toLocaleString("en-IN")}</span>
      </div>
    `;

    const title = `Room: ${targetRoom.name}`;
    const upiStr = `upi://pay?pa=9414949982@sbi&pn=SAHIL%20PALACE&am=${grandTotal}&cu=INR&tn=${encodeURIComponent(title)}`;
    document.getElementById("upiQrCode").src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(upiStr)}`;
    document.getElementById("upiDeepLink").href = upiStr;
  }

  // Toggle Visibility
  document.getElementById("bookingStep1").style.display = step === 1 ? "block" : "none";
  document.getElementById("bookingStep2").style.display = step === 2 ? "block" : "none";
  document.getElementById("bookingStep3").style.display = step === 3 ? "block" : "none";

  // Update Progress Indicator styles
  document.getElementById("step1Indicator").style.color = step === 1 ? "var(--gold)" : "var(--muted)";
  document.getElementById("step1Indicator").style.borderBottom = step === 1 ? "2px solid var(--gold)" : "none";
  document.getElementById("step1Indicator").style.fontWeight = step === 1 ? "700" : "600";

  document.getElementById("step2Indicator").style.color = step === 2 ? "var(--gold)" : "var(--muted)";
  document.getElementById("step2Indicator").style.borderBottom = step === 2 ? "2px solid var(--gold)" : "none";
  document.getElementById("step2Indicator").style.fontWeight = step === 2 ? "700" : "600";

  document.getElementById("step3Indicator").style.color = step === 3 ? "var(--gold)" : "var(--muted)";
  document.getElementById("step3Indicator").style.borderBottom = step === 3 ? "2px solid var(--gold)" : "none";
  document.getElementById("step3Indicator").style.fontWeight = step === 3 ? "700" : "600";

  currentBookingStep = step;
}

function fmt(d) { return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }); }

function copyUPI() {
  const upi = document.getElementById("upiIdText").textContent;
  navigator.clipboard.writeText(upi).then(() => {
    const btn = document.querySelector(".btn-copy");
    btn.textContent = "✅ Copied!";
    setTimeout(() => btn.textContent = "📋 Copy", 2000);
  }).catch(() => prompt("Copy this UPI ID:", upi));
}

async function confirmPayment(room) {
  const targetRoom = room || selectedRoom || rooms[0];
  const method = document.querySelector('input[name="payMethod"]:checked')?.value || "upi";
  const labels = { upi: "UPI / GPay / PhonePe", card: "Debit / Credit Card" };
  const utr = document.getElementById("upiUtrNo")?.value.trim() || "";

  if (method === "upi") {
    const utrRegex = /^\d{12}$/;
    if (!utrRegex.test(utr)) {
      showToast("Please enter a valid 12-digit numeric UPI Transaction ID / UTR No.", "error");
      return;
    }
  }

  if (pendingBookingData) {
    pendingBookingData.payment_method = method;
    try {
      await fetch(`${API_BASE}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pendingBookingData)
      });
    } catch (e) { console.warn("Booking save failed:", e.message); }
  }

  const guestName = pendingBookingData ? pendingBookingData.guest_name : "Guest";
  const guestPhone = pendingBookingData ? pendingBookingData.phone : "";
  const checkin = pendingBookingData ? pendingBookingData.checkin : "";
  const checkout = pendingBookingData ? pendingBookingData.checkout : "";
  const nights = pendingBookingData ? pendingBookingData.nights : 1;
  
  const subtotal = nights * targetRoom.price;
  const gst = subtotal * 0.05;

  const hotelWaMsg = encodeURIComponent(
    `🏨 *NEW ROOM BOOKING REQUEST (PENDING BANK CHECK)*\n\n🛏️ *Room:* ${targetRoom.name}\n👤 *Guest Name:* ${guestName}\n📞 *Phone:* ${guestPhone}\n📅 *Check-in:* ${checkin}\n📅 *Check-out:* ${checkout}\n🌙 *Nights:* ${nights}\n💵 *Subtotal:* ₹${subtotal}\n⚡ *GST (5%):* ₹${gst}\n💰 *Total Amount:* ₹${pendingPaymentTotal}\n💳 *Payment Method:* ${labels[method] || method.toUpperCase()}\n🔢 *UPI UTR / Ref No:* ${utr || "Not Provided"}\n\n⚠️ *Note for Hotel:* Please check your GPay/PhonePe for ₹${pendingPaymentTotal} payment before confirming booking on Admin Panel.`
  );
  window.open(`https://wa.me/918742026903?text=${hotelWaMsg}`, "_blank");

  showToast(`📩 Booking Request Submitted! Hotel will verify payment & send confirmation on WhatsApp.`, "success");
  
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
}

function showToast(message, type = "success") {
  const t = document.getElementById("siteToast");
  t.textContent = message;
  t.style.background = type === "error" ? "#c0392b" : "#27ae60";
  t.style.opacity = "1";
  clearTimeout(t._timeout);
  t._timeout = setTimeout(() => t.style.opacity = "0", 4000);
}

const params = new URLSearchParams(window.location.search);
const roomId = parseInt(params.get("id"), 10);
const selectedRoom = rooms.find(r => r.id === roomId);

if (selectedRoom) {
  renderRoomDetailPage(selectedRoom);
} else {
  renderRoomsListPage();
}

document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});
