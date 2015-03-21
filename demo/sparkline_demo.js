$(".sparkline1").sparkline([34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44], {
        type: 'line',
        lineWidth: 2,
        height: '97px',
		width: '100%',
        lineColor: '#fff',
        fillColor: 'transparent',
		spotRadius: 4,
		spotColor: "",
		minSpotColor: "",
		maxSpotColor: "",
		highlightSpotColor: "#ecf0f1",
		highlightLineColor: "#e74c3c"
    });
	
$(".sparkline2").sparkline([34, 57, 12, 2, 70, 34, 57, 12, 22, 20, 34, 57, 12, 24, 30, 34, 57, 12, 5, 20], {
        type: 'bar',
        barWidth: 10,
        height: '97px',
        barColor: '#ffffff'
    });
	
var sparkVals = [34, 57, 12, 2, 70, 34, 57, 12, 22, 20, 34, 57, 12, 24, 30, 34, 57, 12, 5, 20]
setInterval(function(){
	sparkVals.splice(0, 1);
	sparkVals[sparkVals.length] = Math.floor(Math.random() * 55) + 3;
	$(".sparkline2").sparkline(sparkVals, {
        type: 'bar',
        barWidth: 10,
        height: '97px',
        barColor: '#ffffff'
    });
},1000);

$(".sparkline3").sparkline([34, 57, 12, 2, 70, 34, 57, 12, 22, 20, 34, 57, 12, 24, 30, 34, 57, 12, 5, 20], {

		type: 'line',
        lineWidth: 2,
        height: '97px',
		width: '100%',
        lineColor: '#34495e',
        fillColor: 'transparent',
		spotRadius: 4,
		spotColor: "",
		minSpotColor: "",
		maxSpotColor: "",
		highlightSpotColor: "#ecf0f1",
		highlightLineColor: "#e74c3c"
    });
	
$(".sparkline3").sparkline([45, 12, 33, 22, 40, 1, 28, 12, 47, 64, 23, 10, 90, 24, 30, 34, 57, 125, 5, 20], {
		composite: true,
		type: 'line',
        lineWidth: 2,
        height: '97px',
		width: '100%',
        lineColor: '#428bca',
        fillColor: 'transparent',
		spotRadius: 4,
		spotColor: "",
		minSpotColor: "",
		maxSpotColor: "",
		highlightSpotColor: "#ecf0f1",
		highlightLineColor: "#e74c3c"
    });
	
$(".sparkline4").sparkline([45, 12, 33, 22, 40, 1, 28, 12, 47, 64, 23, 10, 90, 24, 30, 34, 57, 125, 5, 20], {
		type: 'line',
        lineWidth: 2,
        height: '97px',
		width: '100%',
        lineColor: '#428bca',
        fillColor: '#428bca',
		spotRadius: 4,
		spotColor: "",
		minSpotColor: "",
		maxSpotColor: "",
		highlightSpotColor: "#ecf0f1",
		highlightLineColor: "#e74c3c"
    });
	
var sparkLineVals = [45, 12, 33, 22, 40, 1, 28, 12, 47, 64, 23, 10, 90, 24, 30, 34, 57, 125, 5, 20]
setInterval(function(){
	sparkLineVals.splice(0, 1);
	sparkLineVals[sparkLineVals.length] = Math.floor(Math.random() * 110) + 3;
	$(".sparkline4").sparkline(sparkLineVals, {
        type: 'line',
        lineWidth: 2,
        height: '97px',
		width: '100%',
        lineColor: '#428bca',
        fillColor: '#428bca',
		spotRadius: 4,
		spotColor: "",
		minSpotColor: "",
		maxSpotColor: "",
		highlightSpotColor: "#ecf0f1",
		highlightLineColor: "#e74c3c"
    });
},700);

