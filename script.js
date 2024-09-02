function filterTable() {
    let input = document.getElementById("inputBox"),
        filter = input.value.toUpperCase(),
        table = document.getElementById("mainTable"),
        tableRows = table.getElementsByTagName("tr");
    for (let i = 0; i < tableRows.length; i++) {
        let rowData = tableRows[i].getElementsByTagName("td"),
            showBool = false;
        for (let j = 0; j < rowData.length; j++) {
            let cellData = rowData[j];
            if (cellData) {
                let txtValue = cellData.textContent || cellData.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    showBool = true;
                    break;
                }
            }
        }
        if (showBool) {
            tableRows[i].style.display = "";
        } else {
            tableRows[i].style.display = "none";
        }
    }
}
