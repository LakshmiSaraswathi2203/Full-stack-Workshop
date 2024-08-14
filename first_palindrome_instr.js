function firstPalindrome(arr) {
    return arr.find(str => str === str.split("").reverse().join(""));
  }
const arr = ["abkc","abba","askjhdfjk","ksajdfh"];
let result = firstPalindrome(arr);
console.log("The first palindrome is: ", result);  