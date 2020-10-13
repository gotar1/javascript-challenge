// from data.js
let tableData = data;

// YOUR CODE HERE!
let table = d3.select("table-striped");
let thead = d3.select("thead");
let tbody = d3.select("tbody");


function tableInfo(ufoInfo) {
    tbody.html("");
    ufoInfo.forEach((sighting) => {
        // let row1 = thead.append('tr');
        // let cell1 = row1.append('th');
        // cell1.text(key);
        let row2 = tbody.append('tr');
        Object.entries(sighting).forEach(([key, value]) => {
            
            let cell2 = row2.append('td');
            
            cell2.text(value);
        });
    
    });

}
tableInfo(tableData);

let correctDate = d3.select('.text-center');
let button = d3.select('#filter-btn');

button.on("click", runEnter);
inputField.on("change", runEnter);

function runEnter() {
    d3.event.preventDefault();
    let inputField = d3.select('#datetime');
    let inputValue = inputField.property('value');
    let filteredTable = tableData.filter(date => date.datetime === inputValue);
    if(typeof filteredTable === "undefined" || filteredTable === null) {
        let filteredTable = tableData;
        let correction = correctDate.append('p')
        correction.text("Date out of range, please input correct date..");
    }
    tableInfo(filteredTable);

};
