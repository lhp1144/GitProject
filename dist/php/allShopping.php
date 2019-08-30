<?php
require("./connect.php");

$sql = "SELECT * FROM shopping";
$result = mysqli_query($conn,$sql);
$num = mysqli_num_rows($result);
$allArr = array();
if($num>0){
	while($num>0){
		$row = mysqli_fetch_assoc($result);
		$num--;
		array_push($allArr,$row);
	}
}else{
	array_push($allArr,null);
}
echo json_encode($allArr);
?>