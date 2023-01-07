var dom = document.getElementById('uns-law');
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
            type: 'sha' +
                'dow' // 'shadow' as default; can also be 'line' or 'shadow'
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
        data: ['第一类&第二类', '第三类&第四类',
            '第五类']
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
            data: [25.2,41.2,87.4]
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
            data: [43.6,40.8,11.9]
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
            data: [31.3,17.1,0.7]
        },
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);

