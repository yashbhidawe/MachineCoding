function isVowel(char) {
  const vowelArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return vowelArr.includes(char);
}

function countVowels(str) {
  let res = 0;
  for (let char of str) {
    if (isVowel(char)) {
      res++;
    }
  }
  return res;
}

countVowels("Yash");
// module.exports = countVowels;
