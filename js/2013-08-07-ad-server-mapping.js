$(function() {

  $('.tooltip--notes').click(function() {
    $('.tooltip--img').toggle();
    return false;
  });

  $('.tooltip--notes').blur(function() {
    $('.tooltip--img').hide();
  });

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

  $('.overlay__row-wrapper').on("click", "li a", function() {
    $(this).closest('li').remove();
    return false;
  });

  $('.ad-server-button').click(function() {
    $(".overlay__row-wrapper ul").append('<li class="ui-front"><img src="images/ad_server_mgmt/Blank_Row.png" alt="" /><input class="ad_server_select" type="text" /><a href="#"></a></li>');
    return false;
  });

});

