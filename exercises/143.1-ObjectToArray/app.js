function getAllKeys(obj) {
  // your code here
  let arr = []
  for (const key in obj) {
    arr.push(key)
  }

  return arr
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
