$(function() {
  
  $('.alerts-trigger').click(function() {
    $('.header-alerts').toggle();
    $(this).toggleClass('clicked');
    return false
  });

$('.messages-container').resizable({
  resize: function( event, ui ) { 
    var topOffset = $('.top').outerHeight();
    $('.table-container').css('top', topOffset + 'px');
    console.log("resizing!"); 
  } 
});

$('.messages-trigger').click(function() {

  $('.messages-container').toggle( 0, function() {
    var topOffset = $('.top').outerHeight();
    $('.table-container').css('top', topOffset + 'px');
    console.log(topOffset);
  });

  $(this).toggleClass('clicked');
  return false
});

});

