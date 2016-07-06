// JavaScript Document

function convertTemp(degrees,unit) {
  if (unit==="F"){
    return ((degrees-32)* 5/9);
  }
  else 
    return((degrees*(9/5))+32);
}
var degrees = convertTemp(212, "C");
console.log(convertTemp(212, "C"));
console.log(convertTemp(32, "C"));
console.log(convertTemp(65, "C"));
console.log(convertTemp(-40, "F"));