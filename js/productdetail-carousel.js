$(document).ready(function(){
    $('.slider-for').slick({
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	arrows: false,
    	fade: true,
    	mobileFirst: true,
    	asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
    	slidesToShow: 4,
    	slidesToScroll: 1,
    	centerMode: false,
    	asNavFor: '.slider-for',
    	dots: false,
    	infinite: true,
    	centerMode: false,
    	variableWidth: true,
    	arrows: true,
    	prevArrow: false,
    	focusOnSelect: true,
    	mobileFirst: true,
    	focusOnSelect: true
    });

    $('.slick-next').text(">");
	
});