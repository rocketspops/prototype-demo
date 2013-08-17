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

  $('.overlay__body ul').on('mouseenter', '.delete', function( event ) {
        $(this).parent().find('span').addClass('s-is-delete-hovered');
  }).on('mouseleave', '.delete', function( event ) {
        $(this).parent().find('span').removeClass('s-is-delete-hovered');
  });
  
    $('.overlay__body ul').on('mouseenter', '.flag', function( event ) {
        $(this).parent().find('span').addClass('s-is-flag-hovered');
  }).on('mouseleave', '.flag', function( event ) {
        $(this).parent().find('span').removeClass('s-is-flag-hovered');
  });


  $('#js-button').click(function() {
    var noteVal = $('#js-input').val();
    console.log(noteVal);
   if (noteVal) { 
   $('.overlay__body ul').append('
     <li>
      <div class="link">
        <span></span>
        <a class="flag" title="" href="#"></a>
        <a class="delete" href="#"></a>
      </div>
      <div class="name">Your name here</div>
      <div class="note">' + noteVal + '</div>
     </li>
    '); 
    $('#js-input').val('').removeClass('error');
  } else {
   $('#js-input').addClass('error'); 
  }

  });

});
