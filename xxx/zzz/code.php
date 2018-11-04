<?php
	require "Captcha.php";
	$captcha = new Captcha();
	$captcha->generate(70,22,5);
?>