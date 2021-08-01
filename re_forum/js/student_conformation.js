$(document).ready(function(){

	// this function used for change the explain text values.....

	function reg_no_text(){
		var id = $("#reg_no").val().length;
		if (id > 4 ) {
			$("#reg_no_text").html("valid").css({"color" : "#0AA06E", "font-weight" : "bold"});
			$("#reg_no_text").append('<img src="../images/valid.png" height="13">');
			$("#reg_no").css("border-color", "#0AA06E");
		}
		else{
			$("#reg_no_text").html("minimum 5 characters").css({"color" : "#FC534C", "font-weight" : "normal"});
			$("#reg_no").css("border-color", "#FC534C");
		}
	}

	// when change the reg_no field this function will run....

	$("#reg_no").on("input", function(){
		reg_no_text();
	});

	// this function used for change the explain text2 values.....

	function pass_text(){
		var pass = $("#pass").val();
		var pass_text = $("#pass_text");
		if (pass.length < 6 ) {
			pass_text.html("minimum 6 characters").css({"color" : "#FC534C", "font-weight" : "normal"});
			$("#pass").css("border-color", "#FC534C");
		}
		else if (!/[a-z]/.test(pass)) {
			pass_text.html("Atlest one lowercase letter").css({"color" : "#FC534C", "font-weight" : "normal"});
			$("#pass").css("border-color", "#FC534C");
		}
		else if (!/[A-Z]/.test(pass)) {
			pass_text.html("Atlest one uppercase letter").css({"color" : "#FC534C", "font-weight" : "normal"});
			$("#pass").css("border-color", "#FC534C");
		}
		else if (!/[0-9]/.test(pass)) {
			pass_text.html("Atlest one Number").css({"color" : "#FC534C", "font-weight" : "normal"});
			$("#pass").css("border-color", "#FC534C");
		}
		else{
			pass_text.html("valid").css({"color" : "#0AA06E", "font-weight" : "bold"});
			pass_text.append('<img src="../images/valid.png" height="13">');
			$("#pass").css("border-color", "#0AA06E");
		}
	}

	// when change the password field this function will run.....

	$("#pass").on("input", function(){
		pass_text();
	});

	// when click the submit button ajax will run.....

	$("#submit").click(function(){
		$.ajax({
			url: "student_conformation.php",
			type: "post",
			data: $("#form").serialize(),
			success: function(data){
				// student_conformation.php document result is else when this part is run.....
				if(data == "faild"){
					$("#reg_no_text").html("Please Enter correct Register Number").css({"color" : "#FC534C", "font-weight" : "normal"});
					$("#reg_no").css("border-color", "#FC534C");

					$("#pass_text").html("Please Enter correct Password").css({"color" : "#FC534C", "font-weight" : "normal"});
					$("#pass").css("border-color", "#FC534C");
				}
				else if(data == "reg_faild"){
					$("#reg_no_text").html("Correct Reg_No but Password mismatch").css({"color" : "#0AA06E", "font-weight" : "bold"});
					$("#reg_no").css("border-color", "#0AA06E");

					$("#pass_text").html("Please Enter correct Password").css({"color" : "#FC534C", "font-weight" : "normal"});
					$("#pass").css("border-color", "#FC534C");
				}
				else{
					window.location.replace("re_forum.php");
				}
			}

		});
	});

	// this function is used for disable and able the submit button......

	$("#form").on("input", function(){
		if ($("#reg_no_text").text() != "valid" || $("#pass_text").text() != "valid") {

			$("#submit").attr("disabled", true).css("cursor", "not-allowed");

		}
		else{
			$("#submit").attr("disabled", false).css("cursor", "pointer");
		}
	});

	// after click the submit button, explain text values not change. so this is used for change expain text after click the submit button....

	$("#submit").click(function(){
		$("#reg_no").focus(function(){
			reg_no_text();
			pass_text();			
		});
		$("#pass").focus(function(){
			reg_no_text();
			pass_text();			
		});
	});
});