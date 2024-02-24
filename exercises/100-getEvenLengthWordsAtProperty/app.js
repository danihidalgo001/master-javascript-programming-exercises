function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  try {
    const arr = obj[key].filter(e => typeof e === 'string').filter(s => s.length % 2 === 0)
    return arr
  } catch (error) {
    return []
  }  
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
