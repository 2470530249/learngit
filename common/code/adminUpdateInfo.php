<?php
header("content-type:text/html;charset=utf-8");
    function updateInfo(){
        include("conn.php");
        $sql1 = "select * from stu_info";
        $arr = $_POST["arr"];
        include("conn.php");
        $sql = "UPDATE stu_info set stu_name='".$arr['2']."',
        stu_sex='".$arr['3']."',stu_age='".$arr['4']."',
        Political_face='".$arr['5']."',professional='".$arr['6']."' where stu_id='".$arr['1']."'";
        $result1 = mysqli_query($conn,$sql1);

        $rows = mysqli_fetch_assoc($result1);
        if($arr[2]==$rows['stu_name']&&$arr[3]==$rows['stu_sex']&&
        $arr[4]==$rows['stu_age']&&$arr[5]==$rows['Political_face']&&
        $arr[6]==$rows['professional']){
            $code = -1;//内容不能一致
        }else if(!$result=mysqli_query($conn,$sql)){
            $code = 1;//添加失败
        }else {
            $code = 0;//成功
        } 
        $data = array("code"=>$code);
        $json=json_encode($data);
        echo $json;
    }
        
       updateInfo();
    
?>