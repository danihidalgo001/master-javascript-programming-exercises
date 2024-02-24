function search(array, value) {
  // your code here
  const index = array.indexOf(value)
  return index === -1 ? null : index
}

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // --> 4
