// csv_to_table.js

async function createTable(div_name, data_file) {
    //  read data from csv;
    const response = await fetch(data_file);
    const data = await response.text();
    const donation_data_table = data.split('\n').slice(1);
    const num_donors = donation_data_table.length;

    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("div");
    tbl.classList.add("flex-container","container", "text-color-5", "p-style-small");
    tbl.style = "border-top: black solid 1px; border-left: black solid 1px;";
    console.log(num_donors);

    // creating all cells
    for (let i = 0; i < num_donors; i++) {
        // Outer cell
        const cell = document.createElement("div");
        cell.classList.add("three-columns");
        cell.style="display: table; border-bottom: black solid 1px; border-right: black solid 1px;";

        // Inner cell (for vertical alignment)
        const cellInner = document.createElement("div");
        cellInner.style = "display: table-cell; vertical-align: middle; text-align: center; padding: 5px;";
        cell.appendChild(cellInner);

        // Text
        const cellText = document.createTextNode(donation_data_table[i].split(',')[0]);
        cellInner.appendChild(cellText);

        // Add the cell to the table
        tbl.appendChild(cell);
    }
    
    // appends <div> onto <body>
    document.getElementById(div_name).appendChild(tbl)
  }