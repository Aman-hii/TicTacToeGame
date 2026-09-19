// console.log("hello javasript");
// console.log("this is javasript");
// let a = 10;
// let b = 20;
// console.log("sum of a and b are:", a + b);


let priceOfPencil = 10;
let erasorPrice = 5;
console.log("The total price is:", priceOfPencil + erasorPrice, "Rupees.");
console.log(`The total price is ${priceOfPencil + erasorPrice} rupees`);



let size = 'L';
if (size == 'XL') {
    console.log("price is Rs.250");
}
else if (size == 'L') {
    console.log("price is Rs.200");
}
else if (size == 'M') {
    console.log("price is Rs.100");
}
else {
    console.log("price is Rs.50");
}


// practice QS
let str = "apple";
if (str[0] === 'a' && str.length > 3) {
    console.log("String is Good");
}
else {
    console.log("String is Bad");
}


// switch
let color = "red";
switch (color) {
    case "red":
        console.log("slow down");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Broken Light");

}


// practice qs
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturaday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("wrong day");
}



// alert


// alert("Danger");
// console.log("this is a sample log");
// console.error("this is simple error");



//prompt

// let firstName = prompt("Enter your name:");
// console.log(firstName);


// Qs 1.

let num = 20;
if (num % 10 == 0) {
    console.log("Good");
}
else {
    console.log("Bad");
}


// Qs 2.
let name = prompt("Enter your name");
console.log(name);
let age = prompt("Enter your age");
console.log(age);
alert(`${name} is ${age} years old.`);


// qs 3.
let quarter = 1;
switch (quarter) {
    case 1: console.log("January, February,March");
        break;
    case 2: console.log("April,May,June");
        break;
    case 3: console.log("October, Novenber, December");
        break;
    default: console.log("Not a quarter!");
}

// Qs 4.
let str1 = "apples";
if ((str1[0] == 'a' || str1[0] == 'A') && (str1.length > 5)) {
    console.log("Golden String");

}
else {
    console.log("not a golden string");
}
let num1 = 32;
let num2 = 47852;
if (num1 % 10 == num2 % 10) {
    console.log("2 numbers have the same last digit i.e. " + num1 % 10);
}
else {
    console.log("2 numbers have not the same last digit ");
}

