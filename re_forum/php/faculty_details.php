<?php

$db=new mysqli('localhost','root','','re_forum') or die("no connect");

$staff_id = $_POST['id'];
$name = $_POST['name'];
$college = $_POST['college'];
$mail = $_POST['mail'];
$pass = $_POST['pass2'];

$sql = "INSERT INTO faculty_details (staff_id, name, college, mail, password) VALUES ('$staff_id', '$name', '$college', '$mail', '$pass')";

if ($staff_id != "" && $name != "" && $college != "" && $mail != "" && $pass != "") {
	if($db->query($sql)){
		echo "success";
	}
	else{
		$mail_sql = "SELECT mail FROM faculty_details WHERE mail = '$mail'";
		$mail_query = $db->query($mail_sql);

		if ($mail_query->num_rows == 1) {
			echo "Email id already exists";
		}
		else{
			echo "Please Enter correct details";
		}
	}
}
else{
	echo "please enter correct details......";
}

?>