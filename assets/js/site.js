// Site behaviors (theme toggle, sticky footer, follow menu, smooth scroll offset).

function initSideNav() {
  const openButton = document.getElementById("nav-open");
  const closeButton = document.getElementById("nav-close");
  const nav = document.getElementById("site-nav");
  if (!nav) return;

  const setCollapsed = (collapsed) => {
    document.body.classList.toggle("nav-collapsed", collapsed);
    if (openButton) openButton.setAttribute("aria-expanded", (!collapsed).toString());
  };

  const isMobile = window.matchMedia ? window.matchMedia("(max-width: 925px)") : null;

  const syncForViewport = () => {
    // Desktop: keep sidebar visible (ignore persisted collapsed state).
    if (!isMobile || !isMobile.matches) {
      setCollapsed(false);
      return;
    }

    // Mobile: default to collapsed unless already opened.
    if (!document.body.classList.contains("nav-collapsed")) return;
    setCollapsed(true);
  };

  syncForViewport();
  if (isMobile) isMobile.addEventListener("change", syncForViewport);

  if (openButton) {
    openButton.addEventListener("click", () => {
      if (!isMobile || !isMobile.matches) return;
      setCollapsed(false);
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      if (!isMobile || !isMobile.matches) return;
      setCollapsed(true);
    });
  }

  // Close when clicking outside.
  document.addEventListener("click", (e) => {
    if (!isMobile || !isMobile.matches) return;
    if (document.body.classList.contains("nav-collapsed")) return;
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (nav.contains(target)) return;
    if (openButton && openButton.contains(target)) return;
    setCollapsed(true);
  });

  // Close on Escape.
  document.addEventListener("keydown", (e) => {
    if (!isMobile || !isMobile.matches) return;
    if (e.key !== "Escape") return;
    setCollapsed(true);
  });

  // Navigate and close drawer.
  document.querySelectorAll(".side-nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      if (!isMobile || !isMobile.matches) return;
      setCollapsed(true);
    });
  });
}

function setTheme(theme) {
  const browserPref = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const useTheme = theme || localStorage.getItem("theme") || document.documentElement.getAttribute("data-theme") || browserPref;

  const themeIcon = document.getElementById("theme-icon");

  if (useTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    if (themeIcon) themeIcon.setAttribute("data-theme-icon", "moon");
  } else {
    document.documentElement.removeAttribute("data-theme");
    if (themeIcon) themeIcon.setAttribute("data-theme-icon", "sun");
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  localStorage.setItem("theme", next);
  setTheme(next);
}

function initThemeToggle() {
  setTheme();

  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    });
  }

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
}

function initStickyFooter() {
  const footer = document.querySelector(".page__footer");
  if (!footer) return;

  const bump = () => {
    document.body.style.marginBottom = `${footer.offsetHeight}px`;
  };

  bump();
  window.addEventListener("resize", bump);
}

function initFollowMenu() {
  const button = document.querySelector(".author__urls-wrapper button");
  const urls = document.querySelector(".author__urls");
  if (!button || !urls) return;

  button.addEventListener("click", () => {
    const isHidden = getComputedStyle(urls).display === "none";
    urls.style.display = isHidden ? "block" : "none";
    button.classList.toggle("open");
  });
}

function initSmoothScroll() {
  if (window.jQuery && window.jQuery.fn && window.jQuery.fn.smoothScroll) {
    window.jQuery("a").smoothScroll({
      offset: 0,
      preventDefault: false,
    });
  }
}

function initFitVids() {
  if (typeof window.fitvids === "function") {
    window.fitvids();
  }
}

function init() {
  initSideNav();
  initThemeToggle();
  initStickyFooter();
  initFollowMenu();
  initSmoothScroll();
  initFitVids();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
