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
