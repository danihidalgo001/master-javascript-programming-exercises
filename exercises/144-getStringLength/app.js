function getStringLength(string) {
    // your code here
    let num = 0
    let con = true

    while (con) {
        try {
            if (string[num] !== undefined) {
                num += 1
            } else {
                con = false
            }
        } catch (error) {
            con = false
        }
    }

    return num
}

let output = getStringLength('hello');
console.log(output); // --> 5
