// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Highlight active nav link
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });

  // Contact form (front-end only for now — no backend wired up yet)
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var successMsg = document.getElementById('formSuccess');
      if (successMsg) {
        successMsg.classList.add('visible');
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  }

  // Pre-fill contact form subject when arriving from a "Request Quote" link
  var params = new URLSearchParams(window.location.search);
  var product = params.get('product');
  if (product) {
    var messageField = document.getElementById('message');
    var subjectField = document.getElementById('subject');
    if (subjectField) subjectField.value = 'Quote Request: ' + product;
    if (messageField) messageField.value = 'Hi, I would like to request a quote for: ' + product;
  }
});
