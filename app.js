window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  console.log('scrolling'); // ← debug check

  if (window.scrollY > 175) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


