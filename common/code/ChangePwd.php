<?php
header("content-type:text/html;charset=utf-8");
    function ChangePwd(){
        $pwd = $_POST["pwd"];
        $repwd = $_POST["repwd"];
        $repwd1 = $_POST["repwd1"];
        
        include("conn.php");
        $sql = "SELECT password from users where stu_id='".$_COOKIE['stu_id']."'";
        $sql1 = "UPDATE users set password='$repwd' where stu_id='".$_COOKIE['stu_id']."'";
        $result = mysqli_query($conn,$sql);
        $rows=mysqli_fetch_assoc($result);//检查原始密码是否一致
        if (!$result) {
            printf("Error: %s\n", mysqli_error($conn));
            exit();
           }
          if($pwd==""||$repwd==""||$repwd1==""){
              $code = 2;//不能为空
           }else if($pwd!=$rows['password']){
                  $code = 3;//原始密码不正确
          }else if($repwd!=$repwd1){
              $code = 1;//密码不一致
          }else if($repwd==$rows['password']){
                $code =4;//原始密码与新密码相同
          }else if(!$result1=mysqli_query($conn,$sql1)){
              $code = -1;//失败
          }else {
              $code= 0;//成功
          }
       $data=array("code"=>$code);
        $res = json_encode($data);
        echo $res;
    };
    if ($_SERVER['REQUEST_METHOD']==='POST') {	
        ChangePwd();
        return;
      }
?>