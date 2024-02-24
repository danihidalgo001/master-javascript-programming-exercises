function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length === 0) {
        return 0
    }
    return arr.sort((a, b) => a.length - b.length)[0].length
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
