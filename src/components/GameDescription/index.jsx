import React from 'react';
import ItemDetail from '../ItemDetail';


const GameDescription = (game) => {
  return (
    <ItemDetail dangerouslySetInnerHTML={game.description}/>
  )
}

export default GameDescription