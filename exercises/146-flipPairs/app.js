function flipPairs(input) {
    // your code here
    const length = input.length
    let str = ""
    
    for (let i = 0; i < length; i+=2) {
        if (i + 1 < length) {
            str += input[i+1] + input[i]
        } else {
            str += input[i]
        }
    }

    return
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
