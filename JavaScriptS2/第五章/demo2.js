$(function(){
	/*显示发帖栏*/
	$("#bbs header span").click(function(){
		$("#hurdle").show();
	});
	//发帖设置
	$("#btn").click(function(){
		if($(".title").val() != ""){
			if($("#hurdle select").val() != "请选择版块"){
				if($("#text").val().length >= 5){
					/*创建标签*/				
					var tou=new Array("tou01.jpg","tou02.jpg","tou03.jpg","tou04.jpg");
					var $newLi=$("<li></li>");  //创建一个新的li节点元素
			        var iNum=Math.floor(Math.random()*4);  //随机获取头像
			        var $touImg=$("<div><img src=../img/"+tou[iNum]+"></div>");  //创建头像节点
			        var $title=$("<h1>"+$(".title").val()+"</h1>"); //设置标题节点
			        var newP=$("<p></p>");  //创建一个新的p节点元素
			        var myDate=new Date();
			        var currentDate=myDate.getFullYear()+"-"+parseInt(myDate.getMonth()+1)+"-"+myDate.getDate()+" "+myDate.getHours()+":"+myDate.getMinutes();
			        $(newP).append("<span>版块："+$("#hurdle select").val()+"</span>");  //在p节点中插入版块；
			        $(newP).append("<span>发表时间："+currentDate+"</span>");     //在p节点中插入发布时间；
			        $($newLi).append($touImg);  //插入头像
			        $($newLi).append($title);   //插入标题
			        $($newLi).append(newP);    //插入版块、时间内容
			        $("#bbs section ul").prepend($newLi);
					/*发布成功后清空所有输入的并且隐藏发布栏*/
			        $("#hurdle .title").val("");
			        $("#hurdle select").val("");
			        $("#hurdle #text").val("");
			        $("#hurdle").hide();
				}else{
					alert("发帖内容不能少于五个字")
				}
			}else{
				alert("请选择板块");
			}
		}else{
			alert("标题不能为空!");
		}
	});
	//关闭发帖
	$("#cloes").click(function(){
		$("#hurdle").hide();
	});
});