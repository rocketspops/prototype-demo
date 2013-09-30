$(function() {
  
  if ($(location).attr('hash') == '') { 
    $(location).attr('hash', 'dashboard');
    $.get( "/peripheral/2013-09-30-low-fi-vision-revised/dashboard.html", function( data ) {
      $(".ajax-container").html(data);
    });
  }

  window.onpopstate = function() {
    var target = $(location).attr('hash').replace('#','');
    console.log(target);
    $.get( "/peripheral/2013-09-30-low-fi-vision-revised/" + target + ".html", function( data ) {
      $(".ajax-container").html(data);
    });
  };

  $('.ajax-container').on('click', '.js-trigger', function() { 
    var target = $(this).attr('data-target');
    $.get( "/peripheral/2013-09-30-low-fi-vision-revised/" + target + ".html", function( data ) {
      $(".ajax-container").html(data);
    });
  });

  $('.ajax-container').on('change', '.onoffswitch-checkbox', function() {
    console.log('test');
    $('.dash-nav ul, p.main').toggleClass('active');
  }); 

  $('.ajax-container').on('click', '[class*="-nav"] li a', function() {
    var target = $(this).attr('href');
    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');
    $(target).siblings().removeClass('active');
    $(target).addClass('active');
    return false;
  });

  $('.ajax-container').on('click', '.js-overlay-trigger', function() {
    $('.overlay').toggleClass('open');
    return false;
  });

  $('.ajax-container').on('click', '.js-close', function() {
    $('.overlay').removeClass('open');
    return false;
  });

  $('.ajax-container').on('click', '.no-controls', function() {
    $('.camp-controls').removeClass('open');
    return false;
  });

  $('.ajax-container').on('click', '.has-controls', function() {
    $('.camp-controls').addClass('open');
    return false;
  });

  $('.ajax-container').on('click', '.js-panel', function() {
    $('.camp-sidebar').toggleClass('open');
    return false;
  });

});
