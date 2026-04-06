/*
 * Sidebar Navigation (collapsible)
 *
 * Replaces the original "Greedy Navigation" behavior since the site now uses a
 * left sidebar nav instead of a top masthead menu.
 */

const NAV_COLLAPSED_KEY = "nav_collapsed";

function setCollapsed(collapsed) {
  if (collapsed) {
    document.body.classList.add("nav-collapsed");
  } else {
    document.body.classList.remove("nav-collapsed");
  }
}

function getCollapsed() {
  return localStorage.getItem(NAV_COLLAPSED_KEY) === "1";
}

function initSideNav() {
  const toggleButton = document.getElementById("nav-toggle");
  if (!toggleButton) return;

  setCollapsed(getCollapsed());
  toggleButton.setAttribute("aria-expanded", (!getCollapsed()).toString());

  toggleButton.addEventListener("click", () => {
    const collapsed = !document.body.classList.contains("nav-collapsed");
    localStorage.setItem(NAV_COLLAPSED_KEY, collapsed ? "1" : "0");
    setCollapsed(collapsed);
    toggleButton.setAttribute("aria-expanded", (!collapsed).toString());
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSideNav);
} else {
  initSideNav();
}
