// Write your function here
const findMaxLengthOfThreeWords = (a, b, c) => {
    return [a.length, b.length, c.length].sort()[2]
}