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
      <img className='img-box' src={product.image} alt="character"/>
      <p key = { product.id }>{product.name}, stock: {99}</p>
      
    </div>
  )
}

export default Item