// (function(){	
// 	
// })()
$(function(){
	
	//导航条跳页
	//console.log($(".nav .navList"))
	/* $(".nav .navList").on("click","a",function(){
		 $(".sex")[0].innerHTML = this.innerHTML;
	}); */
	//跟随事件
	moveHeader();
	function moveHeader(){
		$(window).scroll(function(){
			if($(this).scrollTop()>40){
				$(".nav").css({
					top:$(this).scrollTop()
				})
				$(".language").css({
					top:$(this).scrollTop()+56
				})
				$(".touxiang").css({
					top:$(this).scrollTop()+56
				})
				$(".smallShoppingCar").css({
					top:$(this).scrollTop()+56
				})
			}
			if($(this).scrollTop() == 0){
				$(".nav").css({
					top:40
				})
				$(".language").css({
					top:96
				})
				$(".touxiang").css({
					top:96
				})
				$(".smallShoppingCar").css({
					top:96
				})
			}
		})
	}
	
	
	//搜索按钮
	commonSearch();
	function commonSearch(){
		$(".search").on("click",function(){
			$(".commonHeader_bottom_middle input").animate({
				border : "1px solid black",
				width : 173,
				height : 20
			},200)
			return false
		})
		$(window).click(function(){
			$(".commonHeader_bottom_middle input").animate({
				border : "1px solid black",
				width : 0,
				height : 0
			},200)
		})
	}
	
	//语言切换鼠标划过
	commonLanguage();
	function commonLanguage(){
		//console.log($(".ulRight li:nth-child(2)"))
		$(".ulRight li:nth-child(2)").mouseover(function(){
			$(".language").css("display","block");
		})
		$(".ulRight li:nth-child(2)").mouseout(function(){
			$(".language").css("display","none");
		})
	}
	
	//语言切换鼠标划出
	commonLanguageOut();
	function commonLanguageOut(){
		$(".language").mouseover(function(){
			$(".language").css("display","block");
		})
		$(".language").mouseout(function(){
			$(".language").css("display","none");
		})
	}
	//语言切换点击
	languageClick();
	function languageClick(){
		$(".language").on("click","li",function(e){
			$(e.target).find("span").css("display","block");
			$(e.target).parent().siblings().find("span").css("display","none");
		})
	}
	//头像划过事件
	registerMover();
	function registerMover(){
		$(".ulRight li:nth-child(3)").mouseover(function(){
			$(".touxiang").css("display","block");
		});
		$(".ulRight li:nth-child(3)").mouseout(function(){
			$(".touxiang").css("display","none");
		});
	}
	//头像切换鼠标划出
	registerMoverOut();
	function registerMoverOut(){
		$(".touxiang").mouseover(function(){
			$(".touxiang").css("display","block");
		});
		$(".touxiang").mouseout(function(){
			$(".touxiang").css("display","none");
		});
	}
	
	//购物袋内容划过
	gouwudaiMover();
	function gouwudaiMover(){
		$(".ulRight li:nth-child(4)").mouseover(function(){
			$(".smallShoppingCar").css("display","block");
		});
		$(".ulRight li:nth-child(4)").mouseout(function(){
			$(".smallShoppingCar").css("display","none");
		});
	}
	//购物袋内容划出
	gouwudaiMoverOut();
	function gouwudaiMoverOut(){
		$(".smallShoppingCar").mouseover(function(){
			$(".smallShoppingCar").css("display","block");
		});
		$(".smallShoppingCar").mouseout(function(){
			$(".smallShoppingCar").css("display","none");
		});
	}
	
	//划过code显示img二维码
	$(".code").mouseover(function(){
		$(".guanzhu img").addClass("show");
	})
	$(window).mouseout(function(){
		$(".guanzhu img").removeClass("show");
	})
	//跳转登陆和注册
	$(".touxiang ul li:eq(0)").click(function(){
		location.href="denglu.html";
	});
	
	$(".touxiang ul li:eq(1)").click(function(){
		location.href="denglu.html";
	});
	
	updateUsername();
	function updateUsername(){
		$(".ulRight li:nth-child(3)").mouseover(function(){
			if(document.cookie){
				if($(".touxiang>ul>li:eq(1)>p").html() == "注册")
				$(".touxiang>ul>li:eq(1)").remove();
				$(".touxiang>ul>li:eq(0)>p").html("欢迎");
			}
		});
	}
})