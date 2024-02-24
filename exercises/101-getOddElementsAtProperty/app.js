function getOddElementsAtProperty(obj, key) {
    // your code here
    try {
      const arr = obj[key].filter(e => typeof e === 'number').filter(n => n % 2 !== 0)
      return arr
    } catch (error) {
      return []
    }
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
