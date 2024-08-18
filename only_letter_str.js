function isAlpha(str) {
    return /^[a-zA-Z]+$/.test(str);
  }
let str = "abcdelkndsflgn";
let result = isAlpha(str);
console.log("result: ",result);  