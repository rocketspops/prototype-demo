$(function() {

$(".m-comments__count").click( function () {
  $(".m-comments").toggle();
  if (this.text == "Show Comments") {
    $(this).text("Hide Comments");
  } else {
    $(this).text("Show Comments");
  }
  return false;
});


});