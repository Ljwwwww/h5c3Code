//邮箱方法
function lbw(){
	var email = prompt("输入邮箱:");
	if ("" != email) {
		duan(email);
	}else{
		alert("邮箱不能为空!");
	}
}

//判断输入邮箱是否有@和.
function duan(email){
	if(email.indexOf("@") != -1 && email.indexOf(".") != -1){
		var sb = email.indexOf("@");
		var nm = email.substring(0,sb);
		alert("邮箱地址真确,邮箱名称:"+nm);
		close();
	}else{
		alert("邮箱地址必须包含@和.");
	}
}
