// DRY = DO NOT REPEAT YOURSELF


// Names of fruits
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Orange";
let fruit4 = "Grapes";
let fruit5 = "Mango";

// console.log(fruit1, fruit2, fruit3, fruit4, fruit5);


// Array of fruits

let fruits = ["Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes","Apple", "Banana", "Orange", "Grapes"];
console.log(`New fruit is ${fruits.push("Guava")}`);  //PROBLEM


for(let i = 0; i <=  fruits.length; i++){
    console.log(`${i + 1} - ${fruits[i]}`)
}

