function sortStringDescending(str) {
    return str.split('').sort().reverse().join('');
  }
  const inputString = "hello world";
  const sortedString = sortStringDescending(inputString);
  console.log(sortedString); 