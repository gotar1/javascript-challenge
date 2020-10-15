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

// let correctDate = d3.select('#date-correct');
// let button = d3.select('#filter-btn');
let dateInputField = d3.select('#datetime-filter');
let cityInputField = d3.select('#city-filter');
let stateInputField = d3.select('#state-filter');
let countryInputField = d3.select('#country-filter');
let shapeInputField = d3.select('#shape-filter');

// button.on("click", filterTable);
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
        )
    })
    tableInfo(filteredTable);

    // if(typeof filteredTable === "undefined" || filteredTable === null) {
    //     let filteredTable = tableData;
    //     tableInfo(filteredTable);
    //     correctDate.html("");
    //     // let correction = correctDate.append('p');
    //     correctDate.text("Date out of range, please input correct date..");
    // }
    // tableInfo(filteredTable);
    console.log('love')

};

