import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css";
//Card
const Item = ({product}) => {

  const navigate = useNavigate();
  
  const navigateDetail = () => {
    navigate(`/detail/${product.id}`)

  }
  return (
    <div className='item-box' onClick = {navigateDetail}>
      <img className='img-box' src={product.background_image} alt={product.name}/>
      <div>
      <p className='text-style' key = { product.id }>{product.name}</p>
      <p>Stock: {99}</p>
      <p>Critic: {product.metacritic}</p>
      </div>
    </div>
  )
}

export default Item