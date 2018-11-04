<?php
header("content-type:text/html;charset=utf-8");
     function stuInfo(){
        $id = $_POST["id"];
        $age = $_POST["age"];
        $name = $_POST["name"];
        $sex = $_POST["sex"];
        $hobby = $_POST["hobby"];
        $face = $_POST["face"];
        $place = $_POST["place"];
        $pres = $_POST["pres"];
    
        include("conn.php");
        $sql2 = "select stu_id from stu_info where stu_id='$id'";
        $result2 = mysqli_query($conn,$sql2); 
        $rows = mysqli_fetch_assoc($result2);
        $sql1 = "INSERT INTO stu_info values('$id','$name','$sex','$age','$hobby','$face','$place','$pres')";
        if($id==""||$age==""||$name=""||$sex==""||$hobby==""||$face==""||$place==""||$pres==""){
            $code = 2;//不能为空
         }else if($id==$rows['stu_id']){
            $code = 1;//id不能重复
        }else if(!$result1=mysqli_query($conn,$sql1)){
            $code = -1;
         }else {
             $code = 0;
         }
         
        $data=array("code"=>$code);
        $res = json_encode($data);
        echo $res;
     };
        function addId(){
            $id = $_POST["id"];
            include("conn.php");
            $sql = "INSERT INTO address(stu_id) values('$id')";
            $result = mysqli_query($conn,$sql);
        };
     stuInfo();

     if(stuInfo){
         addId();
     }
?>