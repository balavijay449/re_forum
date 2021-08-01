$(document).ready(function(){
	// change the id field input caption....
	function staffid(){
		var id = $("#id").val().length;
		if (id > 4 ) {
			$("#sid").html("valid").css({"color" : "#0AA06E", "font-weight" : "bold"});
			$("#sid").append('<img src="../images/valid.png" height="13">');
			$("#id").css("border-color", "#0AA06E");
		}
		else{
			$("#sid").html("minimum 5 characters").css({"color" : "#FC534C", "font-weight" : "normal"});
			$("#id").css("border-color", "#FC534C");
		}
	}
	// change the name field caption....
	function name(){
		if ($("#sid").text() != "valid") {
			staffid();
		}
		var name = $("#name").val().length;
		var name_text = $("#name_text");
		if (name > 2) {
			name_text.html("valid").css({"color" : "#0AA06E", "font-weight" : "bold"});
			name_text.append('<img src="../images/valid.png" height="13">');
			$("#name").css("border-color", "#0AA06E");
		}
		else{
			name_text.html("minimum 3 characters").css({"color" : "#FC534C", "font-weight" : "normal"});
			$("#name").css("border-color", "#FC534C");
		}
	}

	function college(){
		if ($("#name_text").text() != "valid") {
			name();
		}
		var college = $("#college").val();
		var college_text = $("#college_text");
		if (college == null) {
			college_text.html("please select your college").css({"color" : "#FC534C", "font-weight" : "normal"});
			$("#college").css("border-color", "#FC534C");
		}
		else{
			college_text.html("valid").css({"color" : "#0AA06E", "font-weight" : "bold"});
			college_text.append('<img src="../images/valid.png" height="13">');
			$("#college").css({"border-color" : "#0AA06E", "color" : "#737373"});
		}
	}

	function mail(){
		if ($("#college_text").text() != "valid") {
			college();
		}
		var mail = $("#mail").val();
		var mail_text = $("#mail_text");
		var match = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (match.test(mail)) {
			mail_text.html("valid").css({"color" : "#0AA06E", "font-weight" : "bold"});
			mail_text.append('<img src="../images/valid.png" height="13">');
			$("#mail").css("border-color", "#0AA06E");
		}
		else{
			if (mail == "") {
				mail_text.html("please Enter your Email id").css({"color" : "#FC534C", "font-weight" : "normal"});
				$("#mail").css("border-color", "#FC534C");
			}
			else{
				mail_text.html("please Enter valid Email id").css({"color" : "#FC534C", "font-weight" : "normal"});
				$("#mail").css("border-color", "#FC534C");
			}
		}
	}
	function pass1(){
		if ($("#mail_text").text() != "valid") {
			mail();
		}
		var pass1 = $("#pass1").val();
		var pass1_text = $("#pass1_text");
		if (pass1.length < 6 ) {
			pass1_text.html("minimum 6 characters").css({"color" : "#FC534C", "font-weight" : "normal"});
			$("#pass1").css("border-color", "#FC534C");
		}
		else if (!/[a-z]/.test(pass1)) {
			pass1_text.html("Atlest one lowercase letter").css({"color" : "#FC534C", "font-weight" : "normal"});
			$("#pass1").css("border-color", "#FC534C");
		}
		else if (!/[A-Z]/.test(pass1)) {
			pass1_text.html("Atlest one uppercase letter").css({"color" : "#FC534C", "font-weight" : "normal"});
			$("#pass1").css("border-color", "#FC534C");
		}
		else if (!/[0-9]/.test(pass1)) {
			pass1_text.html("Atlest one Number").css({"color" : "#FC534C", "font-weight" : "normal"});
			$("#pass1").css("border-color", "#FC534C");
		}
		else{
			pass1_text.html("valid").css({"color" : "#0AA06E", "font-weight" : "bold"});
			pass1_text.append('<img src="../images/valid.png" height="13">');
			$("#pass1").css("border-color", "#0AA06E");
		}
	}
	function pass2(){
		if ($("#pass1_text").text() != "valid") {
			pass1();
		}
		var pass2 = $("#pass2").val();
		var pass2_text = $("#pass2_text");
		if ($("#pass1_text").text() == "valid") {
			if (pass2 == $("#pass1").val()) {
				pass2_text.html("valid").css({"color" : "#0AA06E", "font-weight" : "bold"});
				pass2_text.append('<img src="../images/valid.png" height="13">');
				$("#pass2").css("border-color", "#0AA06E");
			}
			else{
				pass2_text.html("Password mismatch").css({"color" : "#FC534C", "font-weight" : "normal"});
				$("#pass2").css("border-color", "#FC534C");
			}
		}
		else{
			pass2_text.html("First create password then enter this field").css({"color" : "#FC534C", "font-weight" : "normal"});
			$("#pass2").css("border-color", "#FC534C");
		}
	}


	function submit(se){
		if ($("#sid").text() != "valid") {
			$("#submit").attr("disabled", true).css("cursor", "not-allowed");
		}
		else if ($("#name_text").text() != "valid") {
			$("#submit").attr("disabled", true).css("cursor", "not-allowed");
		}
		else if ($("#college_text").text() != "valid") {
			$("#submit").attr("disabled", true).css("cursor", "not-allowed");
		}
		else if ($("#mail_text").text() != "valid") {
			$("#submit").attr("disabled", true).css("cursor", "not-allowed");
		}
		else if ($("#pass1_text").text() != "valid") {
			$("#submit").attr("disabled", true).css("cursor", "not-allowed");
		}
		else if ($("#pass2_text").text() != "valid") {
			$("#submit").attr("disabled", true).css("cursor", "not-allowed");
		}
		else{
			$("#submit").attr("disabled", false).css("cursor", "pointer");
		}
	}

	function btn_click(){
		if ($("#sid").text() == "valid" && $("#name_text").text() == "valid" && $("#college_text").text() == "valid" && 
			$("#mail_text").text() == "valid" && $("#pass1_text").text() == "valid" && $("#pass2_text").text() == "valid") {
			
			$.ajax({
				url: "faculty_details.php",
				type: "post",
				data: $("#form").serialize(),
				success: function(data){
					if(data == "success"){
						window.location.replace("faculty_login.php");
					}
					else{
						alert(data);
					}
				}
			})

		}
		else{
			alert("please enter correct details....");
		}
	}

	$("#id").on("input", function(){
		staffid();
	});
	$("#name").on("input", function(){
		name();
	});
	$("#college").on("input", function(){
		college();
	});
	$("#mail").on("input", function(){
		mail();
	});
	$("#pass1").on("input", function(){
		pass1();
	});
	$("#pass2").on("input", function(){
		pass2();
	});

	$("#form").on("input", function(){
		submit();
	});

	$("#submit").click(function(){
		btn_click();
	});

});