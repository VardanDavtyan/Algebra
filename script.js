let maxRange = 25;
let minRange = -maxRange;
let formula = "x**2"
let data = []
data = generate(minRange, maxRange, f, formula)

let standartWidth = 700, standartHeight = 700
let allowCircles = true;
let circleRadius = 2;
let circleColor = '#00C20D'
let lineWidth = 1
let lineColor = '#000000'

const margin = {
    top: 5,
    right: 5,
    bottom: 5,
    left: 7.5
};
let width = standartWidth;
let height = standartHeight;

let rangeText = document.getElementById('range')
let formuleText = document.getElementById('formule')
let widthText = document.getElementById('a_width')
let heightText = document.getElementById('a_height')
let circleAllowInput = document.getElementById('checkCircle')
let circleRadiusText = document.getElementById('radius')
let circleColorInput = document.getElementById('c_color')
let lineWidthText = document.getElementById('l_width')
let lineColorInput = document.getElementById('l_color')
let submitButton = document.getElementById('submit')

window.onload = () => {
    //rangeText.value = maxRange
    formuleText.value = formula
    //widthText.value = width
    //heightText.value = height
    circleAllowInput.checked = allowCircles
    //circleRadiusText.value = circleRadius
    circleColorInput.value = circleColor
    //lineWidthText.value = lineWidth
    lineColorInput.value = lineColor
    drawGraphic()
}

submitButton.onclick = () => {
    drawGraphic()
}

rangeText.onchange = e => {
    maxRange = +e.target.value
    minRange = -maxRange
    data = generate(minRange, maxRange, f, formula)
    drawGraphic()
}

formuleText.onchange = e => {
    formula = e.target.value
    data = generate(minRange, maxRange, f, formula)
    drawGraphic()
}

widthText.onchange = e => {
    width = +e.target.value
    drawGraphic()
}

heightText.onchange = e => {
    height = +e.target.value
    drawGraphic()
}

circleAllowInput.onchange = e => {
    allowCircles = e.target.checked
    drawGraphic()
}

circleRadiusText.onchange = e => {
    circleRadius = +e.target.value
    drawGraphic()
}

circleColorInput.onchange = e => {
    circleColor = e.target.value
    drawGraphic()
}

lineWidthText.onchange = e => {
    lineWidth = +e.target.value
    drawGraphic()
}

lineColorInput.onchange = e => {
    lineColor = e.target.value
    drawGraphic()
}


//D3.js
function drawGraphic() {

    let area = document.getElementById('Area')
    area.innerHTML = ""
    area.title = ` Data\`
formula: ${formula}
max range: ${maxRange}
min range: ${minRange}
width: ${width}
height: ${height}
allow circles: ${allowCircles}
circle radius: ${circleRadius}
circle color: ${circleColor}
line width: ${lineWidth}
line color: ${lineColor}`

    var sVg = d3
        .select("#Area")
        .append("svg")
        .attr("width", width + 20)
        .attr("height", height + 20)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);



    var x = d3
        .scaleLinear()
        .domain([minRange, maxRange])
        .range([0, width]);
    var y = d3
        .scaleLinear()
        .domain([minRange, maxRange])
        .range([height, 0]);



    sVg
        .append('g')
        .attr("transform", `translate(0, ${height / 2})`)
        .call(d3.axisBottom(x));
    sVg
        .append('g')
        .attr("transform", `translate(${width / 2}, 0)`)
        .call(d3.axisLeft(y));



    sVg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", lineColor)
        .attr("stroke-width", lineWidth)
        .attr("d", d3.line()
            .x(d => x(d.x))
            .y(d => y(d.y))
        )

    if (allowCircles) {
        sVg
            .selectAll("whatever")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", d => x(d.x))
            .attr("cy", d => y(d.y))
            .attr("r", circleRadius)
            .attr("fill", circleColor);
    }
}







