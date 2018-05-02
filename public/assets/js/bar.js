$(function(){

    
    
    var ctx = $("#bar-chartcanvas");

    var data = {
        labels: ["match1", "match2", "match3", "match4", "match5"],
        datasets: [
            {
                label: "TeamA Score",
                data: [10, 50, 25, 70, 40],
                backgroundColor: ["rgba(10,20,30,0.3)",
                "rgba(10,20,30,0.3)",
                "rgba(10,20,30,0.3)",
                "rgba(10,20,30,0.3)",
                "rgba(10,20,30,0.3)"

            ],
                borderColor: [
                    "rgba(10,20,30,1)",
                    "rgba(10,20,30,1)",
                    "rgba(10,20,30,1)",
                    "rgba(10,20,30,1)",
                    "rgba(10,20,30,1)"


                ],
                borderWidth:1,
        
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: "TeamB Score",
                data: [20, 35, 40, 60, 50],
                backgroundColor: [
                    "rgba(100,24,23,36)",
                    "rgba(100,24,23,36)",
                    "rgba(100,24,23,36)",
                    "rgba(100,24,23,36)",
                    "rgba(100,24,23,36)"
                ],
                borderColor: [
                    "rgba(78,96,66,36)",
                    "rgba(78,96,66,36)",
                    "rgba(78,96,66,36)",
                    "rgba(78,96,66,36)",
                    
                    "rgba(78,96,66,36)"
                ],
                borderWidth:1,
                fill: false,
                lineTension: 0,
                radius: 5
            }
        ]
    };

    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            
        },
       
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

  
    var chart = new Chart(ctx, {
        type: "bar",
        data: data,
        options: options
    });
    scales: {
        yAxes: [{
            ticks: {
                max: 80,
                min: 0,
                stepSize: 10
            }
        }]
        xAxes: [{
            ticks: {
                max: 80,
                min: 0,
                stepSize: 10
            }
        }]
    }
});