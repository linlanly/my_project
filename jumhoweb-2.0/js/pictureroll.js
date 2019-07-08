var index = 0;
var section1 = elementOfId("section1");
var roll = section1.children[1];
var imgWidth = roll.offsetWidth;
var ul = roll.children[0];
var list = ul.children;
var ol = roll.children[1];
var arr = elementOfId("arr");

for(var i = 0; i < list.length; i++) {
	var liObjs = document.createElement("li");
	ol.appendChild(liObjs);
	liObjs.setAttribute("index", i);
	liObjs.onmouseover = function() {
		for(var j = 0; j < ol.children.length; j++) {
			ol.children[j].removeAttribute("class");
		}
		this.className = "current";
		index = this.getAttribute("index");
		animate(ul, -index * imgWidth);
	};
}
ol.children[0].className = "current";
var data = ul.children[0].cloneNode(true);
ul.appendChild(data);
var timeId = setInterval(clickHandle, 6000);

elementOfId("section1").onmouseover = function() {
	arr.style.display = "block";
	clearInterval(timeId);
};
elementOfId("right").onclick = clickHandle;

function clickHandle() {
	if(index == ul.children.length - 1) {
		ul.style.left = 0 + "px";
		index = 0;
	}
	index++;
	animate(ul, -index * imgWidth);
	if(index == list.length - 1) {
		ol.children[0].className = "current";
		ol.children[ol.children.length - 1].className = "";
	} else {
		for(var i = 0; i < ol.children.length; i++) {
			ol.children[i].className = "";
		}
		ol.children[index].className = "current";
	}
};
elementOfId("left").onclick = function() {
	if(index == 0) {
		index = list.length - 1;
		ul.style.left = -index * imgWidth + "px";
	}
	index--;
	animate(ul, -index * imgWidth);
	for(var i = 0; i < ol.children.length; i++) {
		ol.children[i].className = "";
	}
	ol.children[index].className = "current";
};

elementOfId("section1").onmouseout = function() {
	arr.style.display = "none";
	timeId = setInterval(clickHandle, 6000);
};

function animate(element, target) {
	clearInterval(element.timeId);
	element.timeId = setInterval(function() {
		var current = element.offsetLeft;
		var step = 10;
		step = current > target ? -step : step;
		current += step;
		if(Math.abs(target - current) > Math.abs(step)) {
			element.style.left = current + "px";
		} else {
			clearInterval(element.timeId);
			element.style.left = target + "px";
		}
	}, 10);
}　　
function elementOfId(id) {　　
	return document.getElementById(id);　　　　
}