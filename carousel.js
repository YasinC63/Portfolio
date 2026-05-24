const slideIndex = {};

function moveSlide(id, direction) {
  const track = document.getElementById(id);
  const slides = track.querySelectorAll('.carousel-slide');
  if (!slideIndex[id]) slideIndex[id] = 0;
  slideIndex[id] = (slideIndex[id] + direction + slides.length) % slides.length;
  updateCarousel(id, slides.length);
}

function goToSlide(id, index) {
  const track = document.getElementById(id);
  const slides = track.querySelectorAll('.carousel-slide');
  slideIndex[id] = index;
  updateCarousel(id, slides.length);
}

function updateCarousel(id, total) {
  const track = document.getElementById(id);
  const idx = slideIndex[id] || 0;
  track.style.transform = `translateX(-${idx * 100}%)`;

  const dotsContainer = document.getElementById('dots-' + id);
  if (dotsContainer) {
    dotsContainer.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });
  }
}