// ===== ROOM DATA =====
const rooms = [
  {
    id: 1, name: "Standard Single Room", price: 1000, badge: "Budget",
    desc: "Cozy single room with stylish décor, AC, and all basic amenities for a comfortable stay. Perfect for solo travellers looking for affordability without compromising comfort.",
    images: [
      { src: "images/room_photo2.jpg",  label: "Bedroom View" },
      { src: "images/room_angle2.png",  label: "Room Interior" },
      { src: "images/room_washroom.png",label: "Bathroom" },
      { src: "images/room_tv_desk.png", label: "TV & Desk Area" }
    ],
    amenities: [
      { icon: "❄️", name: "Air Conditioning" }, { icon: "📶", name: "Free WiFi" },
      { icon: "📺", name: "LED TV" },           { icon: "🚿", name: "Hot Water" },
      { icon: "🧹", name: "Daily Housekeeping"},{ icon: "🔒", name: "In-room Safe" },
      { icon: "💡", name: "24/7 Power" },       { icon: "🛎️", name: "Room Service" }
    ]
  },
  {
    id: 2, name: "Standard Double Room", price: 1200, badge: "Popular",
    desc: "Spacious double room with modern interiors, perfect for couples or solo travellers who want extra space. Comes with a large comfortable bed and premium amenities.",
    images: [
      { src: "images/room_photo5.jpg",  label: "Bedroom View" },
      { src: "images/room_angle2.png",  label: "Room Interior" },
      { src: "images/room_washroom.png",label: "Bathroom" },
      { src: "images/room_tv_desk.png", label: "TV & Desk Area" }
    ],
    amenities: [
      { icon: "❄️", name: "Air Conditioning" }, { icon: "📶", name: "Free WiFi" },
      { icon: "📺", name: "LED TV" },           { icon: "🚿", name: "Hot Water" },
      { icon: "🅿️", name: "Free Parking" },     { icon: "🧹", name: "Daily Housekeeping"},
      { icon: "💡", name: "24/7 Power" },       { icon: "🛎️", name: "Room Service" }
    ]
  },
  {
    id: 3, name: "Deluxe Single Room", price: 1500, badge: "Deluxe",
    desc: "Upgraded single room with premium teal-frame bed, elegant panel wall and soft lighting. Ideal for business travellers and solo explorers wanting a step up in comfort.",
    images: [
      { src: "images/room_photo2.jpg",  label: "Bedroom View" },
      { src: "images/room_photo1.jpg",  label: "Room Angle" },
      { src: "images/room_washroom.png",label: "Bathroom" },
      { src: "images/room_tv_desk.png", label: "TV & Work Desk" }
    ],
    amenities: [
      { icon: "❄️", name: "Air Conditioning" }, { icon: "📶", name: "Free WiFi" },
      { icon: "📺", name: "LED TV" },           { icon: "🚿", name: "Hot Water" },
      { icon: "🧊", name: "Mini Fridge" },      { icon: "🧹", name: "Daily Housekeeping"},
      { icon: "☕", name: "Tea / Coffee" },      { icon: "🛎️", name: "Room Service" }
    ]
  },
  {
    id: 4, name: "Deluxe Double Room", price: 1800, badge: "Best Value",
    desc: "Our most popular room — two plush beds, designer headboard wall and warm ambiance. The perfect choice for couples or friends travelling together.",
    images: [
      { src: "images/room_photo1.jpg",  label: "Bedroom View" },
      { src: "images/room_photo2.jpg",  label: "Room Interior" },
      { src: "images/room_washroom.png",label: "Bathroom" },
      { src: "images/room_tv_desk.png", label: "TV & Desk Area" }
    ],
    amenities: [
      { icon: "❄️", name: "Air Conditioning" }, { icon: "📶", name: "Free WiFi" },
      { icon: "📺", name: "LED TV" },           { icon: "🚿", name: "Hot Water" },
      { icon: "🌿", name: "Balcony View" },     { icon: "🧹", name: "Daily Housekeeping"},
      { icon: "☕", name: "Tea / Coffee" },      { icon: "🛎️", name: "Room Service" }
    ]
  },
  {
    id: 5, name: "Executive Room", price: 2200, badge: "Executive",
    desc: "Designed for business travellers — king bed, work desk, LED TV and premium AC. Stay productive and comfortable with high-speed WiFi and a fully equipped workspace.",
    images: [
      { src: "images/room_photo5.jpg",  label: "Bedroom View" },
      { src: "images/room_angle2.png",  label: "Room Interior" },
      { src: "images/room_washroom.png",label: "Bathroom" },
      { src: "images/room_tv_desk.png", label: "Work Desk & TV" }
    ],
    amenities: [
      { icon: "❄️", name: "Air Conditioning" }, { icon: "📶", name: "Free WiFi" },
      { icon: "📺", name: "LED TV" },           { icon: "🚿", name: "Hot Water" },
      { icon: "💼", name: "Work Desk" },        { icon: "🧹", name: "Daily Housekeeping"},
      { icon: "☕", name: "Tea / Coffee" },      { icon: "🛎️", name: "Room Service" }
    ]
  },
  {
    id: 6, name: "Family Room", price: 2500, badge: "Family",
    desc: "Extra-large room with two double beds, ample space for families travelling with kids. Enjoy a comfortable and relaxed stay with everything your family needs.",
    images: [
      { src: "images/room_photo3.jpg",  label: "Bedroom View" },
      { src: "images/room_photo4.jpg",  label: "Room Interior" },
      { src: "images/room_washroom.png",label: "Bathroom" },
      { src: "images/room_tv_desk.png", label: "TV & Seating Area" }
    ],
    amenities: [
      { icon: "❄️", name: "Air Conditioning" }, { icon: "📶", name: "Free WiFi" },
      { icon: "📺", name: "LED TV" },           { icon: "🚿", name: "Hot Water" },
      { icon: "🛏️", name: "Extra Beds" },       { icon: "🧹", name: "Daily Housekeeping"},
      { icon: "🅿️", name: "Free Parking" },     { icon: "🛎️", name: "Room Service" }
    ]
  },
  {
    id: 7, name: "Deluxe Family Room", price: 3000, badge: "Premium",
    desc: "Premium family room with three beds, ceiling fans, LED TV unit and a spacious floor area. Everything your family needs for a memorable and comfortable stay.",
    images: [
      { src: "images/room_photo4.jpg",  label: "Bedroom View" },
      { src: "images/room_photo3.jpg",  label: "Room Interior" },
      { src: "images/room_washroom.png",label: "Bathroom" },
      { src: "images/room_tv_desk.png", label: "TV Unit & Lounge" }
    ],
    amenities: [
      { icon: "❄️", name: "Air Conditioning" }, { icon: "📶", name: "Free WiFi" },
      { icon: "📺", name: "LED TV" },           { icon: "🚿", name: "Hot Water" },
      { icon: "🛋️", name: "Lounge Area" },      { icon: "🧹", name: "Daily Housekeeping"},
      { icon: "🅿️", name: "Free Parking" },     { icon: "🛎️", name: "Room Service" }
    ]
  },
  {
    id: 8, name: "Super Deluxe Room", price: 3200, badge: "Super Deluxe",
    desc: "Twin-bed super deluxe room with marble panel accent wall and premium blue upholstered beds. A superior choice for those who demand the very best in comfort.",
    images: [
      { src: "images/room_photo1.jpg",  label: "Bedroom View" },
      { src: "images/room_angle2.png",  label: "Room Interior" },
      { src: "images/room_washroom.png",label: "Premium Bathroom" },
      { src: "images/room_tv_desk.png", label: "TV & Desk" }
    ],
    amenities: [
      { icon: "❄️", name: "Air Conditioning" }, { icon: "📶", name: "Free WiFi" },
      { icon: "📺", name: "LED TV" },           { icon: "🛁", name: "Bathtub" },
      { icon: "🚿", name: "Hot Water" },        { icon: "🧹", name: "Daily Housekeeping"},
      { icon: "☕", name: "Tea / Coffee" },      { icon: "🛎️", name: "Room Service" }
    ]
  },
  {
    id: 9, name: "Suite Room", price: 3800, badge: "Suite",
    desc: "Spacious suite with designer lighting, two beds, curtained windows and a lounge corner. A luxurious experience combining comfort, privacy and premium amenities.",
    images: [
      { src: "images/room_photo3.jpg",  label: "Bedroom View" },
      { src: "images/room_photo1.jpg",  label: "Lounge Area" },
      { src: "images/room_washroom.png",label: "Luxury Bathroom" },
      { src: "images/room_tv_desk.png", label: "TV & Living Room" }
    ],
    amenities: [
      { icon: "❄️", name: "Air Conditioning" }, { icon: "📶", name: "Free WiFi" },
      { icon: "📺", name: "LED TV" },           { icon: "🛁", name: "Bathtub" },
      { icon: "🛋️", name: "Living Room" },      { icon: "🧹", name: "Daily Housekeeping"},
      { icon: "☕", name: "Tea / Coffee" },      { icon: "🛎️", name: "24/7 Room Service" }
    ]
  },
  {
    id: 10, name: "Royal Suite", price: 4000, badge: "Royal",
    desc: "The crown jewel of Sahil Palace — three beds, LED TV unit, work desk, ultimate comfort. Experience royalty with our finest suite offering every premium amenity.",
    images: [
      { src: "images/room_photo4.jpg",  label: "Royal Bedroom" },
      { src: "images/room_photo5.jpg",  label: "Suite Interior" },
      { src: "images/room_washroom.png",label: "Royal Bathroom" },
      { src: "images/room_tv_desk.png", label: "TV Unit & Work Desk" }
    ],
    amenities: [
      { icon: "❄️", name: "Air Conditioning" }, { icon: "📶", name: "Free WiFi" },
      { icon: "📺", name: "LED TV" },           { icon: "🛁", name: "Bathtub" },
      { icon: "💼", name: "Work Desk" },        { icon: "🛋️", name: "Living Room" },
      { icon: "☕", name: "Tea / Coffee" },      { icon: "🛎️", name: "24/7 Room Service" }
    ]
  }
];

