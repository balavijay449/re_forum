<!DOCTYPE html>
<html>
<head>
	<title>Forum</title>
	<link rel="stylesheet" href="../styles/student_login.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
	<div class="root d-flex justify-content-center align-items-center">
		<div class="sub-root d-flex justify-content-center align-items-center flex-column">
			<p class="text-secondary text">Login</p>
			<div >
				<form class="content-root" autocomplete="off" method="post" id="form" name="form">
					<input type="text" class="reg-no" placeholder="Reg No" id="reg_no" name="reg_no">			
					<p class="explain-text" id="reg_no_text">Enter register number*</p>
					<input type="password" class="password" placeholder="Password" id="pass" name="pass">			
					<p class="explain-text2" id="pass_text">Enter password*</p>
					<button type="button" class="btn btn-primary submit" id="submit" name="submit" disabled style="cursor: not-allowed;">Submit</button>
					<a href="student_register.php" class="create">Create an new account</a>
				</form>			
			</div>
		</div>		
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>	
	<script src="../js/student_conformation.js"></script>
	<script type="text/javascript">
	</script>
</body>
</html>
