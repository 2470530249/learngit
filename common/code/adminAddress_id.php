<?php
function addId(){
    if(empty($_GET[id])){
        exit("缺少必要参数");
        return;
    }
            $stuId = $_GET["id"];
            include("conn.php");
            $sql = "INSERT INTO address(stu_id) values('$stuId')";
            $sql1 = "select stu_id from stu_info where stu_id='$stuId'";
            $result1 = mysqli_query($conn,$sql1); 
            $rows = mysqli_fetch_assoc($result1);
            if($rows['stu_id']!=$stuId){
                    $code = -1;
            }else if(!$result = mysqli_query($conn,$sql)){
                $code = 1;
            }else {
                $code = 0;
            }
            echo json_encode(array("code"=>$code));
    };
    addId();
?>