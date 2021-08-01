$(document).ready(function(){
	// change the id field input caption....
	function studentid(){
		var id = $("#reg_no").val().length;
		if (id > 4 ) {
			$("#sid").html("valid").css({"color" : "#0AA06E", "font-weight" : "bold"});
			$("#sid").append('<img src="../images/valid.png" height="13">');
			$("#reg_no").css("border-color", "#0AA06E");
		}
		else{
			$("#sid").html("minimum 5 characters").css({"color" : "#FC534C", "font-weight" : "normal"});
			$("#reg_no").css("border-color", "#FC534C");
		}
	}
	// change the name field caption....
	function name(){
		if ($("#sid").text() != "valid") {
			studentid();
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

	function dept(){
		if ($("#mail_text").text() != "valid") {
			mail();
		}
		var dept = $("#dept").val();
		var dept_text = $("#dept_text");
		if (dept == null) {
			dept_text.html("please select your college").css({"color" : "#FC534C", "font-weight" : "normal"});
			$("#dept").css("border-color", "#FC534C");
		}
		else{
			dept_text.html("valid").css({"color" : "#0AA06E", "font-weight" : "bold"});
			dept_text.append('<img src="../images/valid.png" height="13">');
			$("#dept").css({"border-color" : "#0AA06E", "color" : "#737373"});
		}
	}

	function sem(){
		if ($("#dept_text").text() != "valid") {
			dept();
		}
		var sem = $("#semester").val();
		var sem_text = $("#sem_text");
		if (sem == null) {
			sem_text.html("please select your college").css({"color" : "#FC534C", "font-weight" : "normal"});
			$("#semester").css("border-color", "#FC534C");
		}
		else{
			sem_text.html("valid").css({"color" : "#0AA06E", "font-weight" : "bold"});
			sem_text.append('<img src="../images/valid.png" height="13">');
			$("#semester").css({"border-color" : "#0AA06E", "color" : "#737373"});
		}
	}

	function pass(){
		if ($("#sem_text").text() != "valid") {
			sem();
		}
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

	function submit(){
		if ($("#sid").text() != "valid" || $("#name_text").text() != "valid" || $("#college_text").text() != "valid" || 
			$("#mail_text").text() != "valid" || $("#dept_text").text() != "valid" || $("#sem_text").text() != "valid" || 
			$("#pass_text").text() != "valid") {

			$("#submit").attr("disabled", true).css("cursor", "not-allowed");

		}
		else{
			$("#submit").attr("disabled", false).css("cursor", "pointer");
		}
	}
	function btn_click(){
		if ($("#sid").text() == "valid" && $("#name_text").text() == "valid" && $("#college_text").text() == "valid" && 
			$("#mail_text").text() == "valid" && $("#dept_text").text() == "valid" && $("#sem_text").text() == "valid" && 
			$("#pass_text").text() == "valid") {
			
			$.ajax({
				url: "student_details.php",
				type: "post",
				data: $("#form").serialize(),
				success: function(data){
					if(data == "success"){
						window.location.replace("student_login.php");
					}
					else{
						alert(data);
					}
				}
			});

		}
		else{
			alert("please enter correct details....");
		}
	}

	$("#reg_no").on("input", function(){
		studentid();
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
	$("#dept").on("input", function(){
		dept();
	});
	$("#semester").on("input", function(){
		sem();
	});
	$("#pass").on("input", function(){
		pass();
	});

	$("#form").on("input", function(){
		submit();
	});

	$("#submit").click(function(){
		btn_click();
	});

});