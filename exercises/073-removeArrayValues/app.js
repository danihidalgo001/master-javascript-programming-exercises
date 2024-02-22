function removeArrayValues(obj) {
    // your code here
    for (const key in obj) {
        if (typeof obj[key] === typeof [1]) {
            delete(obj[key])
        }
    }
}