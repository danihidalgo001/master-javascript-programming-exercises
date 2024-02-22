// Write your function here
const getNthElementOfProperty = (obj, k, n) => {
    // obj[k][n]
    if (Object.keys(obj).filter(key => key === k).length !== 0) {
        try {
            if (obj[k].length >= n) {
                return obj[k][n]
            }
        } catch (error) {
            return undefined
        }
    }
    return undefined
}