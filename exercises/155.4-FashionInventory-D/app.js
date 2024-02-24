let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function getLaceNameDataForShoes(inventory) {
    // your code here
  const searchResult = []

  inventory.forEach(client => {
    client.shoes.forEach(shoe => {
      const nameWords = shoe.name.split(" ")
      const targetWordIndex = nameWords.findIndex(word => word.includes("lace"))

      if (targetWordIndex !== -1) {
        searchResult.push({
          nameWords,
          targetWordIndex
        })
      }
    })
  })

  return searchResult
}

console.log(getLaceNameDataForShoes(currentInventory));
