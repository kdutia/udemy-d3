/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

var svg = d3.select("#chart-area").append("svg")
    .attr("height", "400")
    .attr("width", "400");


d3.json("data/buildings.json").then(function(data){
    console.log(data)

    // convert heights to numerical
    data.forEach(d => {
        d.height = +d.height
    });
    
    var rects = svg.selectAll("rect").data(data) // calling selectAll on canvas rather than d3 itself
        .enter()
        .append("rect")
        .attr("y", 0)
        .attr("x", (d,i) => {
            console.log(d.height,i)
            return (i*60)})
        .attr("width", 40)
        .attr("height", d => {return d.height})
        .attr("fill", "grey")

}).catch(error => {
    console.log(error)
});
