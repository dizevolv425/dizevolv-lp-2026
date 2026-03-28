// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    const t = document.querySelector(this.getAttribute('href'));
    if(t) t.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// Fade in on scroll
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.style.opacity='1';
      e.target.style.transform='translateY(0)';
    }
  });
},{threshold:0.1});

document.querySelectorAll('.num-card,.feat-card,.dep-card,.tl-item,.vid-card').forEach(el => {
  el.style.opacity='0';
  el.style.transform='translateY(14px)';
  el.style.transition='opacity 0.45s ease,transform 0.45s ease';
  obs.observe(el);
});
