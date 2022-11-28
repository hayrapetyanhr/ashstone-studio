$(function () {
  $(document).on('click', '.navbar-toggle', function () {
    $('.navbar').toggleClass('open');
    console.log('dasddaa');
  });
  $(document).on('click', '.navbar .mobile-layer', function () {
    $('.navbar').removeClass('open');
  });
});
