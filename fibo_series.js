function fibonacci(n) {
    let a = 0, b = 1, result = [];
    for (let i = 0; i < n; i++) {
      result.push(a);
      [a, b] = [b, a + b];
    }
    return result;
  }
let num = prompt("Enter the number upto which the fibonacci series need to be printed..: ");
num = parseInt(num);
let res = fibonacci(num);
console.log("The series is: ",res);