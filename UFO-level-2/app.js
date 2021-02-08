// from data.js
let tableData = data;

// using d3 liberary to select my HTML class and id.. 
let tbody = d3.select("tbody");

// create function to populate table data..
function buildTable(ufoInfo) {
    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    ufoInfo.forEach((ufoSighting) => {
        let row = tbody.append('tr');

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.entries(ufoSighting).forEach(([key, value]) => {      
            let tableBody = row.append('td');
            tableBody.text(value);
        });
    });
}

// Keep Track of all filters
let filters = {};
console.log(filters)
function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  let changedElement = d3.select(this).select("input");
  let elementValue = changedElement.property("value");
  let filterId = changedElement.attr("id");

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if (elementValue) {
    filters[filterId] = elementValue;
    console.log(filters)
  }
  else {
    delete filters[filterId];
  }

  // Call function to apply all filters and rebuild the table
  filterTable();

}

// select element to display error message
let errDisplay = d3.select('#date-correct');
function filterTable() {

    // Set the filteredData to the tableData
    let filteredData = tableData;

    // Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
        console.log(filteredData)
    });

    // prevent default and clear error holder text if any
    d3.event.preventDefault();
    errDisplay.text('');

    // display error message for incorrect data, else populate table
    if(filteredData.length == 0) {
        buildTable(tableData);
        errDisplay.html("");
        errDisplay.text("Data out of range, please input correct data..");
        }
    else {
        buildTable(filteredData);
        }  
}

// Attach an event to listen for changes to each filter
d3.selectAll(".filter").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);
