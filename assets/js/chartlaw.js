var dom = document.getElementById('chart-law');
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
        data: ['第一类','第二类','第三类',
            '第四类','第五类' ],
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
            data: [37,43,32,31,34],
            color:'#B4274B',
        },

    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);