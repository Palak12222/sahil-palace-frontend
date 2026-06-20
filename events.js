// ===== NAVBAR =====
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

// Sticky navbar shadow
window.addEventListener("scroll", () => {
  document.getElementById("navbar").style.boxShadow =
    window.scrollY > 80 ? "0 4px 20px rgba(0,0,0,.4)" : "none";
});

// Set min date for event date
const today = new Date().toISOString().split("T")[0];
const evDate = document.getElementById("evDate");
if (evDate) evDate.min = today;

// ===== SUBMIT EVENT ENQUIRY =====
async function submitEventEnquiry(e) {
  e.preventDefault();
  const btn = document.getElementById("evSubmitBtn");

  const name       = document.getElementById("evName").value.trim();
  const phone      = document.getElementById("evPhone").value.trim();
  const email      = document.getElementById("evEmail").value.trim();
  const event_type = document.getElementById("evType").value;
  const event_date = document.getElementById("evDate").value;
  const guests     = document.getElementById("evGuests").value;
  const venue      = document.querySelector('input[name="evVenue"]:checked')?.value || "";
  const message    = document.getElementById("evMessage").value.trim();

  if (!name || !phone) { showToast("Please enter your name and phone number", "red"); return; }
  if (phone.length < 10) { showToast("Please enter a valid phone number", "red"); return; }

  btn.textContent = "Sending..."; btn.disabled = true;

  try {
    const res  = await fetch(`${API_BASE}/api/events`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ name, phone, email, event_type, event_date, guests, venue, message })
    });
    const data = await res.json();

    if (data.success) {
      showToast("✅ Enquiry sent! We will call you within 24 hours.", "green");
      document.getElementById("eventForm").reset();

      // Also open WhatsApp with pre-filled message
      const waMsg =
        `🎊 *Event Enquiry – Sahil Palace*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `🎉 *Event:* ${event_type || "Not specified"}\n` +
        `📅 *Date:* ${event_date || "Not specified"}\n` +
        `👥 *Guests:* ${guests || "Not specified"}\n` +
        `🏛️ *Venue:* ${venue}\n` +
        `💬 *Message:* ${message || "No additional message"}`;
      window.open(`https://wa.me/918742026903?text=${encodeURIComponent(waMsg)}`, "_blank");
    } else {
      showToast(data.message || "Something went wrong. Try again!", "red");
    }
  } catch(err) {
    showToast("Could not submit. Please call us directly!", "red");
  }
  btn.textContent = "Send Enquiry 🎊"; btn.disabled = false;
}

// ===== TOAST =====
function showToast(msg, type = "green") {
  const t = document.getElementById("evToast");
  t.textContent = msg;
  t.style.background = type === "red" ? "#c0392b" : "#27ae60";
  t.style.opacity = "1";
  clearTimeout(t._timeout);
  t._timeout = setTimeout(() => t.style.opacity = "0", 4500);
}
