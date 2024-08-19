function longestCommonPrefix(arr) {
    if (arr.length === 0) return '';
    let prefix = arr[0];
    for (let i = 1; i < arr.length; i++) {
      while (arr[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
      }
    }
    return prefix;
  }
  