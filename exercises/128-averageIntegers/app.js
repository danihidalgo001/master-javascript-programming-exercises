function average(arr) {
  // your code here
  const s = sum(arr)
  if (s) {
    return s / arr.length
  }
  return s
}

function sum(arr) {
  // your code here
  let s = 0
  arr.forEach(n => {
    s += n
  })

  return s
}

console.log(average([0])); // --> 1.5