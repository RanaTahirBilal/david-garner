/* David P. Garner. Own script, written fresh: the demo script throws on the
   first missing plugin and stops everything after it, so it is not used. */
(function () {
  'use strict';

  var nav = document.getElementById('dgNav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 60) { nav.classList.add('dg-stuck'); }
    else { nav.classList.remove('dg-stuck'); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var burger = document.getElementById('dgBurger');
  var links = document.getElementById('dgLinks');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('dg-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      nav.classList.add('dg-stuck');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('dg-open');
        burger.setAttribute('aria-expanded', 'false');
        onScroll();
      }
    });
  }

  if (window.WOW) {
    new window.WOW({ offset: 60, mobile: false, live: false }).init();
  }
}());
