//= require vendor/jquery-1.9.1
//= require vendor/jquery-ui-1.10.3.custom.min

$(function() {

  $(".m-comments__count").click( function () {
    $(this).toggleClass('s-is-active');
    $(".m-comments").toggleClass('s-is-visible');
    return false;
  });

 $('#disqus_thread iframe').css({
    'height': '327px',
    'height': 'auto !important',
    'min-height': '327px'
  });

});
