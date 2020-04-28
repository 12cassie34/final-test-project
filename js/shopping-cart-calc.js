$(document).ready(function(){
	function sumCalc() {
		var sum = 0;
		$(".total").each(function(){
	        sum += +$(this).val();
	    });
	    $(".sub-total").html(sum);
	    $('.calc-all').html(sum);
	}


	// calc
	$('select').on('change', function(){
		var singlePrice = $(this).siblings('.one-item-price').children('input').val();
		var quantity = $(this).val();
		var singleTotal = singlePrice * quantity;
		$(this).siblings('.single-price').children('input').val(singleTotal);
		sumCalc();
	});

	

	// cancel 
	$('#product-to-buy').on('click', '.cancel', function(){
		var confirmed = confirm("You don't want this product?");
		if (confirmed) {
            $(this).closest(".product-row").remove();
        }
        sumCalc();
	});
});
