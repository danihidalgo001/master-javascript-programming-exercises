// Write your function here
const getElementsThatEqual10AtProperty = (obj, key) => {
    try {
        const a = obj[key].filter(n => n === 10)
        return a
    } catch (error) {
        return []
    }
}