// JavaScript Document
var u = prompt("What is the Unit, enter C or F");
var degrees = prompt("What is the temperature?");

function convertTemp(degrees,u) {
  if (u==="F"){
    return((degrees-32)* 5/9);
  }
  else 
    return((degrees*9/5)+32);
}
var temp = convertTemp(degrees,u);
console.log(temp + " is the temperature outside.");