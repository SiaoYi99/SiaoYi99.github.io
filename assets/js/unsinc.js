var dom = document.getElementById('uns-income');
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
    color:['#EF6A5C','#E24C53','#B4274B'],
    xAxis: {
        type: 'category',
        data: ['低收入','中等偏下收入','中等偏上收入','高收入']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} %'
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [
        {
            name: '安全堕胎',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [21.8,42.3,67.1,82.2]
        },
        {
            name: '较不安全堕胎',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [24.4,37.9,27.8,16.9]
        },
        {
            name: '不安全堕胎',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [53.8,19.7,5.1,0.9]
        },
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);