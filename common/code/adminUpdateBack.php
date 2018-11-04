<?php
header("content-type:text/html;charset=utf-8");

   
   function updateBack(){
    include("conn.php");
   
    $data = $_POST["data"];
     $sql = "UPDATE school_back set back='".$data['3']."',back_time='".$data['4']."' where stu_id ='".$data['0']."'";
 
   if(!$result=mysqli_query($conn,$sql)){
        $code = 1;//添加失败
    }else {
        $code = 0;//成功
    } 
    $data = array("code"=>$code);
    $json=json_encode($data);
    echo $json;
   }
    updateBack();
?>