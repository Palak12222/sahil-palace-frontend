// ===== ALL FOOD DATA =====
const menuData = {
  breakfast: {
    veg: [
      { name: "Aloo Paratha",      price: 60,  desc: "Stuffed wheat flatbread with pickle & curd",         emoji: "🫓" },
      { name: "Poha",              price: 40,  desc: "Flattened rice cooked with spices & peanuts",        emoji: "🍚" },
      { name: "Idli Sambhar",      price: 50,  desc: "Steamed rice cakes with lentil soup",               emoji: "🫙" },
      { name: "Veg Omelette",      price: 50,  desc: "Fluffy egg-free omelette with veggies",             emoji: "🍳" },
      { name: "Bread Butter Toast",price: 30,  desc: "Crispy toast with butter & jam",                    emoji: "🍞" },
      { name: "Masala Chai",       price: 15,  desc: "Spiced Indian tea",                                 emoji: "☕" },
      { name: "Upma",              price: 45,  desc: "Savory semolina with vegetables & spices",          emoji: "🥣" },
      { name: "Puri Sabzi",        price: 70,  desc: "Deep fried bread served with potato curry",         emoji: "🫓" }
    ],
    nonveg: [
      { name: "Egg Omelette",      price: 60,  desc: "2-egg omelette with onion & green chilli",          emoji: "🍳" },
      { name: "Boiled Eggs",       price: 30,  desc: "2 boiled eggs with masala",                         emoji: "🥚" },
      { name: "Egg Bhurji",        price: 70,  desc: "Scrambled spiced eggs with onion-tomato",           emoji: "🍳" },
      { name: "Egg Paratha",       price: 80,  desc: "Stuffed egg paratha with butter",                   emoji: "🫓" }
    ]
  },
  lunch: {
    veg: [
      { name: "Dal Makhani",           price: 120, desc: "Creamy black lentil curry slow-cooked overnight",    emoji: "🥘" },
      { name: "Paneer Butter Masala",  price: 160, desc: "Cottage cheese in rich tomato-cream gravy",          emoji: "🧀" },
      { name: "Veg Biryani",           price: 130, desc: "Aromatic basmati rice with mixed vegetables",        emoji: "🍛" },
      { name: "Mix Veg Curry",         price: 110, desc: "Seasonal vegetables in spiced masala gravy",         emoji: "🥗" },
      { name: "Roti (2 pcs)",          price: 20,  desc: "Freshly made soft wheat flatbread",                  emoji: "🫓" },
      { name: "Steamed Rice",          price: 60,  desc: "Plain basmati rice",                                 emoji: "🍚" },
      { name: "Rajma Chawal",          price: 120, desc: "Kidney bean curry with steamed rice",                emoji: "🥘" },
      { name: "Chole Bhature",         price: 100, desc: "Spiced chickpeas with fried bread",                  emoji: "🥙" },
      { name: "Kadhi Pakoda",          price: 100, desc: "Fried fritters in yogurt-besan curry",               emoji: "🥣" }
    ],
    nonveg: [
      { name: "Chicken Biryani",    price: 180, desc: "Tender chicken layered with saffron basmati rice",   emoji: "🍗" },
      { name: "Mutton Curry",       price: 220, desc: "Slow-cooked mutton in rich spiced gravy",            emoji: "🍖" },
      { name: "Butter Chicken",     price: 190, desc: "Classic tandoori chicken in creamy tomato gravy",    emoji: "🍗" },
      { name: "Chicken Masala",     price: 170, desc: "Spicy dry chicken preparation with onion masala",    emoji: "🍗" },
      { name: "Fish Curry",         price: 200, desc: "Fresh fish cooked in tangy curry",                   emoji: "🐟" },
      { name: "Egg Curry",          price: 100, desc: "Hard-boiled eggs in onion-tomato masala",            emoji: "🥚" },
      { name: "Keema Rice",         price: 160, desc: "Spiced minced meat with fragrant rice",              emoji: "🍚" }
    ]
  },
  dinner: {
    veg: [
      { name: "Paneer Tikka",      price: 180, desc: "Grilled cottage cheese with tandoor spices",          emoji: "🧀" },
      { name: "Dal Tadka",         price: 100, desc: "Yellow lentils tempered with ghee & cumin",           emoji: "🥘" },
      { name: "Kadai Paneer",      price: 170, desc: "Paneer cooked in bell peppers & kadai masala",        emoji: "🧀" },
      { name: "Veg Pulao",         price: 100, desc: "Fragrant rice with vegetables & whole spices",        emoji: "🍚" },
      { name: "Raita",             price: 40,  desc: "Chilled yogurt with cucumber & cumin",               emoji: "🥣" },
      { name: "Malai Kofta",       price: 180, desc: "Fried cottage cheese balls in cream gravy",          emoji: "🥘" },
      { name: "Shahi Paneer",      price: 190, desc: "Paneer in rich cashew-cream curry",                  emoji: "🧀" },
      { name: "Naan (2 pcs)",      price: 40,  desc: "Soft oven-baked leavened bread",                     emoji: "🫓" }
    ],
    nonveg: [
      { name: "Tandoori Chicken",  price: 250, desc: "Half chicken marinated & cooked in clay oven",       emoji: "🍗" },
      { name: "Mutton Biryani",    price: 260, desc: "Slow-dum cooked biryani with tender mutton",         emoji: "🍖" },
      { name: "Seekh Kebab",       price: 200, desc: "Minced meat kebabs grilled on skewers",              emoji: "🍖" },
      { name: "Chicken Tikka",     price: 210, desc: "Boneless chicken pieces marinated in spices",        emoji: "🍗" },
      { name: "Fish Fry",          price: 220, desc: "Crispy spiced fish fillet",                          emoji: "🐟" },
      { name: "Chicken Curry",     price: 180, desc: "Classic home-style chicken curry",                   emoji: "🍗" }
    ]
  }
};

