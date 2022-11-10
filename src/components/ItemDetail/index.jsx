import React from 'react';
import './styles.css';
import parse from 'html-react-parser';


const ItemDetail = ({game}) => {

const description = game.description
const reactElement = parse(description);


  return (
    <div >
      <img src={game.background_image} alt= {game.name} width={450} />
      <h1>{game.name}</h1>
      
      <div> {reactElement} </div> 
    </div>
  )
}

export default ItemDetail