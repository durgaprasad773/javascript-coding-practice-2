"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  // firstInteger
  let firstInteger = parseInt(readLine());
  // secondInteger
  let secondInteger = parseInt(readLine());

  /*
   * Write your code here and log the output.
   */
   function avarageOfTwoIntegers(firstInteger,secondInteger){
       return (firstInteger+secondInteger) / 2
   }
   
   let result = avarageOfTwoIntegers(firstInteger, secondInteger)
   
   console.log(result)
}
