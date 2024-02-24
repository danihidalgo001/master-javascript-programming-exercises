function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    try {
        // console.log(obj)
        // console.log(key)
        
        const arr = obj[key].filter(e => typeof e === typeof 5)
        let sum = 0

        // console.log(arr)

        arr.forEach(n => {
            sum += n
        })

        return sum
    } catch (error) {
        return 0
    }
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
