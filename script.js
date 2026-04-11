function updateCountdown() {
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const deliveryText = document.getElementById('delivery-text');
  const cutoffText = document.getElementById('cutoff-text');

  if (!hoursEl || !minutesEl || !secondsEl) return;

  const now = new Date();

  const cutoffToday = new Date();
  cutoffToday.setHours(14, 0, 0, 0);

  let target;
  let isToday = now < cutoffToday;

  if (isToday) {
    target = cutoffToday;

    if (deliveryText) {
      deliveryText.innerHTML = "Entrega estimada: HOY antes de las 6:00 PM";
    }

    if (cutoffText) {
      cutoffText.innerHTML = "Corte para entrega hoy";
    }

  } else {
    target = new Date();
    target.setDate(target.getDate() + 1);
    target.setHours(14, 0, 0, 0);

    if (deliveryText) {
      deliveryText.innerHTML = "Entrega estimada: MAÑANA antes de las 6:00 PM";
    }

    if (cutoffText) {
      cutoffText.innerHTML = "Pedidos para hoy cerrados";
    }
  }

  const diff = target - now;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');

  // 🔥 alerta cuando queda poco tiempo
  if (isToday && hours <= 1) {
    hoursEl.classList.add("text-red-500");
    minutesEl.classList.add("text-red-500");
    secondsEl.classList.add("text-red-500");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateCountdown();
  setInterval(updateCountdown, 1000);
});

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
