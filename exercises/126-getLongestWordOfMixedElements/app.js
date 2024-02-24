function getLongestWordOfMixedElements(arr) {
    // your code here
    const varType = 'string'
    const empyArr = ''
    const newArr = arr.filter(e => typeof e === varType)
    if (newArr.length === 0) {
        return empyArr
    }

    return newArr.sort((a, b) => b.length - a.length)[0]
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
