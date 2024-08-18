function daysBetweenDates(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.abs((date1 - date2) / oneDay);
  }
let result = daysBetweenDates(31,9);
console.log("The difference is: ",result);  