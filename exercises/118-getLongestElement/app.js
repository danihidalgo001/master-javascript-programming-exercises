function getLongestElement(arr) {
    // your code here
    if (arr.length === 0) {
        return ""
    }
    return arr.sort((a, b) => b.length - a.length)[0]
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
