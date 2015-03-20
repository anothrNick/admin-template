/* first flot pie chart 
var data = [],
	series = Math.floor(Math.random() * 6) + 3;

for (var i = 0; i < series; i++) {
	data[i] = {
		label: "Series" + (i + 1),
		data: Math.floor(Math.random() * 100) + 1
	}
}
var pie_plot = $.plot('#demo-flot-pie1', data, {
					series: {
						pie: {
							innerRadius: .5,
							show: true
						}
					},
					grid: {
						hoverable: true,
						clickable: true
					}
				});
*/
/* area / line chart in first panel */

var pageviews = [[1, 1700], [2, 1200], [3, 1090], [4, 1550], [5, 1700], [6, 1850], [7, 2736], [8, 3045], [9, 3779], [10, 4895], [11, 5209], [12, 5100]],
visitor = [[1, 456], [2, 589], [3, 354], [4, 558], [5, 254], [6, 656], [7, 124], [8, 523], [9, 256], [10, 987], [11, 854], [12, 965]];

var plot = $.plot("#demo-flot-line", [
		{
			label: 'Dobwows',
			data: pageviews,
			lines: {
				show: true,
				lineWidth:2,
				fill: true,
				fillColor: {
					colors: [{opacity: 0.5}, {opacity: 0.5}]
				}
			},
			points: {
				show: true,
				radius: 3
			}
		},
		{
			label: 'Badoobies',
			data: visitor,
			lines: {
				show: true,
				lineWidth:2,
				fill: true,
				fillColor: {
					colors: [{opacity: 0.5}, {opacity: 0.5}]
				}
			},
			points: {
				show: true,
				radius: 3
			}
		}
	],{
	series: {
		lines: {
			show: true
		},
		points: {
			show: true
		},
		shadowSize: 0	// Drawing is faster without shadows
	},
	colors: ['#22A7F0','#875F9A'],
	legend: {
		show: true,
		position: 'nw',
		margin: [15, 15]
	},
	grid: {
		borderWidth: 0,
		hoverable: true,
		clickable: true
	},
	yaxis: {
		ticks: 4, tickColor: '#eeeeee'
	},
	xaxis: {
		ticks: 12,
		tickColor: '#ffffff'
	}
});