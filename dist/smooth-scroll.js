(() => {
  'use strict';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function configure() {
    window.portfolioScroll?.destroy();
    delete window.portfolioScroll;
    if (reducedMotion.matches || !window.Lenis) return;
    window.portfolioScroll = new window.Lenis({
      autoRaf: true,
      smoothWheel: true,
      syncTouch: false,
      lerp: .085,
      wheelMultiplier: .9,
      anchors: false,
      prevent: element => Boolean(element.closest('textarea, [data-lenis-prevent]'))
    });
  }

  reducedMotion.addEventListener('change', configure);
  configure();
})();
