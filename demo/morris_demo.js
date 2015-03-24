var m1 = function(){Morris.Donut({
  element: 'demo-morris-pie1',
  data: [
    {label: "Android", value: 12},
    {label: "iOS", value: 30},
    {label: "Windows", value: 20}
  ],
  colors: ['#428bca']
});}

var m2 = function(){Morris.Donut({
  element: 'demo-morris-pie2',
  data: [
    {label: "Chrome", value: 12},
    {label: "Firefox", value: 30},
    {label: "Safari", value: 20}
  ],
  colors: ['#e74c3c']
});}

m1();
m2();
