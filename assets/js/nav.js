// NAV CONFIG — edit this file to update the menu across all pages
const NAV_LINKS = [
  { href: 'index.html',   label: 'Home' },
  { href: 'events.html',  label: 'Events' },
  { href: 'request.html', label: 'Request from Us' },
  { href: 'joinus.html',  label: 'Join Us' },
  { href: 'donate.html',  label: 'Donate to Us' },
  { href: 'about.html',   label: 'About Us' },
];

(function () {
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  const items = NAV_LINKS.map(({ href, label }) =>
    `<li><a href="${href}"${href === currentPage ? ' class="active"' : ''}>${label}</a></li>`
  ).join('');

  document.getElementById('navmenu-placeholder').outerHTML =
    `<nav id="navmenu" class="navmenu"><ul>${items}</ul>` +
    `<i class="mobile-nav-toggle d-xl-none bi bi-list"></i></nav>`;
})();
