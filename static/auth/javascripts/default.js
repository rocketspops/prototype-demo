$(function() {

  var e = $('.table-row');
  for (var i = 0; i < 50; i++) {
    e.clone().insertAfter(e);
  }

  $('.permission').rand(75).click().end();

  $('.permission').click( function() {
    var target = $(this).closest('a');
    var msg = $('.m-notice-window');
    
    $('.permission').removeClass('last-clicked');
    $(this).addClass('last-clicked');

    if ($(this).is(':checked')) { 
    target.removeClass().addClass('added');
    clearTimeout(target.data("timer"));
    target.data("timer", setTimeout(function() { target.removeClass('added'); }, 10000));
    } else { 
    target.removeClass().addClass('removed');
    clearTimeout(target.data("timer"));
    target.data("timer", setTimeout(function() { target.removeClass('removed'); }, 10000));
    }

    clearTimeout(msg.data("timer"));
    msg.fadeTo(0,1);
    msg.data("timer", setTimeout(function() { msg.fadeOut(1000); }, 10000));
    
  });
   
  $('.undo').click(function () {
    $('.last-clicked').click();
    return false;
  });
  
});


