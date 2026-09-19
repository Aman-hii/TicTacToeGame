console.log("1", "2", "3", "4", "5");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// odd number
for (let i = 1; i <= 15; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}


// even number
for (let i = 1; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


//  parseInt

let n = prompt("write your number");
n = parseInt(n);
for (let i = n; i <= n * 10; i += n) {
    console.log(i);
}



// while

let i = 1;
while (i <= 20) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++;
}



// favorite movie

let favMovie = "Avatar";
let guess = prompt("Guess my favorite movie");
while ((guess != favMovie) && (guess != "quit")) {
    guess = prompt("wrong guess.please try again");

}
if (guess == favMovie) {
    console.log("congrats");
}