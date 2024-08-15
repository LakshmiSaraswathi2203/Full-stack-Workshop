function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
let num = prompt("Enter a number to check whether it is factorial or no: ");
num = parseInt(num);
let result = factorial(num);
console.log("The factorial is: ",result);  