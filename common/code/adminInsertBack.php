<?php
header("content-type:text/html;charset=utf-8");
    
    
   function insertBack(){
        include("conn.php");
        $stuId = $_GET["id"];
        // var_dump($stuId);
        include("conn.php");
        $sql1 = "select stu_id from stu_info where stu_id='{$stuId}'";
        $result1 = mysqli_query($conn,$sql1);
        $rows=mysqli_fetch_assoc($result1);
        $sql = "INSERT INTO school_back(stu_id) values('$stuId')";
        if($rows['stu_id']!=$stuId){
                $code = -1;
            }else if(!$result = mysqli_query($conn,$sql)){
                $code = 1;
            }else {
                $code = 0;
            }
            $data = array('code'=>$code);
        $json=json_encode($data);
        echo $json;
   }
   insertBack();
    
?>