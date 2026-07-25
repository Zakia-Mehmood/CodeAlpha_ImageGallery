const lightbox = document.getElementById('lightbox');
const images = document.querySelectorAll('.gallery img');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.add('active');
    const imgClone = document.createElement('img');
    imgClone.src = img.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(imgClone);
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

function filterGallery(category) {
  const galleries = document.querySelectorAll('.gallery');
  galleries.forEach(gallery => {
    if (category === 'all') {
      gallery.style.display = 'flex';
    } else {
      gallery.style.display = gallery.classList.contains(category) ? 'flex' : 'none';
    }
  });
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}
