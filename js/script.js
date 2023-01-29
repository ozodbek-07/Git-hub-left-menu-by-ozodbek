$(function () {
  $('.show_hide-menu').on('click', function () {
    if ($('.menu').css('left') == '-300px') {
      $('.fa-sign-in').css('transform', 'rotate(180deg)')
      $('.menu').animate({
        left: 0
      }, 500)
    } else {
      $('.fa-sign-in').css('transform', 'rotate(0deg)')
      $('.menu').animate({
        left: '-300px'
      }, 500)
    }
  })
});