$(function(){
	//点击排序显示下拉菜单，再次点击隐藏
	var sortBtn = $('#sortBtn');
	var sortMenu = $('#sortMenu');
	var glyphicon = $(".glyphicon");
	sortBtn.click('ul',function(){
		sortMenu.fadeToggle(1);
		if(sortBtn[0].className=="sortBtn"){
			sortBtn[0].className="sortbtn";
			glyphicon[0].className="glyphicon glyphicon-menu-up";
		}else{
			sortBtn[0].className="sortBtn";
			glyphicon[0].className="glyphicon glyphicon-menu-down";
		}
	});
	
	
	
	//请求数据
	GetRequest();//获取url中"?"符后的字串
	function GetRequest() {
	   var url = location.search; //获取url中"?"符后的字串
	   if (url.indexOf("?") != -1) {    //判断是否有参数
	      var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
	      var strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
	      //alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
		  $(".sex")[0].innerHTML = decodeURI(strs[1]);
	   }
	}
	//$(".nav").on("click","a",function(){
		var sex = $(".sex")[0].innerHTML;
		$.ajax({
			url:'php/selPro.php',
			type:'get',
			dataType:'json',
			async:true,
			data:{
				sex:sex,
				category:"",
				size:"",
				color:""
			}
		})
		.done(function(res){
			$("#products").html("");
			getPhoto(res);
		});
		
		$(".navList li").on("click","a",function(){
			if(this.innerText == "男装" || this.innerText == "女装"){
				$(".sex")[0].innerHTML = this.innerHTML;
				sex = $(".sex")[0].innerHTML;
				$.ajax({
					url:'php/selPro.php',
					type:'get',
					dataType:'json',
					async:true,
					data:{
						sex:sex,
						category:"",
						size:"",
						color:""
					},
					success:function(res){
						$("#products").html("");
						getPhoto(res);
					}
				});
			}
		})
	//});
	
	//鼠标移入图片开始轮播,移出 停止轮播，图片切换为第一张
	var i = 1;
	var time = null;
	var products = $(".products");
	
	//autoPlay("0061","black",5);
	function autoPlay(id,color,length){
		//products.on("mouseover",".playAuto",function(){
			clearInterval(time);
			var that = this;
			time = setInterval(function(){
				//that.children[0].children[0].src = "./images/" + id + "/" + color + i + ".jpg";
				that.src = "./images/" + id + "/" + color + i + ".jpg";
				i++;
				if(i > length) i = 1;
			},2000)
		//})
		products.on("mouseleave",".playAuto",function(){
			clearInterval(time);
			var that = this;
			that.children[0].children[0].src = "./images/" + id + "/" + color + "1.jpg";
		})
	}
	$("#products").on("mouseover","img",function(){
		var that = this;
		var str = this.src;
		var imgId = str.split("/").reverse()[1];
		str = str.split("/").reverse()[0].split(".")[0].split("");
		str.pop();
		var imgColor = str.join("");
		//console.log(imgId)
		$.ajax({
			url:'php/showList.php',
			type:'get',
			dataType:'json',
			async:true,
			data:{
				id:imgId
			}
		})
		.done(function(res){
			//autoPlay(imgId,imgColor,5);
			autoPlay.call(that,imgId,imgColor,5);
			//console.log(that)
		})
	})
	
	//选择框点击相应的选项，获取值渲染到btn
	var screen = $(".screen");
	var category,size,color;
	screen.on("click","a",function(){
		$(this).parent().parent().siblings()[0].innerHTML = this.innerHTML + "<span class='glyphicon glyphicon-menu-down'></span>";
		//筛选类别，颜色和尺码,渲染到页面
		category = $(".screen .btn")[0].innerText.trim();
		size = $(".screen .btn")[1].innerText.trim();
		color = $(".screen .btn")[2].innerText.trim();
		if(size == "尺码") size = "";
		if(color == "颜色") color = "";
		if(category == "类别") category = "";
		$.ajax({
			url:'php/selPro.php',
			type:'get',
			dataType:'json',
			data:{
				sex:sex,
				category:category,
				size:size,
				color:color
			}
		})
		.done(function(res){
			//console.log(res.detail)
			$("#products").html("");
			getPhoto(res);
			
		})
	});

	
	
	
	//点击 类别 颜色及尺码按钮 设置相应样式
	var screen = $(".screen");
	screen.on("click","button",function(){
		clearStyle();
		this.className = "btn btn-default dropdown-toggle selected";//当前点击的元素添加selected样式
		$(this).children()[0].className = "glyphicon glyphicon-menu-up";//箭头改变
	});
	$(document).click(function(){//点击document，清除button的样式
		clearStyle();
	});
	//点击清除筛选
	$(".clear").on("click",function(){
		$(".screen .btn")[0].innerHTML = "类别 <span class='glyphicon glyphicon-menu-down'></span>";
		$(".screen .btn")[1].innerHTML = "尺码 <span class='glyphicon glyphicon-menu-down'></span>";
		$(".screen .btn")[2].innerHTML = "颜色 <span class='glyphicon glyphicon-menu-down'></span>";
		$.ajax({
			url:'php/selPro.php',
			type:'get',
			dataType:'json',
			data:{
				sex:sex,
				category:"",
				size:"",
				color:""
			},
			success:function(res){
				$("#products").html("");
				getPhoto(res);
			}
		});
	})
	
})
