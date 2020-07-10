/* 判断切图 */
function qie(){
	var a = $("#imgback").css("background-image");
	a = a.split("g/")[1].split(")")[0];
	if (a == "555.jpg") {
		document.getElementById("imgback").setAttribute("style","background-image: url(../HKQ/img/444.jpg);");
	}else{
		document.getElementById("imgback").setAttribute("style","background-image: url(../HKQ/img/555.jpg);");
	}
}

var shop;
function start(){
	//按照指定的时间调用函数
	shop = setInterval("qie();",1000);
}
window.onload = function(){
	start();
}

$(function(){
	$(".inp_file").change(function(e){
    // console.log($(this).val());//val()获取到的是完整的文件路径值；C:\fakepath\js-dom.png
    console.log(e)
    /*
 	 简单的获取选择文件的名字
    currentTarget:获取到的是绑定事件的对象
    e.currentTarget.files 是一个数组，如果支持多个文件，则需要遍历
    */
    var fileMsg = e.currentTarget.files;
    var fileName = fileMsg[0].name;
    console.log(fileName);//js-dom.png
    //大小 字节  
    var fileSize = fileMsg[0].size;
    console.log(fileSize);//350061
    //类型  
    var fileType = fileMsg[0].type;
    console.log(fileType);//image/png
    // 判断文件类型
    var type=(fileType.substr(fileType.lastIndexOf("."))).toLowerCase();
    if(type!=".jpg"&&type!=".gif"&&type!=".jpeg"&& type!=".png"){
        /* alert("您上传图片的类型不符合(.jpg|.jpeg|.gif|.png)！"); */
        document.getElementById("fileName").value = fileName;
        /*$("body").load("dispose",{"fileName":fileName});*/
        return false;
    }
    $('.inp_file_name').text(fileName)
})
$('.cancel_file_but').click(function(){
    $('.inp_file').val(null);
})
})