//= require vendor/jquery-1.9.1
//= require vendor/jquery-ui-1.10.3.custom.min

$(function() {

$(".m-comments__count").click( function () {
  $(".m-comments").toggleClass('isVisible');
  if (this.text == "Show Comments") {
    $(this).text("Hide Comments");
  } else {
    $(this).text("Show Comments");
  }
  return false;
});


});
