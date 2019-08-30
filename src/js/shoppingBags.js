//import {carAddInfo} from './detail.js';
(function(){
	
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
	
	//初始购物袋数量
	numAdd();
	function numAdd(){
		var list = JSON.parse(localStorage.getItem("car")||"[]")
		$(".num").html(list.length);
	}
	//渲染购物车
	var money = 0;
	showInfo();
	function showInfo(){
		var list = JSON.parse(localStorage.getItem("car")||"[]");
		//console.log(list);
		//var i = 0;
		list.forEach(function(val,key){
				//console.log(val);
				//console.log(i++);
				var str = `<div class="shopping-bag-list">`;
				str += `
					<div class="shopImg">
						<img src="${val.pic}" >
					</div>
					<div class="text-list">
						<p><span>${val.sex}</span></p>
						<p class="leimu"><a href="#">${val.mc}</a><strong>${val.price}</strong></p>
						<p><span>SKU: 635063881</span></p>
						<p><span>印花组合装,9/10 </span></p>								
					</div>
					<div class="operate">
						<a href="#" id="bianji" class="bianji">编辑</a>
						<span>&nbsp;|&nbsp;</span>
						<a href="#" class="del" id="del" key="${key}">删除</a>
					</div>
				</div>
				`;
			var reg = /\d*$/;
			money += Number(val.price.match(reg));
			$(".head-shop").after(str);
		});
		money = parseFloat(money).toFixed(2);
		$(".goodsSum").html("￥"+money);
		$(".orderSum").html("￥"+money);
		
	}
	
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
			//console.log(li)
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
			//console.log(li)
			$(".addShopping").after(li);
		}
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
	numAdd();
	function numAdd(){
		var list = JSON.parse(localStorage.getItem("car")||"[]")
		$(".num").html(list.length);
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
	
	
	//删除
	delGood();
	function delGood(){
		//删除页面
		var list = JSON.parse(localStorage.getItem("car") || "[]");
		$(".del").click(function(){
			var num = this.getAttribute("key");
			//console.log(num);
			//console.log(list[num]);
			var reg = /\d*$/;
			money -= Number(list[num].price.match(reg));
			console.log(money);
			list.splice(num,1);
			//同步本地存储
			localStorage.setItem("car",JSON.stringify(list));
			this.parentNode.parentNode.remove();
			$(".goodsSum").html("￥"+money);
			$(".orderSum").html("￥"+money);
			carAddInfo();
			allMoney();
			numAdd();
			if(list.length){
				location.href = "shoppingBags.html";
			}else{
				location.href = "nullShoppingBags.html";
			}
		});
	}
	//编辑
	bianji();
	function bianji(){
		$(".bianji").click(function(){
			$(".motai").css("display","block");
			window.event? window.event.cancelBubble = true : e.stopPropagation();
		});
		$(window).click(function(){
			$(".motai").css("display","none");
		});
	}
})();