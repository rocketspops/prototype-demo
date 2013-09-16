$(function() {
  

  $('.tooltip-header li').click(function() { 
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

  $('.tooltip-nav ul li').click(function() { 
    var target = $(this).find('a').attr('href');
    console.log(target);
    $('.tooltip-nav ul li').removeClass('active');
    $(this).addClass('active');
    $(target).siblings('div').removeClass('is-visible');
    $(target).addClass('is-visible')
    return false;
  });

  $('.tooltip-nav li').click(function() { 
    if ($(this).find('li').hasClass('active')) {
      console.log('this one has a child with class active');
      $(this).toggleClass('locked');
    } else {
      $(this).toggleClass('closed');
    }
  });

  $('.to-dos input[type="checkbox"').change(function() {
    console.log("input has changed");
    $(this).next('label').toggleClass('checked');
  });


});
