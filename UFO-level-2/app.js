// from data.js
let tableData = data;

// select 
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
tableInfo(tableData);

let errDisplay = d3.select('#date-correct');
// let button = d3.select('#filter-btn');
// let dataInputField = d3.select('#data-filter');
let dateInputField = d3.select('#datetime-filter');
let cityInputField = d3.select('#city-filter');
let stateInputField = d3.select('#state-filter');
let countryInputField = d3.select('#country-filter');
let shapeInputField = d3.select('#shape-filter');

// button.on("click", filterTable);
// dataInputField.on("change", filterTable);
dateInputField.on("change", filterTable);
cityInputField.on("change", filterTable);
stateInputField.on("change", filterTable);
countryInputField.on("change", filterTable);
shapeInputField.on("change", filterTable);

// create function to filter data based on user input
function filterTable() {
    d3.event.preventDefault();
    // let dataInputValue = dataInputField.property('value');

    let inputValueDate = dateInputField.property('value');
    let inputValueCity = cityInputField.property('value');
    let inputValueState = stateInputField.property('value');
    let inputValueCountry = countryInputField.property('value');
    let inputValueShape = shapeInputField.property('value');

    let filteredTable = tableData.filter(item => {
        return (
            // item.datetime === dataInputValue ||
            // item.city === dataInputValue || 
            // item.state === dataInputValue ||
            // item.country === dataInputValue ||
            // item.shape === dataInputValue

            item.datetime === inputValueDate ||
            item.city === inputValueCity || 
            item.state === inputValueState ||
            item.country === inputValueCountry ||
            item.shape === inputValueShape
        );
    });
    
    if(filteredTable.length == 0) {
        // let filteredTable = tableData;
        tableInfo(tableData);
        errDisplay.html("");
        errDisplay.text("Data out of range, please input correct data..");
    }
    else {

        tableInfo(filteredTable);
    }
    console.log('love')
    
};

