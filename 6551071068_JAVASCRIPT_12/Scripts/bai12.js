$(document).ready(function(){
	$('#passport-check').on('change', function(){
		if($(this).is(':checked')){
			$('#passport-box, #passport-apply').slideDown();
		}else{
			$('#passport-box, #passport-apply').slideUp();
		}
	});
	$('#credit-check').on('change', function(){
		if($(this).is(':checked')){
			$('#credit-box, #credit-apply').slideDown();
		}else{
			$('#credit-box, #credit-apply').slideUp();
		}
	});

});
