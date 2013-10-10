$(function() {

  $('.header--trigger').click(function() {
    $('.overlay').show();
    return false;
  });

  $('.overlay__select, .remove-undo').click(function() {
    $('.source-facebook, .icon-link').show();
    $(this).children('.clickable').hide();
    return false;
  });

  $('.source-remove').click(function() {
    return false;
  });

  $('.overlay__close').click(function() {
    $('.overlay').hide();
    return false;
  });

});

