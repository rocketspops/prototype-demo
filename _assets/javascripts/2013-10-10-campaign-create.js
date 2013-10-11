$(function() {

  $('.new-campaign-button').on('click', function() {
    $('.overlay').show();
    $(this).addClass('s-is-hidden');
    return false;
  });

  $('.new-campaign-button').on('click', function() {
    $('.header').toggleClass('header--new-campaign-bg');
  });

  $('.overlay__close, #cancel-campaign, #create-campaign').on('click', function() {
    $('.overlay').hide();
    $('.header').toggleClass('header--new-campaign-bg');
    $('.new-campaign-button').removeClass('s-is-hidden');
    return false;
  });

  $('.flight-dates').on('focus', '.form__datepicker', function(event) {
    var flightDatesOffset = $(this).parents('li').offset();
    var DatepickerTopPosition = flightDatesOffset.top - 65;
    var classAssignment = $(this).attr('placeholder').toLowerCase();
    console.log(classAssignment);
    $('#datepicker').addClass(classAssignment).css('top', DatepickerTopPosition);
    $(this).parent().children('.i-calendar').css('background-position', '-15px 0');

  });

  $('.flight-dates').on('blur', '.form__datepicker', function(event) {
    $('#datepicker').removeClass();
    $('.i-calendar').css('background-position', '0 0');
  });

  $(window).resize(function() {
    var flightDatesOffset = $('.flight-date').offset();
    var DatepickerTopPosition = flightDatesOffset.top - 65;
    $('#datepicker').css('top', DatepickerTopPosition);
  });

  $('ul.flight-date').on("click", "li a", function() {
    $(this).closest('li').remove();
    return false;
  });

  $('#add-flight-date').click(function() {
    $('ul.flight-date').append('<li><div class="date-range"><span class="i-calendar"></span><input class="form__input form__datepicker" placeholder="Start" id="js-input" type="text" /></div>
      <span class="range">-</span>
      <div class="date-range"><span class="i-calendar"></span><input class="form__input form__datepicker" placeholder="End" id="js-input" type="text" /></div><a href="#" class="close"></a></li>');
    return false;
  });

});
