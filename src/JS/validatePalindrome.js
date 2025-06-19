function validatePalindrome(str) {
  // Your implementation
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}

//For the purpose of user debugging.
validatePalindrome("race a car");

// module.exports = validatePalindrome;
