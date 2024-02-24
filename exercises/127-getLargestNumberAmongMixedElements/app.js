function getLargestNumberAmongMixedElements(arr) {
    // your code here
    const varType = 'number'
    const empyArr = 0
    const newArr = arr.filter(e => typeof e === varType)
    if (newArr.length === 0) {
        return empyArr
    }

    return newArr.sort((a, b) => b - a)[0]
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
