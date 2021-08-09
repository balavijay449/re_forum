<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<style type="text/css">
		.senders-name{
			width: 100%;
		}
	</style>
</head>
<body>
	<script>
		$(".senders-name").click(function(){
			$('.brand-logo').html($(this).val());
		});
	</script>
</body>
</html>

<?php

$db=new mysqli('localhost','root','','re_forum') or die("no connect");

$sql = "SELECT * FROM student_details";
$result = $db->query($sql);
while ($row = $result->fetch_assoc()) {
	echo "<button type='button' class='btn btn-primary senders-name' value='{$row['name']}'>{$row['name']}</button>";
}

?>