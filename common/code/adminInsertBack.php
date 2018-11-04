<?php
header("content-type:text/html;charset=utf-8");
    
    
   function insertBack(){
        include("conn.php");
        $id = $_POST["id"];
        include("conn.php");
        $sql1 = "select stu_id from address";
        $result1 = mysqli_query($conn,$sql1);
        $sql = "INSERT into school_back(stu_id) values('$id')";
        while($rows=mysqli_fetch_assoc($result1)) {
        if($rows["stu_id"]!=$id){
            $code = -1;
        }else if(!$result=mysqli_query($conn,$sql)){
            $code = 1;//添加失败
        }else {
            $code = 0;//添加成功
        } 

        }
        $data = array("code"=>$code);
        $json=json_encode($data);
        echo $json;
   }
   insertBack();
    
?>