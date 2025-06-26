function removeDuplicates(arr) {
  // your code here
  const set = new Set(arr);
  const res = Array.from(set);
  return res;
}
removeDuplicates([1, 2, 2, 3, 4, 4]);
