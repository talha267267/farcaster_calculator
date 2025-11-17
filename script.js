
let historyArray = [];

function press(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let display = document.getElementById("display");
    try {
        let result = eval(display.value);
        addToHistory(display.value + " = " + result);
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

function addToHistory(text) {
    historyArray.push(text);
    if(historyArray.length > 5) historyArray.shift();
    const historyDiv = document.getElementById("history");
    historyDiv.innerHTML = historyArray.map(h => `<p>${h}</p>`).join('');
}

function toggleTheme() {
    document.body.classList.toggle("light");
}
