window.onload = function() {
	hamburgerMenu();
	slider();
}

function hamburgerMenu() {
	var menuActive = false;
	var menuBtn = document.querySelector(".menu__button");
	var menuNav = document.querySelector(".menu__navigation");

	menuBtn.addEventListener("click", function() {
		if(menuActive) {
			this.classList.remove("menu__button_active");
			menuNav.classList.remove("menu__navigation_active");
			menuActive = false;
		} else {
			this.classList.add("menu__button_active");
			menuNav.classList.add("menu__navigation_active");
			menuActive = true;
		}
	});
}

function slider() {
	var sliderContent = document.querySelector(".slider__content");
	var slides = 
		sliderContent.getElementsByClassName("slider__item");
	var nextBtn = document.querySelector(".slider__button_right");
	var prevBtn = document.querySelector(".slider__button_left");
	var dotsContainer = document.querySelector(".slider__dots");
	var dots = dotsContainer.getElementsByClassName("slider__dot");
	console.log(dots);

	nextBtn.addEventListener("click", showNext);
	prevBtn.addEventListener("click", showPrev);

	for(var i = 0; i < dots.length; i++) {
		dots[i].addEventListener("click", showTarget);
	}

	function showNext() {
		var currentSlide = 
			sliderContent.querySelector(".slider__item_active");
		var nextSlide = currentSlide.nextElementSibling;
		var currentDot = 
			dotsContainer.querySelector(".slider__dot_active");
		var nextDot = currentDot.nextElementSibling;

		if(!nextSlide) {
			nextSlide = slides[0];
			nextDot = dots[0];
		}

		showSlide(currentSlide, nextSlide);
		updateDots(currentDot, nextDot);
	}

	function showPrev() {
		var currentSlide = 
			sliderContent.querySelector(".slider__item_active");
		var previousSlide = currentSlide.previousElementSibling;
		var currentDot = 
			dotsContainer.querySelector(".slider__dot_active");
		var previousDot = currentDot.previousElementSibling;


		if(!previousSlide) {
			previousSlide = slides[slides.length - 1];
			previousDot = dots[dots.length - 1];
		}

		showSlide(currentSlide, previousSlide);
		updateDots(currentDot, previousDot);
	}

	function showTarget() {
		var currentSlide = 
			sliderContent.querySelector(".slider__item_active");
		var currentDot = 
			dotsContainer.querySelector(".slider__dot_active");
		var targetIndex;

			for(var i = 0; i < dots.length; i++) {
				if(dots[i] === this)
					targetIndex = i;
			}

			var tragetSlide = slides[targetIndex];

			showSlide(currentSlide, tragetSlide);
			updateDots(currentDot, this);
	}

	function showSlide(current, target) {
			current.classList.remove("slider__item_active");
			target.classList.add("slider__item_active");
	}

	function updateDots(current, target) {
			current.classList.remove("slider__dot_active");
			target.classList.add("slider__dot_active");
	}
}