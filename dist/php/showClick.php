<?php
require("./connect.php");

$sql = "SELECT * FROM clickinfo";
$result = mysqli_query($conn,$sql);
$num = mysqli_num_rows($result);
$showClickArr = array();
if($num>0){
	while($num>0){
		$row = mysqli_fetch_assoc($result);
		$num--;
		array_push($showClickArr,$row);
	}
}else{
	array_push($showClickArr,null);
}
$showClickArr1 = array_pop($showClickArr);
echo json_encode($showClickArr1);
?>