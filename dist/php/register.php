<?php
	require("./connect.php");
	$username = $_REQUEST["username"];
	$password = $_REQUEST["password"];
	$cookieId = $_REQUEST["cookieId"];
	$sql = "insert into userinfo (username,password,cookieId) values ('$username','$password','$cookieId')";
	$result = mysqli_query($conn, $sql);
	if($result){
		echo "1";
	}else{
		echo "0";
	}
	mysqli_close($conn);
?>