// let docu=document.getElementById("heading");
// console.log(docu);
// let docuClass=document.getElementsByClassName("heading");
// console.log(docuClass);
// let firstElement = document.querySelector("p");
// console.log(firstElement)
// let allElement = document.querySelectorAll("p");
// console.log(allElement)
// let div = document.querySelector("div");
// console.log(div);

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "From apna College";
// console.log(h2.innerText);

// let divs = document.querySelectorAll(".box");
// divs[0].innerText = "Unique ones"
// divs[1].innerText = "Unique two"
// divs[2].innerText = "Unique third"

// let idx = 1;
// for(div of divs){
//     div.innerText=`unique ${idx}`;
//     idx++;
// }

// let ele = document.createElement("button")
// ele.innerText = "click here"
// console.log(ele);
// let p = document.querySelector("p")
// p.after("click here")

let newBtn = document.createElement("button");
newBtn.innerText = "Click here";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
document.querySelector("body").prepend(newBtn);
