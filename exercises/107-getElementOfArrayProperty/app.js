function getElementOfArrayProperty(obj, key, index) {
    // your code here
    try {
        const e = typeof obj[key] === typeof []
            ? obj[key][index]
            : undefined
        return e
    } catch (error) {
        return undefined
    }
}

let obj = {
    key: {
        Jamil: 'Albrey'
    }
};
let output = getElementOfArrayProperty(obj, 'key', 8); 
console.log(output); // --> 'Jamil'
