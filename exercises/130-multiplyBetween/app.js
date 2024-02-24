function multiplyBetween(num1, num2) {
    // your code here
    if (num2 <= num1) {
        return 0
    }

    let product = 1

    for (let index = num1; index < num2; index++) {
        product *= index
    }
    return product
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
