window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  console.log('scrolling'); // ← debug check

  if (window.scrollY > 175) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

window.addEventListener("load", function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.add("animate-drop");

  // Animate visible sections only
  document.querySelectorAll("section").forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      section.classList.add("animate-drop");
    }
  });

  const sideTitle = document.querySelector(".side-title");
  const navLinks = document.querySelectorAll(".nav-links a");
  sideTitle.classList.add("animate-drop");
  navLinks.forEach(link => link.classList.add("animate-drop"));

  document.body.classList.add("loaded");

  // Scroll into view only if element is not in view already
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      const rect = target.getBoundingClientRect();
      if (rect.top < 0 || rect.bottom > window.innerHeight) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }
});

