import React from 'react'

//Card
const Item = ({product}) => {
  return (
    <div>
      <img src={product.image} alt="character"/>
      <p key = { product.id }> Numero de producto: {product.id},{product.name}, stock: {99} Status: {product.status}</p>
      
    </div>
  )
}

export default Item