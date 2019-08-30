<?php
	$id = $_REQUEST["id"];
	$hostdir = dirname(dirname(__FILE__)).'/images/'.$id; //要读取的文件夹

	$filesnames = scandir($hostdir); //得到所有的文件
   	echo json_encode(array('detail'=>$filesnames));
?>