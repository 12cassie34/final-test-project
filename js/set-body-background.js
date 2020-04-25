$(document).ready(function(){

	$('.forabout .white-layer .consult .cart:last-child').click(function(e){
		$('.for-shopping-bag').slideToggle();
		$('.grey-background').slideToggle();
		
	});

	$('.grey-background').click(function(e){
		$('.grey-background').slideToggle();
		$('.for-shopping-bag').slideToggle();
	});

});