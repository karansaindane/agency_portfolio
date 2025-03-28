let carouselElement = document.getElementById('testimonialCarousel');
let carousel = new bootstrap.Carousel(carouselElement);

function pauseCarousel() {
    carousel.pause();
}
$(document).ready(function() {
    $('#featuresRequired').select2();
  });