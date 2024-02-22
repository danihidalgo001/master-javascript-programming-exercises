// Write your function here
const getLastElementOfProperty = (obj, k) => {
    // if (Object.keys(obj).filter(key => key === k).length !== 0) {
    //     try {
    //         if (obj[k].length >= n) {
    //             return obj[k][n]
    //         }
    //     } catch (error) {
    //         return undefined
    //     }
    // }
    try {
        const a = obj[k][obj[k].length - 1]

        return a
    } catch (error) {
        return undefined
    }
    return undefined
}

let obj = {
    key: []
  };
  let output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5