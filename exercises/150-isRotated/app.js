function isRotated(str1, str2) {
    // your code here
  return  (str2 + str2).indexOf(str1) !== -1
}
  
console.log(isRotated('hello world', 'orldhello w')); // --> true
console.log(isRotated('hello world', 'omrel wp')); // --> false