var dom = document.getElementById('chinadata');
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
    xAxis: {
        type: 'value',
        name:'万 ',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['人工流产手术数量', '出生人口'],
        color: "#B4274B",
    },
    series: [
        {
            type: 'bar',
            barSize: 15,
            data: [900, 1062],
            color: "#B4274B",
        },
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);