// ===== STATE =====
let cart = {};
let currentCat  = "all";
let currentType = "all";

// ===== NAVBAR =====
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

// ===== RENDER MENU =====
function renderMenu() {
  const search = document.getElementById("menuSearch").value.toLowerCase().trim();
  const grid   = document.getElementById("menuGrid");
  let   items  = [];

  const cats = currentCat === "all" ? ["breakfast","lunch","dinner"] : [currentCat];
  cats.forEach(cat => {
    const types = currentType === "all" ? ["veg","nonveg"] : [currentType];
    types.forEach(type => {
      menuData[cat][type].forEach(item => {
        if (!search || item.name.toLowerCase().includes(search) || item.desc.toLowerCase().includes(search)) {
          items.push({ ...item, cat, type });
        }
      });
    });
  });

  document.getElementById("resultsCount").textContent = `Showing ${items.length} item${items.length !== 1 ? "s" : ""}`;

  if (!items.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-light)">
      <div style="font-size:3rem;margin-bottom:16px">🔍</div>
      <p>No dishes found. Try a different search.</p></div>`;
    return;
  }

  const catLabel = { breakfast:"🌅 Breakfast", lunch:"☀️ Lunch", dinner:"🌙 Dinner" };
  grid.innerHTML = items.map(item => {
    const key   = `${item.cat}__${item.type}__${item.name}`;
    const inCart = cart[key] > 0;
    return `
    <div class="menu-card">
      <div class="mc-img ${item.type === "veg" ? "veg-bg" : "nonveg-bg"}">
        ${item.emoji}
        <span class="mc-meal-tag">${catLabel[item.cat]}</span>
      </div>
      <div class="mc-body">
        <div class="mc-type">
          <span class="mc-dot ${item.type}"></span>
          <span>${item.type === "veg" ? "Vegetarian" : "Non-Veg"}</span>
        </div>
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <div class="mc-footer">
          <div class="mc-price">₹${item.price} <span>/ plate</span></div>
          <button class="btn-add ${inCart ? "added" : ""}" onclick="addToCart('${key}','${item.name}',${item.price})">
            ${inCart ? "✅ Added" : "+ Add"}
          </button>
        </div>
      </div>
    </div>`;
  }).join("");
}

// ===== CART =====
function addToCart(key, name, price) {
  cart[key] = (cart[key] || 0) + 1;
  showToast(`🛒 ${name} added to cart!`);
  updateCart();
  renderMenu();
}

function changeQty(key, delta) {
  cart[key] = (cart[key] || 0) + delta;
  if (cart[key] <= 0) delete cart[key];
  updateCart();
  renderMenu();
}

function clearCart() {
  cart = {};
  updateCart();
  renderMenu();
}

function updateCart() {
  const keys    = Object.keys(cart);
  const total   = keys.reduce((s, k) => s + cart[k] * getPriceByKey(k), 0);
  const count   = keys.reduce((s, k) => s + cart[k], 0);

  document.getElementById("cartBadge").textContent = count;

  if (!keys.length) {
    document.getElementById("cartEmpty").style.display     = "block";
    document.getElementById("cartItemsList").style.display = "none";
    document.getElementById("cartFooter").style.display    = "none";
    return;
  }

  document.getElementById("cartEmpty").style.display     = "none";
  document.getElementById("cartItemsList").style.display = "block";
  document.getElementById("cartFooter").style.display    = "block";
  document.getElementById("cartTotal").textContent       = `₹${total.toLocaleString("en-IN")}`;

  document.getElementById("cartItemsList").innerHTML = keys.map(k => {
    const name  = k.split("__")[2];
    const price = getPriceByKey(k);
    return `<div class="cart-item-row">
      <div class="ci-name">${name}</div>
      <div class="ci-qty">
        <button onclick="changeQty('${k}',-1)">−</button>
        <span>${cart[k]}</span>
        <button onclick="changeQty('${k}',1)">+</button>
      </div>
      <div class="ci-price">₹${(cart[k]*price).toLocaleString("en-IN")}</div>
    </div>`;
  }).join("");
}

function getPriceByKey(key) {
  const [cat, type, name] = key.split("__");
  const item = menuData[cat]?.[type]?.find(i => i.name === name);
  return item?.price || 0;
}

// ===== CHECKOUT =====
function checkout() {
  const keys = Object.keys(cart);
  if (!keys.length) { showToast("Your cart is empty!", "red"); return; }

  const total = keys.reduce((s, k) => s + cart[k] * getPriceByKey(k), 0);
  const lines = keys.map(k => {
    const name  = k.split("__")[2];
    const price = getPriceByKey(k);
    return `• ${name} ×${cart[k]} = ₹${cart[k]*price}`;
  });

  const waMsg =
    `🍽️ *Food Order – Sahil Palace Restaurant*\n\n` +
    `${lines.join("\n")}\n\n` +
    `💰 *Total: ₹${total.toLocaleString("en-IN")}*\n\n` +
    `Please confirm my order. Thank you!`;

  window.open(`https://wa.me/918742026903?text=${encodeURIComponent(waMsg)}`, "_blank");
  showToast("✅ Order sent on WhatsApp!");
}

// ===== FILTER BUTTONS =====
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    this.classList.add("active");
    currentCat = this.dataset.cat;
    renderMenu();
  });
});

document.querySelectorAll(".type-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("active"));
    this.classList.add("active");
    currentType = this.dataset.type;
    renderMenu();
  });
});

// ===== TOAST =====
function showToast(msg, type = "green") {
  const t = document.getElementById("menuToast");
  t.textContent = msg;
  t.style.background = type === "red" ? "#c0392b" : "#27ae60";
  t.style.opacity = "1";
  clearTimeout(t._to);
  t._to = setTimeout(() => t.style.opacity = "0", 2500);
}

// Init
renderMenu();
