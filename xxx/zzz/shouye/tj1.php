<?php
	
if($_POST['submit'])
echo "1111";
{
$product_id = trim($_POST['product_id']);
$product_name = trim($_POST['product_name']);
$amount = trim($_POST['amount']);
$dw= trim($_POST['dw']);
$price = trim($_POST['price']);
$bz = trim($_POST['bz']);
$con = mysql_connect('localhost','root','1111');
mysql_select_db('wuliu',$con);

mysql_query("SET NAMES 'utf8'",$con);
$sql = "insert into product(product_id,product_name,amount,dw,price,bz)
values('$product_id','$product_name','$amount','$dw','$price','$bz')";
mysql_query($sql,$con);

echo mysql_error();
echo'<script type="text/javascript">alert("提交成功")</script>';
}
?>

