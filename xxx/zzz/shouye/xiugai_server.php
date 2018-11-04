<?php  
require_once '../conn.php';  
if(empty($_POST['yd_id'])){  
    die('id is empty');  
}  

if(empty($_POST['product_id'])){  
    die('product_id is empty');  
}  
if(empty($_POST['product_name'])){  
    die('product_name is empty');  
} 
if(empty($_POST['amount'])){  
    die('amount is empty');  
}
if(empty($_POST['price'])){  
    die('price is empty');  
}
if(empty($_POST['car_id'])){  
    die('car_id is empty');  
}
if(empty($_POST['client_name'])){  
    die('client_name is empty');  
} 
  
 
$yd_id=$_POST['yd_id'];  
$product_id=$_POST['product_id'];  
$product_name=$_POST['product_name'];  
$amount=$_POST['amount']; 
$price=$_POST['price']; 
$car_id=$_POST['car_id']; 
$client_name=$_POST['client_name']; 
  
  
//连接数据库  
include('../conn.php');
  
  
//修改指定数据  
mysql_query("UPDATE fahuodan SET product_id='$product_id',product_name='$product_name',amount='$amount',price='$price',car_id='$car_id',client_name='$client_name' WHERE yd_id='$yd_id'");  
  
  echo mysql_error();
//排错并返回  
if(mysql_error()){  
    echo mysql_error();  
}else{  
    header("Location:test1.php");  
}  