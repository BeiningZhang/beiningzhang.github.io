(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const sectionMenu = document.getElementById("section-menu");

  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.body.classList.add("has-pointer");
    document.addEventListener("pointermove", function (event) {
      root.style.setProperty("--pointer-x", event.clientX + "px");
      root.style.setProperty("--pointer-y", event.clientY + "px");
    });
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (!themeToggle) return;
    const isDark = theme === "dark";
    const isChinese = root.lang === "zh-CN";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isChinese ? (isDark ? "切换至浅色模式" : "切换至深色模式") : (isDark ? "Switch to light mode" : "Switch to dark mode"));
    themeToggle.querySelector("[data-theme-label]").textContent = isChinese ? (isDark ? "浅色模式" : "深色模式") : (isDark ? "Light mode" : "Dark mode");
  }

  applyTheme(root.dataset.theme === "dark" ? "dark" : "light");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      try { localStorage.setItem("theme", next); } catch (error) {}
      applyTheme(next);
    });
  }

  const sections = Array.from(document.querySelectorAll("main[data-one-page] .site-section"));
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const links = new Map();
  document.querySelectorAll("[data-section-link]").forEach(function (link) {
    const id = link.getAttribute("href").replace(/^.*#/, "");
    const matchingLinks = links.get(id) || [];
    matchingLinks.push(link);
    links.set(id, matchingLinks);
  });

  function setActiveSection(id) {
    links.forEach(function (matchingLinks) {
      matchingLinks.forEach(function (link) {
        link.classList.remove("is-active");
        link.removeAttribute("aria-current");
      });
    });
    const active = links.get(id);
    if (active) {
      active.forEach(function (link) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "location");
      });
    }
  }

  document.querySelectorAll("[data-section-link]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (sectionMenu) sectionMenu.removeAttribute("open");
      const id = link.getAttribute("href").replace(/^.*#/, "");
      const target = document.getElementById(id);
      const targetUrl = new URL(link.href, window.location.href);
      if (!target || targetUrl.pathname !== window.location.pathname) return;
      event.preventDefault();
      setActiveSection(id);
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      window.history.pushState(null, "", "#" + id);
    });
  });

  const observer = new IntersectionObserver(function (entries) {
    const visible = entries
      .filter(function (entry) { return entry.isIntersecting; })
      .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; })[0];
    if (!visible) return;
    setActiveSection(visible.target.id);
  }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.15, 0.5] });

  sections.forEach(function (section) { observer.observe(section); });
}());
