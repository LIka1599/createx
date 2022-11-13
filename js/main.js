$(function () {
  var mixer = mixitup('.directions__list');

  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active');
    $(this).addClass('directions__filter-btn--active');
  })

  $('.team__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    draggable: false,
    appendArrows: $('.team__slider-arrows'),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  })
  $('.team__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })
  $('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })

  $('.testimonials__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    dots: true,
    appendDots: $('.testimonials__dots'),
    responsive: [
      {
        breakpoint: 700,
        settings: {
         
        }
      },
    ]
  })

  $('.testimonials__prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })
  $('.testimonials__next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })

  // acc

  $('.program__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('program__acc-link--active')) {
      $(this).removeClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideUp()
    } else {
      $('.program__acc-link').removeClass('program__acc-link--active')
      $('.program__acc-text').slideUp()
      $(this).addClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideDown()
    }
  })

  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--folow')
    }
    else {
      $('.burger').removeClass('burger--folow')
    }
  }, 0);


  $('.burger, .owerlay, .header__top a').on('click', function (e) {
    e.preventDefault()
    if ($('.header__top').hasClass('header__top--open')) {
      $('.header__top').removeClass('header__top--open');
      $('.owerlay').removeClass('owerlay--show');
      $('.burger').removeClass('burger--open');
    }
    else {
      $('.header__top').addClass('header__top--open');
      $('.owerlay').addClass('owerlay--show');
      $('.burger').addClass('burger--open');
    }

  })

  $('.footer__top-title--slide').on('click', function(){
    $(this).next().slideToggle();
  })


})