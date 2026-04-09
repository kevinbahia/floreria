// Countdown timer
function updateCountdown() {
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (!hoursEl || !minutesEl || !secondsEl) return;

  const now = new Date();
  const cutoff = new Date();

  // Hora límite 2:00 PM
  cutoff.setHours(14, 0, 0, 0);

  // Si ya pasó, siguiente día
  if (now > cutoff) {
    cutoff.setDate(cutoff.getDate() + 1);
  }

  const diff = cutoff - now;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');

  // 🔥 ALERTA PRO cuando queda poco tiempo
  if (hours <= 1) {
    hoursEl.classList.add("text-red-500");
    minutesEl.classList.add("text-red-500");
    secondsEl.classList.add("text-red-500");
  }
}

// MENU MOBILE (tu código)
function toggleMobileMenu() {
  const menu = document.querySelector('[data-landingsite-mobile-menu]');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

function setupMobileMenu() {
  const toggleBtn = document.querySelector('[data-landingsite-mobile-menu-toggle]');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleMobileMenu);
  }
}

// INIT
function init() {
  updateCountdown();
  setInterval(updateCountdown, 1000);
  setupMobileMenu();
}

// Ejecutar cuando cargue el DOM
document.addEventListener("DOMContentLoaded", init);
