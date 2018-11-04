<?php
header("content-type:text/html;charset=utf-8");
 function check_register(){
        $stu_id=$_POST['stu_id'];//学号
        $user = $_POST['username'];  //用户名
        $pwd = $_POST['password']; //密码
        $pwd1 = $_POST['password1']; //重复密码
        $sex = $_POST['sex'];
        $code = "";//状态码
        $data = [];
        include("conn.php");
        //  
        if($sex==0){
            $sex = "男";
        }
        if($sex==1){
            $sex = "女";
        }
        $sql1 = "select stu_id from users where stu_id='$stu_id'";
        $sql = "INSERT INTO users(stu_id,password,stu_name,sex) VALUES('$stu_id','$pwd','$user','$sex')";//插入数据mysql语句
        $result1=mysqli_query($conn,$sql1);//账号密码
        // $result=mysqli_query($conn,$sql);//
        if (!$result1) {
          printf("Error: %s\n", mysqli_error($conn));
          exit();
         }
        $rows=mysqli_fetch_assoc($result1);//返回一个数组
        if($user==""||$pwd==""||$pwd1==""||$stu_id==""){
            $code = 2;//不能为空
         }else if($stu_id==$rows['stu_id']){
                $code = 3;//账号已存在
        }else if($pwd!=$pwd1){
            $code = 1;//密码不一致
        }else if(!$result=mysqli_query($conn,$sql)){
            $code = -1;//失败
        }else {
            $code= 0;//成功
        }
        $data["code"]=$code;
        $json = json_encode($data);
        echo $json; 
          }
          if ($_SERVER['REQUEST_METHOD']==='POST') {	
            check_register();
            return;
          }
  
?>