function transformEmployeeData(array) {
  // your code here
  function fromListToObject(array) {
    // your code here
    const obj = {}
    array.forEach(e => {
      obj[e[0]] = e[1]
    })
    
    return obj
  }
  
  let employeeData = []
  
  for (let i = 0; i < array.length; i++) {
    employeeData.push(fromListToObject(array[i]))
  }
  
  return employeeData
}

let output = transformEmployeeData([
  [
    ['firstName', 'Joe'],
    ['lastName', 'Blow'],
    ['age', 42],
    ['role', 'clerk']
  ],
  [
    ['firstName', 'Mary'],
    ['lastName', 'Jenkins'],
    ['age', 36],
    ['role', 'manager']
  ]
]);
console.log(output); // --> [{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' }, { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }]