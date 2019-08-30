window.onload = function() {
	//点击登录和创建账户 实现页面切换 
	var login = document.querySelector(".login");
	var register = document.querySelector(".register");
	var denglu = document.querySelector(".denglu");
	var zhece = document.querySelector(".box1");
	var email = document.getElementById("email");
	var psw = document.getElementById("password");
	var email1 = document.getElementById("email1");
	var psw1 = document.getElementById("password1");
	var emWarning = document.getElementsByClassName("emailWarning");
	var pswWarning = document.getElementsByClassName("passwordWarning");
	
	//鼠标点击登录时 颜色显示为蓝色  页面显示  注册页面隐藏
	login.onclick = function() {
		this.style.color = "skyblue";
		denglu.style.display = "block";
		zhece.style.display = "none";
		register.style.color = "";
		 psw.value = "";
		email.value = "";
		emWarning[0].innerHTML = "";
		pswWarning[0].innerHTML = ""; 
		
	}
	//鼠标点击注册时 颜色显示为蓝色  页面显示  登录页面隐藏
	register.onclick = function() {
		this.style.color = "skyblue";
		denglu.style.display = "none";
		zhece.style.display = "block";
		login.style.color = "";
		psw1.value = "";
		email1.value = "";
		emWarning[1].innerHTML = "";
		pswWarning[1].innerHTML = ""; 
		
	}

	//先求邮箱和密码的正则
	var regEmail = /^[a-zA-Z\d]{3,12}@[a-zA-Z\d]+\.c(om|n)$/;
	var regPas = /^[a-zA-Z\d]{8,25}$/;

	//获取页面元素
	var email = document.getElementById("email");
	var psw = document.getElementById("password");
	var email1 = document.getElementById("email1");
	var psw1 = document.getElementById("password1");
	var emWarning = document.getElementsByClassName("emailWarning");
	var pswWarning = document.getElementsByClassName("passwordWarning");
	var log = document.getElementById("log");
	var create = document.getElementById("create");
	var pswFlag, emailFlag, psw_1Flag, email_1Flag;
	//登录界面判断验证通过
	email.onchange = function() {

		if (regEmail.test(email.value)) {
			emWarning[0].innerHTML = "验证通过";
			emWarning[0].style.color = "green";

			emailFlag = true;

		} else {
			emWarning[0].innerHTML = "邮箱不符合要求";
			emWarning[0].style.color = "red";

			emailFlag = false;
		}
	}

	psw.onchange = function() {
		if (regPas.test(psw.value)) {
			pswWarning[0].innerHTML = "验证通过";
			pswWarning[0].style.color = "green";

			pswFlag = true;

		} else {
			pswWarning[0].innerHTML = "密码必须是 8-25 个字符，且包含字母或数字";
			pswWarning[0].style.color = "red";

			pswFlag = false;
		}
	}
	//注册界面判断验证通过
	email1.onchange = function() {

		if (regEmail.test(email1.value)) {

			emWarning[1].innerHTML = "验证通过";
			emWarning[1].style.color = "green";
			email_1Flag = true;

		} else {

			emWarning[1].innerHTML = "邮箱不符合要求";
			emWarning[1].style.color = "red";
			email_1Flag = false;
		}
	}

	psw1.onchange = function() {
		if (regPas.test(psw1.value)) {

			pswWarning[1].innerHTML = "验证通过";
			pswWarning[1].style.color = "green";
			psw_1Flag = true;

		} else {
			pswWarning[1].innerHTML = "密码必须是 8-25 个字符，且包含字母或数字";
			pswWarning[1].style.color = "red";
			psw_1Flag = false;
		}
	}
	//绑定登录和注册事件 发送ajax
	log.onclick = function() {
		/* console.log(1); */
		var pawContent = psw.value;
		var emailContent = email.value;
		var cookieId = hex_hmac_md5(emailContent, pawContent);
		if (!pawContent || !emailContent) {
			alert('邮箱地址和密码不能为空');
			return;
		} else if (pswFlag && emailFlag) {
			var xhr = new XMLHttpRequest();
			xhr.open('post', 'php/login.php');
			xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
			xhr.send("username=" + emailContent + "&password=" + pawContent + "&cookieId=" + cookieId);
			xhr.onreadystatechange = function() {
				if (xhr.status == 200 && xhr.readyState == 4) {
					
					if (xhr.response == 0) {//
						alert(xhr.response.innerHTML = "该账户未注册,请先创建账户");
						
						
					} else{
						console.log(xhr.response);
						var exp = new Date();
						exp.setMonth(exp.getMonth() + 1);
						document.cookie = "cookieId=" + xhr.response + ";expires="+ exp.toGMTString();;
						 location.href = "./index.html";
						//alert(xhr.response.innerHTML="登录成功");
					}
					}
				}
			}
		}

	

	create.onclick = function() {
		/* console.log(1); */
		var paw1Content = psw1.value;
		var email1Content = email1.value;
		var tickContent = document.getElementById("tick").checked;
		var cookieId = hex_hmac_md5(email1Content, paw1Content);
		if(!paw1Content||!email1Content || !tickContent){
			alert('邮箱地址 密码 勾选不能为空'); 
			return;
			}
		else if (psw_1Flag && email_1Flag && tickContent) {
			var xhr = new XMLHttpRequest();
			xhr.open('post', 'php/register.php');
			xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
			xhr.send("username=" + email1Content + "&password=" + paw1Content + "&cookieId=" + cookieId);
			xhr.onreadystatechange = function() {
				if (xhr.status == 200 && xhr.readyState == 4) {

					if (xhr.response == 1) {
						alert(xhr.response.innerHTML = "注册成功");

					} else {
						alert(xhr.response.innerHTML = "注册失败");
					}

				}
			}
		}

	}
}
