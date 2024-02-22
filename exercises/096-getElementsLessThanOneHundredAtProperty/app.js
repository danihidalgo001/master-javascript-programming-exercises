// Write your function here
const getElementsLessThan100AtProperty = (obj, key) => {
    try {
        const a = obj[key].filter(n => n < 100)
        return a
    } catch (error) {
        return []
    }
}

// let obj = {
//     key: [1000, 20, 50, 500]
//   };
//   let output = getElementsLessThan100AtProperty(obj, 'key');
//   console.log(output); // --> [20, 50]