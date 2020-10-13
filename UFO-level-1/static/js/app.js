// from data.js
let tableData = data;

// YOUR CODE HERE!
let table = d3.select("table-striped");
let thead = d3.select("thead");
let tbody = d3.select("tbody");




tableData.forEach((ufoInfo) => {
    // let row1 = thead.append('tr');
    // let cell1 = row1.append('th');
    // cell1.text(key);
    let row2 = tbody.append('tr');
    Object.entries(ufoInfo).forEach(([key, value]) => {
        
        let cell2 = row2.append('td');
        
        cell2.text(value);
    });

});

let button = d3.select('#filter-btn');


button.on("click", runEnter);
table.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    let inputField = d3.select('#datetime');
    let inputValue = inputField.property('value');
    let filteredData = tableData.filter(date => date.datetime === inputValue);
    table.html("");
    table.append(filteredData).text()

};
