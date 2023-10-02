let displayValue = "";

const resultDisplay = document.getElementById("result");

function appendToDisplay(value) {
  displayValue += value;
  resultDisplay.value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  resultDisplay.value = "";
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  resultDisplay.value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    resultDisplay.value = result;
    displayValue = String(result);
  } catch (error) {
    alert("Invalid expression");
    clearDisplay();
  }
}

window.addEventListener("keydown", (event) => {
  const key = event.key;

  if (/[0-9+\-*/.=]/.test(key)) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Escape" || key === "Delete") {
    clearDisplay();
  } else if (key === "Backspace") {
    backspace();
  } else {
    alert("Only numbers and operators (+, -, *, /) are allowed");
  }
});
