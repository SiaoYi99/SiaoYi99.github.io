var dom = document.getElementById('continent');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    xAxis: {
        type: "category",
        data: ["非洲", "亚洲", "拉丁美洲", "北美洲", "欧洲", "大洋洲"],
        color: "#B4274B"
    },

    yAxis: {
        type: "value",
        axisLabel: {
            formatter: '{value} %'
        },
        name: "平均每年堕胎率"
    },
    series: [
        {
            symbolSize: 25,
            data: [34, 36, 44, 17, 29, 19],
            label: {
                show: true,
                position: 'top'
            },
            type: "bar",
            color: "#B4274B"
        },
    ],
};

if (option && typeof option === "object") {
    myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);

