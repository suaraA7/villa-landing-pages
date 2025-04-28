// Navbar Section JS
document.getElementById('navbar-toggler').addEventListener('click', function () {
  var imgElement = this.querySelector('img');

  if (imgElement.src.includes('hamburger-menu.png')) {
    imgElement.src = './images/hamburger-menu-close.png';
    document.getElementById("navbarNav").classList.remove('d-none');
  } else {
    imgElement.src = './images/hamburger-menu.png';
    document.getElementById("navbarNav").classList.add('d-none ');
  }
  this.style.outline = 'none';
});

//FAQ Section JS
function toggleFaq(item) {
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.faq-icon');

  const isVisible = answer.style.display === 'block';

  // Tutup semua yang terbuka
  document.querySelectorAll('.faq-answer').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.faq-icon').forEach(el => el.classList.remove('rotate-icon'));

  // Toggle item sekarang
  if (!isVisible) {
      answer.style.display = 'block';
      icon.classList.add('rotate-icon');
  }
}
