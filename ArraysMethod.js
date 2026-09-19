let companies=["Bloomberg","Microsoft","Uber","Google","Ibm","Netflix"];
console.log(companies.shift());
console.log(companies);
let deleted=companies.splice(1,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);