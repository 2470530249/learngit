
<?php  
error_reporting(0);
require_once '../conn.php';?>  
<!DOCTYPE html>  
<html>  
<head>  
    <meta charset="UTF-8">  
    <title>修改用户数据</title>  
</head>  
	<style>
	#form2{
		width:800px;
		height:300px;
		border:1px solid red;
	margin: 30px auto;
	}
	*{
		margin:0;
		padding:0;
	}
	#form2 label{
	color:green;
		font-size:20px;
	}
		
	#form2 input{
		margin-top:15px;
	}
	#btn{
		width:100px;
		height:35px;
		color:red;
		margin:30px auto;
		
	}
	#ss{
		width:600px;
		height:180px;
		margin:auto;
		margin-top:50px;
	}
	</style>
<body>  
<?php  
    if(!empty($_GET['id'])){  
        //连接mysql数据库  
        include('../conn.php');
  
  
        //查找id  
        $id=intval($_GET['yd_id']);  
        $result=mysql_query("SELECT * FROM fahuodan WHERE yd_id=$id");  
        if(mysql_error()){  
            die('can not connect db');  
        }  
        //获取结果数组  
        $result_arr=mysql_fetch_assoc($result);  
    }else{  
        die('id not define');  
    }  
?>  
<form action="xiugai_server.php" method="post" id="form2"> 
<center color="gray">id不可更改<center>
<div id="ss"> 
				
    <label>i&#12288;&#12288;&#12288;&#12288;d:</label><input type="text" name="yd_id" value="<?php echo $result_arr['yd_id']?>">  
    <label>产品&#12288;编号:</label><input type="text" name="product_id" value="<?php echo $result_arr['product_id']?>"> <br /> 
    <label>产品&#12288;名称:</label><input type="text" name="product_name" value="<?php echo $result_arr['product_name']?>"> 
 <label>数&#12288;&#12288;&#12288;量:</label><input type="text" name="amount" value="<?php echo $result_arr['amount']?>"> <br /> 
 <label>单&#12288;&#12288;&#12288;价:</label><input type="text" name="price" value="<?php echo $result_arr['price']?>"> 
 <label>车&#12288;牌&#12288;号:</label><input type="text" name="car_id" value="<?php echo $result_arr['car_id']?>"> <br /> 
 <label>客户&#12288;名称:</label><input type="text" name="client_name" value="<?php echo $result_arr['client_name']?>"> <br />  
	</div>
   <input type="submit" value="提交修改" id="btn">  
</form>  
</body>  
</html>  