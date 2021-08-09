<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Student's Talk</title>
	<link rel="stylesheet" href="../styles/student_chat.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="theme-color" content="#fdfdff">
</head>
<body>
	<div class="container-fluid">
		<div class="row root">

			<!-- This div element is control the all left side working process-->
			
			<div class="col-2 sub-root-1">
				<img src="db_images/user.png" height="80" class="img">
				<div class="figcap">
					<button type="button" class="btn text-light profile">Profile</button>
				</div>
				<div class="btn-section">
					<button class="staffs btn btn-primary">Staffs</button>
					<button class="classmates btn btn-primary">Classmates</button>
					<button class="groups btn btn-primary">Groups</button>
					<button class="about btn btn-primary">About</button>
					<button class="settings btn btn-primary">Settings</button>
				</div>
				<div class="logout">
					<button type="button" class="btn btn-warning">Logout</button>
				</div>
			</div>
			
			<!-- This div element is control the all center working process -->
			
			<div class="col-3 sub-root-2">
				<div class="text-secondary text-center brand-logo">Staffs</div>
				<div class="chat-names">
					<input type="search" class="form-control search" placeholder="Search" name="">
					<img src="../images/loupe.png" height="20" class="search-img">
					<div class="senders"></div>					
				</div>		
			</div>
			
			<!-- This div element is control the all right side working process-->
			
			<div class="col-7 sub-root-3">
				
			</div>
			<!-- This is about section -->
			<div class="col-3 sub-root-4">
				<button class="close">x</button>
				<img src="db_images/user.png" height="80" class="about-img">
				<form method="post" enctype="multipart/form-data" class="d-flex justify-content-around my-3 profile-form" id="profile-form">
					<label for="my_image" class="btn btn-primary shadow my-image-label">Select Image</label>
					<input type="file" name="my_image" class="d-none about-img-btn" id="my_image" value="add Image">
					<input type="button" class="btn btn-warning shadow" name="profile_submit" id="profile-submit" value="add profile">
				</form> 
			</div>
		</div>
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>	
	<script src="../js/student_chat.js"></script>
</body>
</html>

