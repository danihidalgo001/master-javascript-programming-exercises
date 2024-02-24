function getLargestElement(arr) {
  // your code here
  if (arr.length === 0) {
    return 0
}
return arr.sort((a, b) => b - a)[0]
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;