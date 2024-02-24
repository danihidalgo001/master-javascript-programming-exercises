function findPairForSum(array, number) {
  // your code here
  let p = []

  array.forEach(e => {
    array.forEach(n => {
      if (e + n === number && p.length === 0) {
        p = [e, n]
      }
    })
  })

  return p
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
