/*小图案*/
$(document).ready(function() {
	$(".fun-1").mouseover(function() {
		$(".fun-1 img").css("transform", "rotate(7deg)")
	});
	$(".fun-1").mouseleave(function() {
		$(".fun-1 img").css("transform", "rotate(0deg)")
	});
	$(".fun-2").mouseover(function() {
		$(".fun-2 img").css("transform", "rotate(7deg)")
	});
	$(".fun-2").mouseleave(function() {
		$(".fun-2 img").css("transform", "rotate(0deg)")
	});
	$(".fun-3").mouseover(function() {
		$(".fun-3 img").css("transform", "rotate(7deg)")
	});
	$(".fun-3").mouseleave(function() {
		$(".fun-3 img").css("transform", "rotate(0deg)")
	});

	$(".move-function-1").mouseover(function() {
		$(".move-function-1").prev('img').animate({
			left: '1.5em'
		}, "slow");
	});
	$(".move-function-1").mouseleave(function() {
		$(".move-function-1").prev('img').animate({
			left: '0em'
		}, "slow");
	});
	$(".move-function-2").mouseover(function() {
		$(".move-function-2").prev('img').animate({
			left: '1.5em'
		}, "slow");
	});
	$(".move-function-2").mouseleave(function() {
		$(".move-function-2").prev('img').animate({
			left: '0em'
		}, "slow");
	});
	$(".move-function-3").mouseover(function() {
		$(".move-function-3").prev('img').animate({
			left: '1.5em'
		}, "slow");
	});
	$(".move-function-3").mouseleave(function() {
		$(".move-function-3").prev('img').animate({
			left: '0em'
		}, "slow");
	});
	$(".move-function-4").mouseover(function() {
		$(".move-function-4").prev('img').animate({
			left: '1.5em'
		}, "slow");
	});
	$(".move-function-4").mouseleave(function() {
		$(".move-function-4").prev('img').animate({
			left: '0em'
		}, "slow");
	});
	

})