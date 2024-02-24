function getSmallestElementAtProperty(obj, key) {
  // your code here
  try {
    const arr = obj[key].filter(e => typeof e === 'number').sort()
    return arr.length ? arr[0] : []
  } catch (error) {
    return []
  }
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
