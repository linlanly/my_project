var product=document.getElementById("display-product");
var productlist=product.children;
for(var i = 0; i < productlist.length; i++) {
	!function(j){
		productlist[j].onmouseover=function(){
			product.children[j].children[0].style.top="-"+(j*100+36)+"%";
		}
	}(i);
}
