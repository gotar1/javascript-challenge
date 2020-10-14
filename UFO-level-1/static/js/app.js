// from data.js
let tableData = data;

// YOUR CODE HERE!
let table = d3.select(".table-striped");
let tbody = d3.select("tbody");

let thead = d3.select("thead");
// thead.html("");
// let headerRow = thead.append('tr');
// headerRow.append('th').text(Date);
// headerRow.append('th').text(City);
// headerRow.append('th').text(State);
// headerRow.append('th').text(Country);
// headerRow.append('th').text(Shape);
// headerRow.append('th').text(Duration);
// headerRow.append('th').text(Comments);


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

let correctDate = d3.select('#date-correct');
let button = d3.select('#filter-btn');
let inputField = d3.select('#datetime')

button.on("click", filterTable);
// inputField.on("submit", filterTable);

function filterTable() {
    d3.event.preventDefault();
    let inputField = d3.select('#datetime');
    let inputValue = inputField.property('value');
    let filteredTable = tableData.filter(date => date.datetime === inputValue);
    if(typeof filteredTable === "undefined" || filteredTable === null) {
        let filteredTable = tableData;
        tableInfo(filteredTable);
        correctDate.html("");
        // let correction = correctDate.append('p');
        correctDate.text("Date out of range, please input correct date..");
        console.log(filteredTable)
    }
    tableInfo(filteredTable);

};
