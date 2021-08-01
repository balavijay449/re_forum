<?php

$db=new mysqli('localhost','root','','re_forum') or die("no connect");

$reg_no = $_POST['reg_no'];
$pass = $_POST['pass'];
$sql = "SELECT reg_no, password FROM student_details WHERE reg_no = '$reg_no' AND password = '$pass'";
$result = $db->query($sql);

if ($result->num_rows == 1) {
	echo "success";
}
else{
	$sql_mt = "SELECT reg_no FROM student_details WHERE reg_no = '$reg_no'";
	$result_mt = $db->query($sql_mt);

	if ($result_mt->num_rows == 1) {
		echo "reg_faild";
	}
	else{
		echo "faild";
	}
}

?>