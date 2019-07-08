/*侧边栏参数*/
var windowWidth = $(window).width();

if(windowWidth >= 768) {
	var setupOption = {
		template: '<div class="menu-wrap"><div class="menu"><%= label %></div></div>',
		anchorSetup: [{
				backgroundColor: "#5f5f5f",
				label: "工业防火墙"
			},
			{
				backgroundColor: "#834242",
				label: "SP-F5000"
			},
			{
				backgroundColor: "#5f5f5f",
				label: "功能内容"
			},
			{
				backgroundColor: "#834242",
				label: "功能对象"
			},
			{
				backgroundColor: "#5f5f5f",
				label: "产品优势"
			}
		]
	};

	var scrollMenu = ScrollMenu(setupOption);
} else if(windowWidth < 768) {
	var setupOption = {
		template: '',
		anchorSetup: [{
				backgroundColor: "#5f5f5f",
				label: "Action"
			},
			{
				backgroundColor: "#834242",
				label: "安全大事件"
			},
			{
				backgroundColor: "#5f5f5f",
				label: "功能内容"
			},
			{
				backgroundColor: "#834242",
				label: "功能对象"
			},
			{
				backgroundColor: "#5f5f5f",
				label: "产品优势"
			}
		]
	};

	var scrollMenu = ScrollMenu(setupOption);
}