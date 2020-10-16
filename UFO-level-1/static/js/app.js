// from data.js
let tableData = data;

// using d3 liberary to select my HTML classes and id..
let table = d3.select(".table-striped");
let tbody = d3.select("tbody");
let thead = d3.select("thead");

// build function create table row and table data in table body and populate them..
// using data from tableData..
function tableInfo(ufoInfo) {
    tbody.html("");
    ufoInfo.forEach((ufoSighting) => {
        let row = tbody.append('tr');
        Object.entries(ufoSighting).forEach(([key, value]) => {      
            let tableBody = row.append('td');
            tableBody.text(value);
        });   
    });
};

// run above function to populate table body using provided data...
tableInfo(tableData);

// this part for filter..we gonna filter by time..
// select where my input data is gonna be stored in the HTML and where the search button is..
// included a paragraph to display error if user entered wrong date..
let errDisplay = d3.select('#date-correct');
let button = d3.select('#filter-btn');
let inputField = d3.select('#datetime')

// button click handle to run the filter function when ever search button is clicked...
// included input submssion is one need to override search button..
button.on("click", filterTable);
// inputField.on("submit", filterTable);

// create filter function to filter by time...
// include an if statement to handle error entry by user..
function filterTable() {
    d3.event.preventDefault();
    errDisplay.text('');

    let inputField = d3.select('#datetime');
    let inputValue = inputField.property('value');
    let filteredTable = tableData.filter(date => date.datetime === inputValue);

    errDisplay.html("");
    errDisplay.text("Did you find what you looking for?? Keep searching..");

    if(filteredTable.length == 0) {
        tableInfo(tableData);
        errDisplay.html("");
        errDisplay.text("Date out of range, please input correct date..");
        console.log(errDisplay);
    }
    else {
        tableInfo(filteredTable);
    }
};


