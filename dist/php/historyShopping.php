<?php
require("./connect.php");

$sql = "SELECT * FROM clickinfo";
//$detele = "TRUNCATE TABLE clickinfo";
$result = mysqli_query($conn,$sql);
$num = mysqli_num_rows($result);
$history = array();
if($num>0){
	while($num>0){
		$row = mysqli_fetch_assoc($result);
		$num--;
		array_push($history,$row);
	}
}
$nums = $num-4;
$historyShop = array_splice($history,$nums,4);
//if($num>4){
//	$deResult = mysqli_query($conn,$detele).
//}
echo json_encode($historyShop);
?>