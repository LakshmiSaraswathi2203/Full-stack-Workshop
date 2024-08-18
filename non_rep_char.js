function firstNonRepeatingChar(str) {
    const freq = {};
    for (let char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }
    for (let char of str) {
      if (freq[char] === 1) return char;
    }
    return undefined;
  }
  
let str = "abhskjfadfg";
let result = firstNonRepeatingChar(str);
console.log("The result is: ",str);  