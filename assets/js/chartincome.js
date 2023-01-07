var dom = document.getElementById('chart-income');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
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
    yAxis: {
        type: 'value',
        name: '平均每年堕胎率',
        axisLabel: {
            formatter: '{value} %'
        },
        boundaryGap: [0, 0.01]
    },
    xAxis: {
        type: 'category',
        data: ['低收入','中等偏下收入','中等偏上收入','高收入' ],
        color:'#B4274B',
    },
    series: [
        {
            symbolSize: 25,
            type: 'scatter',
            label: {
                show: true,
                position: 'top'
            },
            data: [33,35,38,29],
            color:'#B4274B',
        },

    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);