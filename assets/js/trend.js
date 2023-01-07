var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    xAxis: {
        name: '年份',
        type: 'category',
        data: ['1990-1994', '2010-2014'],
        color:'#A02E38',
    },
    yAxis: {
        name: '全球平均每年堕胎率',
        type: 'value'
    },
    series: [
        {
            data: [40, 35],
            type: 'line',
            color:'#A02E38',
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);