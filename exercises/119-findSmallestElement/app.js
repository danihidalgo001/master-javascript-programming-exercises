function findSmallestElement(arr) {
    // your code here
    if (arr.length === 0) {
        return 0
    }
    return arr.sort((a, b) => a - b)[0]
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1