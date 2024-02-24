function isIsogram(text) {
  // your code here
  // Dermatoglyphics
  // Camile
  // Camille
  // Cactus
  const dict = {}
  let is = true
  
  text.split('').forEach(l => {
    const a = l.toLowerCase()
    if (dict[a]) {
      is = false
    } else {
      dict[a] = 1
    }
  })
  
  return is
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
