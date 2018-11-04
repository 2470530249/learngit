<html>
<!DOCTYPE html>
<html lang="en" class="no-js">

    <head>

        <meta charset="utf-8">
        <title>登录(Login)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <!-- CSS -->
        <link rel="stylesheet" href="assets/css/reset.css">
        <link rel="stylesheet" href="assets/css/supersized.css">
        <link rel="stylesheet" href="assets/css/style.css">
    </head>

    <body>
        <div class="page-container">
            <h1>登录(Login)</h1>
            <form action="login.php" method="post">
                <input type="text" name="username" class="username" placeholder="请输入您的用户名！">
                <input type="password" name="password" class="password" placeholder="请输入您的用户密码！">
                <input type="text" class="Captcha" name="captcha" placeholder="请输入验证码！">
				<img src="code.php" id="code_img">
				<a href="#" id="change">换一张</a>
				
				<button type="submit" class="submit_button">登录</button>
                <div class="error"><span>+</span></div>
            </form>
			<button type="register" class="register_button" onclick=window.open('register.html')>注册</button>
            <div class="connect">
                
            </div>
        </div>
		
        <!-- Javascript -->
        <script src="assets/js/jquery-1.8.2.min.js" ></script>
        <script src="assets/js/supersized.3.2.7.min.js" ></script>
        <script src="assets/js/supersized-init.js" ></script>
        <script src="assets/js/scripts.js" ></script>
	<script>
		var change = document.getElementById("change");
		var img = document.getElementById("code_img");
		change.onclick = function(){
			img.src="code.php?t="+new Date();
			return false;
		}
	</script>
    </body>
<div>
</div>
</html>

