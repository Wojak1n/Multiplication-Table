const container = document.getElementById('container');
const container1 = document.getElementById('container1');
fetch("numbers.json")
    .then(response => response.json())
    .then(data => {
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        div.setAttribute("id", "flex")
        div2.setAttribute("id", "flex2")
        data.numberss.forEach(number => {
            const button = document.createElement('button');
            const button2 = document.createElement('button');
            button.textContent = number;
            button2.textContent = number;
            button.addEventListener("click", () => {
                firstNumber = number;
                console.log("First Number Selected:", firstNumber);
                updateResult();
            });
            button2.addEventListener("click", () => {
                secondNumber = number;
                console.log("second Number Selected:", secondNumber);
                updateResult();
            });
            div.appendChild(button);
            div2.appendChild(button2);
            container.appendChild(div);
            container.appendChild(div2);
        });
    });
    function calculate(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    }
    function updateResult() {
        if (firstNumber !== null && secondNumber !== null) {
            const result = calculate(firstNumber, secondNumber);
            document.getElementById("result").innerHTML = `Result: ${firstNumber} * ${secondNumber} = ${result}`;
        }
    }
    








