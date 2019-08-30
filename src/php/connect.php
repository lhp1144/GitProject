<?php
	header('Content-type:text/html;charset=utf-8');
	//连接数据库
	$servername = "127.0.0.1";
	$username = "root";
	$password = "123456";
//	$password = "root";
	$dbname = "abercrombie";
	$port = "3306";
	
	//创建连接
	$conn = mysqli_connect($servername,$username,$password,$dbname,$port);
	//检测连接
	if(mysqli_connect_error()){
		die('连接失败');
	}

?>