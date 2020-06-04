$(document).ready(function () {
  let headerItem = $('.header-menu__item');

  headerItem.on('click', function (event) {
    event.preventDefault();
    let activeContent = $(this).attr('href');
    $('.visible').toggleClass('visible');
    $(activeContent).toggleClass('visible');
    $('.item-active').toggleClass('item-active');
    $(this).toggleClass('item-active');
    $('.header__burger, .header-menu').toggleClass('header-active');
  });

  $('.header__burger').click(function (event) {
    $('.header__burger, .header-menu').toggleClass('header-active');
    $('body').toggleClass('lock');
  });

  $('.header-menu').click(function (event) {
    $('.header__burger, .header-menu').toggleClass('header-active');
  });
});
// плавный скролл по якорным ссылкам
$(function () {
  $('a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 800); //800 - длительность скроллинга в мс
    return false;
  });
});
