let input = prompt("Enter a list of items separated by spaces: ");
let array = input.split(" ");
let num = parseInt(prompt("Enter a number to divide it: "));

for(let i=0; i<array.length; i++) {
    let item = parseInt(array[i]);
    if(item % num === 0) {
        console.log(`The number ${item} is divisible by ${num}`);
    }
}