// ===== INIT =====
const params   = new URLSearchParams(window.location.search);
const roomId   = parseInt(params.get("id")) || 1;
const room     = rooms.find(r => r.id === roomId) || rooms[0];
let currentSlide = 0;
let pendingPaymentTotal = 0;
let pendingBookingData  = null;

document.getElementById("breadRoom").textContent   = room.name;
document.getElementById("roomTitle").textContent   = room.name;
document.getElementById("roomDesc").textContent    = room.desc;
document.getElementById("roomBadge").textContent   = room.badge;
document.getElementById("bookPrice").textContent   = `₹${room.price.toLocaleString("en-IN")}`;
document.title = `${room.name} – Sahil Palace & Restaurant`;

// Set min dates
const today = new Date().toISOString().split("T")[0];
document.getElementById("rCheckIn").min  = today;
document.getElementById("rCheckOut").min = today;

// Auto-set check-out to next day when check-in changes
document.getElementById("rCheckIn").addEventListener("change", function() {
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
  updateSummary();
});

document.getElementById("rCheckOut").addEventListener("change", updateSummary);

// ===== SLIDESHOW =====
const slideshow  = document.getElementById("slideshow");
const slideDots  = document.getElementById("slideDots");
const slideCount = document.getElementById("slideCounter");

room.images.forEach((img, i) => {
  const div = document.createElement("div");
  div.className = `slide${i === 0 ? " active" : ""}`;
  div.innerHTML = `<img src="${img.src}" alt="${img.label}" loading="${i===0?'eager':'lazy'}"/>
    <div class="slide-label">${img.label}</div>`;
  slideshow.appendChild(div);

  const dot = document.createElement("div");
  dot.className = `dot${i === 0 ? " active" : ""}`;
  dot.onclick = () => goToSlide(i);
  slideDots.appendChild(dot);
});

