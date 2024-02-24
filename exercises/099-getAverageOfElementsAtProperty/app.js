function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  try {
    const arr = obj[key].filter(e => typeof e === 'number')
    let average = 0

    arr.forEach(e => {
      if (typeof e === 'number') {
        average += e
      }
    })

    return arr.length ? average / arr.length : average
  } catch (error) {
    return 0
  }
}