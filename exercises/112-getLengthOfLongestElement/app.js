function getLengthOfLongestElement(arr) {
    // Your code here
    if (arr.length) {
        return arr.sort((a, b) => b.length - a.length)[0].length    
    }

    return 0
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
