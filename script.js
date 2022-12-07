document.querySelector('.hamburger').addEventListener('click', () => {
  document.getElementById('sm').style.display = 'inline-flex';
  document.body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))';
});

document.querySelector('.close-icon').addEventListener('click', () => {
  document.getElementById('sm').style.display = 'none';
  document.body.style.removeProperty('background');
});
