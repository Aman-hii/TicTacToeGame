let btn1 = document.querySelector(".btn1");
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
//     // let a = 5;
//     // a++;
//     // console.log(a);
// };
// let div = document.querySelector("div")
// div.onmouseover = () => {
//     console.log("You are inside div");
// }
 btn1.addEventListener("click",(evt)=>{
    console.log("Buttom was clicked");
    // console.log(evt);
    // console.log(evt.target);
 })
  btn1.addEventListener("click",()=>{
    console.log("Buttom was clicked - handler2");
 })
 const handler3 = ()=>{
    console.log("Buttom was clicked - handler3");
 }
 btn1.addEventListener("click",handler3);
 btn1.addEventListener("click",()=>{
    console.log("Buttom was clicked - handler4");
 })
 btn1.removeEventListener("click",handler3);