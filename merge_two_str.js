function mergeStrings(str1, str2) {
    let mergedString = "";
    let i = 0;
    let j = 0;
  
    while (i < str1.length || j < str2.length) {
      if (i < str1.length) {
        mergedString += str1[i];
        i++;
      }
      if (j < str2.length) {
        mergedString += str2[j];
        j++;
      }
    }
  
    return mergedString;
  }
  const str1 = "abc";
  const str2 = "def";
  const mergedString = mergeStrings(str1, str2);
  console.log(mergedString);