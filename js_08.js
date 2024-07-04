//Object destructuring

let studentData = {
  firstName: "Muhammad",
  lastName: "Zohaib",
  age: 24,
};

const studentsData = [
  {
    firstName: "Muhammad",
    lastName: "Zohaib",
    fullName: () => {
      console.log(studentsData.firstName + " " + studentsData.lastName);
    },
  },
  {
    firstName: "Mujtaba",
    lastName: "Haider",
    fullName: () => {
      console.log(studentData.firstName + " " + studentData.lastName);
    },
  },
];

let [student1, student2] = studentsData;
console.log(student1);


//spread operator
const array1 = [1, 2, 3, 4, 5,];
const array2 = [6, 7, 8, 9, 10];

console.log(...array1, ...array2);
