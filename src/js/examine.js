$(function(){
	//点击快速查看按钮,取得数据渲染弹出页面
	var products = $('.products');
	var shopLeft = $(".shopLeft");
	var srmTop = $(".shopright_main_top");
	var liArr = $(".smallDot li");
	var index = 0;
	//console.log(liArr)
	var str,imgId,imgUrl,imgCol,name,price;
	srmTop.children()[0].innerHTML = 'name';
	products.on("click",".examine",function(){
		//获取当前图片路径
		str = $(this).siblings().children()[0].src;
		//获取当前图片ID
		imgId = str.split("/").reverse()[1];
		//获取当前图片的当前文件夹路径
		imgUrl = str.split("/").splice(5,3).join("/");
		//获取当前图片颜色
		imgCol = str.split("/").reverse()[0].split(".")[0].split("");
		imgCol.pop();
		imgCol = imgCol.join("");
		//获取当前图片的名字
		name = $(this).parent().children()[0].title;
		//获取当前图片衣服的价格
		price = $(this).parent().siblings().children()[1].innerHTML;
		//模态框引用图片
		shopLeft.css({background:"url(" + imgUrl + ")"});
		//设置名字和价格
		srmTop.children()[0].innerHTML = name;
		srmTop.children()[2].innerHTML = price;
		//console.log(srmTop.children()[0])
		// shopLeft.style.
		//console.log(shopLeft.css())
		// $title = $(this).parent().siblings().child(0).child().innerHtml;
		// $prc = $(this).parent().siblings().child(1).innerHtml;
		// $(".shopright_main").child(0).innerHtml = $title;
		// $(".shopright_main").child(2).innerHtml = $prc;
		/* $.ajax({
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
			//autoPlay.call(that,imgId,imgColor,5);
			//console.log(that)
		}) */
		
		shopLeft.on("mouseover",function(){
			
			shopLeft.css("background-size","auto");
			shopLeft.on("mousemove",function(eve){
				var e = eve || event;
				var x = e.offsetX / parseInt(shopLeft.css("width")) * 100 + "%";
				var y = e.clientY / parseInt(shopLeft.css("height")) * 100 + "%";
				shopLeft.css("background-position",x + " " + y);
			})
			//鼠标移入后显示
			$(".prevImg").css({opacity: .5});
			$(".nextImg").css({opacity: .5});
			//左侧点击事件	
			$(".prevImg").on("click",function(){
				index--;
				if(index < 1){
					index = 5;
				}
				shopLeft.css({background:"url(images/"+ imgId + "/"+ imgCol + index + ".jpg)"});
				shopLeft.css("background-size","cover");
			})
			$(".prevImg").on("mousemove",function(){
				shopLeft.css("background-size","cover");
			})
			//右侧点击事件
			$(".nextImg").on("click",function(){
				index++;
				if(index > 5){
					index = 1;
				}
				shopLeft.css({background:"url(images/"+ imgId + "/"+ imgCol + index + ".jpg)"});
				shopLeft.css("background-size","cover");
			})
			$(".nextImg").on("mousemove",function(){
				shopLeft.css("background-size","cover");
			})
		});
		shopLeft.on("mouseout",function(){
			shopLeft.css("background-size","cover");
			$(".prevImg").css({opacity: 0});
			$(".nextImg").css({opacity: 0});
		});
		$(".shopLeft .prevImg").on("mouseover",function(){
			shopLeft.css("background-size","cover");
		});
		$(".shopLeft .nextImg").on("mouseover",function(){
			shopLeft.css("background-size","cover");
		});
		$(".shopLeft .smallDot").on("mousemove",function(){
			shopLeft.css("background-size","cover");
		});
		//点击小圆点切换图片
		$(".shopLeft .smallDot").on("click","li",function(){
			$(this).addClass("liColor").siblings().removeClass("liColor");
			for(var i=1; i<=liArr.length; i++){
				//console.log($(".smallDot").children()[i-1])
				if(this==$(".smallDot").children()[i-1]){
					
				shopLeft.css({background:"url(images/"+ imgId + "/"+ imgCol + i + ".jpg)"});
				shopLeft.css("background-size","cover");
				
				}
				
			}
		});
	});
	
})

