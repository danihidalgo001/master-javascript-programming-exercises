function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  const varType = 'number'
  const empyArr = 0
  const newArr = arr.filter(e => typeof e === varType)
    if (newArr.length === 0) {
        return empyArr
    }

    return newArr.sort((a, b) => a - b)[0]
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
