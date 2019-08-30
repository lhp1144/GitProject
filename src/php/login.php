<?php
	require("./connect.php");
	
	if(array_key_exists("cookieId", $_COOKIE)){
		$cookieId = $_COOKIE["cookieId"];
		$sql = "select username from userinfo where cookieId='$cookieId'";
	}
	if(array_key_exists("username", $_REQUEST)&&array_key_exists("password", $_REQUEST)){
		$username = $_REQUEST["username"];
		$password = $_REQUEST["password"];
		$cookieId = $_REQUEST["cookieId"];
		
		$sql = "select username from userinfo where username='$username' and password='$password'";
	}
	$result = mysqli_query($conn, $sql);
	$row = mysqli_fetch_assoc($result);
	if($row){
//		setcookie("cookieId",$cookieId,time()+60*60*27*7);
		echo $cookieId;
	}else{
		echo "0";
	}
	mysqli_close($conn);
?>