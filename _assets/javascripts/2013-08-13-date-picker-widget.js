$(function() {

  $('.calendar-icon').click(function() {
    $(this).toggleClass('s-is-active');
    $('.date-picker').toggleClass('s-is-visible');
    if ($('.month-select').hasClass('s-is-visible')) {
      $('.month-select').removeClass('s-is-visible');
      $('.month-select ul').scrollTo(0);
    }
    return false;
  });

  $('.month__dropdown').click(function() {
    if ( $('.month-select').hasClass('s-is-visible')) {
      $('.month-select').removeClass('s-is-visible');
      $('.month-select ul').scrollTo(0);
    } else { 
        $('.month-select').addClass('s-is-visible');
        var activeLiPos = $('.month-select ul li.s-is-active').position(); 
        if (activeLiPos.top >= 72) { 
          $('.month-select ul').scrollTo(activeLiPos.top - 72);
        } else {
          $('.month-select ul').scrollTo(activeLiPos.top);
        }
        console.log(activeLiPos.top);
    }
    return false;
  });

  $('.month-select ul li').click(function() {
    
    $(this).siblings().removeClass('s-is-active');
    $(this).addClass('s-is-active');
    $('p.month > span').text($(this).text());

  });

  $('.date-select').click(function() {
    var date = $('.date');
    console.log(date.val());
    $(this).toggleClass('s-is-active');
    if (!date.val()) {
      date.val('8/30/13');
    } else {
      date.val('');
    }
    setTimeout(function() {
      $('.calendar-icon').click();
    }, 100);
    return false;
  });
  

});

