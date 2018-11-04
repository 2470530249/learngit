<?php
	
if($_POST['submit'])
echo "1111";
{
$yd_id = trim($_POST['yd_id']);
$shr_name = trim($_POST['shr_name']);
$client_name = trim($_POST['client_name']);
$shr_tel = trim($_POST['shr_tel']);
$con = mysql_connect('localhost','root','1111');
mysql_select_db('wuliu',$con);

mysql_query("SET NAMES 'gbk'",$con);
$sql = "insert into huizhidan(yd_id,client_name,shr_name,shr_tel)
values('$yd_id','$client_name','$shr_name','$shr_tel')";
mysql_query($sql,$con);
echo'<script type="text/javascript">alert("提交成功")</script>';
}
?>

