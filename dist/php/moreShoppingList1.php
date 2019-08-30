<?php
require("./connect.php");

$sex = $_REQUEST['sex'];

$sql="SELECT * FROM shopping WHERE sex='$sex'";
$result=mysqli_query($conn,$sql);
$num = mysqli_num_rows($result);
$moreShop = array();
if($num>0){
	while($num>0){
		$row = mysqli_fetch_assoc($result);
		$num--;
		array_push($moreShop,$row);
	}
}
$moreShop1 = array_rand($moreShop,4);
$moreShop2 = array();
for($i=0;$i<4;$i++) array_push($moreShop2,$moreShop[$moreShop1[$i]]);
echo json_encode($moreShop2);
?>