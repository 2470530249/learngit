<?php
        //数据库连接
    $conn = mysqli_connect("localhost","root","1111","sushe");//地址  数据库账号  密码   dbname
    if(!$conn) {
        die('Could not: ' . mysql_error());
    }
?>