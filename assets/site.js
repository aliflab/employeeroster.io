// Employee Roster: shared site behaviour (mobile menu, footer year). Loaded with defer.
(function () {
  var btn = document.querySelector('.site-nav .nav-toggle');
  if (!btn) return;
  var nav = btn.parentNode;
  function setOpen(open) {
    nav.classList.toggle('nav-open', open);
    btn.setAttribute('aria-expanded', String(open));
  }
  btn.addEventListener('click', function () { setOpen(btn.getAttribute('aria-expanded') !== 'true'); });
  nav.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('nav-open')) { setOpen(false); btn.focus(); }
  });
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('nav-open') && !nav.contains(e.target)) setOpen(false);
  });
}());

document.querySelectorAll('.js-year').forEach(function (el) { el.textContent = new Date().getFullYear(); });
