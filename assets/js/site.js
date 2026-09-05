(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const sectionMenu = document.getElementById("section-menu");

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (!themeToggle) return;
    const isDark = theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    themeToggle.querySelector("[data-theme-label]").textContent = isDark ? "Light mode" : "Dark mode";
  }

  applyTheme(root.dataset.theme === "dark" ? "dark" : "light");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      try { localStorage.setItem("theme", next); } catch (error) {}
      applyTheme(next);
    });
  }

  document.querySelectorAll("[data-section-link]").forEach(function (link) {
    link.addEventListener("click", function () {
      if (sectionMenu) sectionMenu.removeAttribute("open");
    });
  });

  const sections = Array.from(document.querySelectorAll("main[data-one-page] .site-section"));
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const links = new Map();
  document.querySelectorAll("[data-section-link]").forEach(function (link) {
    const id = link.getAttribute("href").replace(/^.*#/, "");
    const matchingLinks = links.get(id) || [];
    matchingLinks.push(link);
    links.set(id, matchingLinks);
  });

  const observer = new IntersectionObserver(function (entries) {
    const visible = entries
      .filter(function (entry) { return entry.isIntersecting; })
      .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; })[0];
    if (!visible) return;
    links.forEach(function (matchingLinks) {
      matchingLinks.forEach(function (link) {
        link.classList.remove("is-active");
        link.removeAttribute("aria-current");
      });
    });
    const active = links.get(visible.target.id);
    if (active) {
      active.forEach(function (link) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "location");
      });
    }
  }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.15, 0.5] });

  sections.forEach(function (section) { observer.observe(section); });
}());
