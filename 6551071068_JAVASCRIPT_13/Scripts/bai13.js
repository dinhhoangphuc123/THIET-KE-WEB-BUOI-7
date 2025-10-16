$(document).ready(function(){
	$(".password-show").click(function(){
		let input = $("#password");
		let icon = $(this);

		if (input.attr("type") === "password") {
			input.attr("type", "text");
			icon.removeClass("fa-eye-slash").addClass("fa-eye");
		} else {
			input.attr("type", "password");
			icon.removeClass("fa-eye").addClass("fa-eye-slash");
		}
	});
});
