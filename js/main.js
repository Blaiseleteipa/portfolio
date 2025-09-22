document.addEventListener('DOMContentLoaded', function () {
  // ===== MOBILE NAVBAR TOGGLE =====
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // ===== HOME MENU CLICK MESSAGE =====
  const homeLink = document.getElementById('home-link');
  const hero = document.querySelector('.hero');
  if (homeLink && hero) {
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      hero.innerHTML = '<h2>This is the Home menu 🚀</h2>';
    });
  }

  // ===== CONTACT FORM VALIDATION =====
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.elements['name'].value.trim();
      const email = contactForm.elements['email'].value.trim();
      const message = contactForm.elements['message'].value.trim();
      const emailValid = /\S+@\S+\.\S+/.test(email);

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
      if (!emailValid) {
        alert('Please enter a valid email.');
        return;
      }

      alert(`Thank you for contacting me, ${name}! I will get back to you soon.`);
      contactForm.reset();
    });
  }
});
s