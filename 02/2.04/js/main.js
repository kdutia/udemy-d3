/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*/

/* d3.select returns a selected CSS element from the page */
/* 
can select or selectAll using html tags like "rect", or CSS IDs like "#center"
*/
var svg = d3.select("#chart-area").append("svg") // append svg canvas
	.attr("width", 400) // pass all attributes by chaining .attr methods, with method name then value
	.attr("height", 400);

var circle = svg.append("circle") // append circle to vsg canvas
	.attr("cx", 100)
	.attr("cy", 250)
	.attr("r", 70)
	.attr("fill", "grey");