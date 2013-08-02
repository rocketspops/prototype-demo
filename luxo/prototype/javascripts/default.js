$(function() {

	$('.tooltip--notes').click(function() {
		$('.tooltip--img').toggle();
	});
	
	$('.tooltip--notes').blur(function() {
		$('.tooltip--img').hide();
	});
	
	$('.tooltip--edit').click(function() {
		$('.overlay').show();
	});
	
	$('.overlay__close').click(function() {
		$('.overlay').hide();
	});
	
	$(document).bind('keydown', function(e) {
		if (e.which == 27) {
		  $('.overlay').hide();
		}
	});
	
	$('.overlay__row-wrapper').on("click", "li a", function() {
		$(this).closest('li').remove();
	});
	
	$('.ad-server-button').click(function() {
		$(".overlay__row-wrapper ul").append('<li class="blank_row"><img src="images/ad_server_mgmt/Blank_Row.png" alt="" /><a href="#"></a></li>');
		
	});
	


});

