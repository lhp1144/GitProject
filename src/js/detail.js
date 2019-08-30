(function(){
	$(".sizeBtn").on("click",function(){
		sizeBtn()
	})
	function sizeBtn(){
		$("html,body").animate({
			scrollTop:"0px"
		},300)
		$(window).scrollTop(0);
		$(".modal-body").html("")
		$(".modal-title").text("尺码表");
		var h5 = document.createElement("h5");
		var p = document.createElement("p");
		h5.innerHTML="服装";
		p.innerHTML="尺码详情数据如下";
		$(".modal-body").append(h5);
		$(".modal-body").append(p);
		$(".modal-body p").addClass("tanchu1");
		//$("tanchu1").css()
		$("h5").css({
			"color": "black",
			fontSize:18,
			margin : "30px 0"
		})
		var tablestr = 
		`
		<table class="tableTab">
			<tr>
				<th>A&F(XS - XXL)</th>
				<th>中国</th>
				<th>臂长（厘米）</th>
				<th>胸围（厘米）</th>
				<th>身高（厘米）</th>
			</tr>
		`
		for(var i =0 ;i<5;i++){
			tablestr +=
			`
			<tr>
				<td>XS</td>
				<td>170/84A</td>
				<td>81</td>
				<td>81 - 86</td>
				<td>170</td>
			</tr>
			`
		}
		tablestr += `</table>`;
		$(".modal-body").append(tablestr);
		$(".tableTab").css({
			width:"100%"
		})
		$(".tableTab tr").children().css({
			border:"1px solid #dad9d0",
			height:"50px",
			width:"20%",
			textAlign:"center"
		})
	}
	$(".moreIconfont").on("click",".hanBtn",function(){
		$("html,body").animate({
			scrollTop:"0px"
		},300)
		$(".modal-body").html("")
		$(".modal-title").text("运费和手续费");
		var span = document.createElement("p");
		var p = document.createElement("span");
		p.innerHTML = "Abercrombie & Fitch/运费/运费价";
		span.innerHTML = "运费价格";
		$(".modal-body").append(p);
		$(".modal-body span").children(0).css({
			fontSize:14,
			color:"#666",
			textDecoration: "underline"
		})
		$(".modal-body").append(span);
		var p1 = 
		`
		<span>标准运费为 10 元。</span><br/><br/>
		<span>所有延期交货商品在运输时将免除任何额外费用</span>
		<p>其他运费 信息</p>
		<span>配送需 2-4 个工作日左右，不含节假日</span><br/><br/>
		<span>请注意：香水无法配送至中国大陆西部某些地区</span>
		`
		$(".modal-body").append(p1);
		$(".modal-body p").css({
			fontSize:16,
			color:"#333",
			margin:"30px 0"
		})
	})
	$(".moreIconfont").on("click",".easyBtn",function(){
		$("html,body").animate({
			scrollTop:"0px"
		},300)
		$(".modal-body").empty();
		$(".modal-title").html("简单退货");
		var p = document.createElement("p");
		$(".modal-body").append(p);
		var p1 = $(".modal-body p").clone(true);
		$(".modal-body").append(p1);
		$(".modal-body p").eq(0).text("对于收货后 14 天内退回、附有原始发票副本、且不影响再次销售的商品，我们将按照原始支付方式安排退款");
		$(".modal-body p").eq(1).html("更多详情及门店购物退货政策，请查看我们的<span>退货 & 换货政策。</span>");
		$(".modal-body p").eq(1).children().css("textDecoration","underline");
		$(".modal-body p").css({
			fontSize:"12px",
			margin:"30px 0"
		})
	})
	
	//点击动画
	animateMyModal()
	function animateMyModal(){
		$(".modal-header button span").click(function(e){
			$("html,body").animate({
				scrollTop:"1200px"
			},500)
		})
	}
	
	//一键到达页面最顶端
	animateXiangShang()
	function animateXiangShang(){
		$(window).scroll(function(){
			if($(this).scrollTop()>0){
				$(".xiangshang").css("display","block");
			}else{
				$(".xiangshang").css("display","none");
			}
		})
		$(".xiangshang").click(function(){
			$("html,body").animate({
				scrollTop:"0px"
			},500)
		})
	}
	
	//尺码点击事件并获得尺寸值
	sizeClick();
	var sizeText;
	function sizeClick(){
		$(".detailbody_product_size_pic").on("click","li",function(e){
			$(e.target).css("background","#999");
			$(e.target).siblings().each(function(val,index){
				$(index).css("background","white")
			})
			sizeText = $(e.target).text();
		})
	}
	
	
	//颜色点击事件并获得颜色值
	//colorClick();
	var colorText;
	function colorClick(id){
		$(".detailbody_product_color_pic").on("click","li",function(e){
			$(e.target).css("border","2px solid #666");
			$(e.target).siblings().each(function(val,index){
				$(index).css("border","none")
			})
			$(".detailbody_product_color_txt_name").html($(e.target).attr("title"));
			colorText = $(e.target).attr("alt");
			ajaxx(colorText,id);
		})
	}
	function ajaxx(colorText,id){
		$.ajax({
			type:"get",
			url:"./php/showList.php",
			data:{
				id:idNum(id)
			},
			success:function(res){
				var firstColor = null;
				var regFirstColor;
				var rees = JSON.parse(res).detail
				//console.log(rees);
				var reg1=new RegExp("^" + colorText);
				$(".smallpic").html("");
				var li = `<ul class="smallpicul">`;
				rees.forEach(function(val,index){
					if(!firstColor){
						if(reg1.test(val)) firstColor = colorText;
						if(firstColor){
							var src = "./images/"+idNum(id)+"/"+val;
							$(".bigpic").children().attr("src",src)
							li += 
							`
							<li><img src="./images/${idNum(id)}/${val}" alt="SHORT-SLEEVE ICON OXFORD SHIRT" name="SHORT-SLEEVE ICON OXFORD SHIRT"/></li>
							`
						}
					}else if(reg1.test(val)){
						li += 
						`
						<li><img src="./images/${idNum(id)}/${val}" alt="SHORT-SLEEVE ICON OXFORD SHIRT" name="SHORT-SLEEVE ICON OXFORD SHIRT"/></li>
						`
					}
				})
				li +="</ul>";
				$(".smallpic").append(li);
			}
		})
	}
	
	//切换小图并获得数据
	smallPic()
	function smallPic(){
		$(".smallpic").on("click","li",function(e){
			$(e.target).parent().css("border","2px solid #666");
			$(e.target).parent().siblings().each(function(val,index){
				$(index).css("border","none");
			})
			var src = $(e.target).attr("src");
			$(".bigpic").children().attr("src",src)
		})
	}
	
	
	//点击加入购物车
	addCarBtn();
	function addCarBtn(){
		$(".addCar_left").on("click",function(){
			var product = {
				mc:$(".productName").html(),
				price:$(".productPrice").html(),
				category:$(".last").children(1).html(),
				size:sizeText,
				color:colorText,
				discount:$(".productPriceInfo1").html(),
				sex:$(".notlast1").children(1).html(),
				pic:$(".bigpic").children(1).attr("src")
			}
			if(sizeText&&colorText){
				$(".addCar_left").html("处理中").css("background","darkgray");
				addCar(product);
				carAddInfo();
				numAdd();
				allMoney()
				$(".addCar_left").html("添加到购物袋").css("background","darkgreen");
			}
				
		})
	}
	
	//初始购物袋数量
	numAdd();
	function numAdd(){
		var list = JSON.parse(localStorage.getItem("car")||"[]")
		$(".num").html(list.length);
	}
	
	//增加商品
	function addCar(product){
		var list = JSON.parse(localStorage.getItem("car")||"[]")
		if(list.length){
			for (var i = 0; i < list.length; i++) {
				if(list[i].mc == product.mc && list[i].size == product.size && list[i].color == product.color){
					list[i].num++;
					localStorage.setItem("car",JSON.stringify(list));
					console.log(list)
					return;
				}
			}
			list.push({...product,num:1});
			localStorage.setItem("car",JSON.stringify(list));
		}else{
			list.push({...product,num:1});
			localStorage.setItem("car",JSON.stringify(list));
		}

	}
	
	//渲染购物袋
	carAddInfo();
	function carAddInfo(){
		var list = JSON.parse(localStorage.getItem("car") || "[]");
		$(".smallcarinfo").remove();
		var listNum = list.length%6;
		if(list.length<6){
			var li = `<div class="smallcarinfo">`;
			$(".addShopping").css("display","none");
			for(var i=0;i<list.length;i++){
				li += 
				`
				<dl>
					<dt><img src="${list[i].pic}" alt="" /></dt>
					<dd>${list[i].sex}</dd>
					<dd>${list[i].mc}</dd>
					<dd>${list[i].price}.00</dd>
				</dl>
				`
			};
			li +=`</div>`;
			$(".addShopping").after(li);
		}else{
			var li = `<div class="smallcarinfo">`;
			$(".addShopping").css("display","none");
			for(var i=0;i<6;i++){
				li += 
				`
				<dl>
					<dt><img src="${list[i].pic}" alt="" /></dt>
					<dd>${list[i].sex}</dd>
					<dd>${list[i].mc}</dd>
					<dd>${list[i].price}.00</dd>
				</dl>
				`
			};
			li +=`</div>`;
			$(".addShopping").after(li);
		}
	}
	
	
	//点击上下一页
	ABtn()
	function ABtn(){
		var btn = 1;
		var list = JSON.parse(localStorage.getItem("car") || "[]");
		var listNum = list.length%6;
		var temp = listNum;
		//下一页
		if(list.length<6){
			$(".Aprev").css("color","#999");
			$(".Anext").css("color","#999");
		}else{
			$(".Aprev").css("color","#999");
			$(".Anext").css("color","black");
		}
		$(".Anext").on("click",function(){
			if(list.length<6){
				$(".Aprev").css("color","#999");
				$(".Anext").css("color","#999");
				return;
			}else{
				$(".smallcarinfo").remove();
				btn++;
				if(list.length>=6*btn ){
					var li = `<div class="smallcarinfo">`;
					for (var i = (btn-1)*6; i < btn*6; i++) {
						li += 
						`
						<dl>
							<dt><img src="${list[i].pic}" alt="" /></dt>
							<dd>${list[i].sex}</dd>
							<dd>${list[i].mc}</dd>
							<dd>${list[i].price}.00</dd>
						</dl>
						`
					};
					li +=`</div>`;
					$(".addShopping").after(li);
					$(".Aprev").css("color","black");
					$(".Anext").css("color","black");
					if(list.length == 6*btn){
						btn = list.length/6;
						$(".Aprev").css("color","black");
						$(".Anext").css("color","#999");
						return;
					}
				}else{
					var li = `<div class="smallcarinfo">`;
					for (var i = list.length-listNum; i < list.length; i++) {
						li += 
						`
						<dl>
							<dt><img src="${list[i].pic}" alt="" /></dt>
							<dd>${list[i].sex}</dd>
							<dd>${list[i].mc}</dd>
							<dd>${list[i].price}.00</dd>
						</dl>
						`
					}
					li +=`</div>`;
					$(".addShopping").after(li);
					btn = parseInt((list.length/6))+1;
					$(".Aprev").css("color","black");
					$(".Anext").css("color","#999");
				}
			}
		})
		
		//上一页
		$(".Aprev").on("click",function(){
			if(btn == 1){
				return
			}
			$(".smallcarinfo").remove();
			btn--;
			if(btn>=1){
				var li = `<div class="smallcarinfo">`;
				for (var i = (btn-1)*6; i < btn*6; i++) {
					li += 
					`
					<dl>
						<dt><img src="${list[i].pic}" alt="" /></dt>
						<dd>${list[i].sex}</dd>
						<dd>${list[i].mc}</dd>
						<dd>${list[i].price}.00</dd>
					</dl>
					`
				}
				li +=`</div>`;
				$(".addShopping").after(li);
				$(".Aprev").css("color","black");
				$(".Anext").css("color","black");
				//console.log(btn)
				if(btn==1){
					$(".Aprev").css("color","#999");
					$(".Anext").css("color","black");
					btn = 1;
					return
				}
			}else{
				btn = 1;
				var li = `<div class="smallcarinfo">`;
				for (var i = (btn-1)*6; i < btn*6; i++) {
					li += 
					`
					<dl>
						<dt><img src="${list[i].pic}" alt="" /></dt>
						<dd>${list[i].sex}</dd>
						<dd>${list[i].mc}</dd>
						<dd>${list[i].price}.00</dd>
					</dl>
					`
				}
				li +=`</div>`;
				$(".addShopping").after(li);
				$(".Aprev").css("color","#999");
				$(".Anext").css("color","black");
				return
			}
		})
	}
	
	
	//计算金额
	allMoney();
	function allMoney(){
		var list = JSON.parse(localStorage.getItem("car") || "[]");
		var money = 0;
		var reg = /\d*$/;
		list.forEach(function(val,index){
			money += Number(val.price.match(reg))
		})
		if(money%1===0){
			$(".Amoney").html(money+".00")
		}else{
			$(".Amoney").html(money)
		}
	}
	
	//点击跳转
	locationn();
	function locationn(){
		$(".lookToShopping").on("click",function(){
			var list = JSON.parse(localStorage.getItem("car") || "[]");
			if(list.length){
				location.href = "shoppingBags.html";
			}else{
				location.href = "nullShoppingBags.html";
			}
		})
	}
	
	//点击存储
	//modification();
	function modification(list,temp){
		$(".btn-primary").on("click",function(){
			console.log(list[temp].color,list[temp].size)
			list[temp].color = colorText;
			list[temp].size = sizeText;
			console.log(list[temp].color,list[temp].size)
			localStorage.setItem("car",JSON.stringify(list));
			AgetStorage();
		})
	}
	

	//点击跳转详情页
	skip();
	function skip(){
		$(".products").on("click","img",function(e){
			var id =$(e.target).parents().eq(1).siblings().find("span").html();
			$.ajax({
				type:"post",
				url:"./php/clickInfo.php",
				data:{
					mc:$(e.target).parents().eq(1).siblings().find("a").html(),
					id:$(e.target).parents().eq(1).siblings().find("span").html(),
					price:$(e.target).parents().eq(1).siblings().children().eq(1).find("span").html(),
					sex:$(".sex").html(),
					category:$("#select").text(),
					src:$(e.target).attr("src")
				},
				success:function(res){
					if(res==1){
						location.href = "./detail.html";
					}
				}
			})
		})
	}

	

	showClick();
	function showClick(){
		var id;
		var sex;
		$.ajax({
			type:"post",
			url:"./php/showClick.php",
			success:function(res){
				var res = JSON.parse(res);
				console.log(res);
				$(".productPrice").html("￥"+res.price);
				id = res.id;
				sex = res.sex;
				var reg = /^\s*类别\s*$/;
				$(".detailheader_wrap").html("");
				if(!reg.test(res.category)){
					var li = 
					`
					<li>
						<a href="" class="notlast1">
							<span>${res.sex}</span>
						</a>
						<span>></span>
					</li>
					<li>
						<a href="" class="last">
							<span>${res.category}</span>
						</a>
					</li>
					`
					$(".detailheader_wrap").append(li);
				}else{
					var li =
					`
					<li>
						<a href="" class="notlast1">
							<span>${res.sex}</span>
						</a>
					</li>
					`
					$(".detailheader_wrap").append(li);
				}
				AshowColor(id);
				colorClick(id);
				moreshoppingList1(sex);
			}
		})
	}
	
	//AshowColor()
	function AshowColor(id){
		$.ajax({
			tpye:"get",
			data:{
				id:id
			},
			url:"./php/clickColor.php",
			success:function(res){
				var res = JSON.parse(res);
				var split = res[0].color.split("&");
				split.forEach(function(val,index){
					switch(val){
						case "black":
							$(".detailbody_product_color_pic").children().eq(0).css("display","block");
							break;
						case "white":
							$(".detailbody_product_color_pic").children().eq(1).css("display","block");
							break;
						case "red":
							$(".detailbody_product_color_pic").children().eq(2).css("display","block");
							break;
						case "blue":
							$(".detailbody_product_color_pic").children().eq(3).css("display","block");
							break;
						case "darkBlue":
							$(".detailbody_product_color_pic").children().eq(4).css("display","block");
							break;
					}
				});
				var reg1 = /^blue/;
				var reg2 = /^red/;
				var reg3 = /^darkBlue/;
				var reg4 = /^black/;
				var reg5 = /^white/;
				$.ajax({
					type:"get",
					url:"./php/showList.php",
					data:{
						id:idNum(id)
					},
					success:function(res){
						var firstColor = null;
						var regFirstColor;
						var rees = JSON.parse(res).detail
						$(".smallpic").html("");
						var li = `<ul class="smallpicul">`;
						rees.forEach(function(val,index){
							if(!firstColor){
								if(reg1.test(val)) firstColor = "blue";
								else if(reg2.test(val)) firstColor = "red";
								else if(reg3.test(val)) firstColor = "darkBlue";
								else if(reg4.test(val)) firstColor = "black";
								else if(reg5.test(val)) firstColor = "white";
								if(firstColor){
									regFirstColor = new RegExp("^" + firstColor);
									var src = "./images/"+idNum(id)+"/"+val;
									$(".bigpic").children().attr("src",src)
									li += 
									`
									<li><img src="./images/${idNum(id)}/${val}" alt="SHORT-SLEEVE ICON OXFORD SHIRT" name="SHORT-SLEEVE ICON OXFORD SHIRT"/></li>
									`
								}
							}else if(regFirstColor.test(val)){
								li += 
								`
								<li><img src="./images/${idNum(id)}/${val}" alt="SHORT-SLEEVE ICON OXFORD SHIRT" name="SHORT-SLEEVE ICON OXFORD SHIRT"/></li>
								`
							}
						})
						li +="</ul>";
						$(".smallpic").append(li);
					}
				})
			}
		})
	}
	
	
	function idNum(id){
		var idStr = "";
		for(var i = 0; i < 4; i++){
			idStr += id % 10;
			id = parseInt(id / 10);
		}
		return idStr.split("").reverse().join("");
	}
	
	//历史记录
	historyShoppingList();
	function historyShoppingList(){
		$.ajax({
			type:"post",
			url:"./php/historyShopping.php",
			success:function(res){
				var res = JSON.parse(res);
				var dl = `<div class="historyshoppingList2">`;
				res.forEach(function(val,index){
					dl +=
					`
					<dl class="historyshoppingList4">
						<dt><a href=""><img src="${val.src}" alt="" /></a></dt>
						<dd class="historyshoppingName4">${val.sex}</dd>
						<dd class="historyshoppingNameInfo4"><a href="">${val.mc}</a></dd>
						<dd class="historyshoppingPrice4">¥${val.price}</dd>
					</dl>
					`
				})
				dl +=`</div>`;
				$(".historyshoppingList").append(dl);
			}
		})
	}
	
	//更多款式
	function moreshoppingList1(sex){
		$.ajax({
			type:"post",
			url:"./php/moreShoppingList1.php",
			data:{
				sex:sex
			},
			success:function(res){
				var res = JSON.parse(res);
				var dl = `<div class="moreshoppingList2">`;
				var colorArr = res[0].color.split("&")[0];
				var colorArr = res[0].id;
				res.forEach(function(val,index){
					dl +=
					`
					<dl class="moreshoppingList4">
						<dt><a href=""><img src="./images/${idNum(res[index].id)}/${res[index].color.split("&")[0]}1.jpg" alt="" /></a></dt>
						<dd class="moreshoppingList4">${val.sex}</dd>
						<dd class="moreshoppingList4"><a href="">${val.mc}</a></dd>
						<dd class="moreshoppingList4">¥${val.price}</dd>
					</dl>
					`
				})
				dl +=`</div>`;
				$(".moreshoppingList").append(dl);
			}
		})
	}
	
})()
