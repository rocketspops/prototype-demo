$(function() {

  $('.header--trigger').click(function() {
    $('.overlay').show();
    return false;
  });

	$('.overlay__select, .remove-undo').click(function() {
	  $('.source-facebook, .icon-link').show();
	  return false;
	});

	$('.source-facebook').hover(function() {
	  $('.source-remove').show();
	  return false;},function(){
	  $('.source-remove').hide();
	    return false;
	  });
	
	
	$('.source-remove').click(function() {
	  $('.source-facebook, .icon-link').hide();
	  return false;
	});
	
	$('.source-remove').click(function() {
	  $('.remove-confirm').show();
	  return false;
	});
	
	$('.remove-undo').click(function() {
	  $('.source-facebook, .icon-link').show();
	  return false;},function(){
	  $('.remove-confirm').hide();
	    return false;
	});
	

  $('.overlay__close').click(function() {
    $('.overlay').hide();
    return false;
  });

});

