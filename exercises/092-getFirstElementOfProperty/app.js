// Write your function here
const getFirstElementOfProperty = (obj, key) => {
    return obj[key]
        ? obj[key][0]
        : undefined
}


let obj = {
    key: [1, 2, 4]
};
let output = getFirstElementOfProperty(obj, '3');
console.log(output); // --> 1