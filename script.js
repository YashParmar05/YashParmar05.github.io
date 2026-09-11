const savedTheme = localStorage.getItem("theme");
const preferredTheme = savedTheme || "dark";
document.documentElement.setAttribute("data-theme", preferredTheme);
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navLinks");
const year = document.getElementById("year");

root.dataset.theme = savedTheme || preferredTheme;

function updateThemeButton() {
  const isLight = root.dataset.theme === "light";
  themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
  themeToggle.setAttribute("title", isLight ? "Switch to dark theme" : "Switch to light theme");
}

updateThemeButton();

themeToggle.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("yash-theme", root.dataset.theme);
  updateThemeButton();
});

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open menu");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

year.textContent = new Date().getFullYear();
