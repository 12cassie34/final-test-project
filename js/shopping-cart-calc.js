$(document).ready(function(){
	// calc
	$(document).on('blur', '.qty1', function(){
		var sum = 0;
		var singlePrice1 = $('.singlePrice1').val();
		var qty1 = $('.qty1').val();
		var sum = singlePrice1 * qty1;
		$('.total1').val(sum);
		calcSubTotal();
	});

	$(document).on('blur', '.qty1', function(){
		var sum = 0;
		var singlePrice1 = $('.singlePrice1').val();
		var qty1 = $('.qty1').val();
		var sum = singlePrice1 * qty1;
		$('.total1').val(sum);
		calcSubTotal();
	});

	$(document).on('blur', '.qty2', function(){
		var sum = 0;
		var singlePrice2 = $('.singlePrice2').val();
		var qty2 = $('.qty2').val();
		var sum = singlePrice2 * qty2;
		$('.total2').val(sum);
		calcSubTotal();
	});

	$(document).on('blur', '.qty3', function(){
		var sum = 0;
		var singlePrice3 = $('.singlePrice3').val();
		var qty3 = $('.qty3').val();
		var sum = singlePrice3 * qty3;
		$('.total3').val(sum);
		calcSubTotal();
	});

	function calcSubTotal(){
		var sum = 0;
		 $(".total").each(function(){
	        sum += +$(this).val();
	    });
	    $(".sub-total").html(sum);
	    $('.calc-all').html(sum);
	};

	// cancel 
	$('#product-to-buy').on('click', '.cancel', function(){
		var confirmed = confirm("You don't want this product?");
		if (confirmed) {
            $(this).closest(".product-row").remove();
        }
        calcSubTotal();
	});
});