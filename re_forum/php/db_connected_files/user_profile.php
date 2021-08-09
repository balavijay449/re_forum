<?php 
$db=new mysqli('localhost','root','','re_forum') or die("no connect");

	$imagename = $_FILES["my_image"]["name"]; 
	$imagetmp = addslashes(file_get_contents($_FILES['my_image']['tmp_name']));
	$insert_image = "UPDATE student_details SET user_image = '$imagetmp', image_name = '$imagename' WHERE no = 1";
	$result = $db->query($insert_image);
	
	if ($result) {
		echo "success";	
	}
	else{
		echo "faild";
	}

/*This commanded codes are view image from the database......*/

// $view_image = "SELECT user_image FROM student_details WHERE no = 1";
// $db_view = $db->query($view_image);
// if ($row = $db_view->fetch_assoc()) {
// 	echo "<img src='data:image/jpeg;base64,".base64_encode($row['user_image'])."' height='400'>";
// }
?>