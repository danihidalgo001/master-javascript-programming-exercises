// Write your function here
const computeAverageOfNumbers = arr => {
    let a = 0
    arr.forEach(e => {
      a += e  
    })

    return arr.length ? a / arr.length : a
}