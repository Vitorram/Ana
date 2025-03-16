document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let index = 0;

    function updateSlide() {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function prevSlide() {
        index = (index > 0) ? index - 1 : slides.length - 1;
        updateSlide();
    }

    function nextSlide() {
        index = (index < slides.length - 1) ? index + 1 : 0;
        updateSlide();
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
});
