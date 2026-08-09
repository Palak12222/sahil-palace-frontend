// ===== DATA =====
const rooms = [
  {id:1, name:"Standard Single Room", price:1000, img:"images/room_photo2.jpg", desc:"Cozy single room with stylish décor, AC, and all basic amenities for a comfortable stay. Perfect for solo travellers.",      badge:"Budget",     amenities:[{icon:"❄️",name:"AC"},{icon:"📶",name:"Free WiFi"},{icon:"📺",name:"LED TV"},{icon:"🚿",name:"Hot Water"}]},
  {id:2, name:"Standard Double Room", price:1500, img:"images/room_photo5.jpg", desc:"Spacious double room with modern interiors, perfect for couples or solo travellers who want extra space.",                     badge:"Popular",    amenities:[{icon:"❄️",name:"AC"},{icon:"📶",name:"Free WiFi"},{icon:"📺",name:"LED TV"},{icon:"🅿️",name:"Free Parking"}]},
  {id:3, name:"Deluxe Single Room",   price:1800, img:"images/delux 1800/IMG_6134.jpg", desc:"Upgraded single room with premium bed, elegant panel wall and soft lighting. Ideal for business travellers.",                  badge:"Deluxe",     amenities:[{icon:"❄️",name:"AC"},{icon:"📶",name:"Free WiFi"},{icon:"🧊",name:"Mini Fridge"},{icon:"☕",name:"Tea/Coffee"}]},
  {id:4, name:"Deluxe Double Room",   price:2000, img:"images/delux 2000/IMG_6160.jpg", desc:"Our most popular room — two plush beds, designer headboard wall and warm ambiance. Perfect for couples or friends.",           badge:"Best Value", amenities:[{icon:"❄️",name:"AC"},{icon:"📶",name:"Free WiFi"},{icon:"🌿",name:"Balcony"},{icon:"☕",name:"Tea/Coffee"}]},
  {id:5, name:"Executive Room",       price:2500, img:"images/executive 2500/IMG_6147.jpg", desc:"Designed for business travellers — king bed, work desk, LED TV and premium AC. High-speed WiFi included.",                    badge:"Executive",  amenities:[{icon:"❄️",name:"AC"},{icon:"📶",name:"Free WiFi"},{icon:"💼",name:"Work Desk"},{icon:"☕",name:"Tea/Coffee"}]},
  {id:6, name:"Family Room",          price:3000, img:"images/Family 3000/IMG_6173.jpg", desc:"Extra-large room with two double beds, ample space for families travelling with kids. All premium amenities included.",        badge:"Family",     amenities:[{icon:"❄️",name:"AC"},{icon:"📶",name:"Free WiFi"},{icon:"🛏️",name:"Extra Beds"},{icon:"📺",name:"LED TV"}]},
];



