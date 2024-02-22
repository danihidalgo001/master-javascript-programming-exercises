function removeFromFrontOfNew(arr) {
    // your code here
    let _arr = [...arr]
    _arr.splice(0, 1)
    return _arr
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
