$(function() {

  $('.header--trigger').click(function() {
    $('.overlay').show();
    return false;
  });

  $('.overlay__close').click(function() {
    $('.overlay').hide();
    return false;
  });

  $(document).bind('keydown', function(e) {
    if (e.which == 27) {
      $('.overlay').hide();
    }
  });

  $('.overlay__body ul').on('click', '.flag', function(event) {

    $('.link span').removeClass('s-is-flag-clicked');
    $('.link .flag').attr('title', '');

    $(this).attr('title', 'This note will appear on the dashboard.');
    $(this).siblings('span').addClass('s-is-flag-clicked');

    return false;
  });

  $('.overlay__body ul').on('click', '.delete', function(event) {
    $(this).parents('li').remove();
    return false;
  });

  $('.overlay__body ul').on('mouseenter', '.flag', function( event ) {
    $(this).parent().find('span').addClass('s-is-flag-hovered');
  }).on('mouseleave', '.flag', function( event ) {
    $(this).parent().find('span').removeClass('s-is-flag-hovered');
  });


  $('#js-button').click(function() {

    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth();
    curr_month++;
    var curr_year = d.getFullYear();
    var a_p = "";
    var curr_hour = d.getHours();
    if (curr_hour < 12) { a_p = "am"; }
    else { a_p = "pm"; }
    if (curr_hour == 0) { curr_hour = 12; }
    if (curr_hour > 12) { curr_hour = curr_hour - 12; }
    var curr_min = d.getMinutes();

curr_min = curr_min + "";

if (curr_min.length == 1)
   {
   curr_min = "0" + curr_min;
   }
    var noteVal = $('#js-input').val();

    console.log(noteVal);
   if (noteVal) { 
   $('.overlay__body ul').append('
      <li>
        <div class="link">
          <span></span>
          <a class="flag" title="" href="#"></a>
        </div>
        <div class="note">
          <p class="name">
            Your Name Here<span><i>|</i>' + curr_month + '/' + curr_date + '/' + curr_year + ' at ' + curr_hour + ':' + curr_min + a_p + '<i>|</i><a class="delete" href="#">Delete</a></span>
          </p>
          <p>' + noteVal + ' </p>
        </div>
      </li>
    '); 
    $('#js-input').val('').removeClass('error');
  } else {
   $('#js-input').addClass('error'); 
  }

  });

});
