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
document.body.style.backgroundColor = "Wheat";



// document.addEventListener("DOMContentLoaded", function() {
//     var button = document.getElementById("gradeButton");

//     function changeButtonColor(grade) {
//         button.innerText = "Your grade is: " + grade;
//         button.style.border = 'none';
//         switch(grade) {
//             case 'A':
//                 button.style.backgroundColor = 'darkgreen';
//                 break;
//             case 'B':
//                 button.style.backgroundColor = 'yellow';
//                 break;
//             case 'C':
//                 button.style.backgroundColor = 'orange';
//                 break;
//             case 'D':
//                 button.style.backgroundColor = 'red';
//                 break;
//             default:
//                 button.style.backgroundColor = 'grey'; 
//                 button.innerText = "Invalid grade";
//         }
//     }

//     let grade = prompt("Enter your grade: ");
//     changeButtonColor(grade);
// });



document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector("#gradeButton");

    function gradingSystem (grade){
        if(grade >= 90){
            button.style.backgroundColor = "green";
            button.innerText = `Your marks are ${grade}`;


        } else {
            button.style.backgroundColor = "Red";
            button.innerText = `Your marks are ${grade}`;

        }
    }

    let grade = prompt("Enter your grade: ");
    gradingSystem(grade);
});








var students = [
    { name: "John Doe", age: 16, grade: "10th" },
    { name: "Jane Smith", age: 15, grade: "9th" },
    { name: "Alice Johnson", age: 14, grade: "8th" }
];

// Accessing an object in an array
console.log(students[1].name); // Output: Jane Smith

// Loop through the array of objects
students.forEach(function(student) {
    console.log(student.name + " is in grade " + student.grade);
});


var person = {
    name: "John Doe",
    age: 30,
    job: "Software Developer"
};

for (var key in person) {
    console.log(key + ": " + person[key]);
}




var word = "hello";

for (var letter in word) {
    console.log(letter);
}