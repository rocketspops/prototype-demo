$(function() {

  $('.header--trigger').click(function() {
    $('.overlay').show();
    return false;
  });

	$('.overlay__select').click(function() {
	  $('.overlay__source-wrapper').show();
	  return false;
	});

  $('.overlay__close').click(function() {
    $('.overlay').hide();
    return false;
  });

});
