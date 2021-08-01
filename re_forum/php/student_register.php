<!DOCTYPE html>
<html>
<head>
	<title>Forum</title>
	<link rel="stylesheet" href="../styles/student_reg.css">
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
								<input type="text" class="input" placeholder="Reg No" id="reg_no" name="reg_no">
								<p class="explain-text" id="sid">Register number*</p>
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
									<option class="clg">select</option>
								</select>
								<p class="explain-text" id="college_text">Select your college*</p>
							</div>
							<div class="col-sm-6">
								<input type="mail" class="input" placeholder="Email" id="mail" name="mail">			
								<p class="explain-text" id="mail_text">Email(example@gmail.com)*</p>
							</div>
						</div>
						<div class="row text-center">
							<div class="col-sm-6">
								<select class="input" id="dept" name="dept" style="width: 256px;">
									<option disabled selected>Department</option>
									<option>select</option>
								</select>
								<p class="explain-text" id="dept_text">Select your department*</p>
							</div>
							<div class="col-sm-6">
								<select class="input" id="semester" name="semester" style="width: 256px;">
									<option disabled selected>Semester</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
									<option>7</option>
									<option>8</option>
								</select>
								<p class="explain-text" id="sem_text">Select your Semester*</p>
							</div>
						</div>
						<div class="row text-center">
							<div class="col-sm">
								<input type="password" class="input" placeholder="Create Password" id="pass" name="pass">
								<p class="explain-text pass" id="pass_text">Create New Password*</p>
							</div>
						</div>
						<div class="d-flex flex-column justify-content-center text-center">
							<button type="button" class="btn btn-primary submit" id="submit" name="submit" disabled style="cursor: not-allowed;">Submit</button>
							<p style="margin-top: 16.5px; color: #777;">already have an account <a href="student_login.php" class="create">Login</a></p>
						</div>
					</div>
				</form>			
			</div>
		</div>		
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="../js/student_register.js"></script>
</body>
</html>