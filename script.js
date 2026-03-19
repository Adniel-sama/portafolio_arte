document.addEventListener("DOMContentLoaded", function() {
  const images = [
    "img/proyecto1.jpg",
    "img/proyecto2.jpg",
    "img/proyecto3.jpg"
  ];
  
  let currentIndex = 0;
  
  const modal = document.getElementById('lightboxModal');
  const modalImage = document.getElementById('modalImage');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  const thumbs = document.querySelectorAll('.img-lightbox');
  
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', function() {
      currentIndex = parseInt(this.dataset.index);
      modalImage.src = images[currentIndex];
    });
  });
  
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentIndex];
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    modalImage.src = images[currentIndex];
  });
  
  document.addEventListener('keydown', e => {
    if (modal.classList.contains('show')) {
      if (e.key === 'ArrowLeft') prevBtn.click();
      if (e.key === 'ArrowRight') nextBtn.click();
    }
  });
});

