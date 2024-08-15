function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
let num = prompt("Enter a number to check whether it is prime or no: ");
num = parseInt(num);
let result = isPrime(num);
console.log("The number is prime if result is true else false: ",result);  