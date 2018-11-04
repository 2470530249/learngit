<?php
header("content-type:text/html;charset=utf-8");
 function check_login(){
        $user = htmlspecialchars($_POST['username']);  //用户名
        $pwd = $_POST['password']; //密码
        $code = "";//状态码
        include("conn.php");//引入连接数据库文件
        $sql = "select stu_id,password,stu_name,sex from users where stu_id='$user'";

        $result=mysqli_query($conn,$sql);
        if (!$result) {
        printf("Error: %s\n", mysqli_error($conn));
        exit();
        }
        $rows=mysqli_fetch_assoc($result);//返回一个数组
        if($user==""||$pwd==""){
        $code = 3;
        }else if($rows['stu_id']!=$user){
        $code =1;//账号不存在
        }else if($rows['password']!=$pwd){
        $code = 2;//密码不正确
        }else{
        $code = 0;//登陆成功
        }
        $rows["code"]=$code;
        unset($rows['password']);//返回的json数据中删除password这一项
        $json = json_encode($rows);
        echo $json;
        }
        if ($_SERVER['REQUEST_METHOD']==='POST') {	
        check_login();
        return;
        }
?>