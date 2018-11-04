<?php
	
if($_POST['submit'])
echo "1111";
{
$Order_id = trim($_POST['Order_id']);
$client_id = trim($_POST['client_id']);
$client_name = trim($_POST['client_name']);
$product_id= trim($_POST['product_id']);
$product_name = trim($_POST['product_name']);
$order_date = trim($_POST['order_date']);
$amount = trim($_POST['amount']);
$dw = trim($_POST['dw']);
$price = trim($_POST['price']);
$zt = trim($_POST['zt']);
$con = mysql_connect('localhost','root','1111');
mysql_select_db('wuliu',$con);

mysql_query("SET NAMES 'utf8'",$con);
$sql = "insert into ddgl(Order_id,client_id,client_name,product_id,product_name,order_date,amount,dw,price,zt)
values('$Order_id','$client_id','$client_name','$product_id','$product_name','$order_date','$amount','$dw','$price','$zt')";
mysql_query($sql,$con);

echo mysql_error();
echo'<script type="text/javascript">alert("提交成功")</script>';
}
?>

