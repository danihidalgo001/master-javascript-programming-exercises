function multiply(num1, num2) {
    // your code here
    if (num1 === 0 || num2 === 0) return 0

    let n1 = num1 < 0 ? -num1 : num1
    let n2 = num2 < 0 ? -num2 : num2

    // console.log(n1, n2)

    let d = 0
    while (n2 > 0) {
        d += n1
        n2--
    }

    return (num1 < 0) && (num2 < 0) ? d : (num1 < 0) || (num2 < 0) ? -d : d
}

let output = multiply(-3, -5);
console.log(output); // --> 28
