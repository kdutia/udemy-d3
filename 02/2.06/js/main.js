/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.6 - Selections and data joins
*/

var data = [25, 20, 10, 12, 15];

var svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400);

var circles = svg.selectAll("circle")
    .data(data);

circles.enter()
    .append("circle")
        .attr("cx", (d, i) => { // new es6 anonymous function syntax
            return (i * 50) + 25;
        })
        .attr("cy", 25)
        .attr("r", function(d){ // old anonymous function syntax (still used by d3 community apparently)
            return d;
        })
        .attr("fill", "red");