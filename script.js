const operators = ["+", "-", "*", "/"];

function userInput(input) {
  contents = document.getElementById("display-box").innerHTML;
  previous_char = contents[contents.length - 1];

  if (!operators.includes(input) || !operators.includes(previous_char) || previous_char !== "-") {
    document.getElementById("display-box").innerHTML += input;
  }
}

function clearContents() {
  document.getElementById("display-box").innerHTML = "";
}

function calculate() {
  contents = document.getElementById("display-box").innerHTML;
  if (contents !== "") {
    document.getElementById("display-box").innerHTML = eval(document.getElementById("display-box").innerHTML);
  }
}