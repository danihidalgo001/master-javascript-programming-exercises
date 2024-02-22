// Write your function here
const findMinLengthOfThreeWords = (a, b, c) => {
    return [a.length, b.length, c.length].sort()[0]
}

// let output = findMinLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 1