function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) return i;
    }
    return -1;
  }
let arr=[12,45,32,65,98,65];
let resu = linearSearch(arr,65);
console.log("The index is: ",resu);  