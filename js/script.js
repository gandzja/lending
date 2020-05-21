$(document).ready(function () {
  let headerItem = $('.header-menu__item');

  headerItem.on('click', function (event) {
    event.preventDefault();
    let activeContent = $(this).attr('href');
    $('.visible').toggleClass('visible');
    $(activeContent).toggleClass('visible');
    $('.item-active').toggleClass('item-active');
    $(this).toggleClass('item-active');
  });

  // let footerItem = $('.footer-menu__item');

  // footerItem.on('click', function (event) {
  //   console.log(event);
  //   event.preventDefault();
  //   let activeContent = $(this).attr('href');
  //   $('.visible').toggleClass('visible');
  //   $(activeContent).toggleClass('visible');
  //   $('.item-active').toggleClass('item-active');
  //   $(this).toggleClass('item-active');
  // });
});
