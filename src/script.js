// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Gallery filtering (only present on gallery.html)
  var filterBar = document.querySelector('.filter-bar');
  var pieces = document.querySelectorAll('.piece');
  if (filterBar && pieces.length) {
    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;

      filterBar.querySelectorAll('.filter-btn').forEach(function (b) {
        b.classList.remove('is-active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');

      var category = btn.getAttribute('data-filter');
      pieces.forEach(function (piece) {
        var match = category === 'all' || piece.getAttribute('data-cat') === category;
        piece.hidden = !match;
      });
    });
  }
});
