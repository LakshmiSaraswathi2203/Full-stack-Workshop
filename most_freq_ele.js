function mostFrequent(arr) {
    const freq = {};
    for (let num of arr) {
      freq[num] = (freq[num] || 0) + 1;
    }
    return Object.keys(freq).reduce((a, b) => freq[a] > freq[b] ? a : b);
  }
let arr=[12,11,12,45,12,33,65];  
let result = mostFrequent(arr); 
console.log("The frequent element is: ",result); 