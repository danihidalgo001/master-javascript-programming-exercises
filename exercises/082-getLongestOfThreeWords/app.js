function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    return [word3, word2, word1].sort((a, b) => a.length - b.length)[2]
}

let output = getLongestOfThreeWords('these', 'toro', 'words');
console.log(output); // --> 'these'
