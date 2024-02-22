function removeFromFront(arr) {
    // your code here
    arr.splice(0, 1)
    return arr
}

let output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]
