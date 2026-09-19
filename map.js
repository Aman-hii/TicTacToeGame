// let arr=[23,4,5,6];
// let newArr=arr.map((val)=>{
//     return val**2;
// })
// console.log(newArr);

// //filter

// let newArr1=arr.filter((val)=>{
//     return val%2===0;
// })
// console.log(newArr1);


// // Reduce

// let arr1=[1,2,3,4];
// const newArr2 = arr1.reduce((res,curr)=>{
//     return res+curr;
// })
// console.log(newArr2);

// let marks=[99,87,89,90,76,97,95];
// const marks90above= marks.filter((val)=>{
//     return val>90;
// })
// console.log(marks90above);


let n=prompt("Enter a number:")
let arr = [];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum = arr.reduce((res,curr)=>{
    return res + curr;
})
console.log(sum);