function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    const tax = preTaxAndTipAmount * 0.15
    const tip = preTaxAndTipAmount * 0.095

    return tax + tip + preTaxAndTipAmount
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