function goToSlide(n) {
  document.querySelectorAll(".slide").forEach((s,i) => s.classList.toggle("active", i===n));
  document.querySelectorAll(".dot").forEach((d,i)  => d.classList.toggle("active", i===n));
  currentSlide = n;
  slideCount.textContent = `${n+1} / ${room.images.length}`;
}

document.getElementById("prevBtn").onclick = () =>
  goToSlide((currentSlide - 1 + room.images.length) % room.images.length);
document.getElementById("nextBtn").onclick = () =>
  goToSlide((currentSlide + 1) % room.images.length);

// Auto-slide every 4s
setInterval(() => goToSlide((currentSlide + 1) % room.images.length), 4000);

// ===== AMENITIES =====
const amenGrid = document.getElementById("amenitiesGrid");
room.amenities.forEach(a => {
  amenGrid.innerHTML += `<div class="amenity-item"><span class="icon">${a.icon}</span>${a.name}</div>`;
});



function updateSummary() {
  const ci = document.getElementById("rCheckIn").value;
  const co = document.getElementById("rCheckOut").value;
  if (!ci || !co || ci >= co) { document.getElementById("staySummary").style.display="none"; return; }
  const nights = Math.ceil((new Date(co)-new Date(ci))/(1000*60*60*24));
  const total  = nights * room.price;
  document.getElementById("nightCount").textContent = nights;
  document.getElementById("rateVal").textContent    = `₹${room.price.toLocaleString("en-IN")}/night`;
  document.getElementById("totalVal").textContent   = `₹${total.toLocaleString("en-IN")}`;
  document.getElementById("staySummary").style.display = "block";
}

