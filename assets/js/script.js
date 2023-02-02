/* Pop up */
//alert("Hello, SDA!");

/* For debugging */
console.log("I may be a Front-end developer");

/* VARIABLES*/
/* var is not used nowadays better to use let*/
var fullName = "Marko Piir";

/* To check length*/
console.log(fullName.length);
console.log(fullName);

/* Let used for variables*/
let locationCity = "Tallinn";

/* Const for constants, always capital letters, cant change the value after */
const ZIPCODE = 45212;

/* Location can be changed*/
//location = "Tartu";

/* now boolean*/
let isActive = true;
let age = 30;
let salary = 4500.95;

/* DATA COMPARISON*/

let a = '5';
let b = 5;

if (a != b) {
    console.log("A is same value as B"); // Checks only value

} else if (a !== b) {
    console.log("A is same value and type as B"); // Checks type and value
}

/* ARRAYS */

let arrayFruit = ["Apple", "Orange", "Mango"];
console.log(arrayFruit);

// remove last element
arrayFruit.pop();
console.log(arrayFruit);

//Add new element
arrayFruit.push("Banana");
console.log(arrayFruit)

/* OBJECTS */
//JSON -JavaScript Object Notation
let student = {
    "name": "Marko Piir",
    "age": 30,
    "address": {
        "street": "Ulemiste",
        "city": "Tallinn",
        "zip": "14551"
    },
    "joinDate": "2022-10-10",
    "active": true,
    "grade": 4.5
}

console.log(student);
// if you want access particular attribute
console.log(student.name);
console.log(student.address);
console.log(student.address.city);
console.log(Object.keys(student));

// Array of JSON
let students = [
    {
    "name": "Marko Piir",
    "age": 30,
    "address": {
    "street": "Ulemiste",
        "city": "Tallinn",
        "zip": "14551"
},
"joinDate": "2022-10-10",
    "active": true,
    "grade": 4.5
},
    {
        "name": "Mark Zuckerberg",
        "age": 21,
        "address": {
            "street": "Ulemiste",
            "city": "Tallinn",
            "zip": "455211"
        },
        "joinDate": "2022-10-10",
        "active": true,
        "grade": 4.5
    }
];

console.log(students);
console.log(students[1]);
console.log(students[0].joinDate);
students.forEach(s => console.log(s.name));

/* FUNCTIONS */

function isStudentPassed (student) {
    return student.grade > 3.5;
}

let studentPassedResult = isStudentPassed(student);
console.log(student.name + "'s result: " + studentPassedResult);

/* ACCESSING HTML */
let image = document.getElementById("image-block");
image.innerHTML = "<h2>Hellow!!!</h2>";
console.log(image);

let liTags = document.getElementsByTagName('li');
console.log(liTags);

/* Binding events */
function showMeAlert() {
    alert("Contact me for emergency!");
}

function showAlert() {
    alert("This field is mandatory to be filled!");
}

/* JS ES6 (EcmaScript)*/

//Arrow functions
const isStudentPassed2 = (student) => {return student.grade > 3.5};
isStudentPassed2(student);