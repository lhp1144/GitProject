<?php
require("./connect.php");

$id =  $_REQUEST["id"];
$mc =  $_REQUEST["mc"];
$price =  $_REQUEST["price"];
$sex =  $_REQUEST["sex"];
$category =  $_REQUEST["category"];
$src = $_REQUEST["src"];

$sql = "INSERT INTO clickinfo (id,price,mc,sex,category,src) VALUES ('$id','$price','$mc','$sex','$category','$src')";
$result = mysqli_query($conn,$sql);
if($result){
	echo "1";
}
?>