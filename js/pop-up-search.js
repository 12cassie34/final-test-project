$(document).ready(function(){
	$('.consult li:first-child').click(function(e){
		e.stopPropagation();
		$('.full-page-container').fadeIn();
	});
	$('.search-type-in').click(function(e){
		e.stopPropagation();
	});
	$('.type-in button').click(function(e){
		e.stopPropagation();
	});
	$(document).click(function(){
		$('.full-page-container').fadeOut();
	});
});