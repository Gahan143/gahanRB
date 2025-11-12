document.addEventListener("DOMContentLoaded", async () => {
  const header = document.querySelector("header");
  if (!header) return;

  try {
    const res = await fetch("navbar.html");
    const html = await res.text();
    header.innerHTML = html;

    if (typeof feather !== "undefined") feather.replace();

    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const closeMenu = document.getElementById("closeMenu");
    const overlay = document.getElementById("overlay");

    if (menuToggle && sidebar && closeMenu && overlay) {
      menuToggle.addEventListener("click", () => {
        sidebar.classList.remove("translate-x-full");
        overlay.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");
      });

      const closeSidebar = () => {
        sidebar.classList.add("translate-x-full");
        overlay.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
      };

      closeMenu.addEventListener("click", closeSidebar);
      overlay.addEventListener("click", closeSidebar);
    }

    // === Navbar shrink on scroll ===
    const navbar = document.querySelector(".navbar");
    const logoText = document.querySelector(".nav-logo span");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.classList.add("navbar-shrink");
        if (logoText) logoText.classList.add("hidden-text");
      } else {
        navbar.classList.remove("navbar-shrink");
        if (logoText) logoText.classList.remove("hidden-text");
      }
    });
  } catch (err) {
    console.error("Navbar failed to load:", err);
  }
});
// === Navbar scroll progress and shrink effect ===
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const progress = document.querySelector(".navbar-progress");

  // Shrink navbar
  if (window.scrollY > 80) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }

  // Progress glow effect
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  progress.style.width = `${scrolled}%`;
});
