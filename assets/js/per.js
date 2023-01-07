var dom = document.getElementById('uns-per');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    color:['#EF6A5C','#E24C53','#B4274B'],
    series: [
        {
            name: '堕胎安全程度',
            axisLabel: {
                formatter: '{value} %'
            },
            type: 'pie',
            radius: '50%',
            data: [
                { value: 54.9, name: '安全堕胎	' },
                { value: 30.7, name: '较不安全堕胎	' },
                { value: 14.4, name: '不安全堕胎' },
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);