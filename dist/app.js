(() => {
  'use strict';
  const data = window.portfolio;
  const main = document.getElementById('main');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const safeUrl = value => {
    if (!value) return '';
    try { const url = new URL(value, location.origin); return ['http:', 'https:'].includes(url.protocol) ? url.href : ''; }
    catch { return ''; }
  };
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '') ? data.email : '';
  const link = (href, text) => `<a class="text-link" href="${escape(href)}">${escape(text)} <span class="arrow-box" aria-hidden="true">↗</span></a>`;
  const portrait = large => `<div class="portrait-card ${large ? 'bio-portrait' : ''}">${data.portrait ? `<img src="${escape(safeUrl(data.portrait))}" alt="${escape(data.name)}" ${large ? 'loading="lazy"' : 'fetchpriority="high"'}>` : `<span class="portrait-monogram" aria-hidden="true">${escape(data.initials)}</span><span class="portrait-note">Portrait coming soon</span>`}</div>`;
  const projectCards = () => data.projects.map((project, index) => `<a class="project-card reveal" href="/work/${encodeURIComponent(project.slug)}"><div class="project-picture"><img src="${escape(safeUrl(project.image))}" alt="${escape(project.sample ? 'Source template preview for ' + project.title : project.title)}" width="1160" height="800" loading="lazy">${project.sample ? '<span class="sample-label">Template preview</span>' : ''}<span class="project-open" aria-hidden="true">↗</span></div><div class="project-meta"><div><h3>${escape(project.title)}</h3><p>${escape(project.category)}</p></div><span class="project-number">/${String(index + 1).padStart(2, '0')}</span></div></a>`).join('');
  const projects = standalone => `<section id="work-section" class="projects container">${standalone ? '' : `<div class="section-top reveal"><h2>Featured<br>Projects</h2>${link('/work', 'View All Work')}</div>`}<div class="project-grid">${projectCards()}</div></section>`;
  const social = (data.socialLinks || []).filter(item => safeUrl(item.url)).map(item => `<a href="${escape(safeUrl(item.url))}" target="_blank" rel="noopener noreferrer">${escape(item.label)} <span aria-hidden="true">↗</span></a>`).join('');
  const contact = () => `<section class="contact container" id="contact"><div class="contact-grid"><div class="contact-info reveal"><h2>Let’s talk.</h2><p>Have an idea, a project, or just want to say hello? Let’s start a conversation.</p>${social ? `<div class="social-links">${social}</div>` : '<p class="contact-note">Contact details coming soon.</p>'}</div><form class="contact-form reveal" id="contact-form"><label for="contact-name">Name</label><input id="contact-name" name="name" autocomplete="name" required maxlength="120" placeholder="Your name"><label for="contact-email">Email</label><input id="contact-email" name="email" type="email" autocomplete="email" required maxlength="254" placeholder="you@example.com"><label for="contact-project">Your Project</label><textarea id="contact-project" name="project" required maxlength="5000" placeholder="Tell me a little about your idea…"></textarea><button class="submit-button" type="submit"><span>${email ? 'Prepare email' : 'Contact coming soon'}</span><span aria-hidden="true">↗</span></button><p class="form-status" id="form-status" role="status">${email ? 'Opens your email app with a prepared message.' : 'Sending will be available when my contact details are added.'}</p></form></div></section>`;
  const hero = () => `<section class="hero container" id="hero-section"><div class="hero-title"><img class="hero-star star-left" src="/assets/star-right.avif" width="115" height="115" alt="" aria-hidden="true"><h1 aria-label="Developer — Nurdaulet Yessensary"><span class="role-prefix" aria-hidden="true"><span class="role-word" id="role-word">SOFTWARE</span></span><span class="role-bottom" aria-hidden="true">DEVELOPER</span></h1><img class="hero-star star-right" src="/assets/star-left.avif" width="125" height="125" alt="" aria-hidden="true"><button class="motion-control" id="motion-control" aria-label="Pause title animation" aria-pressed="false"><svg viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M3 2h2v8H3zm4 0h2v8H7z"/></svg><span>Pause animation</span></button></div><div class="hero-bottom"><p class="copyright">©${new Date().getFullYear()}</p>${portrait(false)}<p class="hero-caption">/${escape(data.name)}</p></div><a class="hero-hint" href="#bio-section">Scroll to explore ↓</a></section>`;
  const home = () => `${hero()}<section class="bio container" id="bio-section"><div class="bio-grid"><div class="bio-left reveal"><h2>Hey!</h2><p class="bio-intro">${escape(data.intro)}</p></div>${portrait(true)}<div class="bio-right reveal">${data.bio.map(p => `<p>${escape(p)}</p>`).join('')}${link('#contact', 'Get in touch')}</div></div></section><section class="statement container"><p class="reveal">${escape(data.statement)}</p></section><section class="services container" id="services"><h2 class="reveal">Expertise</h2>${data.services.map(service => `<div class="service-row reveal"><h3>${escape(service.title)}</h3><div class="tags">${service.tags.map(tag => `<span>${escape(tag)}</span>`).join('')}</div></div>`).join('')}</section>${projects(false)}<section class="approach container"><h2 class="reveal">How I work.</h2><div class="approach-grid">${data.approach.map((item, index) => `<article class="approach-card reveal"><p>${escape(item.text)}</p><h3><span class="approach-index">/0${index + 1}</span>${escape(item.title)}</h3></article>`).join('')}</div></section>${contact()}`;

  let path;
  try { path = decodeURIComponent(location.pathname).replace(/\/+$/, '') || '/'; }
  catch { path = '/404'; }
  if (path === '/' || path === '/index.html') {
    main.innerHTML = home();
  } else if (path === '/work') {
    main.className = 'work-page';
    main.innerHTML = `<section class="page-intro container" id="hero-section"><h1>Selected<br>Work.</h1><p>A space for projects, explorations, and things built with care. Preview images below are from the original template until my own projects are added.</p></section>${projects(true)}${contact()}`;
    document.title = `Work — ${data.name}`;
  } else {
    const project = data.projects.find(item => path === `/work/${item.slug}`);
    if (project) {
      main.className = 'detail-page container';
      main.innerHTML = `<div class="detail-back">${link('/work', 'All projects')}</div><p class="eyebrow">${escape(project.category)}</p><h1>${escape(project.title)}</h1>${project.sample ? '<p class="detail-notice">This image is an example from the original template, not a project by Nurdaulet Yessensary.</p>' : ''}<div class="detail-image"><img src="${escape(safeUrl(project.image))}" alt="${escape(project.title)}" width="1160" height="800"></div><div class="detail-copy"><p>${escape(project.description)}</p>${project.technologies.length ? `<div class="tags">${project.technologies.map(t => `<span>${escape(t)}</span>`).join('')}</div>` : ''}${safeUrl(project.url) ? link(safeUrl(project.url), 'Visit project') : ''}</div>`;
      document.title = `${project.title} — ${data.name}`;
    } else {
      main.innerHTML = `<section class="page-intro container"><p class="eyebrow">/404</p><h1>A little<br>off track.</h1><p>This page doesn’t exist. Let’s get you back to the portfolio.</p>${link('/', 'Back home')}</section>`;
      document.title = `Page not found — ${data.name}`;
    }
  }
  document.querySelectorAll('[data-short-name]').forEach(el => { el.textContent = data.shortName; });
  document.querySelectorAll('[data-full-name]').forEach(el => { el.textContent = data.name; });
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  document.querySelector('[data-footer-contact]').innerHTML = email ? `<a href="mailto:${escape(email)}">${escape(email)}</a>` : '<p>Details coming soon.</p>';

  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.getElementById('navigation-links');
  function closeMenu(restoreFocus = false) {
    menu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    if (restoreFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => {
    const opening = menu.hidden;
    menu.hidden = !opening;
    menuButton.setAttribute('aria-expanded', String(opening));
    menuButton.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
  });
  menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('click', event => { if (!event.target.closest('.navigation')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) closeMenu(true); });
  document.querySelector('.navigation').addEventListener('focusout', event => { if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) closeMenu(); });

  // Anchor scrolls are scoped to this document and keep the preview panel stable.
  document.querySelectorAll('a[href*="#"]').forEach(anchor => anchor.addEventListener('click', event => {
    const targetUrl = new URL(anchor.href, location.href);
    if (targetUrl.pathname !== location.pathname || !targetUrl.hash) return;
    const target = document.getElementById(targetUrl.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 105;
    window.scrollTo({ top: Math.max(0, top), behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    history.pushState(null, '', targetUrl.hash);
  }));

  const reveals = document.querySelectorAll('.reveal');
  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    document.body.classList.add('js-motion');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: .08 });
    reveals.forEach(el => observer.observe(el));
  }

  const word = document.getElementById('role-word');
  const motionButton = document.getElementById('motion-control');
  if (word && motionButton) {
    const prefixes = data.roles.map(role => role.replace(/\s*developer\s*/i, '').trim().toUpperCase() || 'WEB');
    let index = 0, paused = false, timer, transitionTimer, hoverPaused = false;
    word.textContent = prefixes[0];
    const stop = () => { clearInterval(timer); clearTimeout(transitionTimer); word.classList.remove('out', 'enter'); };
    const start = () => {
      stop();
      if (paused || hoverPaused || reducedMotion.matches || document.hidden || prefixes.length < 2) return;
      timer = setInterval(() => {
        word.classList.add('out');
        transitionTimer = setTimeout(() => {
          index = (index + 1) % prefixes.length;
          word.classList.remove('out'); word.classList.add('enter');
          word.textContent = prefixes[index];
          requestAnimationFrame(() => requestAnimationFrame(() => word.classList.remove('enter')));
        }, 480);
      }, 3800);
    };
    motionButton.addEventListener('click', () => {
      paused = !paused;
      motionButton.setAttribute('aria-pressed', String(paused));
      motionButton.setAttribute('aria-label', paused ? 'Resume title animation' : 'Pause title animation');
      motionButton.querySelector('span').textContent = paused ? 'Resume animation' : 'Pause animation';
      start();
    });
    const title = document.querySelector('.hero-title');
    title.addEventListener('mouseenter', () => { hoverPaused = true; start(); });
    title.addEventListener('mouseleave', () => { hoverPaused = false; start(); });
    title.addEventListener('focusin', () => { hoverPaused = true; start(); });
    title.addEventListener('focusout', event => { if (!title.contains(event.relatedTarget)) { hoverPaused = false; start(); } });
    document.addEventListener('visibilitychange', start);
    reducedMotion.addEventListener('change', start);
    start();
  }

  const form = document.getElementById('contact-form');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    const status = document.getElementById('form-status');
    if (!email) { status.textContent = 'My contact address hasn’t been added yet. Your message has not been sent.'; return; }
    const fields = new FormData(form);
    const subject = encodeURIComponent(`Portfolio enquiry from ${fields.get('name')}`);
    const body = encodeURIComponent(`Name: ${fields.get('name')}\nEmail: ${fields.get('email')}\n\n${fields.get('project')}`);
    location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    status.textContent = 'Your prepared message is opening in your email app. Send it there to complete your enquiry.';
  });
})();
