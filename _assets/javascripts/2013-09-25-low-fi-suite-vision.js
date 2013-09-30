$(function() {

  target = $(location).attr('hash');
  $('[class*="lowfi"]').removeClass('active');
  if (target == '') {
    $('#dashboard').addClass('active');
    $('.m-wrapper').scrollTo('0');
  } else {
    $(target).addClass('active');
    $('.m-wrapper').scrollTo('0');
  }

  $(window).on('hashchange', function() {
    target = $(location).attr('hash').replace('#','');
    $('[class*="lowfi"]').removeClass('active');
    if (target == '') {
      $('#dashboard').addClass('active');
    } else {
      $(target).addClass('active');
    }
    $('.m-wrapper').scrollTo('0');
  });

  $('.add-publisher').click(function() {
    $('img.flyout').addClass('open');
    return false;
  });

  $('.flyout').click(function() {
    $(this).removeClass('active');
    $(this).siblings().addClass('active');
    return false;
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) { $('.flyout').removeClass('open'); }  
  });

  $('.invoices-tab').click(function() {
    $('img.tab').addClass('open');
    return false;
  });

  $('img.tab').click(function() {
    $(this).removeClass('open');
    return false;
  });

});
