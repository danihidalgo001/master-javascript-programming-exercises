function convertObjectToList(obj) {
  // your code here
  return Object.keys(obj).map(key => [key, obj[key]])
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
