// While Loop

let i = 11;

while (i <= 10) {
  console.log(`WHILE LOOP ${i}`);
  i++;
}

// DO WHILE LOOP
let k = 10;

do {
  console.log(`DO WHILE LOOP ${k}`);
  k++;
} while (k >= 30);

// DOM - Document Object Model
document.body.style.backgroundColor = "red";

let button = document.querySelector("dom");

button.style.backgroundColor = "green";
button.textContent = "Click Me";
