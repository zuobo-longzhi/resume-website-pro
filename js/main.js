// 移动端菜单、滚动动画、导航高亮
const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#nav-menu');
const navLinks = [...document.querySelectorAll('.nav-menu a')];

menuToggle?.addEventListener('click', () => {
  const isOpen = body.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    body.classList.remove('menu-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => revealObserver.observe(item));

const sections = [...document.querySelectorAll('main section[id]')];
const linkMap = new Map(navLinks.map((link) => [link.getAttribute('href')?.replace('#', ''), link]));
const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove('active'));
      const activeLink = linkMap.get(entry.target.id);
      activeLink?.classList.add('active');
    }
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 });

sections.forEach((section) => activeObserver.observe(section));
