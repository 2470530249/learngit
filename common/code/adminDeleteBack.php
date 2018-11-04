<?php
header("content-type:text/html;charset=utf-8");
    
    function deleteBack(){
        include("conn.php");
        $id = $_POST["id"];
        include("conn.php");
        $sql = "DELETE FROM school_back where stu_id = '".$id."'";
        if(!$result=mysqli_query($conn,$sql)){
        $code = 1;//删除失败
        }else {
        $code = 0;//删除成功
        } 
        $data = array("code"=>$code);
        $json=json_encode($data);
        echo $json;
    }
    deleteBack();
?>