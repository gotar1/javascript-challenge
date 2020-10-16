// from data.js
let tableData = data;

// using d3 liberary to select my HTML classes and id.. 
let table = d3.select(".table-striped");
let tbody = d3.select("tbody");
let thead = d3.select("thead");

// create function to populate table data..
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

// run above function to populate table body using provided data...
tableInfo(tableData);

// this part for filter..we gonna filter by multi inputs..
// select where my input data is gonna be stored in the HTML and where the search button is..
// included a paragraph to display error if user entered wrong date..

let errDisplay = d3.select('#date-correct');
let dateInputField = d3.select('#datetime-filter');
let cityInputField = d3.select('#city-filter');
let stateInputField = d3.select('#state-filter');
let countryInputField = d3.select('#country-filter');
let shapeInputField = d3.select('#shape-filter');

// input change handle to run the filter function when ever new search criteria is entered...
dateInputField.on("change", filterTable);
cityInputField.on("change", filterTable);
stateInputField.on("change", filterTable);
countryInputField.on("change", filterTable);
shapeInputField.on("change", filterTable);

// create function to filter data based on user input
function filterTable() {
    d3.event.preventDefault();
    let inputValueDate = dateInputField.property('value');

    
    let inputValueCity = cityInputField.property('value');
 

    let inputValueState = stateInputField.property('value');
    let inputValueCountry = countryInputField.property('value');
    let inputValueShape = shapeInputField.property('value');

    let filteredTable = tableData.filter(item => {
        return (
            item.datetime === inputValueDate ||
            item.city === inputValueCity || 
            item.state === inputValueState ||
            item.country === inputValueCountry ||
            item.shape === inputValueShape
        );
    });
    
    if(filteredTable.length == 0) {
        tableInfo(tableData);
        errDisplay.html("");
        errDisplay.text("Data out of range, please input correct data..");
    }
    else {
        tableInfo(filteredTable);
    }  
};
function update() {
    let filteredTable = tableData().filter(filterTable);
    };
update();