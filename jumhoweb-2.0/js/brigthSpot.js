/*选项卡*/
window.onload=function(){
				/*逐级获得ID*/
				var spot = document.getElementById("spot");
				var ul1 = spot.getElementsByTagName("ul")[0];
				var lis = ul1.getElementsByTagName("li");
				var divs = spot.getElementsByTagName("div");
				
				for(var i=0;i<lis.length;++i){
					/*把遍历的i作为li标签数组的下标索引*/
					lis[i].index=i;
					/*点击某个li标签是触发事件*/
					lis[i].onmouseover=function(){
						for(var n=0;n<lis.length;n++){
							/*点击某个li标签触发事件后，其余的li标签下的div*/
							lis[n].className="spot-li-hide";
							divs[n].className="spot-hide";
						}
						/*把当前点击的li标签的类名致为on，对应的内容为非隐藏*/
						this.className="spot-on";
						divs[this.index].className="";
					}
				}
			}