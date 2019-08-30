<?php
	require('./connect.php');
	
	$category = $_REQUEST["category"];
	$size = $_REQUEST["size"];
	$color = $_REQUEST["color"];
	$sex = $_REQUEST["sex"];
	$sql = "select * from shopping ";
	$selArr = array();
	if($category) array_push($selArr,"category='$category'");
	if($size) array_push($selArr,"size like '%$size%'");
	if($color) array_push($selArr,"color like '%$color%'");
	if($sex) array_push($selArr,"sex='$sex'");
	if($selArr) $sql = $sql."where ";
	$sql = $sql."".join(" and ", $selArr);
	$result = mysqli_query($conn, $sql);
	$rows = mysqli_num_rows($result);
	$res_arr = array();
	if($rows>0){
		while($rows>0){
			$row = mysqli_fetch_assoc($result);
			$rows--;
			array_push($res_arr,$row);
		}
	}else{
		array_push($res_arr,null);		
	}
	echo json_encode(array('detail'=>$res_arr));
	mysqli_close($conn);
?>