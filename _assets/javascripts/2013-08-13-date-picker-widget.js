$(function() {
  $('.calendar-icon').click(function() {
    $(this).toggleClass('s-is-active');
    $('.date-picker').toggle();
    return false;
  });
});
