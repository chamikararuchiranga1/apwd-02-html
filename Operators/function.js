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

function PrintOne(){
    console.log("Go to Home...!");
}

function PrintTwo(){
    console.log("Go to School..!");
}

function maths(one, two){
    // let one = 180;
    // let two = 200;
    let total = one + two;
    console.log(total);
}

// return function
function maths2023(one, two){
    let total = one * two
    return total;
}

