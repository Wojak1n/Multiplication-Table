fetch("numbers.json")
  .then((response) => response.json())
  .then((data) => createTable(data.numberss));

function createTable(numbers) {
    let selectedthh = null;
    let selectedroww = null; 

    const table = document.getElementById("table");
    const headerRow = document.createElement("tr");
    let Xbutn = document.createElement("th");
    Xbutn.textContent = "Multy";
    headerRow.appendChild(Xbutn);
    numbers.forEach((num) => {
        const th = document.createElement("th");
        th.textContent = num;
        th.dataset.value = num;
        th.addEventListener("click", () => selectedth(num)); 
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    numbers.forEach((rowNum) => {
        const row = document.createElement("tr");
        const th = document.createElement("th");
        th.textContent = rowNum;
        th.dataset.value = rowNum;
        th.addEventListener("click", () => selectedrow(rowNum)); 
        row.appendChild(th);

        numbers.forEach(() => {
            const td = document.createElement("td");
            row.appendChild(td);
        });

        table.appendChild(row);
    });

    function selectedth(num) {
        selectedthh = num;
        calculateT();
    }

    function selectedrow(rowNum) {
        selectedroww = rowNum;
        calculateT();
    }
    function calculateT() {
        if (selectedthh !== null && selectedroww !== null) {
            const result = selectedthh * selectedroww; 
            const rows = table.getElementsByTagName("tr");
            const headerRow = rows[0]; 
            const rowIndex = numbers.indexOf(selectedroww) + 1; 
            const colIndex = numbers.indexOf(selectedthh) + 1; 
            const targetCell = rows[rowIndex].getElementsByTagName("td")[colIndex - 1];
            targetCell.textContent = result;
        }
    }
}