// ===== BOOKING SUBMIT =====
async function submitBooking() {
  const ci = document.getElementById("rCheckIn").value;
  const co = document.getElementById("rCheckOut").value;
  const g  = document.getElementById("rGuests").value;
  const nm = document.getElementById("rName").value.trim();
  const ph = document.getElementById("rPhone").value.trim();

  if (!ci || !co) { showToast("Please select check-in and check-out dates", "error"); return; }
  if (ci >= co)   { showToast("Check-out must be after check-in", "error"); return; }
  if (!nm)        { showToast("Please enter your name", "error"); return; }
  if (!ph || ph.length < 10) { showToast("Please enter a valid phone number", "error"); return; }

  const nights = Math.ceil((new Date(co)-new Date(ci))/(1000*60*60*24));
  const total  = nights * room.price;

  pendingBookingData = { room_name: room.name, room_price: room.price, checkin: ci, checkout: co, nights, guests: parseInt(g), guest_name: nm, phone: ph, total, payment_method: "upi" };

  openPaymentModal(`Room: ${room.name}`, [
    `📅 Check-in: ${fmt(ci)}`,
    `📅 Check-out: ${fmt(co)}`,
    `👤 Name: ${nm}`,
    `📞 Phone: ${ph}`,
    `👥 Guests: ${g}`,
    `🌙 Nights: ${nights}`,
    `💰 Rate: ₹${room.price.toLocaleString("en-IN")}/night`
  ], total);
}

function fmt(d) { return new Date(d).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}); }

// ===== PAYMENT MODAL =====
function openPaymentModal(title, lines, total) {
  pendingPaymentTotal = total;
  document.getElementById("paymentTitle").textContent = title;
  document.getElementById("paymentSummary").innerHTML =
    lines.map(l=>`<div>${l}</div>`).join("") +
    `<div style="margin-top:8px;font-weight:700;font-size:1.05rem;color:#9a7a2e">Total: ₹${total.toLocaleString("en-IN")}</div>`;

  document.querySelectorAll(".pay-option").forEach(o=>o.classList.remove("selected"));
  document.querySelector('.pay-option[data-method="upi"]').classList.add("selected");
  document.querySelector('.pay-option[data-method="upi"] input').checked = true;
  document.getElementById("upiDetails").style.display = "block";

  const upiStr = `upi://pay?pa=8742026903@ybl&pn=Sahil%20Palace&am=${total}&cu=INR&tn=${encodeURIComponent(title)}`;
  document.getElementById("upiQrCode").src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(upiStr)}`;
  document.getElementById("upiDeepLink").href = upiStr;
  document.getElementById("paymentModal").classList.add("open");
}

document.querySelectorAll(".pay-option").forEach(opt => {
  opt.addEventListener("click", function() {
    document.querySelectorAll(".pay-option").forEach(o=>o.classList.remove("selected"));
    this.classList.add("selected");
    this.querySelector("input").checked = true;
    document.getElementById("upiDetails").style.display = this.dataset.method==="upi"?"block":"none";
  });
});

function closeModal(id) { document.getElementById(id).classList.remove("open"); }

document.getElementById("paymentModal").addEventListener("click", e => {
  if (e.target.id === "paymentModal") closeModal("paymentModal");
});

function copyUPI() {
  const upi = document.getElementById("upiIdText").textContent;
  navigator.clipboard.writeText(upi).then(() => {
    const btn = document.querySelector(".btn-copy");
    btn.textContent = "✅ Copied!";
    setTimeout(() => btn.textContent = "📋 Copy", 2000);
  }).catch(() => prompt("Copy this UPI ID:", upi));
}

async function confirmPayment() {
  const method = document.querySelector('input[name="payMethod"]:checked').value;
  const labels = { upi:"UPI / GPay / PhonePe", cash:"Cash on Arrival", card:"Debit / Credit Card" };

  // Save booking to backend
  if (pendingBookingData) {
    pendingBookingData.payment_method = method;
    try {
      await fetch(`${API_BASE}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pendingBookingData)
      });
    } catch(e) { console.warn("Booking save failed:", e.message); }
  }

  closeModal("paymentModal");

  if (method === "upi") {
    const msg = `Hi, I have booked ${room.name} at Sahil Palace. Total: ₹${pendingPaymentTotal}. Payment via UPI. Please confirm.`;
    window.open(`https://wa.me/918742026903?text=${encodeURIComponent(msg)}`, "_blank");
  } else {
    showToast(`✅ Booking confirmed! Total ₹${pendingPaymentTotal.toLocaleString("en-IN")} — ${labels[method]}. We'll call you shortly!`, "success");
  }
}

// ===== TOAST =====
function showToast(message, type="success") {
  const t = document.getElementById("siteToast");
  t.textContent = message;
  t.style.background = type==="error" ? "#c0392b" : "#27ae60";
  t.style.opacity = "1";
  clearTimeout(t._timeout);
  t._timeout = setTimeout(() => t.style.opacity="0", 4000);
}

// ===== NAVBAR =====
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});
