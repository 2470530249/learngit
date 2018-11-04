<?php
$conn = mysql_connect("localhost","root","1111") or die("数据库连接错误".mysql_error());  
 mysql_select_db("wuliu",$conn) or die("数据库访问错误".mysql_error()); 
 mysql_query("set names utf8");  
?>