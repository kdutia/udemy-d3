/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

var svg = d3.select("#chart-area").append("svg").attr("width", 1000).attr("height", 1000)

var rect = svg.append("rect")
    .attr("cx", 100)
    .attr("cy", 250)
    .attr("fill", "red")
    .attr("width", 500)
    .attr("height", 300);

var ellipse = svg2.append("ellipse")
    .attr("height", 400)
    .attr("width", 200)    
    .attr("fill", "grey")
    .attr("cx", 100)
    .attr("cy", 100);