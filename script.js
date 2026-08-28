console.log("Fuck!");

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const division = (a, b) => a / b; 

// let first = Number(prompt("Please Enter a: "));
// let next = Number(prompt("Please Enter b: "));
// let opertor = prompt("Please Enter the Operator you want to use: ")

function operate (a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return sub(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return division(a, b);
    } else {
        return "Please enter valid operator!";
    }
}

// let calculate = operate(first, next, opertor);
// console.log(calculate);

let currentInput = "";
let currentOperator = "";

const buttonLayout = [
    '9', '8', '7', '/',
    '6', '5', '4', '*',
    '3', '2', '1', '-',
    '0', '.', '=', '+',
    'C'
];

const calculatorStyle = document.querySelector(".btnContainer");
calculatorStyle.textContent = '';
buttonLayout.forEach((lable) => {
    const button = document.createElement("button");
    button.textContent = lable;
    button.classList.add("btn");

    if (lable === "/" || lable === "*" || lable === "-" || lable === "+"){
        button.classList.add("operators");
    } else if (lable === "C") {
        button.classList.add("clear");
    } else if (lable === "=") {
        button.classList.add("equals");
    } else if (lable === ".") {
        button.classList.add("point");
    } else { button.classList.add("numbers"); }
    
    calculatorStyle.appendChild(button);
})

const displayScreen = document.querySelector(".display");

// function updateDisplay (){
// }


calculatorStyle.addEventListener("click", event => {
    console.log(event.target);

    // let firstNumbers = Number(event.target.classLists.contains("numbers"));
    // console.log(firstNumbers);

    if(event.target.classList.contains("equals")){
        console.log("Equals to Clicked!");
    } else if(event.target.classList.contains("clear")){
        console.log("Clear Clicked!");
    } else if(event.target.classList.contains("operators")){
        currentOperator = event.target.textContent;
        currentInput += currentOperator;
        displayScreen.textContent = currentInput;
        console.log(currentOperator);
    } else {
        currentInput = currentInput + event.target.textContent;
        displayScreen.textContent = currentInput;
    }
    let sepNumbers = currentInput.split(currentOperator);
    console.log(sepNumbers);
    let firstN = Number(sepNumbers[0]);
    let nextN = Number(sepNumbers[1]);
    console.log(firstN, nextN);
    
});

//Just for backup!
// let addision = add(first, next);
// let substraction = sub(first, next);
// let multiplication = multiply(first, next);
// let divide = division(first, next);

// console.log(addision);
// console.log(substraction);
// console.log(multiplication);
// console.log(divide);