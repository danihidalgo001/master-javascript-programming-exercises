let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
    // your code here
    for (const key in obj) {
        if (typeof obj[key] === "number") {
            if (obj[key] < num) {
                delete(obj[key])
            }
        }
    }
}
