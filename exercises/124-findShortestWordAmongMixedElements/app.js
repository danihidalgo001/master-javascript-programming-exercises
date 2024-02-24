function findShortestWordAmongMixedElements(arr) {
    // your code here
    const newArr = arr.filter(e => typeof e === 'string')
    if (newArr.length === 0) {
        return ''
    }

    return newArr.sort((a, b) => a.length - b.length)[0]
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
