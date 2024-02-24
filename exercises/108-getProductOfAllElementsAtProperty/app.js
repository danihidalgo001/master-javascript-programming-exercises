function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
  try {
    const arr = obj[key].filter(e => typeof e === 'number')
    let product = 1

    if (arr.length === 0) {
      return 0
    }
    
    arr.forEach(n => {
      product *= n
    })

    return product
  } catch (error) {
    return 0
  }
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
