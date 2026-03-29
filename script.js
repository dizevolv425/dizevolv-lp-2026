// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    const t = document.querySelector(this.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Scroll reveal utility
function reveal(selector, { y = 18, stagger = false, baseDelay = 0 } = {}) {
  const els = document.querySelectorAll(selector);
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  els.forEach((el, i) => {
    const delay = baseDelay + (stagger ? i * 80 : 0);
    el.style.opacity = '0';
    el.style.transform = `translateY(${y}px)`;
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
    obs.observe(el);
  });
}

// Section labels + headings
reveal('.s-label', { y: 10 });
reveal('section h2, .tese h2, .garantia h2, .numeros h2, .cta-f h2', { y: 14 });

// Intro / tese
reveal('.tese-text p', { stagger: true, y: 12 });

// Solution cards
reveal('.sol-card', { stagger: true, y: 14 });

// Agent cards + VS box
reveal('.agent-card', { stagger: true, y: 16 });
reveal('.agent-vs', { y: 22 });

// Numbers
reveal('.num-card', { stagger: true, y: 16 });

// Videos
reveal('.vid-card', { stagger: true, y: 16 });

// Timeline
reveal('.tl-item', { stagger: true, y: 14 });

// Cases
reveal('.case-box', { y: 22 });

// Dados cards
reveal('.dado-card', { stagger: true, y: 16 });
reveal('.dados-callout', { y: 14 });

// Features / como funciona
reveal('.feat-card', { stagger: true, y: 16 });

// Office
reveal('.office-wrap', { y: 20 });

// Garantia
reveal('.gar-box', { y: 20 });

// Oferta
reveal('.cost-table', { y: 16 });
reveal('.of-save', { y: 12, baseDelay: 100 });

// Depoimentos
reveal('.dep-card', { stagger: true, y: 16 });

// Logos
reveal('.logos-row', { y: 10 });

// Problema section
reveal('.problema h2', { y: 14 });

// Autoridade / certificacoes
reveal('.cert-badge', { stagger: true, y: 16 });

