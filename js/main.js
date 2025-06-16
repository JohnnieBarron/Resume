document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.menu-toggle');
  const navItems = document.querySelector('.navItems');

  toggleButton.addEventListener('click', () => {
    navItems.classList.toggle('active');
  });
});