const menuData = {
  breakfast:{
    veg:[
      {name:"Special Milk Tea",price:40,desc:"Rich cardamom & ginger milk tea",img:"images/food_milk_tea.png"},
      {name:"Tandoori Paneer Prantha",price:110,desc:"Fresh cottage cheese stuffed tandoori parantha",img:"images/food/paneer Methi Malai.jpg"},
      {name:"Tandoori Aloo Prantha",price:70,desc:"Spiced potato stuffed tandoori parantha",img:"images/food/jeera aloo.jpg"},
      {name:"Lassi (Sweet / Salty)",price:50,desc:"Traditional thick chilled yogurt drink",img:"images/food_lassi.png"},
      {name:"Poha",price:100,desc:"Flattened rice cooked with spices & peanuts",img:"images/food_poha.png"},
      {name:"Masala Chai",price:15,desc:"Spiced Indian tea",img:"images/food_tea.png"}
    ],
    nonveg:[
      {name:"Bread Omelette",price:100,desc:"Fluffy 2-egg omelette served with toasted bread",img:"images/food_bread_omelette.png"},
      {name:"Egg Omelette",price:80,desc:"2-egg Indian style masala omelette",img:"images/food_omelette.png"},
      {name:"Egg Bhurji",price:80,desc:"Scrambled spiced eggs with onion-tomato",img:"images/food_egg_bhurji.png"}
    ]
  },
  lunch:{
    veg:[
      {name:"Dal Makhani",price:200,desc:"Creamy black lentil curry slow-cooked overnight",img:"images/food/Dal Makhani.jpg"},
      {name:"Paneer Butter Masala",price:300,desc:"Cottage cheese in rich tomato-cream gravy",img:"images/food/Paneer Butter Masala.jpg"},
      {name:"Shahi Paneer",price:280,desc:"Royal cottage cheese in sweet cashew cream gravy",img:"images/food/Shahi paneer.jpg"},
      {name:"Veg Biryani",price:160,desc:"Aromatic basmati rice with mixed vegetables",img:"images/food/Veg Biryani.jpg"},
      {name:"Butter Naan",price:40,desc:"Rich fluffy naan topped with melted butter",img:"images/food/butter naan.jpg"},
      {name:"Steamed Rice",price:90,desc:"Plain fluffy basmati rice",img:"images/food/steamed rice.jpg"}
    ],
    nonveg:[
      {name:"Chicken Biryani",price:250,desc:"Tender chicken layered with saffron basmati rice",img:"images/food/Chicken Biryani.jpg"},
      {name:"Butter Chicken",price:550,desc:"Classic tandoori chicken in creamy tomato gravy",img:"images/food/Butter chicken.jpg"},
      {name:"Chicken Curry",price:550,desc:"Classic Indian chicken curry with rich gravy",img:"images/food/Chicken Curry.jpg"},
      {name:"Kadhai Chicken",price:600,desc:"Chicken cooked with capsicum & kadai spices",img:"images/food/Kadhai Chicken.jpg"},
      {name:"Chicken Pakora",price:500,desc:"Crispy spiced fried chicken fritters",img:"images/food/Chicken Pakora.jpg"}
    ]
  },
  dinner:{
    veg:[
      {name:"Paneer Tikka (8 Pcs)",price:280,desc:"Grilled cottage cheese with tandoor spices",img:"images/food/Paneer Tikka butter Masala.jpg"},
      {name:"Yellow Dal Tadka",price:160,desc:"Yellow lentils tempered with ghee & cumin",img:"images/food/yellow Dal Tadka.jpg"},
      {name:"Kadai Paneer",price:340,desc:"Paneer cooked in bell peppers & kadai masala",img:"images/food/Kadai Paneer.jpg"},
      {name:"Jeera Rice",price:120,desc:"Basmati rice tempered with cumin seeds & ghee",img:"images/food/Jeera Rice.jpg"},
      {name:"Veg. Raita",price:80,desc:"Chilled yogurt with cucumber & cumin",img:"images/food/veg raita.jpg"},
      {name:"Malai Kofta",price:320,desc:"Fried paneer balls in velvet cream gravy",img:"images/food/Malai Kofta.jpg"}
    ],
    nonveg:[
      {name:"Tandoori Chicken",price:550,desc:"Whole chicken marinated & cooked in clay oven",img:"images/food/Tandoori chicken.jpg"},
      {name:"Boneless Butter Chicken",price:600,desc:"Boneless chicken in signature makhani gravy",img:"images/food/boneless butter chicken.jpg"},
      {name:"Chicken Malai Tikka",price:600,desc:"Melt in mouth creamy cashew marinated chicken tikka",img:"images/food/chicken malai tikka.jpg"},
      {name:"Chicken Tikka Boneless",price:550,desc:"Boneless chicken pieces marinated in spices",img:"images/food/Chicken Tikka boneless.jpg"}
    ]
  }
};

// ===== STATE =====
let cart = [];
let currentCategory = "breakfast";
let currentType = "all";
let selectedRoomId = null;

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 80);
});

// Hamburger
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => document.getElementById("navLinks").classList.remove("open"));
});

// ===== DATE MIN LOGIC (booking modal) =====
const today = new Date().toISOString().split("T")[0];
const mCI = document.getElementById("mCheckIn");
const mCO = document.getElementById("mCheckOut");
if(mCI) mCI.min = today;
if(mCO) mCO.min = today;
if(mCI) mCI.addEventListener("change", e => { if(mCO) mCO.min = e.target.value; });

function formatDate(str){ return new Date(str).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}); }



// ===== ROOMS =====
const roomGuests = { 1:1, 2:2, 3:1, 4:2, 5:2, 6:4 };
const roomStars  = { Budget:"⭐⭐⭐", Popular:"⭐⭐⭐⭐", Deluxe:"⭐⭐⭐⭐", "Best Value":"⭐⭐⭐⭐", Executive:"⭐⭐⭐⭐⭐", Family:"⭐⭐⭐⭐", Suite:"⭐⭐⭐⭐⭐" };
const badgeClass = { Popular:"popular", "Best Value":"best", Family:"best" };

function renderRooms(maxPrice=9999){
  const grid     = document.getElementById("roomsGrid");
  const filtered = rooms.filter(r => r.price <= maxPrice);
  const cnt = document.getElementById("roomCount");
  if (cnt) cnt.textContent = `${filtered.length} room${filtered.length!==1?"s":""} available`;

  if(!filtered.length){
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:rgba(255,255,255,.4)"><p style="font-size:2rem">🏨</p><p>No rooms in this price range</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map(r => {
    const stars  = roomStars[r.badge]  || "⭐⭐⭐";
    const bClass = badgeClass[r.badge] || "";
    const ams    = r.amenities || [];
    return `
    <div class="room-card fade-in" onclick="window.location.href='room.html?id=${r.id}'">
      <div class="room-card-img">
        <img src="${r.img}" alt="${r.name}" loading="lazy"/>
        <div class="room-img-overlay"></div>
        <div class="room-badge-wrap">
          <span class="room-badge ${bClass}">${r.badge}</span>
        </div>
        <div class="room-price-chip">₹${r.price.toLocaleString("en-IN")}<span>/night</span></div>
      </div>
      <div class="room-card-body">
        <div class="room-meta">
          <span class="room-stars">${stars}</span>
        </div>
        <h3>${r.name}</h3>
        <p>${r.desc}</p>
        <div class="room-amenities">
          ${ams.slice(0,4).map(a=>`<span class="room-amenity">${a.icon} ${a.name}</span>`).join("")}
        </div>
        <div class="room-footer">
          <div class="room-price">₹${r.price.toLocaleString("en-IN")}<span>per night</span></div>
          <a class="btn-book-room" href="room.html?id=${r.id}" onclick="event.stopPropagation()">View &amp; Book →</a>
        </div>
      </div>
    </div>`;
  }).join("");
  observeFadeIns();
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", function(){
    document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
    this.classList.add("active");
    renderRooms(Number(this.dataset.max));
  });
});


// ===== BOOKING MODAL =====
function openBookingModal(roomId){
  selectedRoomId = roomId;
  const room = rooms.find(r=>r.id===roomId);
  document.getElementById("modalRoomName").textContent = room.name;
  document.getElementById("modalPrice").textContent = `₹${room.price.toLocaleString("en-IN")}`;
  document.getElementById("bookingModal").classList.add("open");
}
function closeModal(id){ document.getElementById(id).classList.remove("open"); }

document.getElementById("bookingFormModal").addEventListener("submit", async e=>{
  e.preventDefault();
  const room = rooms.find(r=>r.id===selectedRoomId);
  const ci  = document.getElementById("mCheckIn").value;
  const co  = document.getElementById("mCheckOut").value;
  const g   = document.getElementById("mGuests").value;
  const nm  = document.getElementById("mName").value;
  const ph  = document.getElementById("mPhone").value;
  if(!ci||!co){ showToast("Please select check-in and check-out dates.","error"); return; }
  if(ci>=co){ showToast("Check-out must be after check-in.","error"); return; }
  const nights = Math.ceil((new Date(co)-new Date(ci))/(1000*60*60*24));
  const total  = room.price * nights;
  // Save booking to backend
  try {
    await fetch(`${API_BASE}/api/bookings`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        room_name: room.name, room_price: room.price,
        checkin: ci, checkout: co, nights, guests: parseInt(g),
        guest_name: nm, phone: ph, total,
        payment_method: document.querySelector('input[name="payMethod"]:checked')?.value || "upi"
      })
    });
  } catch(err){ console.warn("Booking save failed (offline?)", err); }
  closeModal("bookingModal");
  openPaymentModal(`Room: ${room.name}`, [
    `📅 Check-in: ${formatDate(ci)}`,
    `📅 Check-out: ${formatDate(co)}`,
    `👤 Name: ${nm}`,
    `📞 Phone: ${ph}`,
    `👥 Guests: ${g}`,
    `🌙 Nights: ${nights}`,
    `💰 Rate: ₹${room.price.toLocaleString("en-IN")}/night`
  ], total);
});

document.getElementById("bookingModal").addEventListener("click", e => {
  if(e.target.id==="bookingModal") closeModal("bookingModal");
});

// ===== FOOD =====
function renderFood(){
  const data = menuData[currentCategory];
  const items = currentType==="all"
    ? [...data.veg.map(i=>({...i,type:"veg"})),...data.nonveg.map(i=>({...i,type:"nonveg"}))]
    : currentType==="veg"
    ? data.veg.map(i=>({...i,type:"veg"}))
    : data.nonveg.map(i=>({...i,type:"nonveg"}));

  document.getElementById("foodGrid").innerHTML = items.map((item,idx)=>`
    <div class="food-card fade-in">
      <img src="${item.img}" alt="${item.name}" loading="lazy"/>
      <div class="food-card-body">
        <span class="food-type-dot ${item.type==="veg"?"dot-veg":"dot-nonveg"}"></span>
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <div class="food-footer">
          <span class="food-price">₹${item.price}</span>
          <button class="btn-add-cart" onclick='addToCart(${JSON.stringify(item).replace(/'/g,"&apos;")})'>+ Add</button>
        </div>
      </div>
    </div>`).join("");
  observeFadeIns();
}

document.querySelectorAll(".food-tab").forEach(btn=>{
  btn.addEventListener("click",function(){
    document.querySelectorAll(".food-tab").forEach(b=>b.classList.remove("active"));
    this.classList.add("active");
    currentCategory=this.dataset.cat;
    renderFood();
  });
});
document.querySelectorAll(".vt-btn").forEach(btn=>{
  btn.addEventListener("click",function(){
    document.querySelectorAll(".vt-btn").forEach(b=>b.classList.remove("active"));
    this.classList.add("active");
    currentType=this.dataset.type;
    renderFood();
  });
});

// ===== CART =====
function addToCart(item){
  const existing = cart.find(c=>c.name===item.name);
  if(existing){ existing.qty++; }
  else { cart.push({...item, qty:1}); }
  updateCart();
}

function updateCart(){
  const section = document.getElementById("cartSection");
  const count   = cart.reduce((s,c)=>s+c.qty,0);
  const total   = cart.reduce((s,c)=>s+(c.price*c.qty),0);
  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartTotal").textContent = total;
  section.classList.toggle("has-items", cart.length>0);
  document.getElementById("cartItems").innerHTML = cart.map((c,i)=>`
    <div class="cart-item">
      <span class="cart-item-name">${c.name}</span>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="changeQty(${i},-1)">−</button>
        <span>${c.qty}</span>
        <button class="qty-btn" onclick="changeQty(${i},1)">+</button>
      </div>
      <span>₹${c.price*c.qty}</span>
    </div>`).join("");
}

function changeQty(idx,delta){
  cart[idx].qty += delta;
  if(cart[idx].qty<=0) cart.splice(idx,1);
  updateCart();
}

document.getElementById("clearCart").addEventListener("click",()=>{ cart=[]; updateCart(); });

async function checkout(){
  if(!cart.length){ showToast("Your cart is empty!","error"); return; }
  const total = cart.reduce((s,c)=>s+(c.price*c.qty),0);
  const items = cart.map(c=>`${c.name} x${c.qty} = ₹${c.price*c.qty}`);
  // Save order to backend
  try {
    await fetch(`${API_BASE}/api/orders`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        items: cart.map(c=>({name:c.name, qty:c.qty, price:c.price})),
        total,
        payment_method: "upi"
      })
    });
  } catch(err){ console.warn("Order save failed (offline?)", err); }
  openPaymentModal("Food Order", items, total);
}

// ===== CONTACT FORM =====
document.getElementById("contactForm").addEventListener("submit", async e=>{
  e.preventDefault();
  const nm  = document.getElementById("cName").value.trim();
  const ph  = document.getElementById("cPhone").value.trim();
  const sub = document.getElementById("cSubject").value;
  const msg = document.getElementById("cMessage").value.trim();
  const btn = e.target.querySelector("button[type=submit]");

  btn.textContent = "Sending...";
  btn.disabled = true;

  // Step 1 — Save to backend database (TiDB Cloud)
  try {
    await fetch(`${API_BASE}/api/contact`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ name: nm, phone: ph, subject: sub, message: msg })
    });
  } catch(err){
    console.warn("Backend save failed:", err.message);
  }

  // Step 2 — ALWAYS send to WhatsApp
  const waMsg =
    `🏨 *New Enquiry – Sahil Palace & Restaurant*\n\n` +
    `👤 *Name:* ${nm}\n` +
    `📞 *Phone:* ${ph}\n` +
    `📋 *Subject:* ${sub}\n` +
    `💬 *Message:* ${msg || "No message provided"}`;

  window.open(
    `https://wa.me/918742026903?text=${encodeURIComponent(waMsg)}`,
    "_blank"
  );

  // Step 3 — Toast + reset
  showToast("✅ Enquiry sent! We will reply on WhatsApp shortly.", "success");
  document.getElementById("contactForm").reset();
  btn.textContent = "Send Message 📨";
  btn.disabled = false;
});

// ===== INTERSECTION OBSERVER =====
function observeFadeIns(){
  const els = document.querySelectorAll(".fade-in:not(.visible)");
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("visible"); obs.unobserve(e.target); }});
  },{threshold:0.1});
  els.forEach(el=>obs.observe(el));
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded",()=>{
  renderRooms();
  renderFood();
  loadApprovedReviews();
  initStarSelector();
  document.querySelectorAll(".section,.highlight-card,.amenity-card,.review-card").forEach(el=>{
    el.classList.add("fade-in");
  });
  observeFadeIns();
});

// ===== REVIEWS =====
async function loadApprovedReviews() {
  try {
    const res = await fetch(`${API_BASE}/api/reviews`);
    const data = await res.json();
    if (!data.success || !data.data.length) return; // keep default cards
    const grid = document.getElementById("reviewsGrid");
    const stars = n => "⭐".repeat(Math.min(5, n || 5));
    grid.innerHTML = data.data.map(r => `
      <div class="review-card fade-in">
        <div class="stars">${stars(r.rating)}</div>
        <p>"${r.message}"</p>
        <div class="reviewer">
          <div class="reviewer-avatar">${r.name.charAt(0).toUpperCase()}</div>
          <div><strong>${r.name}</strong><span>${r.location || "Guest"}</span></div>
        </div>
      </div>`).join("");
    observeFadeIns();
  } catch(e) { /* keep default cards on error */ }
}

function toggleReviewForm() {
  const wrap = document.getElementById("reviewFormWrap");
  const btn  = document.getElementById("toggleReviewForm");
  const open = wrap.style.display === "none";
  wrap.style.display = open ? "block" : "none";
  btn.textContent    = open ? "✕ Close Form" : "✍️ Write Your Review";
  if (open) wrap.scrollIntoView({ behavior: "smooth", block: "center" });
}

function initStarSelector() {
  document.querySelectorAll(".star-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const val = parseInt(this.dataset.val);
      document.getElementById("rvRating").value = val;
      document.querySelectorAll(".star-btn").forEach((s, i) => {
        s.classList.toggle("active", i < val);
      });
    });
    btn.addEventListener("mouseover", function() {
      const val = parseInt(this.dataset.val);
      document.querySelectorAll(".star-btn").forEach((s, i) => {
        s.style.color = i < val ? "var(--gold)" : "#ddd";
      });
    });
    btn.addEventListener("mouseout", function() {
      const val = parseInt(document.getElementById("rvRating").value);
      document.querySelectorAll(".star-btn").forEach((s, i) => {
        s.style.color = "";
        s.classList.toggle("active", i < val);
      });
    });
  });
}

async function submitReview(e) {
  e.preventDefault();
  const btn  = document.getElementById("rvSubmitBtn");
  const name = document.getElementById("rvName").value.trim();
  const loc  = document.getElementById("rvLocation").value.trim();
  const rat  = document.getElementById("rvRating").value;
  const msg  = document.getElementById("rvMessage").value.trim();
  if (!name || !msg) { showToast("Please fill in name and review", "error"); return; }
  btn.textContent = "Submitting..."; btn.disabled = true;
  try {
    const res  = await fetch(`${API_BASE}/api/reviews`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ name, location: loc, rating: rat, message: msg })
    });
    const data = await res.json();
    if (data.success) {
      showToast("✅ Thank you! Your review has been submitted for approval.", "success");
      document.getElementById("reviewForm").reset();
      document.querySelectorAll(".star-btn").forEach((s,i) => s.classList.toggle("active", i < 4));
      document.getElementById("rvRating").value = 5;
      toggleReviewForm();
    } else { showToast(data.message || "Failed to submit", "error"); }
  } catch(err) { showToast("Something went wrong. Try again!", "error"); }
  btn.textContent = "Submit Review ⭐"; btn.disabled = false;
}


