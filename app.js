// ===== DATA =====
const rooms = [
  {id:1,  name:"Standard Single Room",  price:1000, img:"images/room_photo2.jpg", desc:"Cozy single room with stylish décor, AC, and all basic amenities for a comfortable stay.",          features:["AC","WiFi","TV"],               badge:"Budget"},
  {id:2,  name:"Standard Double Room",  price:1500, img:"images/room_photo5.jpg", desc:"Spacious double room with modern interiors, perfect for couples or solo travellers.",                features:["AC","WiFi","TV","Parking"],     badge:"Popular"},
  {id:3,  name:"Deluxe Single Room",    price:1800, img:"images/room_photo2.jpg", desc:"Upgraded single room with premium bed, elegant panel wall and soft lighting.",                        features:["AC","WiFi","TV","Mini-fridge"], badge:"Deluxe"},
  {id:4,  name:"Deluxe Double Room",    price:2000, img:"images/room_photo1.jpg", desc:"Our most popular room — two plush beds, designer headboard wall and warm ambiance.",                  features:["AC","WiFi","TV","Balcony"],    badge:"Best Value"},
  {id:5,  name:"Executive Room",        price:2500, img:"images/room_photo5.jpg", desc:"Designed for business travellers — king bed, work desk, LED TV and premium AC.",                      features:["AC","WiFi","TV","Work Desk"],  badge:"Executive"},
  {id:6,  name:"Family Room",           price:3000, img:"images/room_photo3.jpg", desc:"Extra-large room with two double beds, ample space for families travelling with kids.",                features:["AC","WiFi","TV","Extra Beds"], badge:"Family"},
];


