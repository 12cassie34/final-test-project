$(document).ready(function(){

	$('.forabout .white-layer .consult li:nth-child(3)').click(function(e){
		$('.for-shopping-bag').slideToggle();
		$('.grey-background').slideToggle();
		
	});

	$('.white-layer.forhome .consult .cart').click(function(e){
		$('.for-shopping-bag').slideToggle();
		$('.grey-background').slideToggle();
		
	});

	$('.grey-background').click(function(e){
		$('.grey-background').slideToggle();
		$('.for-shopping-bag').slideToggle();
	});

});