// ===== PAYMENT MODAL =====
let pendingPaymentTotal = 0;

function openPaymentModal(title, lineItems, total){
  pendingPaymentTotal = total;
  document.getElementById("paymentTitle").textContent = title;
  document.getElementById("paymentSummary").innerHTML = lineItems.map(l=>`<div>${l}</div>`).join("") + `<div style="margin-top:8px;font-weight:700;font-size:1.1rem;color:#9a7a2e">Total: ₹${total.toLocaleString("en-IN")}</div>`;
  // Reset to UPI
  document.querySelectorAll(".pay-option").forEach(o=>o.classList.remove("selected"));
  document.querySelector('.pay-option[data-method="upi"]').classList.add("selected");
  document.querySelector('.pay-option[data-method="upi"] input').checked = true;
  document.getElementById("upiDetails").style.display = "block";
  // Generate UPI string & QR
  const upiStr = `upi://pay?pa=8742026903@ybl&pn=Sahil%20Palace&am=${total}&cu=INR&tn=${encodeURIComponent(title)}`;
  document.getElementById("upiQrCode").src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(upiStr)}`;
  document.getElementById("upiDeepLink").href = upiStr;
  document.getElementById("paymentModal").classList.add("open");
}

// Payment method toggle
document.querySelectorAll(".pay-option").forEach(opt=>{
  opt.addEventListener("click",function(){
    document.querySelectorAll(".pay-option").forEach(o=>o.classList.remove("selected"));
    this.classList.add("selected");
    this.querySelector("input").checked = true;
    const method = this.dataset.method;
    document.getElementById("upiDetails").style.display = method==="upi"?"block":"none";
  });
});

function copyUPI(){
  const upi = document.getElementById("upiIdText").textContent;
  navigator.clipboard.writeText(upi).then(()=>{
    const btn = document.querySelector(".btn-copy");
    btn.textContent = "✅ Copied!";
    setTimeout(()=>{ btn.textContent = "📋 Copy"; }, 2000);
  }).catch(()=>{ prompt("Copy this UPI ID:", upi); });
}

function confirmPayment(){
  const method = document.querySelector('input[name="payMethod"]:checked').value;
  const labels = {upi:"UPI / GPay / PhonePe", cash:"Cash on Arrival", card:"Debit / Credit Card"};
  closeModal("paymentModal");
  if(method==="upi"){
    const msg = `Hi, I have completed payment at Sahil Palace & Restaurant. Total: ₹${pendingPaymentTotal}. Payment via UPI. Please confirm my booking.`;
    window.open(`https://wa.me/918742026903?text=${encodeURIComponent(msg)}`,"_blank");
  } else {
    showToast(`✅ Booking confirmed! Total ₹${pendingPaymentTotal.toLocaleString("en-IN")} — ${labels[method]}. We'll call you shortly!`,"success");
  }
  cart = []; updateCart();
}

// ===== TOAST NOTIFICATION =====
function showToast(message, type="success"){
  let t = document.getElementById("siteToast");
  if(!t){
    t = document.createElement("div");
    t.id = "siteToast";
    t.style.cssText = `position:fixed;bottom:100px;left:50%;transform:translateX(-50%);padding:14px 28px;border-radius:50px;font-size:.92rem;font-weight:600;color:#fff;z-index:9999;opacity:0;transition:opacity .3s ease;max-width:90vw;text-align:center;box-shadow:0 6px 24px rgba(0,0,0,.2);`;
    document.body.appendChild(t);
  }
  t.textContent = message;
  t.style.background = type==="error" ? "#c0392b" : "#27ae60";
  t.style.opacity = "1";
  clearTimeout(t._timeout);
  t._timeout = setTimeout(()=>{ t.style.opacity="0"; }, 3500);
}

document.getElementById("paymentModal").addEventListener("click",e=>{
  if(e.target.id==="paymentModal") closeModal("paymentModal");
});
