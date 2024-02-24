function flipEveryNChars(input, n) {
    // your code here
    const length = input.length
    let str = ""
    
    for (let i = 0; i < length; i += n) {
        str += input.slice(i, i + n).split("").reverse().join("")
    }

    return str
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma