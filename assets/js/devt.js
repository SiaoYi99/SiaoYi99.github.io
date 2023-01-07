var dom = document.getElementById('chart-devt');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    title: {
        text: '不同发展程度的堕胎趋势'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['发展中国家', '发展国家']
    },
    color:['#EF6A5C','#B4274B'],
    series: [
        {
            name: '1990-1994',
            type: 'bar',
            data: [46,39]
        },
        {
            name: '2010-2014',
            type: 'bar',
            data: [27,36]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);