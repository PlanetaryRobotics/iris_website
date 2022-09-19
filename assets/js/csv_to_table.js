// csv_to_table.js

async function createTable(div_name, data_file) {
    //  read data from csv;
    const response = await fetch(data_file);
    const data = await response.text();
    const donation_data_table = data.split('\n').slice(1);
    const num_donors = donation_data_table.length;


    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    const cols = 4;
    const rows = num_donors / cols;
    console.log(num_donors, cols, rows)

    // creating all cells
    for (let i = 0; i < rows; i++) {
        // creates a table row
        const row = document.createElement("tr");

        for (let j = 0; j < cols; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const index = i*cols+j
        console.log(index, i*cols+j < num_donors)
        if (i*cols+j < num_donors){
            const cellText = document.createTextNode(donation_data_table[index].split(',')[0]);
            cell.appendChild(cellText);
        }
        else{
            const cellText = document.createTextNode("")
            cell.appendChild(cellText);
        }

        row.appendChild(cell);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
    
    // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.getElementById(div_name).appendChild(tbl)
    // document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "0");

  }