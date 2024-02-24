function getSquaredElementsAtProperty(obj, key) {
  // your code here
  try {
    const arr = obj[key].filter(e => typeof e === 'number').map(n => n**2)
    return arr
  } catch (error) {
    return []
  }  
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
