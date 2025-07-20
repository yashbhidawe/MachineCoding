function customSort(arr) {
  //write your implementation here

  const letters = [];
  const numbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      letters.push(arr[i]);
    } else {
      numbers.push(arr[i]);
    }
  }
  for (let i = 0; i < letters.length - 1; i++) {
    for (let j = 0; j < letters.length - i - 1; j++) {
      if (letters[j] > letters[j + 1]) {
        let temp = letters[j];
        letters[j] = letters[j + 1];
        letters[j + 1] = temp;
      }
    }
  }

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }

  return [...letters, ...numbers];
}

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
customSort(input);
