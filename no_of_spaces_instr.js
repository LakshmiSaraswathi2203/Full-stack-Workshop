function countSpaces(str) {
    return str.split(" ").length - 1;
  }
  
let result = countSpaces("I am a very good girl");
console.log("The number of spaces present is: ",result);