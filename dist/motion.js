(() => {
  'use strict';
  const scene = document.getElementById('portrait-scene');
  const stage = document.getElementById('portrait-stage');
  const flip = document.getElementById('portrait-flip');
  const statement = document.getElementById('statement');
  const words = [...document.querySelectorAll('.statement-word')];
  if (!scene || !stage || !flip || !statement) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = window.matchMedia('(max-width: 809px)');
  const clamp = n => Math.min(1, Math.max(0, n));
  const smooth = n => { const t = clamp(n); return t * t * (3 - 2 * t); };
  let sceneTop = 0, sceneHeight = 1, quoteTop = 0, frame = 0;
  let lastActiveWord = -1;

  function measure() {
    sceneTop = scene.getBoundingClientRect().top + window.scrollY;
    sceneHeight = document.getElementById('hero-section').offsetHeight;
    quoteTop = statement.getBoundingClientRect().top + window.scrollY;
    render();
  }
  function render() {
    frame = 0;
    const y = window.scrollY;
    const progress = mobile.matches || reduced.matches ? 0 : clamp((y - sceneTop) / sceneHeight);
    const scale = .5 + .5 * smooth(progress);
    const rotation = smooth((progress - .08) / .72) * 180;
    const tilt = -9 * Math.sin(Math.PI * progress);
    stage.style.transform = `scale(${scale})`;
    flip.style.transform = `rotateY(${rotation}deg) rotateZ(${tilt}deg)`;
    const quoteProgress = reduced.matches ? 1 : clamp((y - quoteTop + sceneHeight * .3) / (sceneHeight * .9));
    const active = Math.ceil(quoteProgress * words.length);
    if (active !== lastActiveWord) {
      words.forEach((word, index) => word.classList.toggle('is-read', index < active));
      lastActiveWord = active;
    }
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(render); }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', measure, { passive: true });
  window.addEventListener('load', measure, { once: true });
  reduced.addEventListener('change', measure);
  mobile.addEventListener('change', measure);
  document.fonts.ready.then(measure);
  measure();
})();
