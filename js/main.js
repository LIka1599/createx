$(function () {

  $('.resource__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    dots: true,
    appendDots: $('.resource__dots'),
  })

  $('.resource__prev').on('click', function (e) {
    e.preventDefault()
    $('.resource__slider').slick('slickPrev')
  })
  $('.resource__next').on('click', function (e) {
    e.preventDefault()
    $('.resource__slider').slick('slickNext')
  })

  $('.help__question-item').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('help__question-item--active')) {
      $(this).removeClass('help__question-item--active')
      $(this).children('.help__active').slideUp()
    } else {
      $('.help__question-item').removeClass('help__question-item--active')
      $('.help__active').slideUp()
      $(this).addClass('help__question-item--active')
      $(this).children('.help__active').slideDown()
    }
  })


  //media 

  $('.burger, .owerlay').on('click', function (e) {
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

})
