$(function() {
  
  $('.alerts-trigger').click(function() {
    $('.header-alerts').toggle();
    $(this).toggleClass('clicked');
    return false
  });

  $('.messages-container').not('.linked').resizable({
    resize: function( event, ui ) { 
      var topOffset = $('.top').outerHeight();
      $('.table-container').css('top', topOffset + 'px');
      console.log("resizing!"); 
    } 
  });

  $('[class^="table-trigger"], [class^="tooltip-trigger"]').click(function() {
    $(this).parent().siblings().find('a').removeClass('clicked');
    $(this).parent().siblings().find('.js-toggle').hide();
    $(this).siblings('a').removeClass('clicked');
    $(this).siblings('.js-toggle').hide();
    $(this).next('img').toggle();
    $(this).toggleClass('clicked');
    return false
  });

  $('.messages-trigger').click(function() {

  toggleMessages(); 

  $(this).toggleClass('clicked');
    return false
  });

  $('.messages').localScroll({
    target: '.table-container div' 
  });

  $('a.view-fullscreen').click(function(){
    window.open('messages.html', 'Messages', 'width=1220, height=800');
    toggleMessages();
    $('.messages-trigger').removeClass('clicked');
    return false;
  });

  $('a.scrollTo').click(function(){
    console.log('scrollTo has been clicked');
  });

   $('a.popup-ctrl').click(function(){
      $("div.table", opener.document).scrollTo('#table-03', 400);
      return false;
   }); 

});

var toggleMessages = function () {
  $('.messages-container').toggle( 0, function() {
    var topOffset = $('.top').outerHeight();
    $('.table-container').css('top', topOffset + 'px');
    console.log(topOffset);
  });
}

