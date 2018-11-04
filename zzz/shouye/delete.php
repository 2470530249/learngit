<?php  
error_reporting(0);
 
$yd_id = $_GET['id'];
$con = mysql_connect('localhost','root','1111');
mysql_select_db('wuliu',$con);

mysql_query("SET NAMES 'utf8'",$con);

$sql = "delete from fahuodan where yd_id=$yd_id";
if(mysql_query($sql,$con)){
	echo "<script>alert('删除成功!')</script>";
}else{
	echo "<script>alert('删除失败!')</script>";
}
?>