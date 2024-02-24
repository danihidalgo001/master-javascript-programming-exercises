function detectOutlierValue(string) {
    // your code here
    const arr = string.split(" ").map(e => Number(e) % 2)
    let one = 0
    arr.forEach(n => {
      if (n === 1) {
        one += 1
      }  
    })

    return arr.indexOf(one > 1 ? 0 : 1) + 1
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
