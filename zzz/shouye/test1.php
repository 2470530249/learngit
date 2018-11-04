<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
			
table{  
            border-collapse: collapse;
width:900px;
margin:30px auto;	
        }  
        th,td{  
            border:1px solid #ccccff;  
            padding: 5px;  
        }  
        td{  
            text-align: center;  
        }

			#top_bottom1{
				text-align:center;
			}
		</style>
	</head>
		<link rel="stylesheet" href="../assets/css/shouye.css" />
	<body>
		<div class="page-container">
			<div class="head">
				<span>物流管理系统</span>
				<a href="logout.php" style="color:#F09;" id="zx">注销</a>
			</div>
			<div class="left">
				<ul class="nav">
					<li><a href="khgl.html">客户管理</a></li>
					<li><a href="clgl.html">车辆管理</a></li>
					<li><a href="cpgl.html">产品管理</a></li>
					<li><a href="ddgl.html">订单管理</a></li>
					<li><a href="fhd.html">发货单管理</a></li>
					<li><a href="hzd.html">回执单管理</a></li>
				</ul>
			
			</div>
			<div class="container_top">
				<div class="top_top">
			<label style="font-size:30px">查询发货单数据:</label>
			<a href="test1.php" style="font-size:30px">查询</a>
			<div class="top_bottom1">
<table id="table1">  
    <tr><th>id</th><th>产品编号</th><th>产品名称</th><th>数量</th><th>单价</th><th>车牌号</th><th>客户名称</th><th>修改/删除</th></tr>  
<?php  
	error_reporting(0);
//连接数据库  
include('../conn.php');  
//查询数据表中的所有数据,并按照id降序排列  
$result=mysql_query("SELECT * FROM fahuodan ORDER BY yd_id DESC");  
//获取数据表的数据条数  
$dataCount=mysql_num_rows($result);  
//echo $dataCount;  
//打印输出所有数据  
  
  
for($i=0;$i<$dataCount;$i++){  
    $result_arr=mysql_fetch_assoc($result);  
    $id=$result_arr['yd_id'];  
    $product_id=$result_arr['product_id'];  
    $product_name=$result_arr['product_name'];
		$amount = $result_arr['amount'];
		$price = $result_arr['price'];
		$car_id = $result_arr['car_id'];
		$client_name = $result_arr['client_name'];
    //print_r($result_arr);  
    echo "<tr><td>$id</td><td>$product_id</td><td>$product_name</td><td>$amount</td><td>$price</td><td>$car_id</td><td>$client_name</td><td><a href='xiugai.php?id=$id' style='color:red'>修改</a> <a href='delete.php?id=$id' style='color:red'>删除</a></td></tr>";  
}  
?>  
</table>
	</div>
				</div>
			</div>
		</div>
</body>
</html>