// Write your function here
const getOddLengthWordsAtProperty = (obj, k) => {
    try {
        const a = obj[k].filter(n => typeof n == 'string')
        return a.filter(n => n.length % 2 != 0)
    } catch (error) {
        return []
    }
}