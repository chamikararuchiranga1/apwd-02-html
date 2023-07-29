console.log("run");

// console.log("Go to Home...!");
// console.log("Go to School..!");

// PrintOne();
PrintTwo();
PrintOne();
PrintOne();
maths(20, 45);
maths(345, 476);
maths(129586, 7343432);
PrintOne();

const result = maths2023(23, 5);
console.log(result);

// const result1 = maths2023(20, 8);
console.log(maths2023(10, 8));

// maths2023(2, 5);

function PrintOne() {
    console.log("Go to Home...!");
}

function PrintTwo() {
    console.log("Go to School..!");
}

function maths(one, two) {
    // let one = 180;
    // let two = 200;
    let total = one + two;
    console.log(total);
}

// return function
function maths2023(one, two) {
    let total = one * two
    return total;
}

// Flow Controllers
// If
const marks = 76;
mathsTotal = 96;
if (30 > marks) {
    console.log("Exam fail...");
}

// If else
if (50 < marks) {
    console.log("Exam passed...")
} else {
    console.log("Exam fail...")
}

// else if
if (75 <= marks) {
    console.log("Grade : A");
} else if (65 <= marks) {
    console.log("Grade : B");
} else if (55 <= marks) {
    console.log("Grade : C");
} else {
    console.log("Grade : Fail..");
}

// Nexted if
if (75 <= marks) {
    console.log("Exam passed...");
    if (mathsTotal > 50) {
        console.log("pass the Maths...")
    } else {
        console.log("Fail the Maths...")
    }
} else {
    if (mathsTotal > 50) {
        console.log("Maths fail..!")
    }
}

// Switch
switch (marks) {
    case 76:
        console.log("Grade : A");
        break;
    case 65:
        console.log("Grade : B");
        break;
    case 55:
        console.log("Grade : C");
        break;
    default:
        console.log("fail..")
}

getDay("Sunday")

function getDay(val){
    switch (val){
        case "Sunday":
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        default:
            console.log("not day")
    }
}

// For Loop
for(let i = 0; i <= 5; i++){
    console.log(i);
}

// For in
const child = {name: "kasun", age: 22, address: "panadura"}
// console.log(child.name)
let text = ""
for (let x in child){
    // console.log(x)
    console.log(x +": "+child[x])
}

const car = ["BMW", "Volvo", "Ford"];
// console.log(car[2]);
for (let a in car){
    console.log(car[a]);
}

// For of
console.log("--------- For off ----------------")
for(let w of car){
    console.log(w);
}
const acpt = "ACPT";
for(let w of acpt){
    console.log(w);
}

