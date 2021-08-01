<!DOCTYPE html>
<html>
<head>
	<title>Forum</title>
	<link rel="stylesheet" href="../styles/faculty_reg.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="theme-color" content="#fdfdff">
</head>
<body>
	<div class="root d-flex justify-content-center align-items-center">
		<div class="sub-root">
			<p class="text-secondary text">Register</p>
			<div>
				<form class="content-root" id="form" name="form" method="post" autocomplete="off">
					<div class="container-md">
						<div class="row text-center">
							<div class="col-sm-6">
								<input type="text" class="input" placeholder="Staff Id" id="id" name="id">			
								<p class="explain-text" id="sid" name="sid">Your Id*</p>
							</div>
							<div class="col-sm-6">
								<input type="text" class="input" placeholder="Name" id="name" name="name">			
								<p class="explain-text" id="name_text">Full Name*</p>
							</div>
						</div>
						<div class="row text-center">
							<div class="col-sm-6">
								<select class="input" id="college" name="college" style="width: 256px;">
									<option disabled selected>College</option>
									<option>select1</option>									
									<option>select2</option>									
									<option>select3</option>									
									<option>select4</option>									
								</select>
								<p class="explain-text" id="college_text">Select your college*</p>
							</div>
							<div class="col-sm-6">
								<input type="email" class="input" placeholder="Email" id="mail" name="mail">			
								<p class="explain-text" id="mail_text">Email(example@gmail.com)*</p>
							</div>
						</div>
						<div class="row text-center">
							<div class="col-sm-6">
								<input type="password" class="input" placeholder="Create Password" id="pass1" name="pass1">
								<p class="explain-text" id="pass1_text">Create New Password*</p>
							</div>
							<div class="col-sm-6">
								<input type="password" class="input" placeholder="Confirm Password" id="pass2" name="pass2">
								<p class="explain-text" id="pass2_text">Confirm Password*</p>
							</div>
						</div>
						<div class="d-flex flex-column justify-content-center text-center">
							<button type="button" class="btn btn-primary submit" id="submit" name="submit" disabled style="cursor: not-allowed;">Submit</button>
							<p style="margin-top: 16.5px; color: #777;">already have an account <a href="faculty_login.php" class="create">Login</a></p>
						</div>
					</div>
				</form>			
			</div>
		</div>		
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="../js/faculty_register.js"></script>
	<?php
	// if (isset($_POST['submit'])) {
	// 	$staff_id = $_POST['id'];
	// 	$staff_name = $_POST['name'];
	// 	$college = $_POST['college'];
	// 	$mail = $_POST['mail'];
	// 	$pass = $_POST['pass2'];
	// 	$sc = $_POST['sid'];
	// 	echo $sc;
		// if ($sc == "valid") {
		// 	# code...
		// }
	// }
	?>
</body>
</html>