function isOddWithoutModulo(num) {
    // your code here
    const modulo = (num1, num2) => {
        // your code here
        if (num2 === 0) return NaN
        if (
            (num2 > num1 && num2 > -num1) ||
            (num1 - num2 < 0 && -num1 - num2 < 0)
        ) return num1
        
        let n1 = num1 < 0 ? num1 * -1 : num1
        let n2 = num2 < 0 ? num2 * -1 : num2
    
        // console.log(n1, n2)
    
        let d = n1 - n2
        while (d >= num2) {
            d -= num2
        }
    
        return num1 < 0 ? d * -1 : d
    }

    switch (num) {
        case 0:
            return false
        case 1:
            return true
        default:
            return modulo(num, 2) != 0
    }
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
