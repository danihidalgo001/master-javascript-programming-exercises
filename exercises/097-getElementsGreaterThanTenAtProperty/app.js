// Write your function here
const getElementsGreaterThan10AtProperty = (obj, k) => {
    try {
        const a = obj[k].filter(n => n > 10)
        return a
    } catch (error) {
        return []
    }
}

// let obj = {
//     key: [1, 20, 30]
//   };
//   let output = getElementsGreaterThan10AtProperty(obj, 'key');
//   console.log(output); // --> [20, 30]