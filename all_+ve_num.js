function allPositive(arr) {
    return arr.every(num => num > 0);
  }
  
const arr=[12,-45,-87,-99,63,54];  
let result = allPositive(arr);
console.log("The index of all positive integers is: ",result);