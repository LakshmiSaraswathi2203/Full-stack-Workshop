function toTitleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase());
  }
  const sentence = "this is a test sentence.";
  const titleCaseSentence = toTitleCase(sentence);
  console.log(titleCaseSentence); 