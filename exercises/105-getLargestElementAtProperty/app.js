function getLargestElementAtProperty(obj, key) {
  // your code here
  try {
    const arr = obj[key].filter(e => typeof e === 'number').sort((a, b) => a - b)
    return arr.length ? arr.pop() : []
  } catch (error) {
    return []
  }
}

let obj = {
  key: [-1, -2, -4, -8, 0, 0.00001]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
