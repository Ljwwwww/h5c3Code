function close_bi(){
	var a = confirm("是否关闭");
	if(a){
		window.close();
	}
}
/*-购物车全选-*/
function close_xuan(){
	if(document.getElementById("ck").checked){
		document.getElementById("shop1").checked = true;
		document.getElementById("shop2").checked = true;
		document.getElementById("ckxuan").checked = true;
		acquire_amount();
	}else{
		document.getElementById("shop1").checked = false;
		document.getElementById("shop2").checked = false;
		acquire_amount();
	}
}
function close_xuan1(){
	if(document.getElementById("ckxuan").checked){
		document.getElementById("shop1").checked = true;
		document.getElementById("shop2").checked = true;
		document.getElementById("ck").checked = true;
		acquire_amount();
	}else{
		document.getElementById("shop1").checked = false;
		document.getElementById("shop2").checked = false;
		acquire_amount();
	}
}
/*-购物车选中判断是否全选-*/
function close_span(){
	var dan = false,dan1 = false;
	
	if(document.getElementById("shop1").checked){
		dan = true;
	}
	if(document.getElementById("shop2").checked){
		dan1 = true;
	}
	if(dan && dan1){
		document.getElementById("ck").checked = true;
		document.getElementById("ckxuan").checked = true;
		acquire_amount();
	}else{
		document.getElementById("ck").checked = false;
		document.getElementById("ckxuan").checked = false;
		acquire_amount();
	}
	/*if(document.getElementById("shop1").checked && document.getElementById("shop2").checked){
		document.getElementById("ck").checked = true;
		document.getElementById("ckxuan").checked = true;
		acquire_amount();
	}else{
		document.getElementById("ck").checked = false;
		document.getElementById("ckxuan").checked = false;
		acquire_amount();
	}*/
}
/*-购物车 减数量-*/
function amount_minus(num){
	var id = num.id;//获取选中按钮的id
	if (id == "values_num") {
		if(num.value != 0){
			num.value--;
			count_one(num.value);
		}
	}
	if (id == "values_num1") {
		if(num.value != 0){
			num.value--;
			count_two(num.value);
		}
	}

	if(num.value == 0){
		var a = confirm("确认删除!");
		if(a){
			alert('不能减了!');
			acquire_amount();
			
		}else{
			document.getElementById("values_num").value++;
			count_one(document.getElementById("values_num").value);
			document.getElementById("shop").checked = false;
			acquire_amount();
		}
	}
}

function amount_minus1(){
	
	if(document.getElementById("values_num1").value == 0){
		var a = confirm("确认删除!");
		if(a){
			alert('不能减了!');
			acquire_amount();
		}else{
			document.getElementById("values_num1").value++;
			document.getElementById("shop").checked = false;
			count_two(document.getElementById("values_num1").value);
			acquire_amount();
		}
	}
}

/*-购物车数量增加按钮-*/
function amount_add(num){
	var id = num.id;//获取选中按钮的id
	num.value++;
	if(id == "values_num"){
		count_one(document.getElementById("values_num").value);
	}
	if(id == "values_num1"){
		count_two(document.getElementById("values_num1").value);
	}
}


/*-点击数量加减选中-*/
function pitchon(){
	if(document.getElementById("values_num").value != 0){
		document.getElementById("shop1").checked = true;
	}
}
function pitchon1(){
	if(document.getElementById("values_num1").value != 0){
		document.getElementById("shop1").checked = true;
	}
}
function pitchon2(){
	if(document.getElementById("values_num1").value != 0){
		document.getElementById("shop2").checked = true;
	}
}
function pitchon3(){
	if(document.getElementById("values_num1").value != 0){
		document.getElementById("shop2").checked = true;
	}
}



