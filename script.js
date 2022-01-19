function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

console.log(divide(10, 5));

function operate(a, b, operator) {
  if (operator == "+") return add(a, b);
}

console.log(operate(1, 5, "+"));

// Next
let container = document.getElementById("container");
let digits = document.querySelectorAll(".digits");
let results = document.getElementById("results");
let clear = document.getElementById("clear");

results.textContent = "0";

digits.forEach((digit) => {
  digit.addEventListener("click", (e) => {
    document.getElementById("results").textContent = `${e.target.textContent}`;
  });
});

clear.addEventListener("click", () => {
  document.getElementById("results").textContent = "0";
});
