const d = document;

function displayMenu(panelBtn, panel, menuLinks) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("show");
      d.querySelector(panelBtn).classList.toggle("show");
      d.querySelector(panelBtn).classList.toggle("active-btn");
    }

    if (e.target.matches(menuLinks) || e.target.matches(`${menuLinks} *`)) {
      d.querySelector(panel).classList.remove("show");
      d.querySelector(panelBtn).classList.remove("active-btn");
    }
  });
}

function scrollSpy() {
  const d = document;
  const $section = d.querySelectorAll("section[data-scroll-spy]");
  const cb = (entries) => {
    //console.log("entries", entries);

    entries.forEach((entry) => {
      //console.log("entry", entry);
      const id = entry.target.getAttribute("id");
      //console.log(id);

      if (entry.isIntersecting) {
        d.querySelector(`a[href="#${id}"]`).classList.add("active");
      } else {
        d.querySelector(`a[href="#${id}"]`).classList.remove("active");
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    //root
    //rootMargin
    threshold: [0.4, 0.6],
  });

  $section.forEach((el) => observer.observe(el));
}
d.addEventListener("DOMContentLoaded", (e) => {
  displayMenu(".menu-btn", ".menu-nav", ".menu-nav a");
  scrollSpy();
});
