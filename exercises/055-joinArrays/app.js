function joinArrays(arr1, arr2) {
  // your code here
  // arr1.push(...arr2)
  return [...arr1, ...arr2]
}

let output = joinArrays([0, 1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
