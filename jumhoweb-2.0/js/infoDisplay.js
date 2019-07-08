//设置滑动到产品信息部分，产品信息淡入
function fadeInOut(data) {  
	var oDiv = document.getElementById(data);
	var alpha = 0.3;   
	var timer;
	clearInterval(timer);
	timer = setInterval(
		function() {       
			alpha += 0.01;    
			oDiv.style.opacity = alpha;       
			if(alpha >= 1 || alpha <= 0.3) {
				clearInterval(timer);
			}   
		}, 30);
}

function HoverTreeScroll(container, title, content, img, button) {
	var Obj = $('#' + container);
	//判断元素是否存在
	if(Obj.length != 1) {
		return false;
	}
	var offsetTop = arguments[1] ? arguments[1] : 0;
	var ObjTop = Obj.offset().top - $(".content-wrapper").height();
	var h_one = true;

	$(".content-wrapper").scroll(function() {
		if($(".content-wrapper").scrollTop() > ObjTop) {
			if(h_one) {
				//在这里些滚动指定DIV时执行的代码 
				$("#" + title).animate({
					left: '3.4em',
					opacity: 1,
					filter: 'Alpha(opacity=90)'
				}, 2400);
				setTimeout(function() {
					fadeInOut(content);
					fadeInOut(img);
				}, 700);
				setTimeout(function() {
					$("#" + button).animate({
						right: '3em',
						opacity: 1,
						filter: 'Alpha(opacity=90)'
					}, 2400);
				}, 700);
				h_one = false;
			}
		}
	});
}
HoverTreeScroll('section3', 'first_h1', 'first_h3', 'first_img', 'first_button');
HoverTreeScroll('section4', 'second_h1', 'second_h3', 'img_right', 'second_button');