function filterOddLengthWords(words) {
    // your code here
    return words.filter(w => w.length % 2 != 0)
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
