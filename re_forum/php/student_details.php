<?php

$db=new mysqli('localhost','root','','re_forum') or die("no connect");

$reg_no = $_POST['reg_no'];
$name = $_POST['name'];
$college = $_POST['college'];
$mail = $_POST['mail'];
$dept = $_POST['dept'];
$sem = $_POST['semester'];
$pass = $_POST['pass'];

$sql = "INSERT INTO student_details (reg_no, name, college, mail, dept, sem, password) VALUES ('$reg_no', '$name', '$college', '$mail', '$dept', '$sem', '$pass')";

if ($reg_no != "" && $name != "" && $college != "" && $mail != "" && $dept != "" && $sem != "" && $pass != "") {
	if($db->query($sql)){
	}
	else{
		$mail_sql = "SELECT mail FROM student_details WHERE mail = '$mail'";
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
	echo "PLease enter correct details....";
}

?>