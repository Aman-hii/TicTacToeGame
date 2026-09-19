// console.log("Hello world")
// document.body.childNodes[1].childNodes
// document.body.childNodes[1] 
// let cont = document.body.childNodes[1]
// cont.firstChild


// let boxes = document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor ="red"
// document.querySelector(".box").style.backgroundColor ="green"
// boxes[3].style.backgroundColor ="yellow"
// boxes[4].style.backgroundColor ="aqua"
// boxes[1].style.backgroundColor ="blue"
// document.querySelectorAll(".box").forEach(e =>{
//     e.style.backgroundColor = "green"
// })


let boxes = document.querySelector(".container").children
function getRandomColor(){
    let val1 = Math.ceil(0+ Math.random()*255);
    let val2 = Math.ceil(0+ Math.random()*255);
    let val3 = Math.ceil(0+ Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}
Array.from(boxes).forEach(e=>{
   e.style.backgroundColor = getRandomColor();
   e.style.Color = getRandomColor();
})