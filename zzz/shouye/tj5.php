<?php
	
if($_POST['submit'])
echo "1111";
{
$car_id = trim($_POST['car_id']);
$car_xh = trim($_POST['car_xh']);
$w = trim($_POST['w']);
$v= trim($_POST['v']);
$drivename = trim($_POST['drivename']);
$driver_tel = trim($_POST['driver_tel']);
$con = mysql_connect('localhost','root','1111');
mysql_select_db('wuliu',$con);

mysql_query("SET NAMES 'utf8'",$con);
$sql = "insert into car(car_id,car_xh,w,v,drivename,driver_tel)
values('$car_id','$car_xh','$w','$v','$drivename','$driver_tel')";
mysql_query($sql,$con);

echo mysql_error();
echo'<script type="text/javascript">alert("提交成功")</script>';
}
?>

