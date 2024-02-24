let currentInventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];

function renderInventory(shoeList) {
  // your code here
  const results = [...shoeList].map(designer => {
    let filter = designer.shoes.filter(shoe => {
      return shoe.name.toLowerCase().indexOf("black") !== -1
    })

    if (filter.length) {
      return filter.map(r => [designer.name, r.name, r.price])
    } else {
      return []
    }

  })

  return results.flat()
}

console.log(renderInventory(currentInventory));
