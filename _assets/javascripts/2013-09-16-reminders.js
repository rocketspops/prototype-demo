$(function() {

  $('.tooltip-header li').click(function() { 
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

  $('.tooltip-nav ul li').click(function() { 
    $('.tooltip-nav ul li').removeClass('active');
    $(this).addClass('active');
  });

  $('.tooltip-nav li').click(function() { 
    if ($(this).find('li').hasClass('active')) {
      console.log('this one has a child with class active');
      $(this).toggleClass('locked');
    } else {
      $(this).toggleClass('closed');
    }
  });

});
