$(document).ready(function(){
	function updateFilename(input, displayId, defaultText){
		var file = input.files[0];
		if(file){
			$('#' + displayId).text(file.name);
		}else{
			$('#' + displayId).text(defaultText);
		}
	}

	$('#fileupload1').on('change', function(){
		updateFilename(this, 'filename1', 'Ex:sample1.jpg');
	});

	$('#fileupload2').on('change', function(){
		updateFilename(this, 'filename2', 'Ex:sample2.jpg');
	});
});
