// from data.js
let tableData = data;

// YOUR CODE HERE!
let table = d3.select(".table-striped");
let tbody = d3.select("tbody");

let thead = d3.select("thead");

function tableInfo(ufoInfo) {
    tbody.html("");
    ufoInfo.forEach((ufoSighting) => {
        let row = tbody.append('tr');
        Object.entries(ufoSighting).forEach(([key, value]) => {      
            let tableBody = row.append('td');
            tableBody.text(value);
        });
    
    });

}
tableInfo(tableData);

let errDisplay = d3.select('#date-correct');
let button = d3.select('#filter-btn');
let inputField = d3.select('#datetime')

button.on("click", filterTable);
// inputField.on("submit", filterTable);

function filterTable() {
    d3.event.preventDefault();
    errDisplay.text('');

    let inputField = d3.select('#datetime');
    let inputValue = inputField.property('value');
    let filteredTable = tableData.filter(date => date.datetime === inputValue);

    errDisplay.html("");
    errDisplay.text("Did you find what you looking for?? Keep searching..");

    if(filteredTable.length == 0) {
        // let filteredTable = tableData;
        tableInfo(tableData);
        errDisplay.html("");
        errDisplay.text("Date out of range, please input correct date..");
        console.log(errDisplay);
    }
    else {

        tableInfo(filteredTable);
    }

};


