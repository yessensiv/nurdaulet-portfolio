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
  const rollingText = text => `<span class="rolling-text" aria-hidden="true">${Array.from(text).map((char, index) => `<span class="rolling-letter" data-letter="${escape(char === ' ' ? '\u00a0' : char)}" style="--letter:${index}">${escape(char === ' ' ? '\u00a0' : char)}</span>`).join('')}</span>`;
  const link = (href, text) => `<a class="text-link" aria-label="${escape(text)}" href="${escape(href)}">${rollingText(text)} <span class="arrow-box" aria-hidden="true">↗</span></a>`;
  const portrait = large => `<div class="portrait-card ${large ? 'bio-portrait' : ''}">${data.portrait ? `<img src="${escape(safeUrl(data.portrait))}" alt="GitHub avatar of ${escape(data.name)}" ${large ? 'loading="lazy"' : 'fetchpriority="high"'}>` : `<span class="portrait-monogram" aria-hidden="true">${escape(data.initials)}</span><span class="portrait-note">Portrait coming soon</span>`}</div>`;
  const projectCards = (items = data.projects) => items.map((project, index) => `<a class="project-card reveal" href="/work/${encodeURIComponent(project.slug)}"><div class="project-picture"><img src="${escape(safeUrl(project.image))}" alt="${escape(project.sample ? 'Source template preview for ' + project.title : project.title)}" width="1160" height="800" loading="lazy">${project.sample ? '<span class="sample-label">Template preview</span>' : ''}<span class="project-open" aria-hidden="true">↗</span></div><div class="project-meta"><div><h3>${escape(project.title)}</h3><p>${escape(project.category)}</p></div><span class="project-number">/${String(index + 1).padStart(2, '0')}</span></div></a>`).join('');
  const projects = standalone => `<section id="work-section" class="projects container">${standalone ? '' : `<div class="section-top reveal"><h2>Featured<br>Projects</h2>${link('/work', 'View All Work')}</div>`}<div class="project-grid">${projectCards(standalone ? data.projects : data.projects.filter(project => ['within', 'san-portfolio', 'zaga-zaga', 'ent-math'].includes(project.slug)))}</div></section>`;
  const socialIcons = {
    GitHub: '<path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-3c3-.3 6-1.5 6-6a4.5 4.5 0 0 0-1.3-3.1 4 4 0 0 0-.1-3s-1-.3-3.2 1.2a11 11 0 0 0-5.8 0C7.4 2.6 6.4 2.9 6.4 2.9a4 4 0 0 0-.1 3A4.5 4.5 0 0 0 5 9c0 4.5 3 5.7 6 6a3.5 3.5 0 0 0-1 3v4"/>',
    Instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'
  };
  const social = (data.socialLinks || []).filter(item => safeUrl(item.url)).map(item => `<a class="social-icon" aria-label="${escape(item.label)}" href="${escape(safeUrl(item.url))}" target="_blank" rel="noopener noreferrer">${socialIcons[item.label] ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${socialIcons[item.label]}</svg>` : escape(item.label)}</a>`).join('');
  const contact = () => `<section class="contact container" id="contact"><div class="contact-grid"><div class="contact-info reveal"><h2>Let’s talk.</h2><p>Have an idea, a project, or just want to say hello? Let’s start a conversation.</p>${social ? `<div class="social-links">${social}</div>` : '<p class="contact-note">Contact details coming soon.</p>'}</div><form class="contact-form reveal" id="contact-form"><label for="contact-name">Name</label><input id="contact-name" name="name" autocomplete="name" required maxlength="120" placeholder="Your name"><label for="contact-email">Email</label><input id="contact-email" name="email" type="email" autocomplete="email" required maxlength="254" placeholder="you@example.com"><label for="contact-project">Your Project</label><textarea id="contact-project" name="project" required maxlength="5000" placeholder="Tell me a little about your idea…"></textarea><button class="submit-button" type="submit"><span>${email ? 'Prepare email' : 'Contact coming soon'}</span><span aria-hidden="true">↗</span></button><p class="form-status" id="form-status" role="status">${email ? 'Opens your email app with a prepared message.' : 'Sending will be available when my contact details are added.'}</p></form></div></section>`;
  const hero = () => `<section class="hero container" id="hero-section"><div class="hero-title"><img class="hero-star star-left" src="/assets/star-right.avif" width="115" height="115" alt="" aria-hidden="true"><h1 aria-label="Developer — Nurdaulet Yessensary"><span class="role-prefix" aria-hidden="true"><span class="role-word" id="role-word">SOFTWARE</span></span><span class="role-bottom" aria-hidden="true">DEVELOPER</span></h1><img class="hero-star star-right" src="/assets/star-left.avif" width="125" height="125" alt="" aria-hidden="true"><button class="motion-control" id="motion-control" aria-label="Pause title animation" aria-pressed="false"><svg viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M3 2h2v8H3zm4 0h2v8H7z"/></svg><span>Pause animation</span></button></div><div class="hero-bottom"><p class="copyright">©${new Date().getFullYear()}</p><p class="hero-caption">/${escape(data.name)}</p></div></section>`;
  const portraitScene = () => `<div class="portrait-track" role="img" aria-label="GitHub avatar of ${escape(data.name)}"><div class="portrait-sticky"><div class="portrait-stage" id="portrait-stage"><div class="portrait-flip" id="portrait-flip"><div class="portrait-face portrait-front" aria-hidden="true">${portrait(false)}</div><div class="portrait-face portrait-back" aria-hidden="true">${portrait(false)}</div></div></div></div></div>`;
  const notes = () => `<section class="thoughts container" id="thoughts"><h2 class="reveal">Thoughts</h2><div class="thoughts-grid">${(data.notes || []).map(note => { const project = data.projects.find(item => item.slug === note.project); if (!project) return ''; return `<a class="note-card reveal" href="/work/${encodeURIComponent(project.slug)}"><img src="${escape(safeUrl(project.image))}" width="640" height="800" alt="" loading="lazy"><div class="note-copy"><p class="note-category">${escape(project.title)} · Project notes</p><h3>${escape(note.title)}</h3><p>${escape(note.excerpt)}</p></div></a>`; }).join('')}<div class="notes-more reveal"><p>Code, projects, experiments—<br>explore what I’m building.</p><a class="text-link" href="https://github.com/yessensiv" target="_blank" rel="noopener noreferrer" aria-label="Explore GitHub">${rollingText('Explore GitHub')}<span class="arrow-box" aria-hidden="true">↗</span></a></div></div></section>`;
  const home = () => `<div class="hero-bio" id="portrait-scene">${portraitScene()}${hero()}<section class="bio container" id="bio-section"><div class="bio-grid"><div class="bio-left"><h2 class="reveal">Hey!</h2><p class="bio-intro reveal">${escape(data.intro)}</p></div><div class="bio-avatar-mobile">${portrait(true)}</div><div class="bio-right reveal">${data.bio.map(p => `<p>${escape(p)}</p>`).join('')}${link('#contact', 'Get in touch')}</div></div></section></div><section class="statement" id="statement"><div class="statement-content container"><p class="statement-text" aria-label="${escape(data.statement)}">${data.statement.split(/\s+/).map(word => `<span class="statement-word" aria-hidden="true">${escape(word)}</span>`).join(' ')}</p></div></section><section class="services container" id="services"><h2 class="reveal">Services</h2>${data.services.map(service => `<div class="service-row reveal"><h3>${escape(service.title)}</h3><div class="tags">${service.tags.map(tag => `<span>${escape(tag)}</span>`).join('')}</div></div>`).join('')}</section>${projects(false)}<section class="approach container"><h2 class="reveal">How I work.</h2><div class="approach-grid">${data.approach.map((item, index) => `<article class="approach-card reveal"><p>${escape(item.text)}</p><div class="approach-signature"><span class="approach-index">${String(index + 1).padStart(2, '0')}</span><h3>${escape(item.title)}</h3></div></article>`).join('')}</div></section>${notes()}${contact()}`;

  let path;
  try { path = decodeURIComponent(location.pathname).replace(/\/+$/, '') || '/'; }
  catch { path = '/404'; }
  if (path === '/' || path === '/index.html') {
    main.innerHTML = home();
  } else if (path === '/work') {
    main.className = 'work-page';
    main.innerHTML = `<section class="page-intro container" id="hero-section"><h1>Selected<br>Work.</h1><p>Web experiences, Android apps, and AI tools. A selection of my projects and experiments.</p></section>${projects(true)}${contact()}`;
    document.title = `Work — ${data.name}`;
  } else {
    const project = data.projects.find(item => path === `/work/${item.slug}`);
    if (project) {
      main.className = 'detail-page container';
      main.innerHTML = `<div class="detail-back">${link('/work', 'All projects')}</div><p class="eyebrow">${escape(project.category)}</p><h1>${escape(project.title)}</h1>${project.sample ? '<p class="detail-notice">This image is an example from the original template, not a project by Nurdaulet Yessensary.</p>' : ''}<div class="detail-image"><img src="${escape(safeUrl(project.image))}" alt="${escape(project.title)}" width="1160" height="800"></div><div class="detail-copy"><p>${escape(project.description)}</p>${project.technologies.length ? `<div class="tags">${project.technologies.map(t => `<span>${escape(t)}</span>`).join('')}</div>` : ''}<div class="detail-actions">${safeUrl(project.url) ? link(safeUrl(project.url), 'Visit project') : ''}${safeUrl(project.repository) ? link(safeUrl(project.repository), 'View on GitHub') : ''}</div></div>`;
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
  document.querySelectorAll('.submit-button > span:first-child').forEach(span => {
    const label = span.textContent;
    span.parentElement.setAttribute('aria-label', label);
    span.innerHTML = rollingText(label);
  });

  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.getElementById('navigation-links');
  const navigation = document.querySelector('.navigation');
  let menuCloseTimer;
  document.querySelectorAll('.menu a, .footer-links a').forEach(anchor => {
    const label = anchor.textContent;
    anchor.setAttribute('aria-label', label);
    anchor.innerHTML = rollingText(label);
  });
  function closeMenu(restoreFocus = false) {
    clearTimeout(menuCloseTimer);
    navigation.classList.remove('is-open');
    menu.inert = true;
    menuCloseTimer = setTimeout(() => { menu.hidden = true; }, reducedMotion.matches ? 0 : 420);
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    if (restoreFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => {
    const opening = menuButton.getAttribute('aria-expanded') !== 'true';
    if (!opening) { closeMenu(); return; }
    clearTimeout(menuCloseTimer);
    menu.hidden = false;
    menu.inert = false;
    requestAnimationFrame(() => navigation.classList.add('is-open'));
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
    if (window.portfolioScroll) {
      window.portfolioScroll.scrollTo(Math.max(0, top), { duration: 1.1, lerp: 0 });
    } else {
      window.scrollTo({ top: Math.max(0, top), behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    }
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
    let index = 0, paused = false, timer, transitionTimer;
    word.textContent = prefixes[0];
    const stop = () => { clearInterval(timer); clearTimeout(transitionTimer); word.classList.remove('out', 'enter'); };
    const start = () => {
      stop();
      if (paused || reducedMotion.matches || document.hidden || prefixes.length < 2) return;
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
