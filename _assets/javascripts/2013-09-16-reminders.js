$(function() {
  
  $('.tooltip-header li').click(function() { 
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

  $('.tooltip-nav ul li').click(function() { 
    var target = $(this).find('a').attr('href');
    
    $('.tooltip-nav ul li').removeClass('active');
    $(this).addClass('active');

    $(target).siblings('div').removeClass('is-visible');
    $(target).addClass('is-visible');

    $('.tooltip-nav > li').removeClass('locked');
    $(this).parents('li').addClass('locked');

    

    return false;
  });

  $('.tooltip-nav li').click(function() { 
    var target = $(this);
    var totals = 0;

    target.find('.counter').each(function() {
      var number = parseInt($(this).text(), 10);
      totals += number;
    });
    
    target.find('.total').text(totals);

    if ($(this).find('li').hasClass('active')) {
      console.log('this one has a child with class active');
      $('.tooltip-nav li').removeClass('locked');
      target.addClass('locked');
    } else {
      target.toggleClass('closed');
    }

  });

  $('.to-dos input[type="checkbox"').change(function() {

    $(this).next('label').toggleClass('checked');
    $(this).parent().toggleClass('checked');

    var parentDiv = $(this).parents('div').attr('id');
    var length = $(this).parents('ul').find('li:not(.checked)').length;
    console.log(length);

    if (length > 0) {
      $('a[href="#' + parentDiv + '"').find('.counter').text(length); 
    } else {
      $('a[href="#' + parentDiv + '"').find('.counter').text(''); 
    }

  });


});
