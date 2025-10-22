document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.menu-toggle');
  const navItems = document.querySelector('.navItems');

  toggleButton.addEventListener('click', () => {
    navItems.classList.toggle('active');
  });

  
  const navLinks = navItems.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navItems.classList.remove('active');
    });
  });
});

const track = document.getElementById('projectTrack');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

const card = track.querySelector('.project-card');
const trackStyle = getComputedStyle(track);
const gap = parseFloat(trackStyle.gap) || 0;
const cardWidth = card.offsetWidth + gap;



