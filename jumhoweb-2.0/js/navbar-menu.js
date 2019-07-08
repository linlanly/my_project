/*导航条*/
var windowWidth = $(window).width();

if(windowWidth >= 768) {

	$(".dropdown").hover(function() {
		$('.dropdown-menu').show(600);
	}, function() {
		$('.dropdown-menu').hide(600);
	});
	$(".dropdown-item").click(function() {
		$('.dropdown-menu').hide(600);
	})
} else if(windowWidth < 768) {

	$(".dropdown-toggle").click(function() {
		$(".dropdown-menu").slideToggle(600);
	})

	$(".dropdown-item").click(function() {
		$('.dropdown-menu').slideUp(600);
		$('.navbar-toggler').click();
	});
	
	$("#aboutUs,#contentUs").click(function(){
		$('.navbar-toggler').click();
	})

}

