const menuOpen = document.getElementById('open-btn');
const menuClose = document.getElementById('close-btn');
const nav = document.getElementById('menu');

menuOpen.addEventListener('click', () => {
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});

menuClose.addEventListener('click', () => {
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});
