<?php
header("content-type:text/html;charset=utf-8");
     function update(){
        $id = $_POST["id"];
        $age = $_POST["age"];
        $name = $_POST["name"];
        $sex = $_POST["sex"];
        $hobby = $_POST["hobby"];
        $face = $_POST["face"];
        $place = $_POST["place"];
        $pres = $_POST["pres"];
        
        include("conn.php");
        
        $sql1 = "INSERT INTO stu_info values('$id','$name','$sex','$age','$hobby','$face','$place','$pres')";
        if($id==""||$age==""||$hobby==""||$face==""||$place==""||$pres==""){
            $code = 2;//不能为空
            }else if(!$result1=mysqli_query($conn,$sql1)){
            $code = -1;//更新失败
            }else {
                $code = 0;
            }
            if($code==-1){
               $sql = "UPDATE stu_info set stu_name='$name',
        stu_sex='$sex',stu_age='$age',stu_hobby='$hobby',
        Political_face='$face',Native_place='$place',professional='$pres' where stu_id='$id'";
        
                if($result5 = mysqli_query($conn,$sql)){
                    $code = 0;
                }
            }
        
        $data=array("code"=>$code,
        "age"=>$rows['stu_age'],
        "hobby"=>$rows['stu_hobby'],
        "face"=>$rows['Political_face'],
        "place"=>$rows['Native_place'],
        "profess"=>$rows['professional'],
    );
        $res = json_encode($data);
        echo $res;
     }
     update();
?>