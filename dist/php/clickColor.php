<?php
require("./connect.php");

$id = $_REQUEST["id"];

$sql="SELECT * FROM shopping WHERE id='$id'";
$result = mysqli_query($conn,$sql);
$arr = array();
if($result){
	$row = mysqli_fetch_assoc($result);
	array_push($arr,$row);
}
echo json_encode($arr);
?>