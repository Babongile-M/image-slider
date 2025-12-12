let sliders = document.querySelectorAll('.slider');
let currentIndex = 1;

function updateSlider() {
    sliders.forEach((slider, index) => {
        slider.classList.remove("left", "front", "right");
        
        if (index === currentIndex) {
            slider.classList.add("front");
        } else if (index === (currentIndex - 1 + sliders.length) % sliders.length) {
            slider.classList.add("left");
        } else if (index === (currentIndex + 1) % sliders.length) {
            slider.classList.add("right");
        }
    });
}

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + sliders.length) % sliders.length;
    updateSlider();
}

function automation(){
    setInterval(() => {
        moveSlide(1);
    }, 5000);
};

updateSlider();
automation();
