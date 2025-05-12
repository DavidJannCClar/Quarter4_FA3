let input;
do {
  input = prompt("Please enter a number:");
} while (isNaN(input) || input.trim() === "");

input = parseInt(input);
let output = "Number inputted: " + input + "\n\n";

if (input % 2 === 0) {
  
  for (let i = input; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += i + " ";
    }
    output += line.trim() + "\n";
  }
} else {
  
  for (let i = input; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= input; j++) {
      line += i + " ";
    }
    output += line.trim() + "\n";
  }
}

document.getElementById("output").textContent = output;
