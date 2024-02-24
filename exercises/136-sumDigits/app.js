function sumDigits(num) {
    // your code here
    let sum = num.toString().split('')
    if (num < 0) {
        sum[1] = `-${sum[1]}`
        sum[0] = 0
    } else {
        sum = [0, ...sum]
    }
    sum.forEach(e => {
        sum[0] += Number(e)
    })
    return sum[0]
}

let output = sumDigits(-316);
console.log(output); // --> 4
