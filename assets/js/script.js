(function () {
  "use strict";

  // Header background on scroll
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");

  function closeNav() {
    nav.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
  }

  // Reveal on scroll
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Back link: return to where the user came from, not just the homepage top
  var backLink = document.getElementById("back-link");
  if (backLink) {
    backLink.addEventListener("click", function (e) {
      var cameFromSite =
        document.referrer && document.referrer.indexOf(window.location.origin) === 0;
      if (cameFromSite && window.history.length > 1) {
        e.preventDefault();
        window.history.back();
      }
    });
  }

  // Wine stats: animated count-up — replays every time the Vinhos panel opens
  var animateStat = function (el) {
    var target = parseFloat(el.getAttribute("data-target"));
    var suffix = el.getAttribute("data-suffix") || "";
    var duration = 900;
    var start = null;

    var step = function (ts) {
      if (!start) { start = ts; }
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    };
    window.requestAnimationFrame(step);
  };

  // Vinhos/Tapas interactive split panels
  var splitInner = document.querySelector(".split-reveal-inner");
  var splitPanels = document.querySelectorAll(".split-panel");
  var splitBottle = document.querySelector(".split-divider-bottle");

  if (splitPanels.length) {
    var setActive = function (target) {
      splitPanels.forEach(function (p) {
        p.classList.toggle("is-active", p === target);
        p.classList.toggle("is-shrink", target ? p !== target : false);
      });
      if (splitInner) {
        splitInner.classList.toggle("has-active", !!target);
      }
      if (target) {
        target.querySelectorAll(".wine-stat-num[data-target]").forEach(function (el) {
          animateStat(el);
        });
      }
    };

    // On devices with a real mouse, the panels open dynamically as the cursor
    // passes over them. On touch devices (no hover), fall back to tap-to-toggle.
    var hoverCapable =
      window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (hoverCapable) {
      splitPanels.forEach(function (panel) {
        panel.addEventListener("mouseenter", function () {
          setActive(panel);
        });
      });
      if (splitInner) {
        splitInner.addEventListener("mouseleave", function () {
          setActive(null);
        });
      }
      if (splitBottle) {
        splitBottle.addEventListener("mouseenter", function (e) {
          e.stopPropagation();
          setActive(null);
        });
      }
    } else {
      splitPanels.forEach(function (panel) {
        panel.addEventListener("click", function () {
          var alreadyActive = panel.classList.contains("is-active");
          setActive(alreadyActive ? null : panel);
        });
      });
      if (splitBottle) {
        splitBottle.addEventListener("click", function (e) {
          e.stopPropagation();
          setActive(null);
        });
      }
    }
  }
})();
