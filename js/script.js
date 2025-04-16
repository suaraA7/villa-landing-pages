// Navbar Section JS
document.getElementById('navbar-toggler').addEventListener('click', function () {
  var imgElement = this.querySelector('img');

  if (imgElement.src.includes('handburger-icon.png')) {
    imgElement.src = './images/handburger-icon-close.png';
    document.getElementById("navbarNav").classList.remove('d-none');
  } else {
    imgElement.src = './images/handburger-icon.png';
    document.getElementById("navbarNav").classList.add('d-none ');
  }
  this.style.outline = 'none';
});
