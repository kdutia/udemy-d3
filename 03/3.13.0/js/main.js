/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/


// set canvas-related params and draw canvas
var margin = { left: 100, right: 10, top: 10, bottom: 150 };
var width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var svg = d3.select("#chart-area").append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)

var g = svg.append('g')
    .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

d3.json('data/revenues.json').then(data => {
    // convert numerical vals to integer
    data.forEach(e => {
        e.revenue = +e.revenue
        e.profit = +e.profit
    });

    console.log(data)

    // define axes: domain and range
    var x = d3.scaleBand()
        .domain(data.map(d => {return d.month}))
        .range([0, width])
        .paddingInner(0.3)
        .paddingOuter(0.3)

    var y = d3.scaleLinear()
        .domain([0, d3.max(data, d => {return d.revenue})])
        .range([height, 0])

    // draw axes using axisBottom and axisLeft
    var xAxisCall = d3.axisBottom(x);
    g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0, " + height + ")")
        .call(xAxisCall)
    .selectAll("text")
        .attr("y", "10")
        .attr("x", "-5")
        .attr("text-anchor", "center")
        .attr("transform", "rotate(-0)"); // rotate ticks

    var yAxisCall = d3.axisLeft(y)
        .ticks(5)
        .tickFormat(function(d){
            return "£" + d;
        });

    // axis labels
    // x
    g.append("text")             
    .attr("transform",
            "translate(" + (width/2) + " ," + 
                        (height + 40) + ")")
    .style("text-anchor", "middle")
    .text("Month");

    // y
    g.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -60)
      .attr("x", -(height/2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Revenue"); 


    g.append("g")
        .attr("class", "y-axis")
        .call(yAxisCall);
    

    var rects = g.selectAll('rect').data(data)

    rects.enter().append('rect')
        .attr("y", function(d){return y(d.revenue)})
        .attr("x", function(d){ return x(d.month); })
        .attr("width", x.bandwidth)
        .attr("height", function(d){ return height - y(d.revenue); })
        .attr("fill", "grey");

})