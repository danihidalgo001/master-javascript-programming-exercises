// Write your function here
const countAllCharacters = s => {
    if (typeof s === 'string') {
        if (s.length === 0) {
            return {}
        }
        const arrChar = s.split('')
        const obj = {}

        arrChar.forEach(l => {
            if (obj[l]) {
                obj[l] += 1
            } else {
                obj[l] = 1
            }
        })
        
        return obj
    }
    return {}
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}