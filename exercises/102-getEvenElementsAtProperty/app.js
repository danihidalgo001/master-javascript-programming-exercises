function getEvenElementsAtProperty(obj, key) {
    // your code here
    try {
      const arr = obj[key].filter(e => typeof e === 'number').filter(n => n % 2 === 0)
      return arr
    } catch (error) {
      return []
    }
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
