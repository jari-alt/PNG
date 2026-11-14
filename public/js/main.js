(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Entrance reveals (hero + scroll)
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -6% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-in"));
  }

  // Hero reveals on load
  requestAnimationFrame(() => {
    document.querySelectorAll(".hero .reveal").forEach((el) => el.classList.add("is-in"));
  });

  // Inquiry form → mailto (no booking backend)
  const form = document.querySelector("[data-inquiry-form]");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = form.querySelector("#name")?.value.trim() || "";
      const email = form.querySelector("#email")?.value.trim() || "";
      const message = form.querySelector("#message")?.value.trim() || "";
      const subject = form.querySelector("#subject")?.value.trim() || "Anfrage Insect Hunters Town";

      if (!email) {
        form.querySelector("#email")?.focus();
        return;
      }

      const body = [
        `Name: ${name || "—"}`,
        `E-Mail: ${email}`,
        "",
        message || "(keine Nachricht)",
      ].join("\n");

      const to = form.getAttribute("data-email") || "anfrage@insecthunterstown.example";
      const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      const success = form.querySelector(".form-success");
      if (success) success.classList.add("is-visible");

      window.location.href = mailto;
    });
  }
})();
