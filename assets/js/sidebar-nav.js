// Sidebar nav collapse + smooth-scroll offset override for the left navigation layout.

const NAV_COLLAPSED_KEY = "nav_collapsed";

function setCollapsed(collapsed) {
  document.body.classList.toggle("nav-collapsed", collapsed);
}

function getCollapsed() {
  return localStorage.getItem(NAV_COLLAPSED_KEY) === "1";
}

function initSideNav() {
  const toggleButton = document.getElementById("nav-toggle");
  if (!toggleButton) return;

  setCollapsed(getCollapsed());

  toggleButton.addEventListener("click", () => {
    const next = !document.body.classList.contains("nav-collapsed");
    localStorage.setItem(NAV_COLLAPSED_KEY, next ? "1" : "0");
    setCollapsed(next);
  });

  // The upstream template binds smooth scroll with an offset for a top masthead.
  // Our nav is a left sidebar; reset offset to 0.
  if (window.jQuery && window.jQuery.fn && window.jQuery.fn.smoothScroll) {
    window.jQuery("a").smoothScroll({
      offset: 0,
      preventDefault: false,
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSideNav);
} else {
  initSideNav();
}