const menuData = {
  breakfast:{
    veg:[
      {name:"Aloo Paratha",price:60,desc:"Stuffed wheat flatbread with pickle & curd",img:"images/food_veg.png"},
      {name:"Poha",price:40,desc:"Flattened rice cooked with spices & peanuts",img:"images/food_veg.png"},
      {name:"Idli Sambhar",price:50,desc:"Steamed rice cakes with lentil soup",img:"images/food_veg.png"},
      {name:"Veg Omelette",price:50,desc:"Fluffy egg-free omelette with veggies",img:"images/food_veg.png"},
      {name:"Bread Butter Toast",price:30,desc:"Crispy toast with butter & jam",img:"images/food_veg.png"},
      {name:"Masala Chai",price:15,desc:"Spiced Indian tea",img:"images/food_veg.png"}
    ],
    nonveg:[
      {name:"Egg Omelette",price:60,desc:"2-egg omelette with onion & green chilli",img:"images/food_nonveg.png"},
      {name:"Boiled Eggs",price:30,desc:"2 boiled eggs with masala",img:"images/food_nonveg.png"},
      {name:"Egg Bhurji",price:70,desc:"Scrambled spiced eggs with onion-tomato",img:"images/food_nonveg.png"}
    ]
  },
  lunch:{
    veg:[
      {name:"Dal Makhani",price:120,desc:"Creamy black lentil curry slow-cooked overnight",img:"images/food_veg.png"},
      {name:"Paneer Butter Masala",price:160,desc:"Cottage cheese in rich tomato-cream gravy",img:"images/food_veg.png"},
      {name:"Veg Biryani",price:130,desc:"Aromatic basmati rice with mixed vegetables",img:"images/food_veg.png"},
      {name:"Mix Veg Curry",price:110,desc:"Seasonal vegetables in spiced masala gravy",img:"images/food_veg.png"},
      {name:"Roti (2 pcs)",price:20,desc:"Freshly made soft wheat flatbread",img:"images/food_veg.png"},
      {name:"Steamed Rice",price:60,desc:"Plain basmati rice",img:"images/food_veg.png"}
    ],
    nonveg:[
      {name:"Chicken Biryani",price:180,desc:"Tender chicken layered with saffron basmati rice",img:"images/food_nonveg.png"},
      {name:"Mutton Curry",price:220,desc:"Slow-cooked mutton in rich spiced gravy",img:"images/food_nonveg.png"},
      {name:"Butter Chicken",price:190,desc:"Classic tandoori chicken in creamy tomato gravy",img:"images/food_nonveg.png"},
      {name:"Chicken Masala",price:170,desc:"Spicy dry chicken preparation with onion masala",img:"images/food_nonveg.png"},
      {name:"Fish Curry",price:200,desc:"Fresh fish cooked in tangy curry",img:"images/food_nonveg.png"}
    ]
  },
  dinner:{
    veg:[
      {name:"Paneer Tikka",price:180,desc:"Grilled cottage cheese with tandoor spices",img:"images/food_veg.png"},
      {name:"Dal Tadka",price:100,desc:"Yellow lentils tempered with ghee & cumin",img:"images/food_veg.png"},
      {name:"Kadai Paneer",price:170,desc:"Paneer cooked in bell peppers & kadai masala",img:"images/food_veg.png"},
      {name:"Veg Pulao",price:100,desc:"Fragrant rice with vegetables & whole spices",img:"images/food_veg.png"},
      {name:"Raita",price:40,desc:"Chilled yogurt with cucumber & cumin",img:"images/food_veg.png"}
    ],
    nonveg:[
      {name:"Tandoori Chicken",price:250,desc:"Half chicken marinated & cooked in clay oven",img:"images/food_nonveg.png"},
      {name:"Mutton Biryani",price:260,desc:"Slow-dum cooked biryani with tender mutton",img:"images/food_nonveg.png"},
      {name:"Seekh Kebab",price:200,desc:"Minced meat kebabs grilled on skewers",img:"images/food_nonveg.png"},
      {name:"Chicken Tikka",price:210,desc:"Boneless chicken pieces marinated in spices",img:"images/food_nonveg.png"},
      {name:"Egg Curry",price:100,desc:"Hard-boiled eggs in onion-tomato masala",img:"images/food_nonveg.png"}
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

// ===== QUICK BOOKING =====
// Set min dates
const today = new Date().toISOString().split("T")[0];
document.getElementById("qCheckIn").min = today;
document.getElementById("qCheckOut").min = today;
document.getElementById("mCheckIn").min = today;
document.getElementById("mCheckOut").min = today;

document.getElementById("qCheckIn").addEventListener("change", e => {
  document.getElementById("qCheckOut").min = e.target.value;
});
document.getElementById("mCheckIn").addEventListener("change", e => {
  document.getElementById("mCheckOut").min = e.target.value;
});

document.getElementById("quickBookForm").addEventListener("submit", e => {
  e.preventDefault();
  const ci = document.getElementById("qCheckIn").value;
  const co = document.getElementById("qCheckOut").value;
  const g  = document.getElementById("qGuests").value;
  if(!ci || !co){ alert("Please select check-in and check-out dates."); return; }
  if(ci >= co){ alert("Check-out must be after check-in."); return; }
  const nights = Math.ceil((new Date(co)-new Date(ci))/(1000*60*60*24));
  alert(`✅ Availability checked!\n\n📅 Check-in: ${formatDate(ci)}\n📅 Check-out: ${formatDate(co)}\n👥 Guests: ${g}\n🌙 Nights: ${nights}\n\nPlease scroll to Rooms section to book. Or call: 8742026903`);
  document.querySelector("#rooms").scrollIntoView({behavior:"smooth"});
});

function formatDate(str){ return new Date(str).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}); }

// ===== ROOMS =====
function renderRooms(maxPrice=9999){
  const grid = document.getElementById("roomsGrid");
  const filtered = rooms.filter(r => r.price <= maxPrice);
  grid.innerHTML = filtered.map(r => `
    <div class="room-card fade-in" data-price="${r.price}" onclick="window.location.href='room.html?id=${r.id}'" style="cursor:pointer">
      <div style="overflow:hidden;position:relative">
        <img src="${r.img}" alt="${r.name}" loading="lazy"/>
        <span class="room-badge">${r.badge}</span>
      </div>
      <div class="room-card-body">
        <h3>${r.name}</h3>
        <p>${r.desc}</p>
        <div class="room-features">${r.features.map(f=>`<span>${f}</span>`).join("")}</div>
        <div class="room-footer">
          <div class="room-price">₹${r.price.toLocaleString("en-IN")}<span>/night</span></div>
          <a class="btn-book-room" href="room.html?id=${r.id}">View & Book →</a>
        </div>
      </div>
    </div>`).join("");
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
  document.querySelectorAll(".section,.highlight-card,.amenity-card,.review-card").forEach(el=>{
    el.classList.add("fade-in");
  });
  observeFadeIns();
});

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
