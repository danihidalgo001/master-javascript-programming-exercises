function findPairForSum(array, number) {
  // your code here
  let p = []

  array.sort((a,b) => {
    if (a + b === number) {
      p = [a, b]
    }
    return a - b
  })

  return p
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
