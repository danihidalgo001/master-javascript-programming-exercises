function computeSumBetween(num1, num2) {
    // your code here
    if (!num2 > num1) {
        return 0
    }

    let sum = 0

    for (let index = num1; index < num2; index++) {
        sum += index
    }
    return sum
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
