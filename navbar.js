// components/navbar.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      // Inject the navbar HTML into the <header> tag
      document.querySelector("header").innerHTML = data;

      // After navbar loads, enable feather icons
      if (typeof feather !== "undefined") feather.replace();

      // Sidebar button toggle logic
      const menuBtn = document.querySelector("#menu-btn");
      const sidebar = document.querySelector("#sidebar");

      if (menuBtn && sidebar) {
        menuBtn.addEventListener("click", () => {
          sidebar.classList.toggle("translate-x-0");
        });
      }
    })
    .catch(err => console.error("Navbar load error:", err));
});
// components/navbar.js
document.addEventListener("DOMContentLoaded", async () => {
  const header = document.querySelector("header");
  if (!header) return;

  try {
    // Fetch and inject navbar.html
    const res = await fetch("navbar.html");
    const html = await res.text();
    header.innerHTML = html;

    // After injecting, initialize toggle behavior
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });

      // Close menu when a link is clicked
      navLinks.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
          navLinks.classList.remove("active");
        }
      });
    }
  } catch (err) {
    console.error("Navbar failed to load:", err);
  }
});
