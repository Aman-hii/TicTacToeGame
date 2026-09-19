
function RollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}
RollDice();
RollDice();
RollDice();
RollDice();
RollDice();
RollDice();
RollDice();
RollDice();
RollDice();



// function with arguments

function printInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);
}
printInfo("aman", 19);
printInfo("ankit", 21);




// Q3

function calcAvg(a, b, c) {
    console.log((a + b + c) / 3);
}
calcAvg(9, 4, 5);


// print TAble
function printTable(n) {
    for (let i = n; i <= n * 10; i += n) {
        console.log(i);
    }

}
printTable(2);
printTable(73);


// practice Qs
function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

let str = ["hi", "hello", "bye"];
function concat(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }
    return result;
}


// higher function
let odd = function (n) {
    console.log(!(n % 2 == 0));
}
let even = function (n) {
    console.log(n % 2 == 0);
}




function OddEvenFactory(request) {
    if (request == "odd") {
        let odd = function (n) {
            console.log(!(n % 2 == 0));
        }
        return odd;

    } else if (request == "even") {
        let even = function (n) {
            console.log(n % 2 == 0);
        }
        return even;
    } else {
        console.log("wrong request");
    }
}


// calculator

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    }
};


// Qs 1

let arr = [2, 1, 4, 5, 6, 8, 7, 9];
let num = 5;
function getElement(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);

        }
    }
}
getElement(arr, num);


// Qs 2

let str1 = "abcadabcdefgggh"
function getUnique(str1) {
    let ans = "";
    for (let i = 0; i < str1.length; i++) {
        if (ans.indexOf(str1[i]) == -1) {
            ans += str1[i];
        }
    }
    return ans;
}
getUnique(str);


// Q 3

let country = ["Australia", "Germany", "United states Of America"];
function longestName(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
longestName(country);


// Q 4
let name = "aman Kumar";
function getVowel(name) {
    let count = 0;
    for (let i = 0; i < name.length; i++) {
        if (
            name.charAt(i) == 'a' || name.charAt(i) == 'e' || name.charAt(i) == 'i' || name.charAt(i) == 'o' || name.charAt(i) == 'u'

        )
            count++;
    }
    return count;
}


// Q 5

let start = 100;
let end = 200;
function getFunction(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}