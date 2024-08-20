function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    const charCount = {};
    for (let i = 0; i < str1.length; i++) {
      const char = str1[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let i = 0; i < str2.length; i++) {
      const char = str2[i];
      if (!charCount[char]) {
        return false; 
      }
      charCount[char]--;
    }
    for (const count of Object.values(charCount)) {
      if (count !== 0) {
        return false;
      }
    }
  
    return true;
  }
  const str1 = "listen";
  const str2 = "silent";
  if (areAnagrams(str1, str2)) {
    console.log(`${str1} and ${str2} are anagrams`);
  } else {
    console.log(`${str1} and ${str2} are not anagrams`);
  }