function removeFromBackOfNew(arr) {
  // your code here
  let _arr = [...arr]
  _arr.pop()
  return _arr
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
