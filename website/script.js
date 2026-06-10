// Mobile navigation toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    // Close the menu after tapping a link (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Auto-update the footer year
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ===== Loading screen with logo =====
  var loader = document.getElementById('loader');
  if (loader) {
    // Hide it shortly after the page finishes loading
    window.addEventListener('load', function () {
      setTimeout(function () { loader.classList.add('hidden'); }, 800);
      // If we arrived with a hash (e.g. from another page), scroll there once visible
      if (location.hash && location.hash.length > 1) {
        var dest = document.querySelector(location.hash);
        if (dest) setTimeout(function () { dest.scrollIntoView(); }, 850);
      }
    });
    // Safety fallback in case 'load' already fired
    setTimeout(function () { loader.classList.add('hidden'); }, 2500);

    // Show the loader briefly when clicking an in-page nav link
    var navLinks = document.querySelectorAll('#nav a[href^="#"]');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var targetId = link.getAttribute('href');
        if (targetId.length < 2) return;            // ignore plain "#"
        var target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        loader.classList.remove('hidden');          // show logo loader

        setTimeout(function () {
          target.scrollIntoView({ behavior: 'smooth' });
          if (history.pushState) history.pushState(null, '', targetId);
          setTimeout(function () { loader.classList.add('hidden'); }, 450);
        }, 750);
      });
    });
  }
})();

// ===== Cute decorative accents (ribbons, hearts, sparkles) =====
(function () {
  var emojis = ['🎗️', '💗'];
  // [top, left, right] — left/right as null when unused; positions hug the edges
  var spots = [
    ['18%', '3%',  null],
    ['72%', null,  '4%']
  ];

  var layer = document.createElement('div');
  layer.className = 'decor';
  layer.setAttribute('aria-hidden', 'true');

  for (var i = 0; i < spots.length; i++) {
    var s = document.createElement('span');
    s.textContent = emojis[i % emojis.length];
    s.style.top = spots[i][0];
    if (spots[i][1]) s.style.left = spots[i][1];
    if (spots[i][2]) s.style.right = spots[i][2];
    s.style.animationDelay = (i * 0.5) + 's';
    s.style.animationDuration = (6 + (i % 4)) + 's';
    layer.appendChild(s);
  }

  document.body.appendChild(layer);
})();
