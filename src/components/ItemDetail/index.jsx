import React from 'react';
import './styles.css'

const ItemDetail = ({game}) => {
  return (
    <div className='item-box'>
      <img src={game.background_image} alt= {game.name} width={450} />
      <h1>{game.name}</h1>
    </div>
  )
}

export default ItemDetail