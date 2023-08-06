console.log("run");

function onChange () {

}

// Arrow function
const onChange1 = () => {

}

function number2 (n1, n2) {
    const ans = n1 + n2;
    console.log(ans);
}

function number3 (n1, n2, n3) {
    const ans = n1 + n2 + n3;
    console.log(ans);
}

const finalAnswer = (n1, n2) => {
    const ans = n1 * n2;
    console.log(ans)
}

function returnValue (n1, n2) {
    const ans = n1 * n2;
    return ans
}

number2(10, 20);
number2(10564, 20451);

number3(100, 350, 590);

finalAnswer(12, 3);

const text = returnValue(10, 5);
console.log(text)

console.log(returnValue(20,30))
