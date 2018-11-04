<?php
header("content-type:text/html;charset=utf-8");
function updateStatus(){
    include("conn.php");
    $state = $_POST['state'];//状态码
    $id = $_POST['id'];//id
    $sql = "UPDATE resign set code ='$state' where resign_id='$id'";
    if(!$result=mysqli_query($conn,$sql)){
        $code = 1;//失败
    }else {
        $code = 0;//成功
    }
    $data = array("code"=>$code);
    $json= json_encode($data);
    echo $json;
}
updateStatus();
?>