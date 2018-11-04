<?php
	
if($_POST['submit'])
echo "1111";
{
$client_id = trim($_POST['client_id']);
$client_name = trim($_POST['client_name']);
$client_tel = trim($_POST['client_tel']);
$client_dz = trim($_POST['client_dz']);




$con = mysql_connect('localhost','root','1111');
mysql_select_db('wuliu',$con);

mysql_query("SET NAMES 'utf8'",$con);
$sql = "insert into client(client_id,client_name,client_tel,client_dz) 
values('$client_id','$client_name','$client_tel','$client_dz')";
mysql_query($sql,$con);
echo'<script type="text/javascript">alert("提交成功")</script>';
}
?>