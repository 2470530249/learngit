<?php
header("content-type:text/html;charset=utf-8");

   
        function updateHotel(){
            include("conn.php");//引入连接数据库文件
            $arr = $_POST["arr"];
            include("conn.php");
            $sql = "UPDATE address set address='".$arr['7']."' where stu_id ='".$arr['4']."'";
            if(!$result=mysqli_query($conn,$sql)){
            $code = 1;//添加失败
            }else {
            $code = 0;//成功
            } 
            $data = array("code"=>$code);
            $json=json_encode($data);
            echo $json;
        }
        updateHotel();
       
    
?>