$(document).ready(function(){
	$('.products-dropdown').click(function(e){
		e.stopPropagation();
		$('.menu-grey-background').fadeIn();
	});

	$(document).click(function(e){
		
		$('.menu-grey-background').fadeOut();
	});
});