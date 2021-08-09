$(document).ready(function(){
	
	// About page toggle......

	$('.profile, .sub-root-1 .img').click(function(){
		$('.sub-root-3').attr("class", "col-4 sub-root-3 sub-root-3-style");
		$('.sub-root-4').show();
	});
	$('.close').click(function(){
		$('.sub-root-4').hide();
		$('.sub-root-3').attr("class", "col-7 sub-root-3");
	});

	// load condent from the database(for sub-root-2 section)....

	$('.senders').load("db_connected_files/senders.php");

	// Store images using ajax......

	$("#profile-submit").click(function(){
		var form = $("#profile-form").get(0); 
        $.ajax({
            url: 'db_connected_files/user_profile.php',
            type: 'POST',
            data: new FormData(form),
            mimeType: 'multipart/form-data',
            processData: false,
            contentType: false,
            success: function (data) {
            	alert(data);
            },
            error: function (data) {
            	alert(data);
            }
        });
	});
});
