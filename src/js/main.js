$(function () {
  $('.top-slider__inner').slick({
    infinite: true,
    dots: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrow--left" src="img/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrow--right" src="img/arrow-right.svg" alt="">'


  });
  $('.product__slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrow--left" src="img/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrow--right" src="img/arrow-right.svg" alt="">'

  });
  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider'

  });
  $(".star").rateYo({
    rating: 3.6,
    starWidth: '17px',
    normalFill: '#ccccee',
    ratedFill: '#ffc35b',
    readOnly: true
  });

});
