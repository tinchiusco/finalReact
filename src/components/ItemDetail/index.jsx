import React from 'react';
import './styles.css';
import parse from 'html-react-parser';
import ItemCount from '../ItemCount';


const ItemDetail = ({game}) => {

  const confirm = (quantity) =>{
    console.log(quantity)
  }

const description = game.description
const reactElement = parse(description);


  return (
    <div >
      <img src={game.background_image} alt= {game.name} width={450} />
      <h1>{game.name}</h1>
      
      <div className='description'> {reactElement} </div> 
      <ItemCount onAdd={confirm} initial={1} stock={99}/>
    </div>
  )
}

export default ItemDetail