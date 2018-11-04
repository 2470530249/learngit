<?php
header("content-type:text/html;charset=utf-8");
    function resign(){
        $data =$_POST['json'];
        $code="";
        include("conn.php");
        $sql = "INSERT INTO resign(stu_id,stu_name,stu_sex,times,text) VALUES('".$data['stu_id']."','".$data['stu_name']."','".$data['sex']."','".$data['title']."','".$data['desc']."')";//插入数据mysql语句
        $result=mysqli_query($conn,$sql);
        if(!$result){
            $code =1;
        }else {
            $code = 0;
        }
        $status = array("code"=>$code);
        $json = json_encode($status);
        echo $json;
    }
    if ($_SERVER['REQUEST_METHOD']==='POST') {	
        resign();
        return;
      }
  
    
?>