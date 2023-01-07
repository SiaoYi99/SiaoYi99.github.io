var dom = document.getElementById('chart-con');
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
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
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
        axisLabel: {
            formatter: '{value} %'
        },
    },
    xAxis: {
        type: 'category',
        data: ['所有收入国家','低收入国家','中低收入国家','中高收入国家']
    },
    color:['#EF6A5C','#E24C53','#B4274B'],
    series: [
        {
            name: '需求未得到满足的妇女（不使用避孕方法） ',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [16,38,20,9]
        },
        {
            name: '需求未得到满足的妇女（使用传统避孕方法） ',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [8,8,9,6]
        },
        {
            name: '需求得到满足的妇女（使用现代避孕方法）',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [76,54,70,86]
        },
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);