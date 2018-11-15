<?php
header("content-type:text/html;charset=utf-8");
 function admin_login(){
        $user = htmlspecialchars($_POST['username']);  //用户名
        $pwd = $_POST['password']; //密码
        $code = "";//状态码
        //判断用户名密码是否为空
        include("conn.php");
        // //把数据放到暂存区
        $sql = "select user,password from admin where user='$user'";
        $result=mysqli_query($conn,$sql);
        // //取暂存的数据
        if (!$result) {
          printf("Error: %s\n", mysqli_error($conn));
          exit();
         }
        $rows=mysqli_fetch_assoc($result);//返回一个数组
        if($rows['user']!=$user){
          $code =1;//账号不存在
        }else if($rows['password']!=$pwd){
          $code = 2;//密码不正确
        }else {
         
          $code = 0;//登陆成功
        }

        $rows["code"]=$code;
        unset($rows['password']);
        $json = json_encode($rows);
        echo $json;
        }
          if ($_SERVER['REQUEST_METHOD']==='POST') {	
            admin_login();
          }
      
       
      
    
    
?>