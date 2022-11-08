import React from 'react'
import { useNavigate } from 'react-router-dom'

//Card
const Item = ({product}) => {

  const navigate = useNavigate()
  const navigateDetail = () => {
    navigate(`/detail/${product.id}`)

  }
  return (
    <div onClick = {navigateDetail}>
      <img src={product.image} alt="character"/>
      <p key = { product.id }> Numero de producto: {product.id},{product.name}, stock: {99} Status: {product.status}</p>
      
    </div>
  )
}

export default Item