$(document).ready(function(){
    $('.slider-for').slick({
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	arrows: false,
    	fade: true,
    	mobileFirst: true,
    	respondTo: 'min',
    	asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
    	slidesToShow: 4,
    	slidesToScroll: 1,
    	centerMode: false,
    	asNavFor: '.slider-for',
    	dots: false,
    	infinite: true,
    	variableWidth: true,
    	arrows: true,
    	prevArrow: false,
    	focusOnSelect: true,
    	mobileFirst: true,
    	focusOnSelect: true,
    	respondTo:'min',
    	responsive: [
    	{
    		breakpoint: 721,
    		settings: {
    			slidesToShow: 1,
    			slidesToScroll: 1,
    			infinite: true,
    			dots: false,
    	        centerMode: true,
    			arrows: true,
    	        prevArrow: false
    		}
    	},
    	{
    		breakpoint: 541,
    		settings: {
    			slidesToShow: 1,
    			lidesToScroll: 1,
    			centerMode: true,
    			arrows: true,
    	        prevArrow: false
    		}
    	},
    	{
    		breakpoint: 320,
    		settings: {
    			slidesToShow: 1,
    			slidesToScroll: 1,
    			dots: false,
    			arrows: true,
    	        prevArrow: false,
    	        centerMode: true
    		}
    	}
    	]
    });

    $('.slick-next').text(">");
	
});