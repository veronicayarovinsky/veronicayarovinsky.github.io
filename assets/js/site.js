// Nav-solidify on scroll · scroll-reveal · project modals. No framework.
(function () {
  var nav = document.querySelector('.site-nav');
  function onScroll() { if (nav) nav.classList.toggle('scrolled', window.scrollY > 20); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('.reveal');
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Project popups (native <dialog>).
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-modal]');
    if (trigger) {
      var d = document.getElementById(trigger.getAttribute('data-modal'));
      if (d && typeof d.showModal === 'function') d.showModal();
      return;
    }
    if (e.target.closest('[data-close]')) {
      var open = e.target.closest('dialog');
      if (open) open.close();
      return;
    }
    if (e.target.tagName === 'DIALOG') { e.target.close(); }  // backdrop click
  });
})();
