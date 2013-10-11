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

  $('.flight-dates').on('click', '.i-calendar', function(event) {
    var targetIcon = $(this);
    var flightDatesOffset = $(this).parents('li').offset();
    var DatepickerTopPosition = flightDatesOffset.top - 65;
    var classAssignment = $(this).attr('data-type');

    $('.i-calendar').not($(this)).removeClass('toggled');
    $(this).toggleClass('toggled');
    $('#datepicker').removeClass().css('top', DatepickerTopPosition);

    if (targetIcon.hasClass('toggled')) {
      $('#datepicker').addClass(classAssignment);
      targetIcon.addClass('i-calendar--clicked');
    } else {
      $('#datepicker').removeClass();
      $('.i-calendar').removeClass('i-calendar--clicked');
    }
    
  });

  $('.flight-dates').on('blur', '.i-calendar', function(event) {
    $('#datepicker').removeClass();
    $('.i-calendar').removeClass('i-calendar--clicked');
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
    $('ul.flight-date').append('
        <li>
          <div class="date-range">
            <span tabindex="0" data-type="start" class="i-calendar"></span>
            <input class="form__input form__datepicker" placeholder="Start" id="js-input" type="text" />
          </div>
          <span class="range">&ndash;</span>
          <div class="date-range">
            <span tabindex="0" data-type="end" class="i-calendar"></span>
            <input class="form__input form__datepicker" placeholder="End" id="js-input" type="text" />
          </div>
          <a href="#" class="close"></a>
        </li>');
    return false;
  });

  $(document).bind('keydown', function(e) {
    if (e.which == 13) {
      var inputVal = $('#js-input').val();
      console.log(inputVal);
      if (inputVal) { 
         $('.tag-group').append('<span class="tag">' + inputVal + '<a href="#" class="close"></a></span>');
         $('#js-input').val('');
         $('.input-no-styles').addClass('bottom-border');
      };
    }
  });

});
