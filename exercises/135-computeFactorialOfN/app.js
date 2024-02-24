function computeFactorialOfN(n) {
    // your code here
    if (n > 1) return n * computeFactorialOfN(n - 1)
    return n
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
