<?php  
		
	header("charset=utf-8");
    session_start();  
    require_once('conn.php');//连接数据库  
   $username=$_POST['username'];  
   $password=$_POST['password'];  
   $captcha=$_POST['captcha'];     
    $sql = "select * from users where username='$username' and password='$password'";  
     $rst=mysql_query($sql);  
    $row=mysql_fetch_assoc($rst);  
	
    if(($_SESSION['captcha_code'])!=($captcha )){  
          echo "<script>alert('验证码错误！重新填写');window.location.href='index.php'</script>";  
      //判断验证码是否填写正确   
	  
    }elseif($row) {    
          setcookie('username',$username);    
               echo "<script>alert('登陆成功！欢迎');window.location.href='shouye/index.html'</script>";  
       }else{  
           echo "<script>alert('登陆信息有误！重新填写');window.location.href='index.php'</script>";   
     
       }  
        
?>  