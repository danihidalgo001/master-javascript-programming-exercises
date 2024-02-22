function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    return [word1, word2, word3].sort((a, b) => a.length - b.length)[0]
}

let output = findShortestOfThreeWords('a', 's', 'f');
console.log(output); // --> 'a'
