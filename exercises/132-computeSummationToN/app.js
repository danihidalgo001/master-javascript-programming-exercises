function computeSummationToN(n) {
  // your code here
  let sum = 0

  for (let index = 1; index < n + 1; index++) {
      sum += index
  }
  return sum
}

let output = computeSummationToN(6);
console.log(output); // --> 21

