<?php
		if(!isset($_POST['submit'])){  
    exit('非法访问!');  
}  
$username = $_POST['username'];  
$password = $_POST['password'];  
//注册信息判断  
if(!preg_match('/^[\w\x80-\xff]{3,15}$/', $username)){  
    exit('错误：用户名不符合规定。<a href="javascript:history.back(-1);">返回</a>');  
}  
if(strlen($password) < 4){  
    exit('错误：密码长度不符合规定。<a href="javascript:history.back(-1);">返回</a>');  
}
//包含数据库连接文件  
include('conn.php');  
//检测用户名是否已经存在  
$check_query = mysql_query("select uid from users where username='$username' limit 1");  
if(mysql_fetch_array($check_query)){  
    echo '错误：用户名 ',$username,' 已存在。<a href="javascript:history.back(-1);">返回</a>';  
    exit;  
}  
$regdate = time();  
$sql = "INSERT INTO users(username,password,regdate) VALUES ('$username','$password','$regdate')";  
if(mysql_query($sql,$conn)){  
    exit('用户注册成功！点击此处 <a href="login.php">登录</a>');  
} else {  
    echo '抱歉！添加数据失败：',mysql_error(),'<br />';  
    echo '点击此处 <a href="javascript:history.back(-1);">返回</a> 重试';  
} 
?>