/*
*    main.js
*    Mastering Data Visualization with D3.js
*    3.2 - Linear scales
*/

var svg = d3.select("#chart-area")
    .append("svg")
        .attr("width", "400")
        .attr("height", "400");

d3.json("data/buildings.json").then(function(data){
    console.log(data);

    data.forEach(d => {
        d.height = +d.height;
    });

    var y = d3.scaleLinear()
        .domain([0, 828]) // raw data that we put into our scale -> e.g. 414
        .range([0, 400]); // output range (i.e. screen pixels) -> e.g. 200
    // we can also do scales between colours, e.g. a linear scale between red and blue
    console.log(y(414))
    
    // to perform the reverse transform we can call y.invert()
    console.log(y.invert(400))

    var rects = svg.selectAll("rect")
            .data(data)
        .enter()
            .append("rect")
            .attr("y", 0)
            .attr("x", function(d, i){
                return (i * 60);
            })
            .attr("width", 40)
            .attr("height", function(d){
                return y(d.height); // passing height into scaleLinear so fits on canvas
            })
            .attr("fill", function(d) {
                return "grey";
            });

});



