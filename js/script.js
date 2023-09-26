const sectionAll = document.querySelectorAll(".section");

const sectionObserver = new IntersectionObserver(
  function (entries, observe) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section-hidden");
    observe.unobserve(entry.target);
  },
  {
    root: null,
    threshold: 0,
  }
);

sectionAll.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
const heroSection = document.querySelector(".hero-section");
const heroObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) header.classList.add("sticky");
    else header.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-${headerHeight}px`,
  }
);
heroObserver.observe(heroSection);
