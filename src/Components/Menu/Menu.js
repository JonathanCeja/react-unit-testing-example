import React, { useState } from 'react'

const items = [
  {
    name: 'Omelette',
    price: '$50'
  },
  {
    name: 'Jugo',
    price: '$15'
  },
  {
    name: 'Chocomilk',
    price: '$20'
  }
]

const Menu = () => {
  const [name, setName] = useState('');
  const [inputValue, setInputValue] = useState('')

  const onButtonPress = async () => {
    setTimeout(() => {
      setName(inputValue);
    }, 500);
  }

  return <div>
    <h1 data-testid="page-title">Restaurante Andy and Co.</h1>

    {
      name === '' ? (
        <>
          <input type="text" placeholder='entra tu nombre' value={inputValue} onChange={e => setInputValue(e.target.value)}/>
          <button data-testid="page-button" onClick={onButtonPress}>Submit</button>
        </>
      ) : <p>Hola {name}!</p>
    }
    
    {items.map((v, i) => <div data-testid={`menu-item-${i}`} key={`menu-item-${i}`}><h2>{v.name}</h2> <h3>Precio: {v.price}</h3></div>)}
  </div>
}

export default Menu;
