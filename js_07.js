document.addEventListener("DOMContentLoaded", function () {
  let btns = document.querySelector(".marks");

  function studentGradingSystem(marks) {
    if (marks >= 80) {
      btns.style.backgroundColor = "green";
      btns.innerText = `Your marks are ${marks}`;
    } else if (marks >= 60) {
      btns.innerText = `Your marks are ${marks}`;
      btns.style.backgroundColor = "blue";
    } else if (marks >= 40) {
      btns.innerText = `Your marks are ${marks}`;
      btns.style.backgroundColor = "orange";
    } else {
      btns.innerText = `Your marks are ${marks}`;
      btns.style.backgroundColor = "red";
    }

  }

  let inputMarks = prompt("Enter your marks please");
  studentGradingSystem(inputMarks);
});

// OBJECTS IN JS

let userData = [
  {
    name: prompt("Enter your name"),
    age: prompt("Enter your age"),
    rno: 26,
  },
  {
    name: "Ali",
    age: 20,
    rno: 27,
  },
  {
    name: "Ahmed",
    age: 25,
    rno: 28,
  },
  {
    name: "Zain",
    age: 30,
    rno: 29,
  },
];

// for(let key in userData){
//     console.log(userData[key].name);
// }


for (let key of userData) {
  console.log("Student Name:" + key.name);
  console.log("Student Age:" + key.age);
  console.log("Student Roll Num:" + key.rno);
}
