/*侧边栏*/
var windowWidth = $(window).width();

if(windowWidth >= 768) {
	var setupOption = {
		template: '<div class="menu-wrap"><div class="menu"><%= label %></div></div>',
		anchorSetup: [{
				backgroundColor: "#5f5f5f",
				Color:"#000000",
				label: "首页"
			},
			{
				backgroundColor: "#834242",
				label: "安全大事件"
			},
			{
				backgroundColor: "#5f5f5f",
				label: "工业防火墙"
			},
			{
				backgroundColor: "#834242",
				label: "Section 4"
			},
			{
				backgroundColor: "#5f5f5f",
				label: "关于我们"
			},
			{
				backgroundColor: "#834242",
				label: "联系我们"
			}
		]
	};

	var scrollMenu = ScrollMenu(setupOption);
} 
else if(windowWidth < 768) {
	var setupOption = {
		template: '',
		anchorSetup: [{
				backgroundColor: "#5f5f5f",
				label: "首页"
			},
			{
				backgroundColor: "#834242",
				label: "安全大事件"
			},
			{
				backgroundColor: "#5f5f5f",
				label: "工业防火墙"
			},
			{
				backgroundColor: "#834242",
				label: "Section 4"
			},
			{
				backgroundColor: "#5f5f5f",
				label: "关于我们"
			},
			{
				backgroundColor: "#834242",
				label: "联系我们"
			}
		]
	};

	var scrollMenu = ScrollMenu(setupOption);
}