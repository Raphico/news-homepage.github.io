document.querySelector('.hamburger').addEventListener('click', () => {
  document.getElementById('sm').style.transform = 'translateX(0)';
});

document.querySelector('.close-icon').addEventListener('click', () => {
  document.getElementById('sm').style.transform = 'translateX(1000px)';
});
