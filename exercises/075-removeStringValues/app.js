function removeStringValues(obj) {
    // your code here
    for (const key in obj) {
        if (typeof obj[key] === typeof "k") {
            delete(obj[key])
        }
    }
}

let obj = {
    name: 'Sam',
    age: 20
}

removeStringValues(obj);
console.log(obj); // --> { age: 20 }
