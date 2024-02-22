function countCharacter(str, char) {
    // your code here
    let n = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            n += 1
        }
    }
    return n
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
