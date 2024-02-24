// Write your function here
const select = (arr, obj) => {
    // return new obj
    const arrKey = Object.keys(obj)
    const newObj = {}

    arr.forEach(key => {
        // key of arr
        arrKey.forEach(aK => {
            // key of obj
            if (key === aK) {
                newObj[key] = obj[key]
            }
        })
    })

    return newObj
}

let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }