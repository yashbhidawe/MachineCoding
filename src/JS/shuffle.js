function shuffle(array) {
    // Your implementation
    const result = array.slice()
      for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]; 
      }
    return result;
}

shuffle([1, 2, 3, 4, 5]);