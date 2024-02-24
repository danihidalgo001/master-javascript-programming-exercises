function computeProductOfAllElements(arr) {
  // your code here
  if (arr.length !== 0) {
    let product = 1
    arr.forEach(n => {
      product *= n
    })

    return product
  }

  return 0
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
