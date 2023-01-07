var dom = document.getElementById('chart-dev');
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
    color:['#EF6A5C','#B4274B'],
    series: [
        {
            name: '堕胎率',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 6.6, name: '发达国家', color:'#DB634B'},
                { value: 49.3, name: '发展中国家', color:'#A02E38'},
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