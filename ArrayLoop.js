let fruits = ["mango", "banana", "litchi", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

// 2D array
let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonderwoman", "flash"]];
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}


// for of loop

for (fruit of fruits) {
    console.log(fruit);
}
for (char of "AMAN KUMAR") {
    console.log(char);
}


// nested for of loop

let heroes1 = [["superman", "batman", "wonder woman"], ["spiderman", "ironman", "thor"]];
for (list of heroes1) {
    for (hero of list) {
        console.log(hero);
    }
}