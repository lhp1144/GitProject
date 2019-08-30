function idNum(id){
	var idStr = "";
	for(var i = 0; i < 4; i++){
		idStr += id % 10;
		id = parseInt(id / 10);
	}
	return idStr.split("").reverse().join("");
}
function clearStyle(){//排他，将所有的selected样式清除
	for(var i = 0;i < $(".screen").children().children().length;i++){
		if(i%2 == 0){//获取$screen子元素btn-group的子元素button
			$(".screen").children().children()[i].className = "btn btn-default dropdown-toggle";
			$($(".screen").children().children()[i]).children()[0].className = "glyphicon glyphicon-menu-down";
		}
	}
}
	

//遍历所有的商品类别，颜色及尺寸
function getScreen(arr,select,selector){
	for(var i = 0;i < arr.length;i++){//遍历去重后的新数组
		//将新数组的内容添加到对应的ul中
		var select = $(`<li><a href='#' title=${arr[i]}>${arr[i]}</a></li>
						<li role='separator' class='divider'></li>`);
		$("#"+selector).append(select);
	}
}
	
function getPhoto(res){
	var categoryArr = [];
	var colorArr = [];
	var sizeArr = [];
	var detail = res.detail;
	for (let i = 0; i < detail.length; i++) {
		let $id = idNum(detail[i].id);
		
		function getImgsrc($id){
			return new Promise(function(resolve,reject){
				$.ajax({
					url:'php/showList.php',
					type:'get',
					dataType:'json',
					async:true,
					data:{
						id:$id
					}
				})
				.done(function(data){
					data.detail.splice(0,2);
					var thisData = data.detail;
					resolve(thisData);
				})
			})
		}
		getImgsrc($id).then(function(resolveData){
			var imgSrc = "./images/" + $id + "/" + resolveData[0];
			var list = $(`<div id='list' class='list'>
					<div id='picture' class='playAuto'>
						<a href='detail.html?id=${$id}' title='${detail[i].mc}'><img src=${ imgSrc } alt=${detail[i].mc}></a>
						<button type='button' id='examine' class='examine btn' data-toggle='modal' data-target='.bs-example-modal-lg'>快速查看<i class='glyphicon glyphicon-plus'></i></button>
					</div>
					<span>
						<p>
							<a href='#' title='${detail[i].mc}'>${detail[i].mc}</a>
							<span class='AshopId' style='display:none'>${detail[i].id}</span>
						</p>
						<p>¥ <span>${detail[i].price}</span></p>
					</span>
				</div>`);
				
			getExamine();
			for(var j = 1; j < resolveData.length; j++){
				var imgSrcs = "./images/" + $id + "/" + resolveData[j];
				//console.log(imgSrcs)
			}
			$("#products").append(list);
			//console.log($id)
		})
		
		//遍历所有的商品类别，颜色及尺寸，分别存到一个数组
		categoryArr.push(res.detail[i].category);
		colorArr.push(res.detail[i].color);
		sizeArr.push(res.detail[i].size);
	}
	
	var newCategoryArr = [...new Set(categoryArr)];//去重
	
	colorArr = colorArr.join("&").split("&");
	var newColorArr = [...new Set(colorArr)];
	newColorArr = newColorArr.join(",").replace(" , ",",").trim().split(",");
	newColorArr = [...new Set(newColorArr)];
	
	var newSizeArr = [...new Set(sizeArr)];
	newSizeArr = newSizeArr.join("&").split("&");
	
	$("#category").html("");
	$("#size").html("");
	$("#color").html("");
	getScreen(newCategoryArr,"$categoryLi","category");
	getScreen(newColorArr,"$colorLi","color");
	getScreen(newSizeArr,"sizeLi","size");
	
}

//鼠标滑过图片区域显示
getExamine();
function getExamine(){
	$(".products .examine").css({display:'none'});
	$(".products").on("mouseover",".list",function(){
		$(this.children[0].children[1]).show();
	});
	$(".products").on("mouseout",".list",function(){
		$(this.children[0].children[1]).hide();
	});
}


