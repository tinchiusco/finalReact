import React from 'react';
import './styles.css'

const ItemDetail = ({character}) => {
  return (
    <div className='item-box'>
      <img src={character.image} alt="qwer" width={450} />
      <h1>{character.name}</h1>
    </div>
  )
}

export default ItemDetail