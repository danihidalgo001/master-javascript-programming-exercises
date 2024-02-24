function getAllButLastElementOfProperty(obj, key) {
  // your code here
  try {
    let arr = obj[key]
    arr.pop()
    return arr
  } catch (error) {
    return []
  }  
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
