function averageArray(arr) {
    return sumArray(arr) / arr.length;
  }
  function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }
  let arr=[12,3,2,6,5,4];
  let result = averageArray(arr);
  console.log("The sum is: ",result);  