function findShortestElement(arr) {
    // your code here
    if (arr.length === 0) {
        return ""
    }
    return arr.sort((a, b) => a.length - b.length)[0]
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'