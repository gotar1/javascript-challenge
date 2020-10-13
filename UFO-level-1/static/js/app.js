// from data.js
let tableData = data;

// YOUR CODE HERE!
let table = d3.select("table-striped");
let tbody = d3.select("tbody");

tableData.forEach(function(ufoInfo) {
    let row = tbody.append('tr');
    Object.entries(ufoInfo).forEach(function([key, value]) {
        let cell = row.append('td');
        cell.text(value);
    });

});
