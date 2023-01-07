var x = [1,2,3,4,5,6,7];
var y = [180,200,160,190,120,140,150];
var dataPoints = [];

for (var i = 0; i < y.length; i++ ) {
    dataPoints.push({x: x[i], y: y[i]})
}

function convertToPercentage(e) {
    var axisMaximum = chart.axisY[0].get("maximum")
    return CanvasJS.formatNumber((e.value/axisMaximum) * 100, "##") + "%"
}

var chart = new CanvasJS.Chart("chartContainer", {
    title: {
        text: "Chart with Axis Y Values as Percentage"
    },
    axisY: {
        maximum: Math.max(...y),
        labelFormatter: convertToPercentage
    },
    data: [
        {
            type: "line",
            dataPoints: dataPoints
        }
    ]
});

chart.render();


document.getElementById("changeAxisYLabel").addEventListener('change', function(event){
    if (event.target.value == "absoluteValue") {
        chart.options.axisY.labelFormatter = function(e) {
            return e.value
        }
    }
    else if (event.target.value == "percentage") {
        chart.options.axisY.labelFormatter = convertToPercentage
    }
    chart.render();
});

