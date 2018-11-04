<?php
	
if($_POST['submit'])
echo "1111";
{
$yd_id = trim($_POST['yd_id']);
$product_id = trim($_POST['product_id']);
$product_name = trim($_POST['product_name']);
$amount = trim($_POST['amount']);
$dw = trim($_POST['dw']);
$price = trim($_POST['price']);
$fh_date = trim($_POST['fh_date']);
$car_id = trim($_POST['car_id']);
$client_name = trim($_POST['client_name']);
$bz = trim($_POST['bz']);
$con = mysql_connect('localhost','root','1111');
mysql_select_db('wuliu',$con);

mysql_query("SET NAMES 'utf8'",$con);
$sql = "insert into fahuodan(yd_id,product_id,product_name,amount,dw,price,fh_date,car_id,client_name,bz)
values('$yd_id','$product_id','$product_name','$amount','$dw','$price','$fh_date','$car_id','$client_name','$bz')";
mysql_query($sql,$con);

echo mysql_error();
echo'<script type="text/javascript">alert("提交成功")</script>';
}
?>

