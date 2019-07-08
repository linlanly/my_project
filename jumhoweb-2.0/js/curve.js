/*曲线图参数*/

$(function() {
	$('#container').highcharts({
		chart: {
			type: 'line'
		},
		title: {
			text: '工控安全泄漏事件'
		},
		subtitle: {
			text: '来源XXX.com'
		},
		xAxis: {
			categories: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013']
		},
		yAxis: {
			title: {
				text: '次数'
			}
		},
		tooltip: {
			enabled: false,
			formatter: function() {
				return '<b>' + this.series.name + '</b>' + this.x + ': ' + this.y + '°C';
			}
		},
		plotOptions: {
			line: {
				dataLabels: {
					enabled: true
				},
				enableMouseTracking: false
			}
		},
		series: [{
			name: '国内',
			data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 27.5, 28.3, 23.9, 29.6]
		}, {
			name: '国外',
			data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 22.0, 24.6, 25.2, 26.3, 27.6, 28.8]
		}]
	});
});