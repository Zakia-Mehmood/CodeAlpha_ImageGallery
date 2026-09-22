let currentIndex = 0;
const lightbox = document.getElementById('lightbox');
const allImages = Array.from(document.querySelectorAll('.gallery img'));

function showImage(index) {
  lightbox.classList.add('active');
  const imgClone = document.createElement('img');
  imgClone.src = allImages[index].src;

  // Add navigation buttons
  lightbox.innerHTML = `
    <button id="prev">⟨</button>
    <button id="next">⟩</button>
  `;
  lightbox.appendChild(imgClone);

  document.getElementById('prev').onclick = () => navigate(-1);
  document.getElementById('next').onclick = () => navigate(1);
}

function navigate(direction) {
  currentIndex = (currentIndex + direction + allImages.length) % allImages.length;
  showImage(currentIndex);
}

allImages.forEach((img, i) => {
  img.addEventListener('click', () => {
    currentIndex = i;
    showImage(currentIndex);
  });
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.classList.remove('active');
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
