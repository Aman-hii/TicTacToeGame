// let todo = [];
// let req = prompt("Enter your request");
// while (true) {
//     if (req == "quit") {
//         console.log("quitting app");
//         break;
//     }
//     if (req == "list") {
//         console.log("____________");
//         for (task of todo) {
//             console.log(task);
//         }
//     } else if (req == "add") {
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     } else if (req == 'delete') {
//         let idx = prompt("Enter the task index");
//         todo.splice(idx, 1);
//         console.log("Task deleted");
//     }
//     req = prompt("enter your  next request");
// }


// Q1

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
for (let i = 0; i < arr.length; i++) {

    if (arr[i] == 2) {
        arr.splice(i, 1);



    }
}
console.log(arr);


// Q2
let number = 287152;
let count = 0;
while (number > 0) {
    count++;
    number = Math.floor(number / 10);

}
console.log(count);

// Q3
let number1 = 287152;
let sum = 0;
while (number1 > 0) {
    digit = number1 % 10;
    sum += digit;
    number1 = Math.floor(number1 / 10);


}
console.log(sum);



// Q 4
let fact = 1;

for (let i = 7; i >= 1; i--) {
    fact *= i;
}
console.log(fact);


// Q 5

let arr1 = [2, 4, 6, 7, 3, 9];
let largest = 0;
for (let i = 0; i <= arr1.length; i++) {
    if (largest < arr1[i]) {
        largest = arr1[i];

    }
}
console.log(largest);
