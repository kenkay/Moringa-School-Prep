//slide 0-3
let sliderImages = document.querySelectorAll('.slide'),
  arrowLeft = document.querySelector('#arrow-left'),
  arrowRight = document.querySelector('#arrow-right'),
  current = 0;

//Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

//Initializes slider
function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

//Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

//Show Next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

//Left arrow click
arrowLeft.addEventListener('click', function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});


//Right arrow click
arrowRight.addEventListener('click', function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
//startAnotherSlide();

$(document).ready(function() {
  $('#arrow-right1').on('click', function() {
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
  })
  $('#arrow-left1').on('click', function() {
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    }
  })
});