/*-根据数量获得书的价格-*/
function count_one(amount){
	var num = 38.0 * amount;
	//.toFixed(2) 保留数据小数点后两位
	document.getElementById("money").innerText = "￥"+num.toFixed(2);
}
function count_two(amount){
	var num = 28.0 * amount;
	//.toFixed(2) 保留数据小数点后两位
	document.getElementById("money1").innerText = "￥"+num.toFixed(2);
}
/*-删除收藏-*/
function remove(){
	//删除与增加一样，同样要找到父级标签
	var ele=document.getElementById("book");
	//根据父级标签删除父级标签及父级标签下的子标签
	ele.parentNode.removeChild(ele);
}
function remove1(){
	//删除与增加一样，同样要找到父级标签
	var ele=document.getElementById("book1");
	//根据父级标签删除父级标签及父级标签下的子标签
    ele.parentNode.removeChild(ele);	
}

function remove_one(){
	var a = confirm("确认删除");
	if(a){
		remove();
	}
}
function remove_two(){
	var a = confirm("确认删除");
	if(a){
		remove1();
	}
}
/*-判断全选按钮-*/
function check_all(){
	if(document.getElementById("ckxuan").checked == false){
		document.getElementById("shop1").checked = false;
		document.getElementById("shop2").checked = false;
		document.getElementById("ck").checked = false;
		acquire_amount();
	}
}
function check_all1(){
	if(document.getElementById("ck").checked == false){
		document.getElementById("shop1").checked = false;
		document.getElementById("shop2").checked = false;
		document.getElementById("ckxuan").checked = false;
		acquire_amount();
	}
}
/*-获取选中物品数量和总价-*/
function acquire_amount(){
	//计数器   计数选中几个商品
	var num = 0;
	//计数 商品总价
	var prices = 0;
	if(document.getElementById("shop1").checked){
		num = eval(num+"+"+document.getElementById("values_num").value);
		var name = document.getElementById("money").innerText;
		var name1 = name.substring(1);
		prices = eval(prices+"+"+parseInt(name1).toFixed(2));
	}
	if(document.getElementById("shop2").checked){
		num = eval(num+"+"+document.getElementById("values_num1").value);
		var name = document.getElementById("money1").innerText;
		var name1 = name.substring(1);
		prices = eval(prices+"+"+parseInt(name1).toFixed(2));
	}
	document.getElementById("amount").innerText=num;
	document.getElementById("price").innerText = "￥"+prices.toFixed(2);
	num = 0;
	prices = 0;
}
/*-结算-*/
function settle_accounts(){
	var name,name1;
	var id = document.getElementById("amount").innerText;
	var num = document.getElementById("price").innerText;
	//判断选中数
	if(document.getElementById("shop1").checked){
		name = "围城";
	}
	if(document.getElementById("shop2").checked){
		name1 = "三体";
	}
	
	//根据不同选择输出不同结果
	if(name != undefined && name1 != undefined){
		var duan = confirm("商品名称:"+name+","+name1+"\n商品数量:"+id+"\n商品总计:"+num+"\n\n请确认以上信息是否有误!!!");
		submit_order(duan);
	}else if(name != undefined){
		var duan = confirm("商品名称:"+name+"\n商品数量:"+id+"\n商品总计:"+num+"\n\n请确认以上信息是否有误!!!");
		submit_order(duan);
	}else if(name1 != undefined){
		var duan = confirm("商品名称:"+name1+",\n商品数量:"+id+"\n商品总计:"+num+"\n\n请确认以上信息是否有误!!!");
		submit_order(duan);
	}
}

/*-提交订单-*/
function submit_order(duan){
	if(duan){
		alert("订单提交成功!!");
	}
}
/*--批量删除*/
function delete_batch(){
	var a = confirm("确认删除!");
	if(a){
		//调用删除函数
		remove();
		remove1();
	}
}
/*-将放大图片赢藏-*/
window.onload = function(){
    document.getElementById("wei").style.display="none";
    document.getElementById("san").style.display="none";
}
/*-鼠标放在图片放大图片显示-*/
function dian(){
	document.getElementById("wei").style.display="block";
}
function dian1(){
	document.getElementById("san").style.display="block";
}
/*-鼠标离开图片隐藏起来-*/
function dian_li(){
	document.getElementById("wei").style.display="none";
}
function dian_li1(){
	document.getElementById("san").style.display="none";
}
/*-关闭老薛照片-*/
function xue_remove(){
	var a = document.getElementById("advertising");
	a.parentNode.removeChild(a);
}
